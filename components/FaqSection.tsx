"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Is AuroDxb completely free to use?",
    a: "Yes! All 9 Free tools (including Title Generator, Description Generator, Tag Extractor, and 1080p Thumbnail Downloader) are 100% free with no account or credit card required. You get a generous daily quota for AI generation.",
  },
  {
    q: "What makes AuroDxb different from generic ChatGPT?",
    a: "Generic chatbots write bland, robotic essays. AuroDxb's prompts are crafted specifically for the YouTube recommendation engine, viewer retention curves, and high-CTR psychology modeled after top creators like MrBeast and Ali Abdaal. Plus, tools like our Thumbnail Downloader require zero AI and run instantly.",
  },
  {
    q: "What is included in AuroDxb Pro?",
    a: "AuroDxb Pro unlocks full-length retention-engineered video scripts (8-15 min), automated 30-day content calendars, channel audit diagnostic reports, competitor content-gap blueprints, 10-in-1 viral Shorts scripts, and priority Gemini Flash speed with zero wait limits.",
  },
  {
    q: "Can I test Pro features right now?",
    a: "Absolutely! You can toggle 'Pro Mode' anytime using the switch in our navigation bar or modal to preview all premium tools and examine the output quality.",
  },
  {
    q: "Does using AI-generated metadata violate YouTube's terms?",
    a: "Not at all. YouTube encourages creator tools that assist with packaging, ideation, and descriptions. As long as your final content adheres to YouTube's Community Guidelines and avoids deceptive spam, using AI for title inspiration and SEO optimization is standard industry practice.",
  },
  {
    q: "How do I bring my own Gemini API Key?",
    a: "If you deploy AuroDxb yourself or run it locally, simply generate a free key from Google AI Studio (aistudio.google.com) and add it to your `.env.local` or Vercel Environment Variables as GEMINI_API_KEY. It takes under 60 seconds.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Everything you need to know about AuroDxb, our AI engine, and creator tools.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F1A] transition-all hover:border-white/20"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-t border-white/5 px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
