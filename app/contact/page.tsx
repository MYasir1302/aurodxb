"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Feature Request / Feedback",
    message: "",
    botField: "", // Honeypot
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Support & Inquiries</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact the AuroDxb Team
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Have a question, feedback, or custom feature request for your YouTube channel? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0F0F1A] p-6 sm:p-10 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field - invisible to genuine users */}
              <div aria-hidden="true" style={{ display: "none" }}>
                <label htmlFor="website-field">Leave empty</label>
                <input
                  id="website-field"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.botField}
                  onChange={(e) =>
                    setFormData({ ...formData, botField: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Alex Rivera"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@creator.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Subject / Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#141424] py-3 px-4 text-sm text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                >
                  <option value="Feature Request">Feature Request / Tool Suggestion</option>
                  <option value="Pro Plan Question">Pro Plan & Waitlist Question</option>
                  <option value="Partnership">Agency / Creator Partnership</option>
                  <option value="Bug Report">Technical Bug Report</option>
                  <option value="General Support">General Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="How can we help make your YouTube content workflow smoother?"
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                />
              </div>

              {error && (
                <div className="flex items-center space-x-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 px-6 font-semibold text-white shadow-glow-sm hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending your message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 mb-4 shadow-glow-cyan">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Message Sent Successfully
              </h3>
              <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
                Thanks for reaching out, {formData.name}! Our team will respond to <strong className="text-white">{formData.email}</strong> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    subject: "Feature Request / Feedback",
                    message: "",
                    botField: "",
                  });
                }}
                className="rounded-xl bg-white/10 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition-all"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Direct Email note */}
        <div className="mt-8 text-center text-xs text-gray-400">
          Direct inquiries:{" "}
          <a
            href="mailto:support@aurodxb.com"
            className="text-cyan-400 hover:underline"
          >
            support@aurodxb.com
          </a>
        </div>
      </div>
    </div>
  );
}
