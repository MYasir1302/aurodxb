"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Zap, Crown, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { useUser } from "./UserContext";

export function UpgradeModal() {
  const { isUpgradeModalOpen, closeUpgradeModal, isPro, setIsPro, openWaitlistModal } =
    useUser();

  if (!isUpgradeModalOpen) return null;

  const handleEnableDemoPro = () => {
    setIsPro(true);
    closeUpgradeModal();
  };

  const handleJoinWaitlist = () => {
    closeUpgradeModal();
    openWaitlistModal("Pro Creator ($19/mo)");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeUpgradeModal}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0F0F1A] p-6 shadow-2xl shadow-purple-900/40 md:p-8"
        >
          {/* Subtle Top Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-72 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/20 blur-3xl" />

          {/* Close button */}
          <button
            onClick={closeUpgradeModal}
            className="absolute top-4 right-4 rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-glow-sm">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="inline-block rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-violet-300">
                AuroDxb Pro
              </span>
              <h3 className="font-heading text-2xl font-bold text-white">
                Unlock Pro Creator Tools
              </h3>
            </div>
          </div>

          <p className="text-sm text-gray-300 mb-6">
            Supercharge your YouTube growth with full-length video scripts, 30-day publishing roadmaps, competitor content gap audits, and unrestricted AI generation.
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mb-6">
            {[
              "Full 8-15 minute retention-engineered video scripts",
              "10-in-1 viral Shorts script packs",
              "30-day automated publishing calendar",
              "Deep channel bottleneck diagnostic & 90-day growth plans",
              "Competitor content gap analysis & breakout keyword clusters",
              "Priority Gemini Flash generation speed with zero wait limits",
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-3 text-sm text-gray-200">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                  <Check className="w-3 h-3" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleJoinWaitlist}
              className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 py-3.5 px-4 font-semibold text-white shadow-glow-md hover:brightness-110 active:scale-[0.99] transition-all"
            >
              <span>Join Pro Priority Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Instant Demo Mode Toggle */}
            <button
              onClick={handleEnableDemoPro}
              className="w-full flex items-center justify-center space-x-2 rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all"
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>
                {isPro
                  ? "Pro Mode Active! (Click to close)"
                  : "Enable 1-Click Pro Demo Mode (Free Preview)"}
              </span>
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>No credit card required for preview mode.</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
