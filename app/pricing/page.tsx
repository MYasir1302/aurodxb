import React from "react";
import type { Metadata } from "next";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description:
    "Explore transparent pricing for AuroDxb. Access 9 free YouTube tools with zero login, or join the waitlist for Pro creator tools.",
  alternates: {
    canonical: "https://www.aurodxb.com/pricing",
  },
  openGraph: {
    title: "Pricing & Plans | AuroDxb",
    description: "Explore transparent pricing for AuroDxb. Access 9 free YouTube tools with zero login, or join the waitlist for Pro creator tools.",
    url: "https://www.aurodxb.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="py-8">
      {/* Reusable Pricing Section with Full Comparison Table */}
      <PricingSection showComparison={true} />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
