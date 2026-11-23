import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AuroDxb",
  description: "Terms and conditions for utilizing the AuroDxb YouTube creator platform.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-xs text-gray-500 mb-8">Last Updated: January 2025</p>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-8">
          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using AuroDxb (&ldquo;aurodxb.com&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              2. Independent Service Disclaimer
            </h2>
            <p>
              AuroDxb is an independent creator utility. AuroDxb is not affiliated, associated, authorized, endorsed by, or in any way officially connected with YouTube, Google LLC, or Alphabet Inc. YouTube and its associated marks are registered trademarks of Google LLC.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              3. Permitted Use & Content Ownership
            </h2>
            <p>
              You own all intellectual property rights to the output text, scripts, and video titles generated for your channel using AuroDxb. You are free to publish, monetize, and distribute this content across YouTube, social platforms, and client channels.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              4. Prohibited Activities
            </h2>
            <p>
              You may not abuse our API routes, attempt denial-of-service attacks, scrape content in violation of rate limits, or generate hate speech, harassment, or unlawful content in violation of YouTube Community Guidelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              5. Disclaimer of Warranties
            </h2>
            <p>
              AuroDxb tools provide algorithmic suggestions. While our prompts are optimized for high CTR and viewer retention, we do not guarantee specific view counts, subscriber growth, or monetization revenue. YouTube algorithms fluctuate independently.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
