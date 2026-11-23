"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, ExternalLink, Sparkles, Check, AlertCircle } from "lucide-react";
import { extractYouTubeVideoId } from "@/lib/utils";

export function ThumbnailDownloaderPanel() {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const [videoId, setVideoId] = useState<string | null>("dQw4w9WgXcQ");
  const [copiedRes, setCopiedRes] = useState<string | null>(null);

  const handleExtract = (e: React.FormEvent) => {
    e.preventDefault();
    const id = extractYouTubeVideoId(url);
    if (id) {
      setVideoId(id);
    } else {
      alert("Please enter a valid YouTube video URL or ID.");
    }
  };

  const resolutions = [
    {
      title: "Maximum HD (1080p / 720p)",
      desc: "Best for archive and full crispness (1920x1080)",
      url: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "",
      badge: "Highest Quality",
      filename: `youtube-thumb-${videoId}-1080p.jpg`,
    },
    {
      title: "Standard Definition (SD)",
      desc: "Clean mid-res backup (640x480)",
      url: videoId ? `https://img.youtube.com/vi/${videoId}/sddefault.jpg` : "",
      badge: "Standard",
      filename: `youtube-thumb-${videoId}-sd.jpg`,
    },
    {
      title: "High Quality (HQ)",
      desc: "Standard YouTube preview crop (480x360)",
      url: videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "",
      badge: "HQ",
      filename: `youtube-thumb-${videoId}-hq.jpg`,
    },
    {
      title: "Medium Quality (MQ)",
      desc: "Compact mobile size (320x180)",
      url: videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : "",
      badge: "MQ",
      filename: `youtube-thumb-${videoId}-mq.jpg`,
    },
  ];

  const handleDownload = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback: open in new tab
      window.open(imageUrl, "_blank");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Left Input Panel */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-6">
          <h3 className="font-heading text-lg font-bold text-white mb-2">
            Extract YouTube Thumbnail
          </h3>
          <p className="text-xs text-gray-400 mb-6">
            Paste any YouTube video link or Shorts URL. We pull the original uncompressed images directly from YouTube servers.
          </p>

          <form onSubmit={handleExtract} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                YouTube URL or Video ID
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 px-4 font-semibold text-white shadow-glow-cyan hover:brightness-110 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Fetch All Thumbnail Sizes</span>
            </button>
          </form>

          <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs text-gray-400 space-y-2">
            <div className="font-semibold text-gray-300">Supported Formats:</div>
            <div>• standard watch: youtube.com/watch?v=...</div>
            <div>• short URL: youtu.be/...</div>
            <div>• vertical Shorts: youtube.com/shorts/...</div>
            <div>• raw 11-character video ID</div>
          </div>
        </div>
      </div>

      {/* Right Output Panel */}
      <div className="lg:col-span-7 space-y-6">
        {videoId ? (
          <div className="space-y-6">
            {resolutions.map((res, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0F0F1A] p-5 transition-all hover:border-white/20"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-heading font-bold text-white text-base">
                        {res.title}
                      </span>
                      <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
                        {res.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{res.desc}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDownload(res.url, res.filename)}
                      className="flex items-center space-x-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-cyan-500 hover:text-black transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
                      title="Open full image in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Image Preview Box */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/60 border border-white/5">
                  <img
                    src={res.url}
                    alt={res.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // If maxresdefault is not available on older video, fallback or show notice
                      const target = e.currentTarget;
                      if (res.badge === "Highest Quality") {
                        target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#0F0F1A] p-12 text-center text-gray-400">
            <AlertCircle className="w-10 h-10 text-gray-500 mb-3" />
            <h4 className="font-heading text-lg font-bold text-white mb-1">
              No Video Selected
            </h4>
            <p className="text-sm max-w-sm">
              Paste a YouTube video URL on the left panel to instantly generate and download thumbnails in full HD resolution.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
