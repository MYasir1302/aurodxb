"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Copy,
  Check,
  RefreshCw,
  Download,
  Sparkles,
  Lock,
  Crown,
  AlertCircle,
  Zap,
  Info,
  Loader2,
  Share2,
} from "lucide-react";
import { ToolDefinition } from "@/lib/types";
import { DynamicIcon } from "./DynamicIcon";
import { useUser } from "./UserContext";
import { ThumbnailDownloaderPanel } from "./ThumbnailDownloaderPanel";
import { cn } from "@/lib/utils";

interface ToolLayoutProps {
  tool: ToolDefinition;
}

export function ToolLayout({ tool }: ToolLayoutProps) {
  const {
    isPro,
    dailyUsage,
    maxFreeDaily,
    incrementUsage,
    openUpgradeModal,
    setIsPro,
  } = useUser();

  // Initialize form state from tool fields
  const [inputs, setInputs] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    tool.fields.forEach((field) => {
      initial[field.id] = field.defaultValue || "";
    });
    return initial;
  });

  const [output, setOutput] = useState<string>(tool.sampleOutput || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSampleMode, setIsSampleMode] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState<string | null>(null);

  // If this is the thumbnail downloader client tool
  if (tool.isClientOnly) {
    return <ThumbnailDownloaderPanel />;
  }

  const isLocked = tool.isPro && !isPro;

  const handleInputChange = (id: string, value: any) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (isLocked) {
      openUpgradeModal();
      return;
    }

    if (!isPro) {
      const allowed = incrementUsage();
      if (!allowed) {
        setError(
          `You've reached your free daily limit of ${maxFreeDaily} AI generations. Upgrade to Pro for unlimited generation access!`
        );
        return;
      }
    }

    setLoading(true);
    setError(null);
    setNoticeMessage(null);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool: tool.slug,
          inputs,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate AI output.");
      }

      setOutput(data.text);
      if (data.isSample) {
        setIsSampleMode(true);
        setNoticeMessage(data.warning);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while generating content.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${tool.slug}-result.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* LEFT PANEL: Inputs & Configuration */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl",
                  tool.isPro
                    ? "bg-violet-600/20 text-violet-400 border border-violet-500/30"
                    : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                )}
              >
                <DynamicIcon name={tool.iconName} className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs text-gray-400">{tool.category}</span>
                <h1 className="font-heading text-lg font-bold text-white">
                  {tool.name}
                </h1>
              </div>
            </div>

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

          <p className="text-xs text-gray-400 mb-6 leading-relaxed">
            {tool.description}
          </p>

          {/* Form */}
          <form onSubmit={handleGenerate} className="space-y-4">
            {tool.fields.map((field) => (
              <div key={field.id} className="space-y-1.5">
                <label className="block text-xs font-medium text-gray-300">
                  {field.label}{" "}
                  {field.required && <span className="text-rose-400">*</span>}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    rows={4}
                    required={field.required}
                    value={inputs[field.id] || ""}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                  />
                ) : field.type === "select" ? (
                  <select
                    value={inputs[field.id] || ""}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#141424] p-3 text-sm text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                  >
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type === "number" ? "number" : "text"}
                    required={field.required}
                    value={inputs[field.id] || ""}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                  />
                )}

                {field.helpText && (
                  <p className="text-[11px] text-gray-500">{field.helpText}</p>
                )}
              </div>
            ))}

            {/* Error Message */}
            {error && (
              <div className="flex items-start space-x-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Generate Button */}
            {isLocked ? (
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={openUpgradeModal}
                  className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 py-3.5 px-4 font-semibold text-white shadow-glow-md hover:brightness-110 transition-all"
                >
                  <Lock className="w-4 h-4 text-yellow-300" />
                  <span>Unlock Pro to Generate</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPro(true)}
                  className="w-full text-center text-xs text-cyan-400 hover:text-cyan-300 py-1 transition-colors"
                >
                  ⚡ Click here to activate 1-click Pro Demo Mode
                </button>
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "w-full flex items-center justify-center space-x-2 rounded-xl py-3.5 px-4 font-semibold text-white transition-all shadow-glow-sm",
                  tool.isPro
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:brightness-110"
                    : "bg-gradient-to-r from-violet-600 to-cyan-500 hover:brightness-110",
                  loading && "opacity-60 cursor-not-allowed"
                )}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Gemini is Crafting Output...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate with AI</span>
                  </>
                )}
              </button>
            )}
          </form>

          {/* Usage Counter for Free users */}
          {!isPro && (
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center space-x-1.5">
                <Info className="w-3.5 h-3.5 text-gray-500" />
                <span>Daily Free Generations:</span>
              </span>
              <span className="font-semibold text-cyan-400">
                {dailyUsage} / {maxFreeDaily} used
              </span>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL: Output & Actions */}
      <div className="lg:col-span-7 space-y-6">
        <div className="relative min-h-[500px] flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0F0F1A] p-6 shadow-xl">
          {/* Top Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span className="font-heading font-bold text-sm text-white">
                Generated Output
              </span>
              {tool.isPro && (
                <span className="rounded-md bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300">
                  Pro Engine
                </span>
              )}
            </div>

            {/* Actions: Copy, Regenerate, Download */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopy}
                disabled={!output || loading}
                className="flex items-center space-x-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all disabled:opacity-40"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleGenerate()}
                disabled={loading}
                className="flex items-center space-x-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all disabled:opacity-40"
                title="Regenerate with current inputs"
              >
                <RefreshCw className={cn("w-3.5 h-3.5", loading && "animate-spin")} />
                <span>Regenerate</span>
              </button>

              <button
                onClick={handleDownload}
                disabled={!output || loading}
                className="flex items-center space-x-1.5 rounded-lg bg-gradient-to-r from-violet-600/30 to-cyan-500/30 border border-white/10 px-3 py-1.5 text-xs font-medium text-white hover:brightness-125 transition-all disabled:opacity-40"
                title="Download as Markdown"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Demo Notice Banner if Gemini API Key not set */}
          {noticeMessage && (
            <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
              {noticeMessage}
            </div>
          )}

          {/* Output Content Area */}
          <div className="my-4 flex-1">
            {loading ? (
              // Loading Skeleton State
              <div className="space-y-4 py-8">
                <div className="flex items-center space-x-3 text-sm text-cyan-400 mb-6">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="animate-pulse">
                    Synthesizing response with Gemini Flash...
                  </span>
                </div>
                <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-full animate-pulse rounded bg-white/5" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-white/5" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-white/5" />
                <div className="mt-6 h-5 w-1/2 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-full animate-pulse rounded bg-white/5" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-white/5" />
              </div>
            ) : output ? (
              // Clean Markdown Content Output
              <div className="prose-dark overflow-x-auto whitespace-pre-wrap font-sans text-sm leading-relaxed">
                {output}
              </div>
            ) : (
              // Empty State
              <div className="flex h-full flex-col items-center justify-center py-16 text-center text-gray-500">
                <Sparkles className="w-12 h-12 text-gray-600 mb-3" />
                <p className="text-sm font-medium text-gray-400">
                  Ready to generate
                </p>
                <p className="text-xs text-gray-500 max-w-xs mt-1">
                  Fill in the options on the left and click "Generate with AI" to generate high-performing YouTube assets.
                </p>
              </div>
            )}
          </div>

          {/* Pro Lock Overlay if tool is Pro and user not pro */}
          {isLocked && (
            <div className="mt-4 rounded-xl border border-violet-500/30 bg-violet-950/40 p-4 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-3 text-left">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-600/30 text-violet-300">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Viewing Pro Sample Preview
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    Unlock Pro to generate personalized scripts and calendars.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={openUpgradeModal}
                  className="rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-500 transition-colors shadow-glow-sm"
                >
                  Unlock Pro
                </button>
                <button
                  onClick={() => setIsPro(true)}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-gray-300 hover:bg-white/10"
                >
                  1-Click Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
