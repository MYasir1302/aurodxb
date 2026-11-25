"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  remainingDaily: number;
  setRemainingDaily: (count: number) => void;
  isWaitlistModalOpen: boolean;
  waitlistPlan: string;
  openWaitlistModal: (plan?: string) => void;
  closeWaitlistModal: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [remainingDaily, setRemainingDaily] = useState<number>(10);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [waitlistPlan, setWaitlistPlan] = useState("Pro Creator");

  // Fetch true server-side daily generation limit on initial page mount
  useEffect(() => {
    async function fetchServerLimit() {
      try {
        const res = await fetch("/api/gemini");
        if (res.ok) {
          const data = await res.json();
          if (typeof data.remainingDaily === "number") {
            setRemainingDaily(data.remainingDaily);
          }
        }
      } catch {
        // Fallback default is 10
      }
    }
    fetchServerLimit();
  }, []);

  const openWaitlistModal = (plan = "Pro Creator") => {
    setWaitlistPlan(plan);
    setIsWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <UserContext.Provider
      value={{
        remainingDaily,
        setRemainingDaily,
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
