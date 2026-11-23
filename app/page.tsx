"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Crown,
  ArrowRight,
  Zap,
  Play,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  Star,
  Users,
  Compass,
  FileCheck,
} from "lucide-react";
import { TOOLS } from "@/lib/tools-data";
import { ToolCard } from "@/components/ToolCard";
import { HeroMockup } from "@/components/HeroMockup";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { useUser } from "@/components/UserContext";

export default function HomePage() {
  const { openUpgradeModal } = useUser();

  const freeTools = TOOLS.filter((t) => !t.isPro);
  const proTools = TOOLS.filter((t) => t.isPro);

  const stats = [
    { label: "AI Generations Crafted", value: "75,000+" },
    { label: "Dedicated YouTube Tools", value: "16 Specialized" },
    { label: "Average CTR Lift Reported", value: "+38%" },
    { label: "Creator Community Rating", value: "4.9 / 5.0" },
  ];

  const steps = [
    {
      step: "01",
      title: "Pick Your Weapon",
      desc: "Select from 16 specialized creator tools: title ideation, SEO descriptions, high-retention scripts, or competitor audits.",
      icon: Compass,
    },
    {
      step: "02",
      title: "Feed Your Topic & Style",
      desc: "Type your raw premise, keywords, or competitor link. Gemini 2.5 Flash analyzes YouTube algorithm trends in under a second.",
      icon: Zap,
    },
    {
      step: "03",
      title: "Copy, Paste & Publish",
      desc: "Get polished, high-CTR titles, timestamps, and full scripts. One-click copy or download directly to your workflow.",
      icon: FileCheck,
    },
  ];

  const testimonials = [
    {
      quote:
        "The Title Generator and Shorts Script Pack helped me go from 1,200 views to over 48,000 views on my very next upload. The hook pacing tips are pure gold.",
      author: "Marcus Vance",
      channel: "DevPulse (142K Subs)",
      rating: 5,
    },
    {
      quote:
        "Being able to extract 1080p thumbnails instantly without ad spam or signups already saved our agency hours every week. Pro scripts are unmatched.",
      author: "Elena Rostova",
      channel: "ContentLab Media",
      rating: 5,
    },
    {
      quote:
        "Generic ChatGPT gives fluffy intros that ruin retention. AuroDxb's script structure got our average view duration from 28% to 47%.",
      author: "David Chen",
      channel: "Finance Decoded (89K Subs)",
      rating: 5,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Hero Radial Glow and faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center space-x-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold text-violet-300 shadow-glow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Next-Gen Creator Suite • Powered by Gemini Flash</span>
          </div>

          {/* Big Gradient Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
            Grow Your YouTube Channel with{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              AI Tools
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stop guessing what the algorithm wants. Generate click-worthy titles, SEO descriptions, viral tags, full retention-engineered scripts, and 30-day content calendars in seconds.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tools"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 py-3.5 px-8 font-semibold text-white shadow-glow-md hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Try Free Tools (No Login)</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <button
              onClick={openUpgradeModal}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl border border-white/10 bg-white/5 py-3.5 px-7 font-semibold text-gray-200 hover:bg-white/10 hover:text-white transition-all"
            >
              <Crown className="w-4 h-4 text-yellow-400" />
              <span>Unlock Pro Suite</span>
            </button>
          </div>

          {/* Tool Interactive Mockup */}
          <HeroMockup />
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative border-y border-white/10 bg-[#0F0F1A]/60 py-10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE TOOLS GRID */}
      <section id="free-tools" className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Free • No Signup Required</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Essential Free Tools
              </h2>
              <p className="mt-2 text-sm text-gray-400 max-w-xl">
                Daily utilities for instant title inspiration, description writing, tag extraction, and HD thumbnail downloads.
              </p>
            </div>

            <Link
              href="/tools"
              className="inline-flex items-center space-x-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View All 16 Tools</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freeTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* PRO TOOLS GRID */}
      <section id="pro-tools" className="py-20 relative bg-[#0B0B14]/70 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
                <Crown className="w-3.5 h-3.5 text-yellow-400" />
                <span>Pro Creator Suite</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Deep Growth & Automation Tools
              </h2>
              <p className="mt-2 text-sm text-gray-400 max-w-xl">
                High-leverage strategic tools to script 15-minute retention deep-dives, schedule 30 days of uploads, and audit channel bottlenecks.
              </p>
            </div>

            <button
              onClick={openUpgradeModal}
              className="inline-flex items-center space-x-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-glow-sm hover:bg-violet-500 transition-all self-start md:self-auto"
            >
              <Crown className="w-3.5 h-3.5 text-yellow-300" />
              <span>Unlock All Pro Tools</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS IN 3 STEPS */}
      <section id="how-it-works" className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Frictionless Process
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              How AuroDxb Works in 3 Simple Steps
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              No complicated prompt engineering required. Every tool is tuned specifically for the YouTube algorithm.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl border border-white/10 bg-[#0F0F1A] p-8 transition-all hover:border-white/20"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-3xl font-extrabold text-white/20">
                      {step.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/10 text-cyan-400 border border-violet-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="py-20 relative bg-[#0B0B14]/60 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
              Creator Feedback
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              Loved by YouTubers Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-4 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-sm font-bold text-white">
                      {t.author}
                    </h4>
                    <p className="text-xs text-gray-400">{t.channel}</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-violet-600/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                    YT
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection showComparison={false} />

      {/* FAQ SECTION */}
      <FaqSection />

      {/* BOTTOM CTA BANNER */}
      <section className="py-16 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-violet-900/40 via-purple-900/20 to-cyan-900/40 p-8 text-center backdrop-blur-xl sm:p-12 shadow-2xl">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-80 rounded-full bg-violet-600/30 blur-3xl" />
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Explode Your Views?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
              Start generating high-converting titles, descriptions, and script hooks right now. Free forever.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/tools"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 px-8 font-semibold text-white shadow-glow-sm hover:brightness-110 transition-all"
              >
                <span>Launch Free Tools Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
