"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Crown,
  ArrowRight,
  Zap,
  Compass,
  FileCheck,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { TOOLS } from "@/lib/tools-data";
import { ToolCard } from "@/components/ToolCard";
import { HeroMockup } from "@/components/HeroMockup";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { useUser } from "@/components/UserContext";

export default function HomePage() {
  const { openWaitlistModal } = useUser();

  const freeTools = TOOLS.filter((t) => !t.isPro);
  const proTools = TOOLS.filter((t) => t.isPro);

  const truthfulFacts = [
    { title: "9 Free Tools", desc: "Title, description, tags, hashtags, and 1080p thumbnail downloader" },
    { title: "7 Pro Tools Coming Soon", desc: "Full scripts, content calendar, and channel growth audit" },
    { title: "No Signup for Free Tools", desc: "Generate up to 10 assets daily with zero account creation" },
  ];

  const steps = [
    {
      step: "01",
      title: "Choose a Tool",
      desc: "Select any of our 9 free creator utilities for titles, SEO descriptions, tags, ideas, or HD thumbnails.",
      icon: Compass,
    },
    {
      step: "02",
      title: "Enter Your Video Topic",
      desc: "Provide your topic, style preference, or target keywords. Google Gemini formats your metadata using proven YouTube best practices.",
      icon: Zap,
    },
    {
      step: "03",
      title: "Copy & Apply",
      desc: "Receive clean, copy-ready titles, timestamps, and tags. Copy directly into your YouTube upload workflow.",
      icon: FileCheck,
    },
  ];

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AuroDxb",
    url: "https://www.aurodxb.com",
    logo: "https://www.aurodxb.com/icon.svg",
    description: "AI-powered YouTube creator utilities for titles, SEO descriptions, tags, and thumbnails.",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AuroDxb",
    url: "https://www.aurodxb.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.aurodxb.com/tools?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Structured Data (E5) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Background Hero Radial Glow and faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center space-x-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold text-violet-300 shadow-glow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>YouTube Creator Toolkit • Powered by Google Gemini</span>
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
            Generates titles and metadata using Google Gemini, tuned with proven YouTube best practices. Fast, structured, and free to start.
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
              onClick={() => openWaitlistModal("Pro Creator")}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl border border-white/10 bg-white/5 py-3.5 px-7 font-semibold text-gray-200 hover:bg-white/10 hover:text-white transition-all"
            >
              <Crown className="w-4 h-4 text-yellow-400" />
              <span>Unlock Pro Suite (Waitlist)</span>
            </button>
          </div>

          {/* Tool Interactive Mockup */}
          <HeroMockup />
        </div>
      </section>

      {/* TRUTHFUL FACTS STRIP (C1) */}
      <section className="relative border-y border-white/10 bg-[#0F0F1A]/60 py-10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {truthfulFacts.map((fact, i) => (
              <div key={i} className="space-y-1 p-2">
                <div className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{fact.title}</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {fact.desc}
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
                <span>9 Free Creator Tools • No Login</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Essential Free Tools
              </h2>
              <p className="mt-2 text-sm text-gray-400 max-w-xl">
                Immediate utilities for title ideation, SEO descriptions, tags, and HD thumbnail extraction.
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
                <span>7 Pro Tools (Coming Soon)</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Upcoming Pro Features
              </h2>
              <p className="mt-2 text-sm text-gray-400 max-w-xl">
                Explore sample outputs for our upcoming scriptwriters, 30-day content calendar, and channel audit tools.
              </p>
            </div>

            <button
              onClick={() => openWaitlistModal("Pro Suite")}
              className="inline-flex items-center space-x-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-glow-sm hover:bg-violet-500 transition-all self-start md:self-auto"
            >
              <Crown className="w-3.5 h-3.5 text-yellow-300" />
              <span>Join Pro Waitlist</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS IN 3 STEPS (C2) */}
      <section id="how-it-works" className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Simple Workflow
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              How AuroDxb Works in 3 Steps
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              No prompt writing needed. Every tool produces structured, copy-ready metadata.
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

      {/* BE ONE OF OUR FIRST CREATORS (C1 Replaces Fake Testimonials) */}
      <section className="py-20 relative bg-[#0B0B14]/60 border-y border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Community Feedback</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Be One of Our First Creators
          </h2>
          <p className="mt-4 text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            We are actively building and refining AuroDxb. Try the 9 free tools, test our outputs on your channel, and let us know what features you want next.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tools"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-all text-sm"
            >
              <span>Explore Free Tools</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl border border-white/10 bg-transparent px-6 py-3 font-semibold text-gray-300 hover:text-white hover:border-white/20 transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Share Creator Feedback</span>
            </Link>
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
              Ready to Optimize Your YouTube Content?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
              Start generating titles, descriptions, tags, and thumbnails right now. 9 tools completely free.
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
