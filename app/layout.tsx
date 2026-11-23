import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UserProvider } from "@/components/UserContext";
import { UpgradeModal } from "@/components/UpgradeModal";
import { WaitlistModal } from "@/components/WaitlistModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurodxb.com"),
  title: {
    default: "AuroDxb | AI-Powered YouTube Tools for Creators",
    template: "%s | AuroDxb",
  },
  description:
    "Grow your YouTube channel with high-CTR titles, SEO descriptions, viral tags, 1080p thumbnail downloads, and full retention-engineered video scripts powered by AI.",
  keywords: [
    "YouTube AI tools",
    "YouTube Title Generator",
    "YouTube Script Writer",
    "YouTube SEO",
    "Thumbnail Downloader",
    "YouTube Shorts Script",
    "Channel Audit",
    "AuroDxb",
  ],
  authors: [{ name: "AuroDxb Team", url: "https://aurodxb.com" }],
  creator: "AuroDxb",
  publisher: "AuroDxb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aurodxb.com",
    title: "AuroDxb | AI-Powered YouTube Tools for Creators",
    description:
      "Grow your YouTube channel with high-CTR titles, viral tags, SEO descriptions, and full retention video scripts.",
    siteName: "AuroDxb",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AuroDxb - AI Tools for YouTube Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuroDxb | AI-Powered YouTube Tools for Creators",
    description:
      "High-CTR titles, SEO descriptions, thumbnail extraction, and full YouTube scripts.",
    images: ["/og-image.png"],
    creator: "@aurodxb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AuroDxb",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Comprehensive AI toolkit for YouTube creators including title generator, script writer, tags optimizer, and thumbnail downloader.",
    url: "https://aurodxb.com",
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#07070D] text-gray-100 min-h-screen flex flex-col`}
      >
        <UserProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <UpgradeModal />
          <WaitlistModal />
        </UserProvider>
      </body>
    </html>
  );
}
