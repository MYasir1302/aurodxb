import React from "react";
import Link from "next/link";
import { Play } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070D] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
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
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              AI-powered creator utilities for YouTube titles, SEO descriptions, tags, and thumbnails.
            </p>
            <div className="text-xs text-gray-400">
              Powered by Google Gemini
            </div>
          </div>

          {/* All 9 Free Tools Column (E6) */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider text-white mb-3 sm:mb-4">
              9 Free Tools
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
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
                  Tags Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/hashtag-generator" className="hover:text-cyan-400 transition-colors">
                  Hashtag Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/video-idea-generator" className="hover:text-cyan-400 transition-colors">
                  Video Idea Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/thumbnail-text-generator" className="hover:text-cyan-400 transition-colors">
                  Thumbnail Text Ideas
                </Link>
              </li>
              <li>
                <Link href="/tools/channel-name-generator" className="hover:text-cyan-400 transition-colors">
                  Channel Name Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/thumbnail-downloader" className="hover:text-cyan-400 transition-colors">
                  Thumbnail Downloader HD
                </Link>
              </li>
              <li>
                <Link href="/tools/comment-reply-generator" className="hover:text-cyan-400 transition-colors">
                  Comment Reply Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* All 7 Pro Tools Column (E6: Marked Soon) */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Pro Tools (Soon)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/tools/video-script-writer" className="hover:text-violet-400 transition-colors flex items-center justify-between">
                  <span>Video Script Writer</span>
                  <span className="text-[10px] text-violet-400 font-mono">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/tools/content-calendar-generator" className="hover:text-violet-400 transition-colors flex items-center justify-between">
                  <span>30-Day Calendar</span>
                  <span className="text-[10px] text-violet-400 font-mono">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/tools/channel-audit" className="hover:text-violet-400 transition-colors flex items-center justify-between">
                  <span>Channel Audit Plan</span>
                  <span className="text-[10px] text-violet-400 font-mono">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/tools/competitor-analysis" className="hover:text-violet-400 transition-colors flex items-center justify-between">
                  <span>Competitor Analysis</span>
                  <span className="text-[10px] text-violet-400 font-mono">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/tools/shorts-script-pack" className="hover:text-violet-400 transition-colors flex items-center justify-between">
                  <span>Shorts Script Pack</span>
                  <span className="text-[10px] text-violet-400 font-mono">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/tools/monetization-readiness-checker" className="hover:text-violet-400 transition-colors flex items-center justify-between">
                  <span>Monetization Checker</span>
                  <span className="text-[10px] text-violet-400 font-mono">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/tools/seo-keyword-research" className="hover:text-violet-400 transition-colors flex items-center justify-between">
                  <span>SEO Keyword Research</span>
                  <span className="text-[10px] text-violet-400 font-mono">Soon</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
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
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left leading-relaxed max-w-2xl">
            <strong className="text-gray-300">Disclaimer:</strong> AuroDxb is an independent creator utility and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with YouTube, Google LLC, or Alphabet Inc.
          </p>
          <p className="shrink-0">
            &copy; {new Date().getFullYear()} AuroDxb (www.aurodxb.com).
          </p>
        </div>
      </div>
    </footer>
  );
}
