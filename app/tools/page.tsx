"use client";

import React, { useState, useMemo } from "react";
import { Search, Sparkles, Crown, Filter, X } from "lucide-react";
import { TOOLS, CATEGORIES } from "@/lib/tools-data";
import { ToolCard } from "@/components/ToolCard";
import { ToolCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function ToolsDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tierFilter, setTierFilter] = useState<"all" | "free" | "pro">("all");
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>("All");

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      // Tier filter
      if (tierFilter === "free" && tool.isPro) return false;
      if (tierFilter === "pro" && !tool.isPro) return false;

      // Category filter
      if (selectedCategory !== "All" && tool.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = tool.name.toLowerCase().includes(query);
        const matchesDesc = tool.description.toLowerCase().includes(query);
        const matchesCat = tool.category.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCat;
      }

      return true;
    });
  }, [searchQuery, tierFilter, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setTierFilter("all");
    setSelectedCategory("All");
  };

  const freeCount = TOOLS.filter((t) => !t.isPro).length;
  const proCount = TOOLS.filter((t) => t.isPro).length;

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>16 AI YouTube Tools</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Explore Creator Tools
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            From high-CTR titles and tag optimization to full video scripts and channel audits. Filter by capability or search directly.
          </p>
        </div>

        {/* Controls: Search + Tier Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools by name or purpose..."
                className="w-full rounded-xl border border-white/10 bg-[#0F0F1A] py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Tier Filter Tabs */}
            <div className="inline-flex items-center rounded-xl border border-white/10 bg-[#0F0F1A] p-1 self-start md:self-auto">
              <button
                onClick={() => setTierFilter("all")}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all",
                  tierFilter === "all"
                    ? "bg-white/10 text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                )}
              >
                All Tools ({TOOLS.length})
              </button>
              <button
                onClick={() => setTierFilter("free")}
                className={cn(
                  "flex items-center space-x-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all",
                  tierFilter === "free"
                    ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30"
                    : "text-gray-400 hover:text-white"
                )}
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Free ({freeCount})</span>
              </button>
              <button
                onClick={() => setTierFilter("pro")}
                className={cn(
                  "flex items-center space-x-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all",
                  tierFilter === "pro"
                    ? "bg-violet-600/30 text-violet-300 font-semibold border border-violet-500/40"
                    : "text-gray-400 hover:text-white"
                )}
              >
                <Crown className="w-3 h-3 text-yellow-400" />
                <span>Pro ({proCount})</span>
              </button>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-gray-500 mr-1 flex items-center space-x-1">
              <Filter className="w-3 h-3" />
              <span>Category:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-lg px-3 py-1 text-xs transition-all",
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-glow-sm"
                    : "bg-[#0F0F1A] border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Clear */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
          <span>
            Showing <strong className="text-white">{filteredTools.length}</strong> tools
          </span>
          {(searchQuery || tierFilter !== "all" || selectedCategory !== "All") && (
            <button
              onClick={clearFilters}
              className="text-cyan-400 hover:text-cyan-300 underline font-medium"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 bg-[#0F0F1A] p-12 text-center">
            <Search className="w-8 h-8 text-gray-500 mx-auto mb-3" />
            <h3 className="font-heading text-lg font-bold text-white mb-1">
              No matching tools found
            </h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto mb-4">
              We couldn&apos;t find any tools matching &ldquo;{searchQuery}&rdquo;. Try another keyword or clear your filters.
            </p>
            <button
              onClick={clearFilters}
              className="rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
