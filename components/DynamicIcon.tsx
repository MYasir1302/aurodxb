"use client";

import React from "react";
import {
  Sparkles,
  FileText,
  Tags,
  Hash,
  Lightbulb,
  Image as ImageIcon,
  Users,
  Download,
  MessageSquare,
  Video,
  Calendar,
  BarChart3,
  Crosshair,
  Zap,
  DollarSign,
  Search,
  Lock,
  Check,
  ChevronRight,
  Flame,
  Wand2,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  FileText,
  Tags,
  Hash,
  Lightbulb,
  Image: ImageIcon,
  Users,
  Download,
  MessageSquare,
  Video,
  Calendar,
  BarChart3,
  Crosshair,
  Zap,
  DollarSign,
  Search,
  Lock,
  Check,
  ChevronRight,
  Flame,
  Wand2,
  HelpCircle,
};

export function DynamicIcon({ name, className = "w-5 h-5" }: DynamicIconProps) {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} />;
}
