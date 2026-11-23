import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts a YouTube Video ID from various URL formats
 * (e.g. watch?v=..., youtu.be/..., shorts/..., embed/...)
 */
export function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  const cleaned = url.trim();

  // Pattern matches:
  // - youtube.com/watch?v=VIDEO_ID
  // - youtu.be/VIDEO_ID
  // - youtube.com/shorts/VIDEO_ID
  // - youtube.com/embed/VIDEO_ID
  // - raw 11-char ID
  const patterns = [
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = cleaned.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}
