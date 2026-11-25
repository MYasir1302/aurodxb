import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  getClientIp,
  checkHourlyActionLimit,
  saveWaitlistEmail,
} from "@/lib/redis";

export const runtime = "nodejs";

const WaitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(150, "Email address is too long."),
  plan: z.string().optional().default("Pro Creator"),
});

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);

    // Rate limit: 5 submissions per hour per IP
    const rateCheck = await checkHourlyActionLimit(ip, "waitlist", 5);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: "You have submitted too many requests recently. Please try again later.",
          code: "WAITLIST_RATE_LIMIT",
        },
        { status: 429 }
      );
    }

    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request payload.", code: "INVALID_JSON" },
        { status: 400 }
      );
    }

    const parsed = WaitlistSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.errors[0]?.message || "Please provide a valid email address.",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const { email, plan } = parsed.data;

    const { isNew } = await saveWaitlistEmail(email, plan);

    return NextResponse.json({
      success: true,
      message: isNew
        ? "You're on the waitlist! We will notify you the moment Pro tools launch."
        : "You are already on our waitlist. We will notify you as soon as spots open!",
    });
  } catch (error) {
    console.error("[Waitlist API Error]:", error);
    return NextResponse.json(
      {
        error: "Something went wrong while joining the waitlist. Please try again.",
        code: "SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}
