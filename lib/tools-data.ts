import { ToolDefinition } from "./types";

export const TOOLS: ToolDefinition[] = [
  // --- FREE TOOLS ---
  {
    slug: "youtube-title-generator",
    name: "YouTube Title Generator",
    description: "Generate 10 high-CTR, click-worthy titles optimized for algorithm hooks and viewer curiosity.",
    category: "Ideation & Titles",
    isPro: false,
    badge: "Free",
    iconName: "Sparkles",
    fields: [
      {
        id: "topic",
        label: "Video Topic or Concept",
        type: "text",
        placeholder: "e.g., How I learned to code in 6 months with zero experience",
        required: true,
      },
      {
        id: "tone",
        label: "Title Style / Tone",
        type: "select",
        defaultValue: "Curiosity & High CTR",
        options: [
          { label: "Curiosity & High CTR (MrBeast / Ali Abdaal style)", value: "Curiosity & High CTR" },
          { label: "Educational & Direct", value: "Educational & Direct" },
          { label: "Storytelling / Personal Journey", value: "Storytelling" },
          { label: "Urgent & Warning", value: "Urgent & Warning" },
          { label: "Beginner Friendly / Step-by-Step", value: "Beginner Friendly" },
        ],
      },
      {
        id: "keyword",
        label: "Target SEO Keyword (Optional)",
        type: "text",
        placeholder: "e.g., learn coding 2025",
        helpText: "Helps anchor titles for YouTube search traffic as well as browse recommendations.",
      },
    ],
    sampleOutput: `### 🔥 Top 10 High-CTR Titles

1. **I Learned to Code in 6 Months (Here's What Nobody Tells You)**
   *CTR Angle: Revealing unspoken truths & personal authority*

2. **How to Learn Coding from ZERO in 2025 (The Realistic Roadmap)**
   *CTR Angle: Fresh year relevance + grounded expectations*

3. **Stop Learning to Code Like This (5 Costly Mistakes)**
   *CTR Angle: Negative hook / fear of wasted time*

4. **From Zero to Junior Developer in 180 Days — My Exact Strategy**
   *CTR Angle: Specific timeframe + tangible outcome*

5. **Why 90% of Self-Taught Programmers Quit (And How Not To)**
   *CTR Angle: High-stakes statistic triggering curiosity*

6. **The Only 3 Tools You Need to Learn Coding Fast**
   *CTR Angle: Simplification & actionable minimalist hook*

7. **I Tried 10 Coding Courses So You Don’t Have To**
   *CTR Angle: Vicarious effort / high viewer utility*

8. **If I Had to Relearn Coding in 2025, I’d Do This**
   *CTR Angle: Regret & hindsight wisdom*

9. **Can You REALLY Get a Dev Job in 6 Months? (Honest Truth)**
   *CTR Angle: Direct question addressing common skepticism*

10. **The 2-Hour Daily Routine That Got Me Hired as a Coder**
    *CTR Angle: Accessible daily commitment with proof*`,
  },

  {
    slug: "description-generator",
    name: "Video Description Generator",
    description: "SEO-optimized descriptions with hook paragraph, key timestamps outline, links section, and CTA.",
    category: "SEO & Optimization",
    isPro: false,
    badge: "Free",
    iconName: "FileText",
    fields: [
      {
        id: "title",
        label: "Video Title / Main Topic",
        type: "text",
        placeholder: "e.g., Ultimate Productivity Setup for Notion in 2025",
        required: true,
      },
      {
        id: "keyPoints",
        label: "Key Points Covered (or bullet points)",
        type: "textarea",
        placeholder: "e.g.,\n- Dashboard layout\n- Automated task manager\n- Habit tracker widget\n- Free template download link",
        required: true,
      },
      {
        id: "cta",
        label: "Primary Call to Action",
        type: "select",
        defaultValue: "Subscribe + Download Free Resource",
        options: [
          { label: "Subscribe + Download Free Resource", value: "Subscribe + Download Free Resource" },
          { label: "Join Newsletter / Community", value: "Join Newsletter" },
          { label: "Buy Product / Course", value: "Buy Product" },
          { label: "Comment and Share Your Thoughts", value: "Comment Discussion" },
        ],
      },
      {
        id: "socialLinks",
        label: "Socials / External Links (Optional)",
        type: "text",
        placeholder: "e.g., Twitter: @handle | Discord: /invite",
      },
    ],
    sampleOutput: `In this video, I walk you through the ultimate Notion productivity setup designed to streamline your workflow and keep you focused in 2025. Whether you're managing complex projects or everyday tasks, this system gives you full clarity without the overwhelm.

👉 **Grab the FREE Notion Template here:** [LINK_HERE]

---

⏱️ **TIMESTAMPS:**
00:00 - The Problem with Most Productivity Systems
01:15 - Overview of the Core Dashboard
03:40 - The Automated Task Engine
06:12 - Habit Tracking That Actually Works
08:45 - Mobile Optimization Tips
10:30 - How to Get the Free Template
11:15 - Final Thoughts & Community Challenge

---

🔔 **SUBSCRIBE FOR MORE PRODUCTIVITY GUIDES:**
If you found this useful, hit the Like button and subscribe for weekly workflow tutorials:
https://youtube.com/@YourChannel?sub_confirmation=1

🌐 **CONNECT WITH ME:**
• Twitter / X: https://x.com/yourhandle
• Free Newsletter: https://yourdomain.com/newsletter
• Join the Discord: https://discord.gg/yourserver

---

#Notion #Productivity #NotionTemplate #TimeManagement #Workflow`,
  },

  {
    slug: "tags-generator",
    name: "YouTube Tags Generator",
    description: "High-ranking YouTube video tags in comma-separated format with instant one-click copy.",
    category: "SEO & Optimization",
    isPro: false,
    badge: "Free",
    iconName: "Tags",
    fields: [
      {
        id: "topic",
        label: "Video Topic or Title",
        type: "text",
        placeholder: "e.g., Best Budget Camera for YouTube Beginners 2025",
        required: true,
      },
      {
        id: "primaryKeyword",
        label: "Primary Keyword Focus (Optional)",
        type: "text",
        placeholder: "e.g., budget youtube camera",
      },
    ],
    sampleOutput: `### 🏷️ Recommended Tags (Copy-Ready)

\`\`\`text
budget youtube camera, best budget camera for youtube, youtube camera for beginners, camera for youtube 2025, cheap camera for video, budget 4k camera, beginner youtube equipment, cheap vlogging camera, youtube gear guide, sony zv e10 review, canon r50 youtube, budget creator setup, how to start youtube with low budget, best video camera under 500, beginner camera guide
\`\`\`

#### 📊 Keyword Breakdown by Search Intent:
- **Broad Traffic:** \`budget youtube camera\`, \`camera for youtube 2025\`, \`youtube gear\`
- **High Buyer Intent:** \`sony zv e10 review\`, \`canon r50 youtube\`, \`best video camera under 500\`
- **Long-tail Discovery:** \`how to start youtube with low budget\`, \`best budget camera for youtube beginners\``,
  },

  {
    slug: "hashtag-generator",
    name: "Hashtag Generator",
    description: "Curated trending and niche hashtags for YouTube Shorts and long-form uploads.",
    category: "SEO & Optimization",
    isPro: false,
    badge: "Free",
    iconName: "Hash",
    fields: [
      {
        id: "topic",
        label: "Video Topic / Niche",
        type: "text",
        placeholder: "e.g., Personal Finance, AI tools, Fitness workout",
        required: true,
      },
      {
        id: "format",
        label: "Video Format",
        type: "select",
        defaultValue: "YouTube Shorts",
        options: [
          { label: "YouTube Shorts (High Viral Reach)", value: "Shorts" },
          { label: "Long-Form Video", value: "Long-Form" },
          { label: "Live Stream / Podcast", value: "Live Stream" },
        ],
      },
    ],
    sampleOutput: `### 🚀 Top Recommended Hashtags

#### **Primary High-Reach (Use 3-5 in Title / Top of Description):**
\`#Shorts #PersonalFinance #MoneyTips #FinancialFreedom #WealthBuilding\`

#### **Niche Discovery (Boosts Recommendation Algorithm):**
\`#PassiveIncome #BudgetingTips #SmartInvesting #FinanceHacks #SideHustle2025\`

#### **Trending Engagement Tags:**
\`#CreatorEconomy #LearnOnYouTube #MoneyTok #InvestingForBeginners\`

📋 **Ready to Paste Block:**
\`\`\`text
#Shorts #PersonalFinance #MoneyTips #FinancialFreedom #PassiveIncome #SmartInvesting #Budgeting101
\`\`\``,
  },

  {
    slug: "video-idea-generator",
    name: "Video Idea Generator",
    description: "15 viral video concepts with hook angles, target audiences, and unique twists.",
    category: "Ideation & Titles",
    isPro: false,
    badge: "Free",
    iconName: "Lightbulb",
    fields: [
      {
        id: "niche",
        label: "Your Niche / Industry",
        type: "text",
        placeholder: "e.g., Tech Reviews, Fitness for busy professionals, Solo travel",
        required: true,
      },
      {
        id: "audience",
        label: "Target Audience",
        type: "text",
        placeholder: "e.g., College students, 9-to-5 workers, beginner hobbyists",
      },
      {
        id: "style",
        label: "Channel Style",
        type: "select",
        defaultValue: "Educational & Tutorial",
        options: [
          { label: "Educational & Tutorial", value: "Educational" },
          { label: "Entertainment & Challenge", value: "Entertainment" },
          { label: "Storytelling & Documentary", value: "Documentary" },
          { label: "Opinion & Commentary", value: "Commentary" },
          { label: "Day in the Life / Vlog", value: "Vlog" },
        ],
      },
    ],
    sampleOutput: `### 💡 15 High-Potential Video Concepts

1. **"The 15-Minute Workout That Actually Burns Fat (Backed by Science)"**
   * *Hook:* Debunking the myth that you need 2 hours in the gym.
   * *Visual Idea:* Split screen of intense 15-min circuit vs boring cardio treadmill.

2. **"I Tried 5 Desk Workouts for 30 Days (My Posture Transformed)"**
   * *Hook:* Before/after metrics + 30-day challenge format viewers love to binge.

3. **"The Busy Executive's Guide to Meal Prep (3 Hours = 7 Days of Meals)"**
   * *Hook:* Addressing the #1 objection: "I don't have time to cook healthy."

4. **"Why Your Fitness Tracker is Lying to You (Calorie Burn Test)"**
   * *Hook:* Controversy & testing popular gadgets (Apple Watch vs Whoop).

5. **"Fix Your Lower Back Pain with This 4-Step Bedtime Routine"**
   * *Hook:* Immediate search utility for chronic pain sufferers.

6. **"Can You Get Shredded with Just Dumbbells at Home? (Full Test)"**
   * *Hook:* Budget accessibility angle + self-experimentation.

7. **"The Worst Fitness Advice on TikTok (Doctor & Trainer Reaction)"**
   * *Hook:* Reaction commentary with credible expert analysis.

8. **"How to Eat Healthy at Airport & Hotel Buffets (Travel Fitness Guide)"**
   * *Hook:* Solves an ultra-specific pain point for corporate travelers.

9. **"I Stopped Drinking Coffee for 14 Days (Surprising Energy Results)"**
   * *Hook:* Habit elimination experiment with relatable symptoms.

10. **"The Minimalist Home Gym Under $100 (Tested & Ranked)"**
    * *Hook:* Thrift / high-value gear tier list.

11. **"5 Micro-Habits That Burn 500 Extra Calories Without Exercising"**
    * *Hook:* NEAT (Non-Exercise Activity Thermogenesis) explained simply.

12. **"The 10-Minute Morning Mobility Sequence for Stiff Joints"**
    * *Hook:* Low barrier to entry, daily repeatable viewer habit.

13. **"What 10,000 Steps Actually Looks Like in a Busy Corporate Day"**
    * *Hook:* Realistic documentation rather than unattainable perfection.

14. **"I Hired a Celebrity Trainer for a Week (Here is What They Changed)"**
    * *Hook:* Access to insider knowledge without paying celebrity rates.

15. **"The Stress-Fat Connection: Why Working Harder Stops Weight Loss"**
    * *Hook:* Validating viewer struggles with cortisol and sleep science.`,
  },

  {
    slug: "thumbnail-text-generator",
    name: "Thumbnail Text Ideas",
    description: "Punchy 2-4 word text overlays engineered to maximize CTR without cluttering the graphic.",
    category: "Thumbnail & Design",
    isPro: false,
    badge: "Free",
    iconName: "Image",
    fields: [
      {
        id: "topic",
        label: "Video Topic or Working Title",
        type: "text",
        placeholder: "e.g., Why Apple cancelled the electric car project",
        required: true,
      },
      {
        id: "angle",
        label: "Primary Psychological Trigger",
        type: "select",
        defaultValue: "Shock & Curiosity",
        options: [
          { label: "Shock & Curiosity", value: "Shock & Curiosity" },
          { label: "The Secret / Hidden Truth", value: "Secret & Truth" },
          { label: "Urgency / Mistake Warning", value: "Urgent Warning" },
          { label: "Before & After Transformation", value: "Transformation" },
          { label: "Direct & Bold Claim", value: "Bold Claim" },
        ],
      },
    ],
    sampleOutput: `### 🎨 High-CTR Thumbnail Text Concepts (2-4 Words)

#### 🔴 High Contrast & Shock Hooks:
1. **IT'S OVER.** *(Pairs well with cancelled logos / red X)*
2. **THEY LIED?** *(High curiosity facial expression)*
3. **$10B WASTED.** *(Quantifiable failure hook)*
4. **NEVER AGAIN.** *(Definitive ending statement)*

#### 🟡 Curiosity & Secret Angles:
5. **SECRET REVEALED**
6. **WHAT HAPPENED?**
7. **BEHIND CLOSED DOORS**
8. **THE REAL REASON**

#### 🟢 Urgent Warnings:
9. **DON’T BUY YET!**
10. **HUGE MISTAKE**
11. **TOO LATE?**
12. **GAME OVER**

💡 **Thumbnail Design Tip:**
*Never duplicate the video title in your thumbnail text!* If your title is *"Why Apple Cancelled the Titan Car Project"*, your thumbnail text should be *"THEY GAVE UP?"* or *"$10,000,000,000 DOWN THE DRAIN"*. Keep font weight ultra-bold (Impact, Montserrat 900, Futura Bold) with drop shadow.`,
  },

  {
    slug: "channel-name-generator",
    name: "Channel Name Generator",
    description: "Catchy, memorable, and brandable YouTube channel names across various style aesthetics.",
    category: "Ideation & Titles",
    isPro: false,
    badge: "Free",
    iconName: "Users",
    fields: [
      {
        id: "niche",
        label: "Channel Topic or Niche",
        type: "text",
        placeholder: "e.g., AI tools, Coffee brewing, Indie game development",
        required: true,
      },
      {
        id: "style",
        label: "Name Aesthetic / Style",
        type: "select",
        defaultValue: "Sleek & Modern",
        options: [
          { label: "Sleek & Modern (Single/Compound word)", value: "Modern" },
          { label: "Authority & Educational", value: "Authority" },
          { label: "Playful & Creative", value: "Playful" },
          { label: "Personal Brand (Name + Hook)", value: "Personal Brand" },
          { label: "Minimalist & Short", value: "Minimalist" },
        ],
      },
      {
        id: "creatorName",
        label: "Your First Name or Handle (Optional)",
        type: "text",
        placeholder: "e.g., Alex, Dave, Maya",
      },
    ],
    sampleOutput: `### 🌟 Brandable Channel Name Ideas

#### ⚡ Modern & Sleek:
1. **Synthetix Lab** *(Handles: @SynthetixLab)*
2. **NeuroCraft** *(Handles: @NeuroCraftHQ)*
3. **PromptPulse** *(Handles: @PromptPulse)*
4. **VektorAI** *(Handles: @VektorAI)*

#### 🎓 Authority & Masterclass:
5. **The AI Blueprint**
6. **Applied Intelligence**
7. **Cognitive Edge**
8. **NextGen Creator Academy**

#### 🎨 Playful & Catchy:
9. **ByteBites AI**
10. **The Silicon Cafe**
11. **Robot & Quill**
12. **FutureCrafted**

#### 👤 Personal Hybrid:
13. **Alex Explores AI**
14. **Prompting with Alex**
15. **Alex In The Loop**

💡 **Availability Checklist:**
Check availability on YouTube handle (\`@handle\`), X/Twitter, and \`.com\` domain before settling on your final branding!`,
  },

  {
    slug: "thumbnail-downloader",
    name: "YouTube Thumbnail Downloader",
    description: "Extract and download high-resolution thumbnails in all official resolutions (HD 1080p, HQ, MQ).",
    category: "Thumbnail & Design",
    isPro: false,
    badge: "Free (No AI)",
    iconName: "Download",
    isClientOnly: true,
    fields: [
      {
        id: "youtubeUrl",
        label: "Paste YouTube Video Link",
        type: "text",
        placeholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ or youtu.be/...",
        required: true,
      },
    ],
    sampleOutput: "",
  },

  {
    slug: "comment-reply-generator",
    name: "Comment Reply Generator",
    description: "Thoughtful, engaging, or witty replies to viewer comments to boost community loyalty.",
    category: "Community & Growth",
    isPro: false,
    badge: "Free",
    iconName: "MessageSquare",
    fields: [
      {
        id: "comment",
        label: "Viewer's Comment",
        type: "textarea",
        placeholder: "e.g., 'Loved this video! But how do you stay disciplined when you lack motivation?'",
        required: true,
      },
      {
        id: "tone",
        label: "Reply Tone",
        type: "select",
        defaultValue: "Engaging & Community-Building",
        options: [
          { label: "Engaging & Community-Building (Warm, thoughtful)", value: "Engaging" },
          { label: "Witty & Humorous", value: "Witty" },
          { label: "Short & Punchy (Heart-worthy)", value: "Short" },
          { label: "Question-Prompting (Encourage reply threads)", value: "Question" },
          { label: "Handling Criticism (Diplomatic & Graceful)", value: "Diplomatic" },
        ],
      },
      {
        id: "creatorContext",
        label: "Context / Quick thought (Optional)",
        type: "text",
        placeholder: "e.g., I rely on habits rather than motivation",
      },
    ],
    sampleOutput: `### 💬 5 Tailored Reply Options

1. **Option 1 (Thoughtful & Insightful - Recommended):**
   > "Thanks so much for watching! For me, motivation is a spark, but daily systems are the engine. On days I feel zero motivation, I commit to just 5 minutes — usually the momentum carries me through. Do you currently use a morning routine to kickstart the day?"

2. **Option 2 (Short & Heart-Worthy):**
   > "Really appreciate the love! Systems over motivation every single time 🙌"

3. **Option 3 (Discussion-Starter):**
   > "Great question! Honestly, I rely on friction reduction: laying out my workspace the night before so I don't have to 'think'. What's the biggest friction point in your routine right now?"

4. **Option 4 (Witty):**
   > "My secret? Copious amounts of espresso and the impending fear of unfinished to-do lists ☕😅 But seriously, tiny habits win!"

5. **Option 5 (Community Shoutout):**
   > "Pinned this! Such an important topic. Going to cover my entire friction-elimination checklist in an upcoming video. Stay tuned!"`,
  },

  // --- PRO TOOLS ---
  {
    slug: "video-script-writer",
    name: "Full Video Script Writer",
    description: "Complete end-to-end video script: retention-hook intro, body sections with pacing cues, retention tips, and outro.",
    category: "Scripting & Content",
    isPro: true,
    badge: "Pro",
    iconName: "Video",
    fields: [
      {
        id: "topic",
        label: "Video Title / Premise",
        type: "text",
        placeholder: "e.g., The 2025 AI Revolution: Why Junior Jobs Are Disappearing",
        required: true,
      },
      {
        id: "length",
        label: "Target Video Duration",
        type: "select",
        defaultValue: "8-10 Minutes (Standard YouTube Long-form)",
        options: [
          { label: "5-7 Minutes (Punchy / High Velocity)", value: "5-7 min" },
          { label: "8-10 Minutes (Standard YouTube Long-form)", value: "8-10 min" },
          { label: "12-15 Minutes (In-depth Deep Dive)", value: "12-15 min" },
        ],
      },
      {
        id: "tone",
        label: "Presenter Tone & Persona",
        type: "select",
        defaultValue: "Energetic Tech Analyst (MKBHD / Cleo Abram style)",
        options: [
          { label: "Energetic Tech Analyst (MKBHD / Cleo Abram style)", value: "Tech Analyst" },
          { label: "Storyteller & Documentary (MagnatesMedia style)", value: "Storyteller" },
          { label: "Educational & Friendly (Ali Abdaal style)", value: "Educational" },
          { label: "Humorous & Fast-Paced (Linus Tech Tips style)", value: "Fast Humorous" },
        ],
      },
      {
        id: "keyPoints",
        label: "Key Arguments or Sections to Include",
        type: "textarea",
        placeholder: "e.g.,\n1. Recent layoffs stats\n2. Real AI tools coding faster than humans\n3. What skills actually stay safe\n4. Actionable advice for beginners",
      },
    ],
    sampleOutput: `## 🎬 SCRIPT: The 2025 AI Revolution (Why Junior Jobs Are Disappearing)

### ⏱️ SECTION 1: THE RETENTION HOOK (0:00 - 0:45)
**[VISUAL CUE]**: Quick montage of dramatic headlines from Bloomberg, TechCrunch, and WSJ. Ambient tension riser music in background.
**[CAMERA]**: Direct to camera, medium close-up, sharp lighting.

> **SPEAKER**: "In the next 3 years, the traditional 'entry-level' software engineer might cease to exist. Not because companies are stopping hiring, but because one junior coder with Claude 3.7 or Cursor now does the work of five people. But here is the paradox nobody is talking about: while generic entry jobs are vanishing, the pay for engineers who master AI orchestration is skyrocketing. In this video, we are breaking down the hard data, the 3 skills that will keep you indispensable, and the exact roadmap to thrive in 2025."

---

### ⏱️ SECTION 2: THE DATA REALITY (0:45 - 2:30)
**[VISUAL CUE]**: Motion graphic showing tech job postings chart dropping 32% since 2022, contrasted with AI dev tooling investment.
**[AUDIO]**: Subtle synth bassline kicks in.

> **SPEAKER**: "Let's strip away the hype and look at the raw numbers. In 2021, tech companies hired in anticipation of infinite growth. Then interest rates rose. But something else happened in early 2024: code generation crossed the inflection point..."
*(Full multi-page script generated in Pro)*`,
  },

  {
    slug: "content-calendar-generator",
    name: "30-Day Content Calendar",
    description: "Full 30-day publishing schedule with publishing dates, video themes, hooks, and formats (Long-form vs Shorts).",
    category: "Strategy & Planning",
    isPro: true,
    badge: "Pro",
    iconName: "Calendar",
    fields: [
      {
        id: "niche",
        label: "Channel Niche & Content Focus",
        type: "text",
        placeholder: "e.g., Personal Finance for Millennials / Gen-Z",
        required: true,
      },
      {
        id: "frequency",
        label: "Publishing Cadence",
        type: "select",
        defaultValue: "2 Long-Form + 3 Shorts per week",
        options: [
          { label: "1 Long-Form + 2 Shorts per week", value: "1L + 2S" },
          { label: "2 Long-Form + 3 Shorts per week", value: "2L + 3S" },
          { label: "3 Long-Form per week", value: "3L" },
          { label: "Daily Shorts (30 Shorts)", value: "Daily Shorts" },
        ],
      },
      {
        id: "goal",
        label: "Primary 30-Day Goal",
        type: "select",
        defaultValue: "Subscriber Growth & Viral Reach",
        options: [
          { label: "Subscriber Growth & Viral Reach", value: "Sub Growth" },
          { label: "High Watch Time & Monetization", value: "Watch Time" },
          { label: "Digital Product / Service Sales", value: "Conversion" },
        ],
      },
    ],
    sampleOutput: `### 🗓️ 30-DAY STRATEGIC PUBLISHING MATRIX

#### **WEEK 1: Foundation & High-Search Intent**
* **Day 2 (Long-Form 1):** *"How I Save 50% of My Income on a $60k Salary (Real Budget Breakdown)"*
  - *Format:* Evergreen Case Study
  - *Goal:* High search retention & template download CTA.
* **Day 4 (Short 1):** *"Stop Buying Coffee? The Math Behind the Latte Factor Myth"*
  - *Format:* Myth-Busting POV
* **Day 6 (Long-Form 2):** *"The 3 Bank Accounts Everyone Needs in 2025"*
  - *Format:* Actionable Beginner Guide
* **Day 7 (Short 2):** *"Why High Yield Savings Beats Your Regular Bank 10x"*

#### **WEEK 2: Viral Controversy & Curiosity**
* **Day 9 (Short 3):** *"Is Buying a House in Your 20s a Trap?"*
* **Day 11 (Long-Form 3):** *"I Analyzed 500 Millionaires: They All Share These 4 Habits"*
* **Day 13 (Short 4):** *"The 24-Hour Rule That Stopped My Impulse Buying"*
* **Day 15 (Long-Form 4):** *"Beginner's Guide to Index Funds (S&P 500 Explained in 8 Minutes)"*
*(Weeks 3 & 4 fully detailed in Pro)*`,
  },

  {
    slug: "channel-audit",
    name: "Channel Audit & Growth Plan",
    description: "In-depth audit of channel performance bottlenecks with a step-by-step 90-day growth roadmap.",
    category: "Strategy & Planning",
    isPro: true,
    badge: "Pro",
    iconName: "BarChart3",
    fields: [
      {
        id: "channelName",
        label: "Channel Name & Niche",
        type: "text",
        placeholder: "e.g., CodeWithKev (Web development & frontend)",
        required: true,
      },
      {
        id: "stats",
        label: "Current Metrics (Subscribers, Average Views, CTR, AVD)",
        type: "textarea",
        placeholder: "e.g.,\n- 4,200 Subscribers\n- Average views: 800 - 1,200\n- Average CTR: 3.8%\n- Average View Duration: 35% (3 min on 8 min video)\n- Upload frequency: 1x/week",
        required: true,
      },
      {
        id: "struggles",
        label: "Primary Obstacle or Bottleneck",
        type: "textarea",
        placeholder: "e.g., Videos plateau after 48 hours; hard to get new non-subscribers to click.",
      },
    ],
    sampleOutput: `## 📊 CHANNEL DIAGNOSTIC REPORT: CodeWithKev

### 1. ⚠️ Critical Bottlenecks Identified:
* **CTR Deficit (3.8% vs 6.5% Benchmark):** Your impressions are getting shown by the algorithm, but the thumbnail/title packaging fails to convert browse traffic.
* **Retention Drop at 0:45 (35% AVD):** Viewers drop off heavily during the intro setup before the value payload is delivered.
* **48-Hour Plateau:** Strong subscriber-first viewing, but lacking evergreen search optimization to capture compounding long-tail traffic.

### 2. 🎯 High-Impact Growth Levers:
1. **The 5-Second Hook Rule:** Cut all channel intros, animated logos, and "Welcome back guys". Start mid-action with the problem resolution.
2. **Thumbnail Contrast Elevation:** Adopt dual-element thumbnails (one bold face reaction + one high-contrast focal object), text strictly under 3 words.
3. **Pillar Content Re-Packaging:** Take your best-performing tutorial and turn it into a 3-part playlist series with end-screen interlinking.

### 3. 🗓️ 90-Day Execution Roadmap:
* **Phase 1 (Days 1-30):** Retitle and re-thumbnail your top 10 historical videos to revive dead impressions.
* **Phase 2 (Days 31-60):** Shift upload schedule to 1 Evergreen Tutorial + 2 Short hooks per week.
* **Phase 3 (Days 61-90):** Collaboration and cross-promotional community challenges.`,
  },

  {
    slug: "competitor-analysis",
    name: "Competitor Analysis Assistant",
    description: "Reverse-engineer top competitor strengths, uncover content gaps, and find unsaturated video opportunities.",
    category: "Strategy & Planning",
    isPro: true,
    badge: "Pro",
    iconName: "Crosshair",
    fields: [
      {
        id: "competitors",
        label: "Competitor Channels / Creators",
        type: "textarea",
        placeholder: "e.g., Fireship, WebDevSimplified, Kevin Powell",
        required: true,
      },
      {
        id: "yourNiche",
        label: "Your Channel's Unique Angle / Niche",
        type: "text",
        placeholder: "e.g., Pragmatic full-stack React & Next.js for indie hackers",
        required: true,
      },
      {
        id: "targetAudience",
        label: "Target Audience You Want to Win Over",
        type: "text",
        placeholder: "e.g., Developers building micro-SaaS and side hustles",
      },
    ],
    sampleOutput: `### 🎯 COMPETITOR BREAKDOWN & CONTENT BLUEPRINT

#### 1. 🔍 Competitor Matrix Analysis
* **Fireship:** Masters ultra-high-velocity 100-second overviews and developer meme culture. *Strength:* Maximum entertainment & surface-level awareness. *Gap:* Developers cannot actually code along or build production apps from it.
* **WebDevSimplified:** Clean, deeply educational, textbook conceptual walkthroughs. *Strength:* High search trust. *Gap:* Pacing can feel formal; lacks real-world startup chaos.
* **Kevin Powell:** The undisputed king of CSS. *Strength:* Niche mastery. *Gap:* Pure styling, leaves full-stack architecture untouched.

#### 2. 💎 The Blue Ocean Opportunity for You:
> **"The Indie Hacker Developer"**: Bridge the gap between Fireship's modern tech stack excitement and WebDevSimplified's technical depth by building **real revenue-generating products** on screen.

#### 3. 🚀 5 Videos That Out-Perform Competitor Gaps:
1. *"I Built a Profitable Micro-SaaS in 72 Hours with Next.js 15 (Full Stack Breakdown)"*
2. *"Why Fireship's Favorite Tech Stacks Don't Scale to Real Customers"*
3. *"The Junior Dev vs The Senior Indie Hacker: Who Ships Faster?"*
4. *"Stop Building To-Do Apps: 5 Projects That Actually Land Clients"*
5. *"The Minimalist Developer Stack That Costs $0/Month to Host"*`,
  },

  {
    slug: "shorts-script-pack",
    name: "Shorts Script Pack (10 Scripts)",
    description: "10 viral 30-60s Short/Reel/TikTok scripts derived from a single topic, formatted with visual and audio cues.",
    category: "Scripting & Content",
    isPro: true,
    badge: "Pro",
    iconName: "Zap",
    fields: [
      {
        id: "topic",
        label: "Core Topic or Theme",
        type: "text",
        placeholder: "e.g., Time management & avoiding burnout for creators",
        required: true,
      },
      {
        id: "format",
        label: "Shorts Format Style",
        type: "select",
        defaultValue: "Fast-Paced Talking Head + B-Roll Overlays",
        options: [
          { label: "Fast-Paced Talking Head + B-Roll Overlays", value: "Talking Head" },
          { label: "Screen Recording / Demonstration", value: "Screen Demo" },
          { label: "POV / Skit Humor", value: "POV Skit" },
          { label: "Documentary Style with Text Cards", value: "Docu Text" },
        ],
      },
      {
        id: "ctaGoal",
        label: "Primary Goal / CTA",
        type: "select",
        defaultValue: "Follow / Subscribe for Part 2",
        options: [
          { label: "Follow / Subscribe for Part 2", value: "Follow Part 2" },
          { label: "Comment debate trigger", value: "Comment Trigger" },
          { label: "Save & Share with a friend", value: "Save & Share" },
        ],
      },
    ],
    sampleOutput: `### ⚡ 10 VIRAL YOUTUBE SHORTS SCRIPTS

#### SCRIPT 1: The "Don't Do This" Negative Hook
* **Duration:** 35 seconds
* **Hook (0-3s):** [Speaker looks into camera while slamming laptop shut] *"Stop using to-do lists. Seriously, delete them right now."*
* **Twist (3-15s):** *"A to-do list is just an unranked graveyard of guilt. Highly productive people don't use lists — they calendar block."*
* **Payoff (15-28s):** *"If it doesn't have a start time and an end time on your calendar, it is not a plan. It's a wish."*
* **Loop CTA (28-35s):** *"Try it tomorrow for just 2 hours, and subscribe for part 2 where I show my calendar template."*

#### SCRIPT 2: The Shocking Statistic Hook
* **Duration:** 42 seconds
* **Hook (0-4s):** [Rapid countdown timer graphic] *"You only have about 4,000 weeks in your entire lifetime. You've already used 1,500 of them."*
* **Body (4-25s):** *"The average person spends 11 years looking at a smartphone screen. That’s not downtime; that's an entire decade erased..."*
* **CTA (25-42s):** *"Save this video before your next doomscroll."*

*(Scripts 3 through 10 included in full output)*`,
  },

  {
    slug: "monetization-readiness-checker",
    name: "Monetization Readiness Checker",
    description: "Full YouTube Partner Program eligibility audit, revenue potential estimation, and alternative monetization vectors.",
    category: "Strategy & Planning",
    isPro: true,
    badge: "Pro",
    iconName: "DollarSign",
    fields: [
      {
        id: "subscribers",
        label: "Current Subscriber Count",
        type: "number",
        placeholder: "e.g., 780",
        required: true,
      },
      {
        id: "watchHours",
        label: "Valid Public Watch Hours (Past 12 Months)",
        type: "number",
        placeholder: "e.g., 2,400",
        required: true,
      },
      {
        id: "shortsViews",
        label: "Public Shorts Views in Last 90 Days (Optional)",
        type: "number",
        placeholder: "e.g., 150000",
      },
      {
        id: "niche",
        label: "Channel Niche (Determines Estimated RPM)",
        type: "select",
        defaultValue: "Finance & Investing ($15 - $35 RPM)",
        options: [
          { label: "Finance & Investing ($15 - $35 RPM)", value: "Finance ($20 RPM)" },
          { label: "Tech, Software & AI ($8 - $18 RPM)", value: "Tech ($12 RPM)" },
          { label: "Education & Productivity ($5 - $12 RPM)", value: "Education ($8 RPM)" },
          { label: "Gaming & Entertainment ($2 - $6 RPM)", value: "Gaming ($3 RPM)" },
          { label: "Lifestyle, Vlogs & Fitness ($3 - $8 RPM)", value: "Lifestyle ($5 RPM)" },
        ],
      },
    ],
    sampleOutput: `## 💰 MONETIZATION READINESS AUDIT

### 1. 📊 YPP Eligibility Scorecard:
* **Subscriber Requirement:** **780 / 1,000** (78% achieved — **220 subs to go**)
* **Watch Hours Requirement:** **2,400 / 4,000 hrs** (60% achieved — **1,600 hrs to go**)
* **Overall Status:** 🟡 **IN PROGRESS (Estimated 45-60 days to eligibility)**

### 2. 💵 Projected AdSense Revenue (Post-Monetization):
* Estimated RPM for your niche: **$12.00 / 1,000 views**
* At 50,000 monthly views: **~$600 / month**
* At 200,000 monthly views: **~$2,400 / month**

### 3. 🚀 3 Immediate Revenue Streams (Don't Wait for 1,000 Subs!):
1. **Affiliate Link Integration:** Place curated software/gear links in all descriptions. Channels with 500 loyal subs often earn $200-$500/mo via affiliate links.
2. **Digital Template / Cheatsheet:** Sell a $9 Notion or PDF guide. With just 1% conversion from 800 views, that's $72/video.
3. **1-on-1 Consultation / Audits:** Offer 30-minute advisory calls for $50 via Cal.com.`,
  },

  {
    slug: "seo-keyword-research",
    name: "SEO Keyword Research Assistant",
    description: "High-volume, low-competition keyword clusters, search intent breakdown, and target title variations.",
    category: "SEO & Optimization",
    isPro: true,
    badge: "Pro",
    iconName: "Search",
    fields: [
      {
        id: "seedKeyword",
        label: "Seed Keyword or Broad Topic",
        type: "text",
        placeholder: "e.g., Python web scraping, Home coffee brewing, Figma tutorials",
        required: true,
      },
      {
        id: "difficultyTarget",
        label: "Channel Size / Competition Appetite",
        type: "select",
        defaultValue: "Low Competition (High chance to rank for new channels)",
        options: [
          { label: "Low Competition (High chance to rank for new channels)", value: "Low Competition" },
          { label: "Balanced Growth (Moderate volume + clear search intent)", value: "Balanced" },
          { label: "High Volume Head Terms (Established channels)", value: "High Volume" },
        ],
      },
      {
        id: "audienceLevel",
        label: "Audience Skill Level",
        type: "select",
        defaultValue: "Complete Beginners",
        options: [
          { label: "Complete Beginners", value: "Beginners" },
          { label: "Intermediate Practitioners", value: "Intermediate" },
          { label: "Advanced / Professional", value: "Advanced" },
        ],
      },
    ],
    sampleOutput: `### 🎯 KEYWORD CLUSTERING & OPPORTUNITY REPORT

#### 🔑 Primary Low-Competition Cluster:
* **"python web scraping for beginners 2025"** *(Search Intent: Step-by-step tutorial)*
* **"how to scrape websites using python without getting blocked"** *(Intent: Pain-point solution)*
* **"beautifulsoup vs playwright python"** *(Intent: Direct technical comparison)*
* **"python web scraping project portfolio"** *(Intent: Job seeker utility)*

#### 📈 Search Intent Tier Breakdown:
1. **Tier 1 (Problem-Aware):** *"how to extract data from website to excel python"*
2. **Tier 2 (Tool-Specific):** *"selenium web scraping tutorial 2025"*
3. **Tier 3 (Beginner Milestone):** *"build your first web scraper in 10 minutes"*

#### 🏆 3 High-Rank Video Titles:
1. **Python Web Scraping for Beginners (Step-by-Step 2025 Guide)**
2. **How to Scrape ANY Website in Python (Without Getting Blocked)**
3. **I Built a Web Scraper in 10 Minutes (Beginner Python Project)**`,
  },
];

export const CATEGORIES = [
  "All",
  "Ideation & Titles",
  "SEO & Optimization",
  "Thumbnail & Design",
  "Scripting & Content",
  "Strategy & Planning",
  "Community & Growth",
] as const;

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS.find((tool) => tool.slug === slug);
}
