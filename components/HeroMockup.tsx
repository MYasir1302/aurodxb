"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Copy, Check, Play, Zap, ArrowRight } from "lucide-react";

export function HeroMockup() {
  const [activeTab, setActiveTab] = useState<"titles" | "script" | "thumb">("titles");
  const [copied, setCopied] = useState(false);

  const mockData = {
    titles: [
      "I Built a Full-Stack AI App in 48 Hours (Here's What Happened)",
      "Stop Learning Python in 2025: Do This Instead",
      "Why 95% of Micro-SaaS Founders Fail (And the 5% Who Win)",
    ],
    script: `SPEAKER [0:00]: "Most developers think you need 6 months and $10,000 to launch a software product. Today, I'm going to prove that you can build, deploy, and get your first paying user before Sunday evening..."`,
    thumb: ["$0 TO $5,000", "I QUIT?", "THE SECRET"],
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto mt-12 w-full max-w-4xl">
      {/* Decorative Glow Blobs */}
      <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-violet-600/25 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none" />

      {/* Main Mockup Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F1A]/90 p-5 backdrop-blur-xl shadow-2xl md:p-7"
      >
        {/* Mockup Window Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-gray-400">
              aurodxb.com/ai-engine
            </span>
          </div>

          <div className="flex items-center space-x-1.5 rounded-lg bg-black/40 p-1 border border-white/5 text-xs">
            <button
              onClick={() => setActiveTab("titles")}
              className={`rounded-md px-3 py-1 font-medium transition-colors ${
                activeTab === "titles"
                  ? "bg-violet-600 text-white shadow-glow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Titles (10x CTR)
            </button>
            <button
              onClick={() => setActiveTab("script")}
              className={`rounded-md px-3 py-1 font-medium transition-colors ${
                activeTab === "script"
                  ? "bg-violet-600 text-white shadow-glow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Retention Hook
            </button>
            <button
              onClick={() => setActiveTab("thumb")}
              className={`rounded-md px-3 py-1 font-medium transition-colors ${
                activeTab === "thumb"
                  ? "bg-violet-600 text-white shadow-glow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Thumb Text
            </button>
          </div>
        </div>

        {/* Mock Prompt Input Bar */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="truncate">
              Topic: <strong className="text-white">How I Built a Profitable AI SaaS in 48h</strong>
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center space-x-1 rounded-md bg-cyan-500/10 px-2 py-0.5 text-[11px] font-semibold text-cyan-300">
            <Zap className="w-3 h-3 text-cyan-400" />
            <span>0.8s generation</span>
          </span>
        </div>

        {/* Dynamic Mockup Body */}
        <div className="mt-5 min-h-[140px] rounded-xl border border-white/5 bg-black/30 p-4">
          {activeTab === "titles" && (
            <div className="space-y-2.5">
              {mockData.titles.map((title, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg bg-white/[0.03] p-2.5 text-xs sm:text-sm text-gray-200 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-600/30 text-[10px] font-bold text-violet-300">
                      {i + 1}
                    </span>
                    <span className="truncate font-medium">{title}</span>
                  </div>
                  <span className="hidden sm:inline-block shrink-0 rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                    High CTR
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "script" && (
            <div className="space-y-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <div className="flex items-center space-x-2 text-violet-400 font-mono text-xs">
                <span>[0:00 - 0:15 INTRO RETENTION HOOK]</span>
              </div>
              <p className="italic bg-white/[0.02] p-3 rounded-lg border border-white/5">
                {mockData.script}
              </p>
              <div className="text-[11px] text-gray-400 flex items-center space-x-1">
                <Check className="w-3 h-3 text-cyan-400" />
                <span>Paced with dopamine reset at 0:45 mark</span>
              </div>
            </div>
          )}

          {activeTab === "thumb" && (
            <div className="grid grid-cols-3 gap-3 py-2">
              {mockData.thumb.map((text, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 text-center"
                >
                  <span className="font-heading font-black tracking-wider text-base sm:text-lg text-cyan-300">
                    {text}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1">High Contrast</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info strip */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400 pt-2">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI Ready for All YouTube Categories</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy sample</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
