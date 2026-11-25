import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Target, Zap, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AuroDxb, our mission to build fast, practical YouTube creator utilities for titles, descriptions, and metadata.",
  alternates: {
    canonical: "https://www.aurodxb.com/about",
  },
  openGraph: {
    title: "About Us | AuroDxb",
    description: "Learn about AuroDxb, our mission to build fast, practical YouTube creator utilities for titles, descriptions, and metadata.",
    url: "https://www.aurodxb.com/about",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Our Focus</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Practical YouTube Workflows
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            AuroDxb provides focused, easy-to-use tools that solve real everyday creator challenges: click-worthy titles, structured video descriptions, and clean tags.
          </p>
        </div>

        {/* Narrative */}
        <div className="space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
          <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-white mb-3 flex items-center space-x-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>Why Dedicated Creator Tools Matter</span>
            </h2>
            <p>
              Generic chatbots require writing elaborate prompts to get properly formatted YouTube metadata. AuroDxb eliminates prompt writing entirely: enter your topic, and each tool immediately outputs structured titles, descriptions, or tags formatted specifically for YouTube.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-white mb-3 flex items-center space-x-2">
              <Zap className="w-5 h-5 text-violet-400" />
              <span>The AuroDxb Philosophy</span>
            </h2>
            <p>
              We focus on clean, utility-first tools:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400 text-sm">
              <li><strong>Zero Signup for Free Tools:</strong> Jump straight into creating without mandatory logins or credit cards.</li>
              <li><strong>Clean Output:</strong> No preambles, conversational filler, or boilerplate intros to delete before copying.</li>
              <li><strong>Direct Download Utilities:</strong> Instant HD thumbnail extraction directly from official YouTube servers.</li>
              <li><strong>Creator Privacy:</strong> We do not sell user prompts or store your input history.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-white mb-3 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Independent Platform</span>
            </h2>
            <p>
              AuroDxb operates independently from YouTube, Google, and Alphabet Inc. Our goal is to serve independent video creators with transparent, accessible utilities.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 px-8 font-semibold text-white shadow-glow-sm hover:brightness-110 transition-all text-sm"
          >
            <span>Explore 9 Free Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
