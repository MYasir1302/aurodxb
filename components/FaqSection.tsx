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
    q: "Is AuroDxb free to use?",
    a: "Yes. All 9 free tools (including the Title Generator, Description Generator, Tag Extractor, and HD Thumbnail Downloader) are completely free with no account or credit card required. Free tools include 10 generations per day.",
  },
  {
    q: "How is AuroDxb different from ChatGPT?",
    a: "AuroDxb provides specialized YouTube prompts and pre-configured output formats. You do not need to spend time prompt-engineering; each tool produces clean, copy-ready metadata and ideas immediately.",
  },
  {
    q: "What is included in AuroDxb Pro?",
    a: "AuroDxb Pro includes 7 tools launching soon: Full Video Script Writer, 30-Day Content Calendar, Channel Audit & Growth Plan, Competitor Analysis Assistant, Shorts Script Pack, Monetization Readiness Checker, and SEO Keyword Research Assistant.",
  },
  {
    q: "Can I test Pro tools right now?",
    a: "Not yet. Pro tools are launching soon. You can view the static sample output on any Pro tool page and join the waitlist to be notified when access opens.",
  },
  {
    q: "Does using AI-generated metadata violate YouTube's terms?",
    a: "AI-assisted metadata is allowed on YouTube, but creators remain responsible for their uploads. You must verify that your titles, descriptions, and tags are accurate, not deceptive, and fully comply with YouTube's Community Guidelines.",
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
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Clear, honest answers about AuroDxb, our tools, and upcoming Pro features.
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
                  type="button"
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
