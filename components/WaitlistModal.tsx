"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Sparkles, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { useUser } from "./UserContext";

export function WaitlistModal() {
  const { isWaitlistModalOpen, closeWaitlistModal, waitlistPlan } = useUser();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isWaitlistModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, plan: waitlistPlan }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit.");
      }

      setSuccess(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#7C3AED", "#06B6D4", "#FF2D55", "#FFFFFF"],
        });
      } catch {
        // ignore if canvas not supported
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setEmail("");
    setError(null);
    closeWaitlistModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0F0F1A] p-6 shadow-2xl md:p-8"
        >
          {/* Subtle Top Glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!success ? (
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Coming Soon</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Join the {waitlistPlan} Waitlist
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Pro creator tools are launching soon. Enter your email address to be notified the moment access opens.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Your Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="creator@gmail.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-2.5">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 px-4 font-semibold text-white shadow-glow-sm hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving your spot...</span>
                    </>
                  ) : (
                    <>
                      <span>Join Pro Waitlist</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-gray-500">
                No spam. We will only email you regarding Pro launch updates.
              </p>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 mb-4 shadow-glow-cyan">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                We&apos;ll notify <span className="text-white font-medium">{email}</span> as soon as Pro creator tools are live.
              </p>
              <button
                onClick={handleClose}
                className="w-full rounded-xl bg-white/10 py-3 px-4 text-sm font-medium text-white hover:bg-white/20 transition-all"
              >
                Continue to Free Tools
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
