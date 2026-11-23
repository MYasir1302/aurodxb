import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Target, Zap, Shield, ArrowRight, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AuroDxb",
  description:
    "Learn about AuroDxb, our mission to democratize elite YouTube algorithmic intelligence for independent video creators worldwide.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Our Mission</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Ambitious YouTube Creators
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            AuroDxb was founded to level the playing field between solo content creators and mega-production teams with six-figure research budgets.
          </p>
        </div>

        {/* Narrative */}
        <div className="space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
          <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-white mb-3 flex items-center space-x-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>The Problem with Generic AI</span>
            </h2>
            <p>
              Most creators trying generic AI chatbots end up with boring, robotic scripts, overly academic titles, and descriptions that get buried by the YouTube algorithm. The algorithm does not reward generic encyclopedic summaries; it rewards <strong>viewer curiosity, high-stakes retention hooks, and emotional resonance</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-white mb-3 flex items-center space-x-2">
              <Zap className="w-5 h-5 text-violet-400" />
              <span>The AuroDxb Philosophy</span>
            </h2>
            <p>
              We built AuroDxb by reverse-engineering the top 1% of viral YouTube channels. Every tool in our suite is tuned for a specific step in the production lifecycle:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400 text-sm">
              <li><strong>Ideation & Hook Packaging:</strong> Titles that spark instant curiosity without deceptive clickbait.</li>
              <li><strong>Retention-Engineered Scriptwriting:</strong> Pacing cues and dopamine resets every 45-60 seconds.</li>
              <li><strong>Algorithmic Metadata:</strong> Tags, SEO descriptions, and timestamps that signal exact topic intent.</li>
              <li><strong>Actionable Growth Audits:</strong> Identifying channel drop-off points and fixing CTR bottlenecks.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-white mb-3 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Independent & Creator-First</span>
            </h2>
            <p>
              AuroDxb operates independently from YouTube, Google, and Alphabet Inc. Our commitment is strictly to creators. We offer transparent free tiers with zero login barriers, ensuring beginner creators can thrive right away.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 px-8 font-semibold text-white shadow-glow-sm hover:brightness-110 transition-all"
          >
            <span>Explore Free Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
