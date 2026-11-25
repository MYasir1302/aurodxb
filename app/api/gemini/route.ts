import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PROMPTS } from "@/lib/prompts";
import { getToolBySlug } from "@/lib/tools-data";
import {
  getClientIp,
  checkDailyGenerationLimit,
  getRemainingDailyGenerations,
  checkMinuteRateLimit,
} from "@/lib/redis";

export const runtime = "nodejs";

// Current recommended Gemini Flash model constant
const GEMINI_MODEL = "gemini-2.5-flash";

// Zod schema for request validation
const RequestSchema = z.object({
  tool: z.string().min(1, "Tool identifier is required").max(100),
  inputs: z.record(z.any()).refine(
    (data) => {
      const totalChars = Object.values(data)
        .filter((val) => typeof val === "string")
        .reduce((sum, str) => sum + str.length, 0);
      return totalChars <= 5000;
    },
    { message: "Input text exceeds the maximum character limit (5,000 characters)." }
  ),
});

/**
 * Call Gemini with one automatic retry on 429/503 responses
 */
async function callGeminiWithRetry(
  apiKey: string,
  model: string,
  systemInstruction: string,
  userPrompt: string
): Promise<string> {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const payload = {
    system_instruction: {
      parts: [{ text: systemInstruction }],
    },
    contents: [
      {
        role: "user",
        parts: [{ text: userPrompt }],
      },
    ],
    generationConfig: {
      temperature: 0.6,
      maxOutputTokens: 4096,
    },
  };

  const maxAttempts = 2; // initial + 1 retry

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const json = await res.json();
        const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) {
          throw new Error("EMPTY_RESPONSE");
        }
        return text;
      }

      // 429 (quota / rate limit) or 503 (service unavailable)
      if ((res.status === 429 || res.status === 503) && attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        continue;
      }

      if (res.status === 429) {
        throw new Error("GEMINI_QUOTA");
      }

      throw new Error(`UPSTREAM_${res.status}`);
    } catch (err: any) {
      if (err.message === "GEMINI_QUOTA" || err.message?.startsWith("UPSTREAM_")) {
        throw err;
      }
      if (attempt >= maxAttempts) {
        throw new Error("NETWORK_FAILURE");
      }
      await new Promise((resolve) => setTimeout(resolve, 1200));
    }
  }

  throw new Error("NETWORK_FAILURE");
}

/**
 * GET: Returns the visitor's current remaining daily free generations
 */
export async function GET(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);
    const remaining = await getRemainingDailyGenerations(ip);
    return NextResponse.json({
      remainingDaily: remaining,
      totalLimit: 10,
      resetTime: "midnight UTC (00:00 UTC)",
    });
  } catch (error) {
    return NextResponse.json({
      remainingDaily: 10,
      totalLimit: 10,
      resetTime: "midnight UTC (00:00 UTC)",
    });
  }
}

/**
 * POST: Handles AI content generation for free tools
 */
export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);

    // 1. Per-minute limit: 6 requests per IP
    const minuteCheck = await checkMinuteRateLimit(ip);
    if (!minuteCheck.allowed) {
      return NextResponse.json(
        {
          error: "You're making requests too quickly. Please wait a moment before trying again.",
          code: "RATE_LIMIT_PER_MINUTE",
        },
        { status: 429 }
      );
    }

    // 2. Validate request body
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request body.", code: "INVALID_BODY" },
        { status: 400 }
      );
    }

    const parseResult = RequestSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: parseResult.error.errors[0]?.message || "Invalid input parameters.",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const { tool: toolSlug, inputs } = parseResult.data;

    // Check if required inputs are empty
    const toolDef = getToolBySlug(toolSlug);
    if (!toolDef) {
      return NextResponse.json(
        { error: "Requested tool was not found.", code: "TOOL_NOT_FOUND" },
        { status: 404 }
      );
    }

    // A3. Pro tools check: NEVER call Gemini for Pro tools. Return 403.
    if (toolDef.isPro) {
      return NextResponse.json(
        {
          error: "Pro tools launch soon. Join the waitlist.",
          code: "PRO_TOOL_LOCKED",
        },
        { status: 403 }
      );
    }

    // Check required fields for free tools
    for (const field of toolDef.fields) {
      if (field.required) {
        const val = inputs[field.id];
        if (!val || (typeof val === "string" && !val.trim())) {
          return NextResponse.json(
            {
              error: `Please fill in the required field: "${field.label}".`,
              code: "EMPTY_REQUIRED_FIELD",
            },
            { status: 400 }
          );
        }
      }
    }

    const promptConfig = PROMPTS[toolSlug];
    if (!promptConfig) {
      return NextResponse.json(
        { error: `No prompt configured for tool: '${toolSlug}'`, code: "NO_PROMPT" },
        { status: 404 }
      );
    }

    // 3. Enforce Daily Limit (10 per day on server)
    const dailyCheck = await checkDailyGenerationLimit(ip);
    if (!dailyCheck.allowed) {
      return NextResponse.json(
        {
          error: "You have reached your daily limit of 10 free generations. Your limit resets at midnight UTC.",
          code: "DAILY_LIMIT_REACHED",
          remainingDaily: 0,
          resetTime: dailyCheck.resetTime,
        },
        { status: 429 }
      );
    }

    // 4. Check GEMINI_API_KEY
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_key_here") {
      if (toolDef.sampleOutput) {
        return NextResponse.json({
          text: toolDef.sampleOutput,
          remainingDaily: dailyCheck.remaining,
          resetTime: dailyCheck.resetTime,
          isSample: true,
          notice: "Notice: Running in demo mode with sample output. Configure GEMINI_API_KEY for live generations.",
        });
      }
      return NextResponse.json(
        {
          error: "The AI service is temporarily unavailable. Please try again later.",
          code: "API_KEY_MISSING",
        },
        { status: 503 }
      );
    }

    // 5. Generate content via Gemini REST API
    const systemPrompt = promptConfig.systemPrompt;
    const userPrompt = promptConfig.userPrompt(inputs);

    const generatedText = await callGeminiWithRetry(
      apiKey,
      GEMINI_MODEL,
      systemPrompt,
      userPrompt
    );

    return NextResponse.json({
      text: generatedText,
      remainingDaily: dailyCheck.remaining,
      resetTime: dailyCheck.resetTime,
    });
  } catch (error: any) {
    if (error.message === "GEMINI_QUOTA") {
      return NextResponse.json(
        {
          error: "The AI service is experiencing high traffic right now. Please try again in a few moments.",
          code: "GEMINI_QUOTA_EXCEEDED",
        },
        { status: 429 }
      );
    }

    if (error.message === "NETWORK_FAILURE") {
      return NextResponse.json(
        {
          error: "Unable to connect to the server. Please check your internet connection.",
          code: "NETWORK_ERROR",
        },
        { status: 503 }
      );
    }

    // Never show raw errors or stack traces to users
    console.error("[AuroDxb Generation Error]:", error);
    return NextResponse.json(
      {
        error: "Something went wrong while generating your content. Please try again.",
        code: "INTERNAL_ERROR",
      },
      { status: 500 }
    );
  }
}
