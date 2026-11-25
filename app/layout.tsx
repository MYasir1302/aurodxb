import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UserProvider } from "@/components/UserContext";
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
  metadataBase: new URL("https://www.aurodxb.com"),
  title: {
    default: "AuroDxb | AI-Powered YouTube Tools for Creators",
    template: "%s | AuroDxb",
  },
  description:
    "Free AI tools for YouTube creators. Generate click-worthy titles, SEO descriptions, tags, and download 1080p thumbnails with zero login required.",
  keywords: [
    "YouTube AI tools",
    "YouTube Title Generator",
    "YouTube SEO Tags",
    "Thumbnail Downloader",
    "Video Description Generator",
    "AuroDxb",
  ],
  authors: [{ name: "AuroDxb Team", url: "https://www.aurodxb.com" }],
  creator: "AuroDxb",
  publisher: "AuroDxb",
  alternates: {
    canonical: "https://www.aurodxb.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aurodxb.com",
    title: "AuroDxb | AI-Powered YouTube Tools for Creators",
    description:
      "Free AI tools for YouTube creators. Generate click-worthy titles, SEO descriptions, tags, and download 1080p thumbnails.",
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
      "Free AI tools for YouTube creators. Titles, SEO descriptions, tags, and 1080p thumbnails.",
    images: ["/og-image.png"],
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
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#07070D] text-gray-100 min-h-screen flex flex-col`}
      >
        <UserProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WaitlistModal />
        </UserProvider>
      </body>
    </html>
  );
}
