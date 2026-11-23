import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PROMPTS } from "@/lib/prompts";
import { getToolBySlug } from "@/lib/tools-data";

export const runtime = "nodejs";

// Current recommended Gemini Flash model constant
const GEMINI_MODEL = "gemini-2.5-flash";

// In-memory rate limiting: 10 requests per minute per IP
interface RateLimitEntry {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean up expired entries if map gets large
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  return true;
}

// Zod schema for request validation
const RequestSchema = z.object({
  tool: z.string().min(1, "Tool slug is required").max(100),
  inputs: z.record(z.any()).refine(
    (data) => {
      const totalChars = Object.values(data)
        .filter((val) => typeof val === "string")
        .reduce((sum, str) => sum + str.length, 0);
      return totalChars <= 5000;
    },
    { message: "Total input text cannot exceed 5,000 characters." }
  ),
});

// Helper for calling Gemini with retry logic for 429 and 503
async function callGeminiWithRetry(
  apiKey: string,
  model: string,
  systemInstruction: string,
  userPrompt: string,
  retries = 2
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
      temperature: 0.7,
      maxOutputTokens: 4096,
    },
  };

  let lastError: any = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
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
          throw new Error("Gemini returned an empty response.");
        }
        return text;
      }

      // Retry on 429 (Rate Limit) or 503 (Service Unavailable)
      if ((res.status === 429 || res.status === 503) && attempt < retries) {
        const delay = 1000 * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }

      const errText = await res.text();
      let parsedErr: any = null;
      try {
        parsedErr = JSON.parse(errText);
      } catch {
        // ignore
      }

      const message =
        parsedErr?.error?.message || `Gemini API returned HTTP status ${res.status}`;
      throw new Error(message);
    } catch (err: any) {
      lastError = err;
      if (attempt >= retries) {
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  throw lastError || new Error("Failed to communicate with Gemini API.");
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "anonymous-client";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait a minute before generating more content. (Limit: 10 requests/min)",
        },
        { status: 429 }
      );
    }

    // 2. Validate Request Body
    const body = await req.json();
    const parseResult = RequestSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: parseResult.error.errors[0]?.message || "Invalid input parameters.",
        },
        { status: 400 }
      );
    }

    const { tool: toolSlug, inputs } = parseResult.data;

    // 3. Check Prompt definition
    const promptConfig = PROMPTS[toolSlug];
    if (!promptConfig) {
      return NextResponse.json(
        { error: `No prompt configured for tool: '${toolSlug}'` },
        { status: 404 }
      );
    }

    // 4. Check GEMINI_API_KEY
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_key_here") {
      // If API key is not configured, check if tool has a sample output to show gracefully
      const toolDef = getToolBySlug(toolSlug);
      if (toolDef?.sampleOutput) {
        return NextResponse.json({
          text: toolDef.sampleOutput,
          isSample: true,
          warning:
            "⚡ Notice: Running in demo mode with sample output. To generate live AI content with your custom inputs, add your GEMINI_API_KEY in .env.local or your Vercel project settings.",
        });
      }

      return NextResponse.json(
        {
          error:
            "Gemini API key is not configured. Please add GEMINI_API_KEY to your .env.local file or Vercel Environment Variables.",
        },
        { status: 503 }
      );
    }

    // 5. Build prompts and call API
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
      model: GEMINI_MODEL,
    });
  } catch (error: any) {
    console.error("[Gemini API Route Error]:", error);
    return NextResponse.json(
      {
        error: error.message || "An unexpected error occurred during AI generation.",
      },
      { status: 500 }
    );
  }
}
