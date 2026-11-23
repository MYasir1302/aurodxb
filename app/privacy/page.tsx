import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AuroDxb",
  description: "AuroDxb's privacy policy and commitment to data protection.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500 mb-8">Last Updated: January 2025</p>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-8">
          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              1. Information We Collect
            </h2>
            <p>
              AuroDxb prioritizes privacy. For our free creator tools, we do not require account registration, passwords, or personal identity verification. Inputs submitted to AI generation tools (such as video titles or keywords) are processed transiently to generate your outputs and are not sold to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              2. How We Use Information
            </h2>
            <p>
              When you join our waitlist or contact support, we collect your email address solely to deliver relevant product updates, onboarding resources, or customer service. You may opt out of marketing communications at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              3. AI Processing & Third-Party APIs
            </h2>
            <p>
              AuroDxb utilizes the Google Gemini API to process creator requests. Input prompts are sent securely to Google API endpoints in compliance with Google Cloud API Terms of Service. Your data is not used to train public foundation models without permission.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              4. Local Storage
            </h2>
            <p>
              We use standard browser localStorage to track your daily free generation count and UI preferences (such as demo mode toggles). This data remains entirely on your device.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-white">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please reach out to us at privacy@aurodxb.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
