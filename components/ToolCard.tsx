"use client";

import React from "react";
import Link from "next/link";
import { Lock, ArrowUpRight, Crown, Sparkles } from "lucide-react";
import { ToolDefinition } from "@/lib/types";
import { DynamicIcon } from "./DynamicIcon";
import { useUser } from "./UserContext";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: ToolDefinition;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { isPro, openUpgradeModal } = useUser();
  const isLocked = tool.isPro && !isPro;

  const handleClick = (e: React.MouseEvent) => {
    if (isLocked) {
      e.preventDefault();
      openUpgradeModal();
    }
  };

  return (
    <Link
      href={`/tools/${tool.slug}`}
      onClick={handleClick}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300",
        tool.isPro
          ? "border-violet-500/25 bg-[#0F0F1A] hover:border-violet-400/50 hover:shadow-pro-card"
          : "border-white/10 bg-[#0F0F1A] hover:border-cyan-500/40 hover:shadow-glow-cyan"
      )}
    >
      {/* Background Subtle Gradient Blobs on Hover */}
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-70",
          tool.isPro
            ? "bg-violet-600/20 opacity-30"
            : "bg-cyan-500/15 opacity-20"
        )}
      />

      {/* Top Bar: Icon + Badge */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105",
              tool.isPro
                ? "bg-gradient-to-br from-violet-600/30 to-purple-800/30 text-violet-400 border border-violet-500/30 group-hover:border-violet-400/60"
                : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-400/40"
            )}
          >
            <DynamicIcon name={tool.iconName} className="h-6 w-6" />
          </div>

          <div className="flex items-center space-x-2">
            {tool.isPro ? (
              <span className="inline-flex items-center space-x-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-300">
                <Crown className="w-3 h-3 text-yellow-400" />
                <span>PRO</span>
              </span>
            ) : (
              <span className="inline-flex items-center space-x-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-300">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>FREE</span>
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
          <span>{tool.name}</span>
          <ArrowUpRight className="w-4 h-4 text-gray-500 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-cyan-400" />
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-2">
          {tool.description}
        </p>
      </div>

      {/* Bottom Bar: Category + Action status */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5 text-xs">
        <span className="rounded-md bg-white/5 px-2.5 py-1 text-gray-400">
          {tool.category}
        </span>

        {isLocked ? (
          <div className="flex items-center space-x-1 text-violet-400 font-medium">
            <Lock className="w-3.5 h-3.5" />
            <span>Unlock Pro</span>
          </div>
        ) : (
          <span className="text-gray-400 group-hover:text-white transition-colors">
            Launch Tool &rarr;
          </span>
        )}
      </div>
    </Link>
  );
}
