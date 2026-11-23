# AuroDxb (aurodxb.com) 🚀

> **Production-ready AI-powered YouTube growth platform for creators.**  
> Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and the Google Gemini API. Deploys seamlessly on Vercel with zero extra configuration.

---

## 🌟 Overview & Design Philosophy

**AuroDxb** is a modern dark-themed web platform engineered specifically for YouTube creators, scriptwriters, and media agencies. Unlike generic AI chatbots, every prompt and workflow in AuroDxb is tuned for the YouTube recommendation engine, viewer retention curves, and high-CTR psychology.

- **Theme**: Ultra-dark aesthetic (Background `#07070D`, card surfaces `#0F0F1A`, 1px borders `rgba(255,255,255,0.08)`).
- **Accents**: Electric violet (`#7C3AED`) to cyan (`#06B6D4`), accented by hot YouTube red (`#FF2D55`).
- **Typography**: Space Grotesk (headings) and Inter (body).
- **Micro-interactions**: Glassmorphism cards, glowing neon hover states, animated gradient borders on Pro tools, loading skeletons, and instant copy/download actions.

---

## 🛠️ Included Tools (16 Specialized Utilities)

### 🟢 Free Tools (No Login Required)
1. **YouTube Title Generator** (`/tools/youtube-title-generator`): 10 click-worthy, algorithm-hooked titles categorized by psychological angle.
2. **Video Description Generator** (`/tools/description-generator`): SEO-optimized description with hook paragraph, structured timestamps outline, links, and CTAs.
3. **Tags Generator** (`/tools/tags-generator`): Comma-separated high-ranking tags ready for 1-click copy into YouTube Studio, plus search-intent breakdown.
4. **Hashtag Generator** (`/tools/hashtag-generator`): High-reach and niche hashtags for Shorts and long-form uploads.
5. **Video Idea Generator** (`/tools/video-idea-generator`): 15 viral video concepts with thumbnail hooks and angles.
6. **Thumbnail Text Ideas** (`/tools/thumbnail-text-generator`): Punchy 2-4 word overlays engineered for high contrast and mobile CTR.
7. **Channel Name Generator** (`/tools/channel-name-generator`): Memorable, brandable channel names across modern, authority, and creative styles.
8. **Thumbnail Downloader** (`/tools/thumbnail-downloader`): Instant, client-side HD thumbnail extraction in all official resolutions (1080p MaxRes, SD, HQ, MQ). *Zero AI required.*
9. **Comment Reply Generator** (`/tools/comment-reply-generator`): Thoughtful, community-building, or witty replies to foster loyalty.

### 🟣 Pro Tools (Locked Behind Pro / Upgrade Modal)
1. **Full Video Script Writer** (`/tools/video-script-writer`): End-to-end 8-15 minute script with 0:00 retention hook, visual B-roll cues, pacing resets, and zero-dropoff outros.
2. **30-Day Content Calendar** (`/tools/content-calendar-generator`): Strategic 30-day publishing matrix mixing long-form evergreen videos and Shorts.
3. **Channel Audit & Growth Plan** (`/tools/channel-audit`): Algorithmic diagnosis of CTR/AVD bottlenecks with a 90-day execution roadmap.
4. **Competitor Analysis Assistant** (`/tools/competitor-analysis`): Reverse-engineers top competitor weaknesses and discovers uncontested video topics.
5. **Shorts Script Pack (10 Scripts)** (`/tools/shorts-script-pack`): 10 viral 30-60s vertical scripts derived from a single topic.
6. **Monetization Readiness Checker** (`/tools/monetization-readiness-checker`): YouTube Partner Program (YPP) audit, RPM estimator, and immediate non-AdSense revenue streams.
7. **SEO Keyword Research Assistant** (`/tools/seo-keyword-research`): Low-competition keyword clusters and rank-ready titles.

*Note: You can preview all Pro tools instantly by clicking "Mode: Free Tier / PRO Active" in the navigation bar to toggle Demo Pro mode.*

---

## 🔑 Google Gemini API Setup

AuroDxb uses a centralized API route (`/api/gemini`) that communicates directly with the Google Gemini REST API using `gemini-2.5-flash`.

The API key is **only read on the server** via `process.env.GEMINI_API_KEY` and is never exposed to the client.

### Step-by-Step API Key Setup:
1. Visit [Google AI Studio](https://aistudio.google.com/).
2. Sign in with your Google account and click **"Get API key"** -> **"Create API key"** (free tier available).
3. In your local project root, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Paste your API key into `.env.local`:
   ```env
   GEMINI_API_KEY=AIzaSy...your_actual_key_here
   ```
5. Restart the development server (`npm run dev`).

*(If no key is configured, AuroDxb runs in graceful demo mode displaying sample outputs so you can test the UI without errors.)*

---

## 💻 Local Development Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server Locally
```bash
npm run start
```

---

## 🚀 Deploying to Vercel (Zero Extra Config)

AuroDxb is configured for Next.js App Router and deploys to [Vercel](https://vercel.com) with **zero extra configuration**.

### Method 1: Using the Vercel Dashboard (Recommended)

1. Push your project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AuroDxb complete YouTube AI suite"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aurodxb.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import your `aurodxb` GitHub repository.
3. In the **Environment Variables** section, add:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: `Your Google AI Studio API key`
4. Click **Deploy**. Vercel will build and deploy the project in under 60 seconds.

### Method 2: Using the Vercel CLI

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Login and deploy
vercel

# Add your production environment variable
vercel env add GEMINI_API_KEY
# Enter your key, select Production & Preview

# Deploy to production
vercel --prod
```

---

## 📁 Project Architecture

```
d:\New Project/
├── app/
│   ├── api/
│   │   ├── gemini/
│   │   │   └── route.ts         # Secure server-side Gemini REST API caller with retry & rate limiting
│   │   └── waitlist/
│   │       └── route.ts         # Waitlist & checkout email lead storage endpoint
│   ├── about/page.tsx           # About mission & creator philosophy
│   ├── contact/page.tsx         # Interactive contact form & inquiries
│   ├── pricing/page.tsx         # Pricing plans & feature comparison table
│   ├── privacy/page.tsx         # Privacy policy
│   ├── terms/page.tsx           # Terms of service & legal disclaimers
│   ├── tools/
│   │   ├── page.tsx             # Searchable, filterable 16-tool directory
│   │   └── [slug]/page.tsx      # Dynamic two-panel runner for every tool
│   ├── globals.css              # Dark theme styling, glassmorphism, animations
│   ├── icon.tsx                 # Dynamic SVG favicon
│   ├── layout.tsx               # Root layout, fonts (Space Grotesk + Inter), SEO metadata, JSON-LD
│   ├── not-found.tsx            # Custom styled 404 page
│   ├── opengraph-image.tsx      # Social share 1200x630 card generator
│   ├── page.tsx                 # High-converting landing page (hero, mockup, stats, tools, FAQs)
│   ├── robots.ts                # SEO robots.txt
│   └── sitemap.ts               # Automated XML sitemap
├── components/
│   ├── DynamicIcon.tsx          # Lucide icon resolver
│   ├── FaqSection.tsx           # Interactive FAQ accordion
│   ├── Footer.tsx               # Footer with mandatory YouTube/Google disclaimer
│   ├── HeroMockup.tsx           # Interactive Hero tool preview component
│   ├── Navbar.tsx               # Sticky glass navbar with Demo Pro toggle
│   ├── PricingSection.tsx       # Reusable pricing grid with monthly/yearly billing
│   ├── ThumbnailDownloaderPanel.tsx # 1080p YouTube thumbnail downloader UI
│   ├── ToolCard.tsx             # Reusable card with glow and Pro lock badge
│   ├── ToolLayout.tsx           # Two-panel generator (inputs left, markdown output right)
│   ├── UpgradeModal.tsx         # Modal for non-Pro users with 1-click preview
│   ├── UserContext.tsx          # LocalStorage-backed Pro status & daily usage tracking
│   └── WaitlistModal.tsx        # Confetti-enabled early-bird waitlist modal
├── lib/
│   ├── prompts.ts               # Central prompt templates for all 15 AI tools
│   ├── tools-data.ts            # Detailed tool definitions, categories, and sample outputs
│   ├── types.ts                 # TypeScript interfaces
│   └── utils.ts                 # Utility functions (cn, YouTube ID parser)
├── .env.example                 # Example environment variables
├── .gitignore                   # Ignores .env*.local and build artifacts
├── next.config.ts               # Next.js config with YouTube image domains
├── package.json                 # Project dependencies & scripts
├── postcss.config.mjs           # PostCSS config
├── tailwind.config.ts           # Extended dark theme tokens & keyframe animations
└── tsconfig.json                # TypeScript compiler config
```

---

## ⚖️ Legal Disclaimer

AuroDxb is an independent creator utility and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with YouTube, Google LLC, or Alphabet Inc.
