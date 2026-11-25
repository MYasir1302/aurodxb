import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AuroDxb's privacy policy and commitment to data protection.",
  alternates: {
    canonical: "https://www.aurodxb.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | AuroDxb",
    description: "AuroDxb's privacy policy and commitment to data protection.",
    url: "https://www.aurodxb.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500 mb-8">Last Updated: November 2026</p>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-8">
          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              1. No Account Required for Free Tools
            </h2>
            <p>
              AuroDxb allows creators to use all 9 free tools without creating an account, registering passwords, or providing credit card details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              2. IP Address Hashing & Rate Limiting
            </h2>
            <p>
              To enforce our fair daily limit of 10 free generations per day and protect against abuse, we process a SHA-256 cryptographic hash of your IP address combined with the current UTC date. This hashed value is stored temporarily in Upstash Redis for up to 24 hours and automatically expires. Raw IP addresses are not stored permanently.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              3. AI Processing & Google Gemini API
            </h2>
            <p>
              When you submit a prompt to an AI-powered tool, the input text is transmitted to the Google Gemini API to generate the requested output. Under Google&apos;s standard terms for free API tiers, submitted content may be processed by Google to maintain and improve its services. For this reason, <strong>please do not submit sensitive, confidential, proprietary, or personally identifiable information</strong> into any tool fields.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              4. Waitlist & Contact Inquiries
            </h2>
            <p>
              If you voluntarily submit your email via our waitlist modal or contact form, we store your email address and message details in our secure database solely to reply to your inquiry and send product launch announcements. We never sell, rent, or distribute your email address to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              5. Hosting & Server Infrastructure
            </h2>
            <p>
              AuroDxb is hosted on Vercel. Standard technical server logs (such as HTTP request headers, timestamps, and browser user-agent strings) may be generated for reliability, security monitoring, and performance diagnostics in accordance with Vercel&apos;s privacy policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              6. Local Storage
            </h2>
            <p>
              We use standard browser localStorage solely for client-side user interface preferences (such as theme rendering). It is not used to track cross-site activity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              7. Your Rights & Data Deletion
            </h2>
            <p>
              You have the right to request access to or deletion of any personal data you have provided to us (such as waitlist or contact submissions). To request data removal, please contact our privacy officer at{" "}
              <a href="mailto:privacy@aurodxb.com" className="text-cyan-400 hover:underline">
                privacy@aurodxb.com
              </a>.
            </p>
          </section>
        </div>

        {/* Mandatory legal template disclaimer (D3) */}
        <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs text-gray-500 text-center">
          This is a general template. Review with a qualified professional before relying on it.
        </div>
      </div>
    </div>
  );
}
