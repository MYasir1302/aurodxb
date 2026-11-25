import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import {
  getClientIp,
  checkHourlyActionLimit,
  saveContactSubmission,
} from "@/lib/redis";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(150),
  subject: z.string().trim().min(1, "Please select or enter a subject.").max(150),
  message: z.string().trim().min(5, "Message must be at least 5 characters long.").max(2000),
  botField: z.string().optional(), // Honeypot field
});

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);

    // Rate limit: 3 contact submissions per hour per IP
    const rateCheck = await checkHourlyActionLimit(ip, "contact", 3);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: "You have sent too many messages recently. Please try again in an hour.",
          code: "CONTACT_RATE_LIMIT",
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

    const parseResult = ContactSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: parseResult.error.errors[0]?.message || "Invalid contact form input.",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message, botField } = parseResult.data;

    // Honeypot check: If the hidden bot field is filled, silently return success
    if (botField && botField.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out! We will be in touch soon.",
      });
    }

    const now = new Date().toISOString();

    // 1. Save in Upstash Redis list ("contact")
    await saveContactSubmission({
      name,
      email,
      subject,
      message,
      ip,
      createdAt: now,
    });

    // 2. If RESEND_API_KEY and CONTACT_TO_EMAIL exist, send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (resendApiKey && contactToEmail) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "AuroDxb Contact <onboarding@resend.dev>",
          to: contactToEmail,
          replyTo: email,
          subject: `[AuroDxb Contact] ${subject} from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nTime: ${now}\nIP: ${ip}\n\nMessage:\n${message}`,
        });
      } catch (emailErr) {
        // Silently log error, do not fail user request since message is saved in Redis
        console.warn("[Resend Email Warning]:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("[Contact Route Error]:", error);
    return NextResponse.json(
      {
        error: "Something went wrong while sending your message. Please try again.",
        code: "SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}
