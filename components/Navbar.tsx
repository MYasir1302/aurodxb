"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Play, Sparkles, Crown, Menu, X, ArrowUpRight, Zap } from "lucide-react";
import { useUser } from "./UserContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { isPro, togglePro, openUpgradeModal } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/tools", label: "All Tools" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-nav transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center space-x-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-[#FF2D55] p-0.5 shadow-glow-sm transition-transform group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#07070D]">
              <Play className="h-4 w-4 fill-[#FF2D55] text-[#FF2D55] ml-0.5" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all">
              Auro<span className="text-cyan-400">Dxb</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Quick Demo Pro Toggle */}
          <button
            onClick={togglePro}
            title="Toggle Pro status for testing"
            className={cn(
              "flex items-center space-x-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all border",
              isPro
                ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-300 shadow-glow-cyan"
                : "border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20"
            )}
          >
            <Zap className={cn("w-3.5 h-3.5", isPro ? "text-cyan-400 fill-cyan-400" : "")} />
            <span>Mode: {isPro ? "PRO Active" : "Free Tier"}</span>
          </button>

          {/* Upgrade / Pro CTA */}
          {isPro ? (
            <div className="flex items-center space-x-1.5 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-300">
              <Crown className="w-3.5 h-3.5 text-yellow-400" />
              <span>Pro Member</span>
            </div>
          ) : (
            <button
              onClick={openUpgradeModal}
              className="flex items-center space-x-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-glow-sm hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Crown className="w-4 h-4 text-yellow-300" />
              <span>Unlock Pro</span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={togglePro}
            className={cn(
              "p-1.5 rounded-lg border text-xs",
              isPro
                ? "border-cyan-500/40 text-cyan-300 bg-cyan-500/10"
                : "border-white/10 text-gray-400"
            )}
            title="Toggle Pro mode"
          >
            <Zap className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0F0F1A] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                togglePro();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-gray-200"
            >
              <span className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Simulate Pro Subscription</span>
              </span>
              <span className="font-semibold text-cyan-400">
                {isPro ? "Enabled" : "Disabled"}
              </span>
            </button>

            {!isPro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openUpgradeModal();
                }}
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white shadow-glow-sm"
              >
                <Crown className="w-4 h-4 text-yellow-300" />
                <span>Unlock Pro Features</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
