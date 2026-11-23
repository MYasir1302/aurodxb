import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const WaitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  plan: z.string().optional().default("Pro Monthly"),
});

// In-memory stub list for demo storage
const waitlistSubmissions: Array<{ email: string; plan: string; createdAt: string }> = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = WaitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message || "Invalid email" },
        { status: 400 }
      );
    }

    const { email, plan } = parsed.data;

    const entry = {
      email,
      plan,
      createdAt: new Date().toISOString(),
    };

    waitlistSubmissions.push(entry);
    console.log("[Waitlist Lead Received]:", entry);

    // Structure ready to plug in Stripe/LemonSqueezy or a database like Supabase/Prisma:
    // await db.waitlist.create({ data: { email, plan } });

    return NextResponse.json({
      success: true,
      message: "You're on the priority list! We will notify you the moment spots open.",
      entry,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to join waitlist." },
      { status: 500 }
    );
  }
}
