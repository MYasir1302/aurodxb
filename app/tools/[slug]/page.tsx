import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight, Sparkles, ArrowLeft } from "lucide-react";
import { TOOLS, getToolBySlug } from "@/lib/tools-data";
import { ToolLayout } from "@/components/ToolLayout";
import { ToolCard } from "@/components/ToolCard";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found | AuroDxb",
    };
  }

  return {
    title: `${tool.name} | AuroDxb`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} | AI YouTube Tool - AuroDxb`,
      description: tool.description,
      url: `https://aurodxb.com/tools/${tool.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} | AuroDxb`,
      description: tool.description,
    },
  };
}

export default async function ToolDetailPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  // Get 3 related tools (excluding current)
  const relatedTools = TOOLS.filter(
    (t) => t.slug !== tool.slug && (t.category === tool.category || !t.isPro)
  ).slice(0, 3);

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <Link href="/tools" className="hover:text-white transition-colors">
            Tools
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-gray-200 font-medium truncate">{tool.name}</span>
        </nav>

        {/* Core Tool Runner */}
        <ToolLayout tool={tool} />

        {/* Related Tools Strip */}
        {relatedTools.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  More Tools You Might Like
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Explore other AI utilities tailored for YouTube channel growth.
                </p>
              </div>
              <Link
                href="/tools"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Browse All Tools &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((relTool) => (
                <ToolCard key={relTool.slug} tool={relTool} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
