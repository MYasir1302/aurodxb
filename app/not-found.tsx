import React from "react";
import Link from "next/link";
import { Play, Sparkles, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        {/* Glow behind 404 */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-violet-600/30 blur-3xl rounded-full" />
          <h1 className="relative font-heading text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
            404
          </h1>
        </div>

        <h2 className="font-heading text-2xl font-bold text-white mb-3">
          Channel Signal Lost
        </h2>
        <p className="text-sm text-gray-400 mb-8 leading-relaxed">
          The creator tool or page you are looking for does not exist or has been moved to a new frequency.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 px-6 font-semibold text-white shadow-glow-sm hover:brightness-110 transition-all text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/tools"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl border border-white/10 bg-white/5 py-3 px-6 font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all text-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Browse All Tools</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
