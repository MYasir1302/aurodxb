"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  isPro: boolean;
  togglePro: () => void;
  setIsPro: (value: boolean) => void;
  dailyUsage: number;
  maxFreeDaily: number;
  incrementUsage: () => boolean; // returns false if exceeded limit
  isUpgradeModalOpen: boolean;
  openUpgradeModal: () => void;
  closeUpgradeModal: () => void;
  isWaitlistModalOpen: boolean;
  waitlistPlan: string;
  openWaitlistModal: (plan?: string) => void;
  closeWaitlistModal: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const MAX_FREE_DAILY = 10;

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [isPro, setIsProState] = useState<boolean>(false);
  const [dailyUsage, setDailyUsage] = useState<number>(0);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [waitlistPlan, setWaitlistPlan] = useState("Pro Monthly");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedPro = localStorage.getItem("aurodxb_is_pro");
      if (storedPro === "true") {
        setIsProState(true);
      }

      // Check daily usage by date
      const today = new Date().toISOString().slice(0, 10);
      const storedUsageDate = localStorage.getItem("aurodxb_usage_date");
      const storedUsageCount = localStorage.getItem("aurodxb_usage_count");

      if (storedUsageDate === today && storedUsageCount) {
        setDailyUsage(parseInt(storedUsageCount, 10) || 0);
      } else {
        localStorage.setItem("aurodxb_usage_date", today);
        localStorage.setItem("aurodxb_usage_count", "0");
        setDailyUsage(0);
      }
    } catch {
      // Ignore storage errors
    }
    setHydrated(true);
  }, []);

  const setIsPro = (value: boolean) => {
    setIsProState(value);
    try {
      localStorage.setItem("aurodxb_is_pro", value ? "true" : "false");
    } catch {
      // ignore
    }
  };

  const togglePro = () => {
    setIsPro(!isPro);
  };

  const incrementUsage = (): boolean => {
    if (isPro) return true; // Pro users have unlimited access

    const today = new Date().toISOString().slice(0, 10);
    const newCount = dailyUsage + 1;

    if (newCount > MAX_FREE_DAILY) {
      return false; // Limit exceeded
    }

    setDailyUsage(newCount);
    try {
      localStorage.setItem("aurodxb_usage_date", today);
      localStorage.setItem("aurodxb_usage_count", newCount.toString());
    } catch {
      // ignore
    }
    return true;
  };

  const openUpgradeModal = () => setIsUpgradeModalOpen(true);
  const closeUpgradeModal = () => setIsUpgradeModalOpen(false);

  const openWaitlistModal = (plan = "Pro Monthly") => {
    setWaitlistPlan(plan);
    setIsWaitlistModalOpen(true);
  };
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

  return (
    <UserContext.Provider
      value={{
        isPro,
        togglePro,
        setIsPro,
        dailyUsage,
        maxFreeDaily: MAX_FREE_DAILY,
        incrementUsage,
        isUpgradeModalOpen,
        openUpgradeModal,
        closeUpgradeModal,
        isWaitlistModalOpen,
        waitlistPlan,
        openWaitlistModal,
        closeWaitlistModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
