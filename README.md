# AuroDxb (www.aurodxb.com) 🚀

> **AI-powered YouTube creator toolkit for high-CTR titles, descriptions, SEO tags, and thumbnails.**  
> Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and the Google Gemini API.

---

## 🌟 Overview & Architecture

**AuroDxb** is a fast, dark-themed platform providing practical utilities for video creators, scriptwriters, and media managers. Every tool produces clean, copy-ready metadata formatted specifically for YouTube.

- **Theme**: Ultra-dark aesthetic (Background `#07070D`, card surfaces `#0F0F1A`, 1px borders `rgba(255,255,255,0.08)`).
- **Accents**: Electric Violet (`#7C3AED`) to Cyan (`#06B6D4`), with YouTube Hot-Red (`#FF2D55`) accents.
- **Typography**: Space Grotesk (headings) and Inter (body).
- **Limits & Security**:
  - Server-side daily limit: **10 free generations per day** per visitor IP, tracked via SHA-256 hash in Upstash Redis (expires after 24h).
  - Rate limit: **6 requests per minute** per IP to protect Gemini quota.
  - In-memory fallback if Redis credentials are not configured.

---

## 🛠️ Complete Tools Roster

### 🟢 9 Free Tools (No Account Required)
1. **YouTube Title Generator** (`/tools/youtube-title-generator`): 10 click-worthy titles under 70 characters with short 12-word explanations.
2. **Video Description Generator** (`/tools/description-generator`): Structured descriptions with hook paragraph, timestamps outline, and links.
3. **Tags Generator** (`/tools/tags-generator`): Clean, comma-separated tags under 500 characters.
4. **Hashtag Generator** (`/tools/hashtag-generator`): Space-separated hashtags prefixed with `#`.
5. **Video Idea Generator** (`/tools/video-idea-generator`): 15 video concepts with hooks and visual ideas.
6. **Thumbnail Text Ideas** (`/tools/thumbnail-text-generator`): Punchy 2-4 word overlays across curiosity, warning, and bold angles.
7. **Channel Name Generator** (`/tools/channel-name-generator`): 16 brandable names with suggested `@handles`.
8. **Thumbnail Downloader** (`/tools/thumbnail-downloader`): Instant, client-side HD thumbnail extraction in all official resolutions (1080p MaxRes, SD, HQ, MQ). *Zero AI required.*
9. **Comment Reply Generator** (`/tools/comment-reply-generator`): 5 distinct community-building reply options.

### 🟣 7 Pro Tools (Launching Soon)
1. **Full Video Script Writer** (`/tools/video-script-writer`): End-to-end 8-15 minute script with hook, pacing cues, and outro.
2. **30-Day Content Calendar** (`/tools/content-calendar-generator`): Strategic 30-day publishing schedule mixing long-form and Shorts.
3. **Channel Audit & Growth Plan** (`/tools/channel-audit`): Actionable 90-day growth roadmap and bottleneck diagnosis.
4. **Competitor Analysis Assistant** (`/tools/competitor-analysis`): Reverse-engineers content gaps and audience desires.
5. **Shorts Script Pack (10 Scripts)** (`/tools/shorts-script-pack`): 10 viral vertical video scripts.
6. **Monetization Readiness Checker** (`/tools/monetization-readiness-checker`): YouTube Partner Program requirements checklist and revenue avenues.
7. **SEO Keyword Research Assistant** (`/tools/seo-keyword-research`): Low-competition keyword clusters and search intent breakdowns.

*(Pro tools currently show static sample output with inputs disabled, and an invitation to join the waitlist. Pro tools never call the Gemini API until launch.)*

---

## 🔑 Environment Variables Setup

Create a `.env.local` file in your root directory based on `.env.example`:

```bash
cp .env.example .env.local
```

### 1. `GEMINI_API_KEY` (Required for live generation)
- Visit [Google AI Studio](https://aistudio.google.com/).
- Sign in with your Google account and click **"Get API key"** -> **"Create API key"** (free tier available).
- Add to `.env.local`:
  ```env
  GEMINI_API_KEY=AIzaSy...your_key_here
  ```

### 2. `UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN` (Recommended for production)
- Create a free serverless Redis database at [Upstash Console](https://console.upstash.com/).
- Under your database details, copy the **REST URL** and **REST Token**.
- Add to `.env.local`:
  ```env
  UPSTASH_REDIS_REST_URL=https://your-database.upstash.io
  UPSTASH_REDIS_REST_TOKEN=your_token_here
  ```
- *Note: If omitted, AuroDxb falls back to in-memory rate limiting with a console warning.*

### 3. `RESEND_API_KEY` & `CONTACT_TO_EMAIL` (Optional)
- Create a free account at [Resend](https://resend.com/) and generate an API key.
- Add to `.env.local`:
  ```env
  RESEND_API_KEY=re_your_api_key_here
  CONTACT_TO_EMAIL=your_inbox@domain.com
  ```
- When configured, submissions to `/contact` will forward directly to your inbox while also being logged in Redis.

---

## 💻 Local Development Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build

# 4. Start production server locally
npm run start
```

---

## 🚀 Deploying to Vercel

AuroDxb is configured for Next.js App Router and deploys to [Vercel](https://vercel.com) with **zero extra configuration**.

### Method 1: Using the Vercel Dashboard

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Update AuroDxb suite"
   git push origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project** and import your repository.
3. In **Environment Variables**, add:
   - `GEMINI_API_KEY`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
   - `RESEND_API_KEY` (optional)
   - `CONTACT_TO_EMAIL` (optional)
4. Click **Deploy**.

---

## ⚖️ Legal Disclaimer

AuroDxb is an independent creator utility and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with YouTube, Google LLC, or Alphabet Inc.
