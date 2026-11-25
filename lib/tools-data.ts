import { ToolDefinition } from "./types";

const currentYear = new Date().getFullYear();

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
        placeholder: `e.g., learn coding ${currentYear}`,
        helpText: "Helps anchor titles for YouTube search traffic as well as browse recommendations.",
      },
    ],
    sampleOutput: `1. How to Learn to Code from Scratch
Clear, realistic roadmap designed for complete beginners.

2. Stop Learning to Code Like This
Highlights common beginner pitfalls that waste valuable study time.

3. The Coding Roadmap I Wish I Had
Shares helpful hindsight to streamline the self-taught learning journey.

4. 3 Tools That Make Learning Code Easier
Focuses on simple, actionable recommendations for new developers.

5. What It Really Takes to Learn Coding
Grounded overview addressing common beginner questions and challenges.

6. The Daily Routine for Self-Taught Coders
Practical scheduling advice for building consistent daily coding habits.

7. Which Programming Language Should You Start With?
Direct guide helping beginners choose their first language logically.

8. How to Build Your First Web App Fast
Action-oriented project guide to keep learner momentum high.

9. Why Most Self-Taught Coders Struggle
Identifies key study roadblocks and how to push through them.

10. The Realistic Path to a Junior Developer Role
Honest milestone breakdown from first line of code to portfolio.`,
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
        placeholder: "e.g., Ultimate Productivity Setup for Notion",
        required: true,
      },
      {
        id: "keyPoints",
        label: "Key Topics Covered (or bullet points)",
        type: "textarea",
        placeholder: "e.g.,\n- Dashboard layout\n- Automated task manager\n- Habit tracker widget\n- Template walkthrough",
        required: true,
      },
      {
        id: "cta",
        label: "Primary Call to Action",
        type: "select",
        defaultValue: "Subscribe + Check Resources",
        options: [
          { label: "Subscribe + Check Resources", value: "Subscribe + Check Resources" },
          { label: "Join Newsletter / Community", value: "Join Newsletter" },
          { label: "Check Out Project Links", value: "Check Out Project Links" },
          { label: "Comment and Share Thoughts", value: "Comment Discussion" },
        ],
      },
      {
        id: "socialLinks",
        label: "Socials / External Links (Optional)",
        type: "text",
        placeholder: "e.g., Twitter: @handle | Website: yoursite.com",
      },
    ],
    sampleOutput: `In this video, we break down an efficient Notion workspace designed to keep daily projects organized without unnecessary complexity. From simple task boards to habit tracking, this system keeps your schedule clear.

TIMESTAMPS:
00:00 - Introduction & Workspace Overview
01:30 - Core Dashboard Structure
04:15 - Task & Project Management
07:20 - Habit Tracking Setup
09:45 - Mobile Optimization Tips
11:10 - Summary & Next Steps

RESOURCES & LINKS:
• Template Link: [Add your template link here]
• Website: [Your website link]

CONNECT:
• Twitter / X: @YourHandle
• YouTube: Subscribe for weekly workflow tutorials

#Notion #Productivity #Organization #TimeManagement #Workflow`,
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
        placeholder: "e.g., Best Budget Camera for YouTube Beginners",
        required: true,
      },
      {
        id: "primaryKeyword",
        label: "Primary Keyword Focus (Optional)",
        type: "text",
        placeholder: "e.g., budget youtube camera",
      },
    ],
    sampleOutput: `budget youtube camera, best camera for youtube, beginner youtube camera, cheap video camera, budget 4k camera, beginner youtube gear, cheap vlogging camera, youtube gear guide, beginner camera setup, budget creator setup, how to start youtube on a budget, video camera guide, camera for video beginners`,
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
        placeholder: "e.g., Personal Finance, Web Development, Fitness",
        required: true,
      },
      {
        id: "format",
        label: "Video Format",
        type: "select",
        defaultValue: "YouTube Shorts",
        options: [
          { label: "YouTube Shorts", value: "Shorts" },
          { label: "Long-Form Video", value: "Long-Form" },
          { label: "Podcast / Discussion", value: "Podcast" },
        ],
      },
    ],
    sampleOutput: `#Shorts #PersonalFinance #MoneyTips #Budgeting #InvestingTips #FinancialHabits #SaveMoney #WealthBuilding #LearnOnYouTube`,
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
        placeholder: "e.g., Home fitness, Web development, Coffee brewing",
        required: true,
      },
      {
        id: "audience",
        label: "Target Audience",
        type: "text",
        placeholder: "e.g., Busy professionals, College students, Beginners",
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
          { label: "Vlog / Day in Life", value: "Vlog" },
        ],
      },
    ],
    sampleOutput: `1. The 15-Minute Home Workout That Works
Hook: Why consistency beats 2-hour gym sessions.
Visual: Split screen comparing a simple circuit with an overcrowded gym.

2. Testing 3 Popular Fitness Gadgets
Hook: Do expensive fitness trackers actually improve your workouts?
Visual: Close-up side-by-side comparison of 3 tracking devices.

3. The Beginner's Guide to Weekly Meal Prep
Hook: How to prep five healthy lunches in under ninety minutes.
Visual: Organized glass containers laid out on a kitchen counter.

4. 5 Exercise Mistakes Slowing Down Progress
Hook: The common posture errors that keep you from seeing results.
Visual: Side profile graphic highlighting correct vs incorrect form.

5. A Realistic Morning Routine for Busy People
Hook: An accessible 20-minute morning routine that boosts daily energy.
Visual: Clean sunrise time-lapse paired with simple stretching.

6. Building a Home Gym on a Sensible Budget
Hook: The only three pieces of equipment you need to train at home.
Visual: Minimalist dumbbell and resistance band setup in a corner.

7. How Much Water Do You Actually Need Every Day?
Hook: Debunking popular hydration myths with practical guidelines.
Visual: Labeled water bottle alongside an easy daily milestone checklist.

8. The 10-Minute Desk Mobility Routine
Hook: Simple stretches to relieve neck and lower-back tension at work.
Visual: Office worker demonstrating subtle stretches at a standing desk.

9. Why Calorie Counting Fails Most Beginners
Hook: Focus on nutrient density instead of obsessing over every number.
Visual: Balanced whole-food plate contrasted with processed snack bar labels.

10. How to Return to Exercise After a Long Break
Hook: A gentle 2-week progression plan to rebuild movement habits safely.
Visual: Calendar graphic marking small, achievable daily exercise blocks.

11. The Science of Rest Days and Recovery
Hook: Why muscles grow when you sleep, not when you lift.
Visual: Sleep tracking chart paired with simple rest-day guidelines.

12. 3 Low-Impact Cardio Exercises for Joint Health
Hook: Get cardiovascular benefits without heavy impact on your knees.
Visual: Demonstration of incline walking, rowing, and cycling.

13. How to Stay Consistent When Motivation Fades
Hook: Replacing fleeting motivation with automatic friction-free systems.
Visual: Workout clothes laid out next to shoes by the bed.

14. Healthy Fast Meals for Late Work Nights
Hook: Three wholesome 10-minute dinners when you are too tired to cook.
Visual: One-pan skillet meal coming together in real time.

15. Tracking Fitness Progress Without the Scale
Hook: Why body measurements, energy levels, and strength tell the real story.
Visual: Tape measure and notebook next to running shoes.`,
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
        placeholder: "e.g., Why learning Python is simpler than you think",
        required: true,
      },
      {
        id: "angle",
        label: "Primary Psychological Angle",
        type: "select",
        defaultValue: "Curiosity & Clarity",
        options: [
          { label: "Curiosity & Clarity", value: "Curiosity & Clarity" },
          { label: "Warning & Caution", value: "Warning & Caution" },
          { label: "Bold Statement", value: "Bold Statement" },
          { label: "Before & After Transformation", value: "Transformation" },
        ],
      },
    ],
    sampleOutput: `CURIOSITY:
- START HERE
- THE REAL TRUTH
- THIS CHANGES IT
- HIDDEN STEP

WARNING:
- DON'T DO THIS
- AVOID THIS TRAP
- STOP NOW
- BIG MISTAKE

BOLD STATEMENTS:
- IT WORKS
- NEW WAY
- SO MUCH FASTER
- ANYONE CAN`,
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
        placeholder: "e.g., Web development, Coffee brewing, Home woodworking",
        required: true,
      },
      {
        id: "style",
        label: "Name Aesthetic / Style",
        type: "select",
        defaultValue: "Modern & Clean",
        options: [
          { label: "Modern & Clean", value: "Modern" },
          { label: "Educational & Authority", value: "Authority" },
          { label: "Creative & Playful", value: "Creative" },
          { label: "Minimalist", value: "Minimalist" },
        ],
      },
      {
        id: "creatorName",
        label: "Your First Name or Handle (Optional)",
        type: "text",
        placeholder: "e.g., Alex, Dave, Maya",
      },
    ],
    sampleOutput: `MODERN:
- CodeCraft Lab (@CodeCraftLab)
- SyntaxForge (@SyntaxForge)
- DevPulse HQ (@DevPulseHQ)
- NextStack Media (@NextStackMedia)

AUTHORITY:
- The Developer Blueprint (@DeveloperBlueprint)
- Applied Web Institute (@AppliedWebInstitute)
- Full Stack Foundations (@FullStackFoundations)
- Software Craftsmanship (@SoftwareCraftsmanship)

CREATIVE:
- Byte & Pixel (@ByteAndPixel)
- The Coffee Coder (@TheCoffeeCoder)
- Terminal Tales (@TerminalTales)
- Script & Screen (@ScriptAndScreen)

MINIMALIST:
- DevBase (@DevBase)
- CodeRoom (@CodeRoom)
- DevLog (@DevLogHQ)
- StackHQ (@StackHQ)`,
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
        placeholder: "e.g., 'Loved this video! How do you stay focused when working remotely?'",
        required: true,
      },
      {
        id: "tone",
        label: "Reply Tone",
        type: "select",
        defaultValue: "Engaging & Friendly",
        options: [
          { label: "Engaging & Friendly", value: "Engaging" },
          { label: "Short & Appreciative", value: "Short" },
          { label: "Question-Prompting", value: "Question" },
          { label: "Witty & Lighthearted", value: "Witty" },
          { label: "Diplomatic / Helpful", value: "Diplomatic" },
        ],
      },
      {
        id: "creatorContext",
        label: "Context / Quick thought (Optional)",
        type: "text",
        placeholder: "e.g., I block notifications in the morning",
      },
    ],
    sampleOutput: `1. Thoughtful & Insightful
Thanks so much for watching! For me, having a dedicated work corner and leaving my phone in another room during morning focus blocks makes the biggest difference. Hope that helps!

2. Short & Friendly
Really appreciate the kind words! Consistency and quiet morning blocks are my go-to.

3. Discussion-Starter
Thank you! Setting strict morning boundaries was huge for me. What has been the toughest distraction for you when working from home?

4. Witty & Lighthearted
A dedicated workspace, good noise-cancelling headphones, and way too much coffee!

5. Community Highlight
Great question! Going to address home office focus setups in more detail in an upcoming community post. Thanks for tuning in!`,
  },

  // --- PRO TOOLS (Sample Outputs Only - Forms Disabled in Preview) ---
  {
    slug: "video-script-writer",
    name: "Full Video Script Writer",
    description: "Complete end-to-end video script: retention-hook intro, body sections with pacing cues, retention tips, and outro.",
    category: "Scripting & Content",
    isPro: true,
    badge: "Pro (Coming Soon)",
    iconName: "Video",
    fields: [
      {
        id: "topic",
        label: "Video Title / Premise",
        type: "text",
        placeholder: "e.g., How to edit YouTube videos faster",
        defaultValue: "How to edit YouTube videos faster",
      },
      {
        id: "length",
        label: "Target Video Duration",
        type: "select",
        defaultValue: "8-10 Minutes",
        options: [
          { label: "5-7 Minutes", value: "5-7 min" },
          { label: "8-10 Minutes", value: "8-10 min" },
          { label: "12-15 Minutes", value: "12-15 min" },
        ],
      },
      {
        id: "tone",
        label: "Presenter Tone",
        type: "select",
        defaultValue: "Practical & Clear",
        options: [
          { label: "Practical & Clear", value: "Practical" },
          { label: "Engaging & Fast-Paced", value: "Fast" },
          { label: "Tutorial & Step-by-Step", value: "Tutorial" },
        ],
      },
    ],
    sampleOutput: `VIDEO SCRIPT: How to Edit YouTube Videos Faster

[0:00 - 0:30] HOOK & PROBLEM
VISUAL: Screen recording showing timeline with dozens of cuts, scrubbed through at 2x speed.
PRESENTER: "If you spend ten hours editing a ten-minute video, you are not alone. But the bottleneck usually is not your editing software. It is your project organization before you make the first cut. Today, we are breaking down a four-step editing workflow that cuts timeline editing time in half."

[0:30 - 2:00] STEP 1: PRE-EDIT PREPARATION
VISUAL: B-roll showing folder structure on desktop (Footage, Audio, Graphics, Exports).
PRESENTER: "Before you drag a single clip onto your timeline, organize your media in a standardized project template. Sorting talking head clips and B-roll into labeled bins eliminates searching mid-edit."

[2:00 - 4:30] STEP 2: THE ROUGH CUT WITH TEXT-BASED EDITING
VISUAL: Timeline demonstration using ripple delete keyboard shortcuts.
PRESENTER: "Do your first pass using ripple delete shortcuts mapped to your left hand. Never color grade, add sound effects, or adjust volume on your first pass. Your only goal is cutting dead air and mistakes."

[4:30 - 6:30] STEP 3: B-ROLL AND PACING
VISUAL: Timeline showing B-roll placed on V2 track directly over talking-head pauses.
PRESENTER: "Add secondary footage only where the concept benefits from visual demonstration. Keep each B-roll cut between two and four seconds to maintain natural pacing."

[6:30 - 8:00] STEP 4: SOUND DESIGN & EXPORT
VISUAL: Audio track mixer showing dialogue normalized to -14 LUFS and background music at -26 dB.
PRESENTER: "Set your master dialogue levels first, then bring music underneath. Use export presets so you never have to re-enter render settings."

[8:00 - 8:30] OUTRO
PRESENTER: "Check the description for our free project folder checklist, and subscribe for more practical editing guides."`,
  },

  {
    slug: "content-calendar-generator",
    name: "30-Day Content Calendar",
    description: "Full 30-day publishing schedule with publishing dates, video themes, hooks, and formats (Long-form vs Shorts).",
    category: "Strategy & Planning",
    isPro: true,
    badge: "Pro (Coming Soon)",
    iconName: "Calendar",
    fields: [
      {
        id: "niche",
        label: "Channel Niche & Content Focus",
        type: "text",
        placeholder: "e.g., Personal Productivity & Time Management",
        defaultValue: "Personal Productivity & Time Management",
      },
      {
        id: "frequency",
        label: "Publishing Cadence",
        type: "select",
        defaultValue: "1 Long-Form + 2 Shorts per week",
        options: [
          { label: "1 Long-Form + 2 Shorts per week", value: "1L + 2S" },
          { label: "2 Long-Form per week", value: "2L" },
          { label: "Daily Shorts", value: "Daily Shorts" },
        ],
      },
    ],
    sampleOutput: `30-DAY CONTENT CALENDAR OUTLINE

WEEK 1:
- Day 2 (Long-Form): "The 3 Habits That Simplified My Daily Routine" (Focus: Evergreen Search)
- Day 4 (Short): "One Morning Habit to Stop Today" (Focus: Quick Tip)
- Day 6 (Short): "How I Organize Weekly Priorities" (Focus: Tool Walkthrough)

WEEK 2:
- Day 9 (Long-Form): "The Problem With Most To-Do Lists" (Focus: Problem & Solution)
- Day 11 (Short): "Time Blocking in 30 Seconds" (Focus: Visual Guide)
- Day 13 (Short): "Desk Setup Essentials" (Focus: Workspace Organization)

WEEK 3:
- Day 16 (Long-Form): "How to Maintain Focus in a Distracting World" (Focus: In-Depth Guide)
- Day 18 (Short): "The 2-Minute Rule Explained" (Focus: Actionable Advice)
- Day 20 (Short): "My Evening Shutdown Routine" (Focus: Work-Life Balance)

WEEK 4:
- Day 23 (Long-Form): "Monthly Review Checklist: How I Plan Ahead" (Focus: Practical Workflow)
- Day 25 (Short): "3 Digital Decluttering Steps" (Focus: Quick Win)
- Day 27 (Short): "Book Recommendations for Focus" (Focus: Curated Suggestions)`,
  },

  {
    slug: "channel-audit",
    name: "Channel Audit & Growth Plan",
    description: "In-depth audit of channel performance bottlenecks with a step-by-step 90-day growth roadmap.",
    category: "Strategy & Planning",
    isPro: true,
    badge: "Pro (Coming Soon)",
    iconName: "BarChart3",
    fields: [
      {
        id: "channelName",
        label: "Channel Name & Niche",
        type: "text",
        placeholder: "e.g., WebDevDaily (Tutorials & coding tips)",
        defaultValue: "WebDevDaily (Tutorials & coding tips)",
      },
      {
        id: "stats",
        label: "Current Metrics (Subscribers, Average Views, CTR, AVD)",
        type: "textarea",
        placeholder: "e.g., Uploading once a week, views plateauing after 48 hours",
        defaultValue: "Uploading once a week, views plateauing after 48 hours",
      },
    ],
    sampleOutput: `CHANNEL AUDIT & GROWTH PLAN (SAMPLE)

1. PACKAGING DIAGNOSTIC
- Titles: Simplify vocabulary. Replace technical jargon with the tangible outcome the viewer will achieve.
- Thumbnails: Limit text to 3 high-contrast words. Ensure subject face or focal object stands out on mobile displays.

2. RETENTION REVIEW
- First 30 Seconds: Cut channel animated intros and greeting filler. Open immediately with the core problem.
- Mid-Roll Engagement: Insert a visual transition or screen reset around the 3-minute mark to retain attention.

3. 90-DAY STRATEGY
- Month 1: Update thumbnails and titles on top 5 best-performing evergreen videos.
- Month 2: Test 2 YouTube Shorts per week linking back to existing long-form guides.
- Month 3: Group related videos into topical playlists with clear progression.`,
  },

  {
    slug: "competitor-analysis",
    name: "Competitor Analysis Assistant",
    description: "Reverse-engineer top competitor strengths, uncover content gaps, and find unsaturated video opportunities.",
    category: "Strategy & Planning",
    isPro: true,
    badge: "Pro (Coming Soon)",
    iconName: "Crosshair",
    fields: [
      {
        id: "competitors",
        label: "Competitor Channels / Creators",
        type: "textarea",
        placeholder: "e.g., General tech review and coding channels",
        defaultValue: "General tech review and coding channels",
      },
      {
        id: "yourNiche",
        label: "Your Channel's Unique Angle",
        type: "text",
        placeholder: "e.g., Practical web dev tutorials for beginners",
        defaultValue: "Practical web dev tutorials for beginners",
      },
    ],
    sampleOutput: `COMPETITOR CONTENT GAP ANALYSIS (SAMPLE)

1. COMPETITOR STRENGTHS & COMMON PATTERNS
- High production value and fast-paced editing.
- Frequent coverage of breaking tech news and new framework releases.

2. COMMON AUDIENCE GAPS
- Many videos move too quickly for true beginners.
- Lack of follow-up projects showing how concepts work in complete applications.

3. RECOMMENDED CONTENT OPPORTUNITIES
- Complete, slow-paced beginner walkthroughs without skipped steps.
- Real-world debugging sessions showing how to resolve common error messages.
- Clear comparison guides: choosing tools based on real project needs.`,
  },

  {
    slug: "shorts-script-pack",
    name: "Shorts Script Pack (10 Scripts)",
    description: "10 viral 30-60s Short/Reel/TikTok scripts derived from a single topic, formatted with visual and audio cues.",
    category: "Scripting & Content",
    isPro: true,
    badge: "Pro (Coming Soon)",
    iconName: "Zap",
    fields: [
      {
        id: "topic",
        label: "Core Topic or Theme",
        type: "text",
        placeholder: "e.g., Time management habits for creators",
        defaultValue: "Time management habits for creators",
      },
    ],
    sampleOutput: `SHORTS SCRIPT PACK (SAMPLE)

SCRIPT 1: THE COMMON MISTAKE
- Duration: 30 seconds
- Visual: Close-up of messy desktop with 40 browser tabs open.
- Hook (0-3s): "If you have forty tabs open right now, here is a simple fix."
- Body (3-22s): "Tab overload happens when you use tabs as a to-do list. Close everything, pick one active project, and bookmark the rest."
- CTA (22-30s): "Subscribe for one daily focus habit."

SCRIPT 2: THE 2-MINUTE RULE
- Duration: 35 seconds
- Visual: Stopwatch timer running on smartphone.
- Hook (0-4s): "If a task takes under two minutes, do it right now."
- Body (4-25s): "Replying to an email, clearing your desk, or saving a project. Small tasks compound into massive mental clutter when postponed."
- CTA (25-35s): "Save this reminder for your morning routine."`,
  },

  {
    slug: "monetization-readiness-checker",
    name: "Monetization Readiness Checker",
    description: "Full YouTube Partner Program eligibility audit, revenue potential estimation, and alternative monetization vectors.",
    category: "Strategy & Planning",
    isPro: true,
    badge: "Pro (Coming Soon)",
    iconName: "DollarSign",
    fields: [
      {
        id: "subscribers",
        label: "Current Subscriber Count",
        type: "number",
        placeholder: "e.g., 750",
        defaultValue: "750",
      },
      {
        id: "watchHours",
        label: "Valid Public Watch Hours (Past 12 Months)",
        type: "number",
        placeholder: "e.g., 2500",
        defaultValue: "2500",
      },
    ],
    sampleOutput: `YOUTUBE PARTNER PROGRAM READINESS AUDIT (SAMPLE)

1. YPP ELIGIBILITY PROGRESS
- Subscribers: 750 / 1,000 (250 subscribers remaining)
- Watch Hours: 2,500 / 4,000 hours (1,500 hours remaining)
- Status: Progressing towards full AdSense partner requirements

2. PRACTICAL WATCH TIME LEVERS
- Create 10 to 12 minute tutorials on high-demand search topics.
- Build thematic playlists to encourage auto-play viewing sessions.
- Review audience retention curves to eliminate early video drop-offs.

3. ADDITIONAL REVENUE CHANNELS (PRE-PARTNER)
- Curated affiliate links for gear or software you legitimately use.
- Digital guides, checklists, or project starter templates.`,
  },

  {
    slug: "seo-keyword-research",
    name: "SEO Keyword Research Assistant",
    description: "High-volume, low-competition keyword clusters, search intent breakdown, and target title variations.",
    category: "SEO & Optimization",
    isPro: true,
    badge: "Pro (Coming Soon)",
    iconName: "Search",
    fields: [
      {
        id: "seedKeyword",
        label: "Seed Keyword or Broad Topic",
        type: "text",
        placeholder: "e.g., Python web development",
        defaultValue: "Python web development",
      },
    ],
    sampleOutput: `KEYWORD RESEARCH REPORT (SAMPLE)

1. LOW-COMPETITION SEARCH TERMS
- python web development for beginners
- build your first python web app
- flask vs fastapi for small projects

2. SEARCH INTENT BREAKDOWN
- Informational: understanding which python framework suits a specific project.
- Transactional: step-by-step tutorial guiding setup from terminal to browser.

3. RECOMMENDED VIDEO TITLES
- Python Web Development: Beginner Roadmap
- How to Build a Simple Web App with Python
- Flask vs FastAPI: Which Should You Learn First?`,
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
