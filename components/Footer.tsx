import React from "react";
import Link from "next/link";
import { Play, Sparkles, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070D] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-[#FF2D55] p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#07070D]">
                  <Play className="h-3.5 w-3.5 fill-[#FF2D55] text-[#FF2D55] ml-0.5" />
                </div>
              </div>
              <span className="font-heading text-lg font-bold text-white">
                Auro<span className="text-cyan-400">Dxb</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              The premier AI-powered creative toolkit for YouTube creators, scriptwriters, and media agencies scaling organic channel reach.
            </p>
            <div className="text-xs text-gray-400">
              ⚡ Powered by Gemini 2.5 Flash
            </div>
          </div>

          {/* Free Tools Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Free YouTube Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tools/youtube-title-generator" className="hover:text-cyan-400 transition-colors">
                  Title Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/description-generator" className="hover:text-cyan-400 transition-colors">
                  Description Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/tags-generator" className="hover:text-cyan-400 transition-colors">
                  Tags & Keyword Extractor
                </Link>
              </li>
              <li>
                <Link href="/tools/thumbnail-downloader" className="hover:text-cyan-400 transition-colors">
                  Thumbnail Downloader HD
                </Link>
              </li>
              <li>
                <Link href="/tools/video-idea-generator" className="hover:text-cyan-400 transition-colors">
                  Video Idea Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Pro Tools Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Pro Suite
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tools/video-script-writer" className="hover:text-violet-400 transition-colors">
                  Full Video Script Writer
                </Link>
              </li>
              <li>
                <Link href="/tools/content-calendar-generator" className="hover:text-violet-400 transition-colors">
                  30-Day Content Calendar
                </Link>
              </li>
              <li>
                <Link href="/tools/channel-audit" className="hover:text-violet-400 transition-colors">
                  Channel Audit & Growth Plan
                </Link>
              </li>
              <li>
                <Link href="/tools/shorts-script-pack" className="hover:text-violet-400 transition-colors">
                  10-in-1 Shorts Script Pack
                </Link>
              </li>
              <li>
                <Link href="/tools/competitor-analysis" className="hover:text-violet-400 transition-colors">
                  Competitor Analysis Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About AuroDxb
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left">
            <span className="font-medium text-gray-300">Disclaimer:</span> AuroDxb is an independent creator utility and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with YouTube, Google LLC, or Alphabet Inc.
          </p>
          <p className="shrink-0">
            &copy; {new Date().getFullYear()} AuroDxb (aurodxb.com). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
