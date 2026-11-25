"use client";

import React, { useState } from "react";
import { Check, Crown, ArrowRight } from "lucide-react";
import { useUser } from "./UserContext";
import { cn } from "@/lib/utils";

export function PricingSection({ showComparison = true }: { showComparison?: boolean }) {
  const { openWaitlistModal } = useUser();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      id: "free",
      name: "Free Creator",
      badge: "Current Plan",
      price: "$0",
      period: "forever",
      yearlyNote: "No credit card required",
      description: "Essential YouTube tools to brainstorm click-worthy titles and optimize metadata.",
      features: [
        "All 9 Free Creator Tools",
        "10 AI Generations Per Day",
        "YouTube Title Generator",
        "SEO Description & Tags Generator",
        "HD 1080p Thumbnail Downloader",
        "Comment Reply Generator",
        "Use on Personal & Client Channels",
      ],
      notIncluded: [
        "Full Video Script Writer (Pro)",
        "30-Day Content Calendar (Pro)",
        "Channel Audit & Growth Plan (Pro)",
        "Competitor Analysis Assistant (Pro)",
        "Shorts Script Pack (Pro)",
      ],
      ctaText: "Explore Free Tools",
      ctaAction: () => {
        window.location.href = "/tools";
      },
      isPopular: false,
    },
    {
      id: "pro",
      name: "Pro Creator",
      badge: "Coming Soon",
      price: billingCycle === "yearly" ? "$15" : "$19",
      period: "/ month",
      yearlyNote: billingCycle === "yearly" ? "Billed $180 per year (about 20% off)" : "Billed monthly",
      description: "For active video creators wanting full scripts, content calendars, and growth plans.",
      features: [
        "Everything in Free, plus:",
        "High daily limit (fair use)",
        "Full Video Script Writer",
        "30-Day Content Calendar Matrix",
        "Channel Audit & Growth Plan",
        "Competitor Analysis Assistant",
        "Shorts Script Pack (10 Scripts)",
        "Monetization Readiness Checker",
        "SEO Keyword Research Assistant",
      ],
      ctaText: "Join Pro Waitlist",
      ctaAction: () => {
        openWaitlistModal("Pro Creator ($19/mo)");
      },
      isPopular: true,
    },
    {
      id: "lifetime",
      name: "Founder Lifetime",
      badge: "Coming Soon",
      price: "$199",
      period: "one-time",
      yearlyNote: "One-time payment for lifetime access",
      description: "One-time investment covering the complete creator toolkit and initial Pro suite.",
      features: [
        "Everything in Pro Creator",
        "One-time payment (no recurring subscription)",
        "High daily limit (fair use)",
        "Full access to all 7 Pro creator tools at launch",
        "Use for Personal & Client Channel projects",
      ],
      ctaText: "Join the waitlist",
      ctaAction: () => {
        openWaitlistModal("Founder Lifetime ($199)");
      },
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
            <Crown className="w-3.5 h-3.5 text-yellow-400" />
            <span>Pricing & Plans</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Transparent Creator Pricing
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            All 9 free tools are available today with no login. Pro tools are launching soon.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center rounded-xl border border-white/10 bg-[#0F0F1A] p-1.5">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "rounded-lg px-4 py-1.5 text-xs sm:text-sm font-medium transition-all",
                billingCycle === "monthly"
                  ? "bg-white/10 text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Monthly ($19/mo)
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "flex items-center space-x-1.5 rounded-lg px-4 py-1.5 text-xs sm:text-sm font-medium transition-all",
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-glow-sm font-semibold"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <span>Yearly ($15/mo)</span>
              <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                Save ~20%
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
              {/* Badge */}
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold text-white">
                  {plan.name}
                </h3>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-medium",
                    plan.isPopular
                      ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                      : "bg-white/5 border border-white/10 text-gray-400"
                  )}
                >
                  {plan.badge}
                </span>
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
              <p className="mt-1 text-[11px] text-cyan-400">{plan.yearlyNote}</p>

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
                    <th className="py-4 px-4 text-center text-cyan-400">Pro Creator (Soon)</th>
                    <th className="py-4 px-4 text-center text-violet-400">Founder Lifetime (Soon)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: "AI Title, Tag & Description Tools", free: "Yes (10/day)", pro: "High daily limit (fair use)", life: "High daily limit (fair use)" },
                    { feature: "Full Video Script Writer", free: "Sample preview", pro: "Full generation", life: "Full generation" },
                    { feature: "30-Day Content Calendar Matrix", free: "Sample preview", pro: "Full generation", life: "Full generation" },
                    { feature: "Channel Audit & Growth Plan", free: "Sample preview", pro: "Full generation", life: "Full generation" },
                    { feature: "Competitor Analysis Assistant", free: "Sample preview", pro: "Full generation", life: "Full generation" },
                    { feature: "10-in-1 Shorts Script Pack", free: "Sample preview", pro: "Full generation", life: "Full generation" },
                    { feature: "HD 1080p Thumbnail Downloader", free: "Yes (Unlimited)", pro: "Yes (Unlimited)", life: "Yes (Unlimited)" },
                    { feature: "AI Engine", free: "Google Gemini", pro: "Google Gemini", life: "Google Gemini" },
                    { feature: "Daily Free AI Generations", free: "10 per day", pro: "High daily limit (fair use)", life: "High daily limit (fair use)" },
                    { feature: "Use on Your Own & Client Channels", free: "Yes", pro: "Yes", life: "Yes" },
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
