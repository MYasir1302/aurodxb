"use client";

import React, { useState } from "react";
import { Check, Sparkles, Crown, Zap, Shield, HelpCircle, ArrowRight } from "lucide-react";
import { useUser } from "./UserContext";
import { cn } from "@/lib/utils";

export function PricingSection({ showComparison = true }: { showComparison?: boolean }) {
  const { openWaitlistModal, isPro, setIsPro } = useUser();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      id: "free",
      name: "Free Creator",
      badge: "Forever Free",
      price: "$0",
      period: "forever",
      description: "Essential YouTube tools to brainstorm high-CTR titles and optimize metadata.",
      features: [
        "All 9 Free Creator Tools",
        "10 AI Generations Per Day",
        "High-CTR Title Generator",
        "SEO Description & Tags Generator",
        "HD 1080p Thumbnail Downloader",
        "Community & Comment Reply AI",
        "Standard Gemini Flash Speed",
      ],
      notIncluded: [
        "Full 8-15 min Video Script Writer",
        "30-Day Strategic Content Calendar",
        "Channel Audit & Bottleneck Report",
        "Competitor Content Gap Matrix",
        "10-in-1 Viral Shorts Script Pack",
      ],
      ctaText: "Get Started Free",
      ctaAction: () => {
        window.location.href = "/tools";
      },
      isPopular: false,
      isProPlan: false,
    },
    {
      id: "pro",
      name: "Pro Creator",
      badge: "Most Popular",
      price: billingCycle === "yearly" ? "$15" : "$19",
      period: "/ month",
      yearlyNote: billingCycle === "yearly" ? "Billed $180 annually (Save 20%)" : "Billed monthly",
      description: "For creators and agencies aiming to scale view counts and build authority.",
      features: [
        "Everything in Free, plus:",
        "Unlimited AI Generations (Zero Daily Cap)",
        "Full Retention-Engineered Video Scripts",
        "30-Day Publishing Content Calendars",
        "In-Depth Channel Audit & Growth Roadmap",
        "Competitor Gap Analysis & Stealable Hooks",
        "10-in-1 Viral Shorts Script Packs",
        "Monetization Readiness & RPM Forecaster",
        "Priority Gemini Flash Speed with Zero Wait",
      ],
      ctaText: isPro ? "Pro Plan Active" : "Unlock Pro Creator",
      ctaAction: () => {
        openWaitlistModal("Pro Creator ($19/mo)");
      },
      isPopular: true,
      isProPlan: true,
    },
    {
      id: "lifetime",
      name: "Founder Lifetime",
      badge: "Limited to First 100",
      price: "$199",
      period: "one-time",
      yearlyNote: "Pay once, own forever. All future updates.",
      description: "Never pay a subscription again. Guaranteed access to all future YouTube tools.",
      features: [
        "Everything in Pro Creator Forever",
        "No Recurring Monthly Bills Ever",
        "VIP Early Access to New Beta Features",
        "Direct Discord VIP Creator Role",
        "High-Volume Script Batching",
        "Priority Feature Request Voting",
        "Commercial License for Client Work",
      ],
      ctaText: "Claim Lifetime Access",
      ctaAction: () => {
        openWaitlistModal("Founder Lifetime ($199)");
      },
      isPopular: false,
      isProPlan: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
            <Crown className="w-3.5 h-3.5 text-yellow-400" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Level Up Your YouTube Channel
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            Start free with zero credit card required. Upgrade when you need full video scripts, strategic calendars, and channel audits.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center rounded-xl border border-white/10 bg-[#0F0F1A] p-1.5">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "rounded-lg px-4 py-1.5 text-xs sm:text-sm font-medium transition-all",
                billingCycle === "monthly"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "flex items-center space-x-1.5 rounded-lg px-4 py-1.5 text-xs sm:text-sm font-medium transition-all",
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-glow-sm"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <span>Yearly</span>
              <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all duration-300",
                plan.isPopular
                  ? "border-violet-500/50 bg-[#0F0F1A] shadow-pro-card lg:-translate-y-2"
                  : "border-white/10 bg-[#0F0F1A]/80 hover:border-white/20"
              )}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow-sm">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {plan.name}
                  </h3>
                  {!plan.isPopular && (
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs font-medium text-gray-400">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs text-gray-400 min-h-[36px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline">
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-sm text-gray-400">
                    {plan.period}
                  </span>
                </div>
                {plan.yearlyNote && (
                  <p className="mt-1 text-[11px] text-cyan-400">{plan.yearlyNote}</p>
                )}

                {/* Feature List */}
                <div className="mt-8 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    What&apos;s Included:
                  </p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-200">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="pt-2 space-y-2 border-t border-white/5">
                      {plan.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-gray-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
                          <span className="line-through">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <button
                  onClick={plan.ctaAction}
                  className={cn(
                    "w-full flex items-center justify-center space-x-2 rounded-xl py-3.5 px-4 font-semibold text-sm transition-all duration-200",
                    plan.isPopular
                      ? "bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white shadow-glow-md hover:brightness-110 active:scale-[0.99]"
                      : "bg-white/10 text-white hover:bg-white/15"
                  )}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        {showComparison && (
          <div className="mt-20">
            <h3 className="font-heading text-2xl font-bold text-white text-center mb-8">
              Side-by-Side Feature Comparison
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0F0F1A]">
              <table className="w-full text-left text-xs sm:text-sm text-gray-300">
                <thead className="border-b border-white/10 bg-white/[0.02] text-xs font-semibold uppercase text-gray-400">
                  <tr>
                    <th className="py-4 px-6">Feature</th>
                    <th className="py-4 px-4 text-center">Free Tier</th>
                    <th className="py-4 px-4 text-center text-cyan-400">Pro Creator</th>
                    <th className="py-4 px-4 text-center text-violet-400">Founder Lifetime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: "AI Title, Tag & Hashtag Tools", free: "Yes (10/day)", pro: "Unlimited", life: "Unlimited" },
                    { feature: "Full 8-15 Min Video Script Writer", free: "Preview only", pro: "Yes (Unlimited)", life: "Yes (Unlimited)" },
                    { feature: "30-Day Content Calendar Matrix", free: "Preview only", pro: "Yes (Unlimited)", life: "Yes (Unlimited)" },
                    { feature: "Channel Audit & 90-Day Roadmap", free: "Preview only", pro: "Yes", life: "Yes" },
                    { feature: "Competitor Content Gap Matrix", free: "Preview only", pro: "Yes", life: "Yes" },
                    { feature: "10-in-1 Viral Shorts Script Pack", free: "Preview only", pro: "Yes", life: "Yes" },
                    { feature: "HD 1080p Thumbnail Downloader", free: "Yes (Unlimited)", pro: "Yes (Unlimited)", life: "Yes (Unlimited)" },
                    { feature: "AI Model Used", free: "Gemini 2.5 Flash", pro: "Gemini 2.5 Flash", life: "Gemini 2.5 Flash VIP" },
                    { feature: "Daily Generation Limit", free: "10 per day", pro: "Unlimited", life: "Unlimited" },
                    { feature: "Commercial Rights for Client Work", free: "No", pro: "Yes", life: "Yes" },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-6 font-medium text-white">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center text-gray-400">{row.free}</td>
                      <td className="py-3.5 px-4 text-center font-semibold text-cyan-300">{row.pro}</td>
                      <td className="py-3.5 px-4 text-center font-semibold text-violet-300">{row.life}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
