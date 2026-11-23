import React from "react";
import type { Metadata } from "next";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { ShieldCheck, Zap, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Plans | AuroDxb Pro",
  description:
    "Transparent pricing for YouTube creators. Start free or unlock full-length video scripts, 30-day publishing schedules, and channel audit growth plans.",
};

export default function PricingPage() {
  return (
    <div className="py-8">
      {/* Reusable Pricing Section with Full Comparison Table */}
      <PricingSection showComparison={true} />

      {/* Trust & Guarantee Banner */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 text-center sm:p-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">
              Fair & Flexible Creator Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
              No tricky cancellation locks. Cancel anytime with a single click. Free tier remains available forever with generous daily generation quotas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ on Pricing Page */}
      <FaqSection />
    </div>
  );
}
