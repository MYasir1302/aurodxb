import { Redis } from "@upstash/redis";
import crypto from "crypto";

// Check Upstash configuration
const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

let redisClient: Redis | null = null;
let hasWarnedUpstashMissing = false;

if (redisUrl && redisToken) {
  try {
    redisClient = new Redis({
      url: redisUrl,
      token: redisToken,
    });
  } catch (err) {
    console.warn("[AuroDxb Redis] Failed to initialize Upstash Redis client. Falling back to in-memory.", err);
  }
}

function warnUpstashOnce() {
  if (!redisClient && !hasWarnedUpstashMissing) {
    console.warn(
      "[AuroDxb] UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is missing. Using in-memory fallback. Limits will not persist across server restarts."
    );
    hasWarnedUpstashMissing = true;
  }
}

export function hashString(str: string): string {
  return crypto.createHash("sha256").update(str).digest("hex");
}

export function getClientIp(headers: Headers): string {
  const xForwardedFor = headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }
  const realIp = headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

export function getUtcDateString(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

// In-Memory Storage Fallbacks
interface MemoryCounter {
  count: number;
  expiresAt: number;
}
const memoryDailyStore = new Map<string, MemoryCounter>();
const memoryMinuteStore = new Map<string, MemoryCounter>();
const memoryHourlyStore = new Map<string, MemoryCounter>();
const memoryWaitlistSet = new Set<string>();
const memoryContactList: any[] = [];

/**
 * Checks the daily limit: 10 free generations per day per IP.
 * Key = SHA-256 hash of (visitor IP + UTC date)
 */
export async function checkDailyGenerationLimit(ip: string): Promise<{
  allowed: boolean;
  remaining: number;
  totalLimit: number;
  resetTime: string;
}> {
  warnUpstashOnce();
  const utcDate = getUtcDateString();
  const keyHash = hashString(`${ip}:${utcDate}`);
  const redisKey = `daily:${keyHash}`;
  const totalLimit = 10;
  const resetTime = "midnight UTC (00:00 UTC)";

  if (redisClient) {
    try {
      const count = await redisClient.incr(redisKey);
      if (count === 1) {
        // Expire after 24 hours
        await redisClient.expire(redisKey, 86400);
      }

      if (count > totalLimit) {
        return {
          allowed: false,
          remaining: 0,
          totalLimit,
          resetTime,
        };
      }

      return {
        allowed: true,
        remaining: Math.max(0, totalLimit - count),
        totalLimit,
        resetTime,
      };
    } catch (err) {
      console.warn("[AuroDxb Redis Error in daily limit, falling back to memory]:", err);
    }
  }

  // In-memory fallback
  const now = Date.now();
  const existing = memoryDailyStore.get(keyHash);

  if (!existing || now > existing.expiresAt) {
    memoryDailyStore.set(keyHash, {
      count: 1,
      expiresAt: now + 86400 * 1000,
    });
    return {
      allowed: true,
      remaining: totalLimit - 1,
      totalLimit,
      resetTime,
    };
  }

  if (existing.count >= totalLimit) {
    return {
      allowed: false,
      remaining: 0,
      totalLimit,
      resetTime,
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: Math.max(0, totalLimit - existing.count),
    totalLimit,
    resetTime,
  };
}

/**
 * Gets remaining daily generations without incrementing (for initial page load inspection)
 */
export async function getRemainingDailyGenerations(ip: string): Promise<number> {
  warnUpstashOnce();
  const utcDate = getUtcDateString();
  const keyHash = hashString(`${ip}:${utcDate}`);
  const redisKey = `daily:${keyHash}`;
  const totalLimit = 10;

  if (redisClient) {
    try {
      const val = await redisClient.get<number>(redisKey);
      const count = val ? Number(val) : 0;
      return Math.max(0, totalLimit - count);
    } catch {
      // ignore
    }
  }

  const existing = memoryDailyStore.get(keyHash);
  if (existing && Date.now() <= existing.expiresAt) {
    return Math.max(0, totalLimit - existing.count);
  }
  return totalLimit;
}

/**
 * Per-minute limit: 6 requests per minute per IP to protect Gemini quota
 */
export async function checkMinuteRateLimit(ip: string): Promise<{ allowed: boolean }> {
  warnUpstashOnce();
  const keyHash = hashString(`min:${ip}`);
  const redisKey = `rate:min:${keyHash}`;
  const limit = 6;

  if (redisClient) {
    try {
      const count = await redisClient.incr(redisKey);
      if (count === 1) {
        await redisClient.expire(redisKey, 60);
      }
      return { allowed: count <= limit };
    } catch (err) {
      console.warn("[AuroDxb Redis Error in minute limit]:", err);
    }
  }

  // In-memory fallback
  const now = Date.now();
  const existing = memoryMinuteStore.get(keyHash);

  if (!existing || now > existing.expiresAt) {
    memoryMinuteStore.set(keyHash, { count: 1, expiresAt: now + 60 * 1000 });
    return { allowed: true };
  }

  if (existing.count >= limit) {
    return { allowed: false };
  }

  existing.count += 1;
  return { allowed: true };
}

/**
 * Rate limit per action per hour (e.g. waitlist: 5/hr, contact: 3/hr)
 */
export async function checkHourlyActionLimit(
  ip: string,
  action: string,
  maxPerHour: number
): Promise<{ allowed: boolean }> {
  warnUpstashOnce();
  const keyHash = hashString(`hour:${action}:${ip}`);
  const redisKey = `rate:hour:${action}:${keyHash}`;

  if (redisClient) {
    try {
      const count = await redisClient.incr(redisKey);
      if (count === 1) {
        await redisClient.expire(redisKey, 3600);
      }
      return { allowed: count <= maxPerHour };
    } catch (err) {
      console.warn(`[AuroDxb Redis Error in hourly limit ${action}]:`, err);
    }
  }

  // In-memory fallback
  const now = Date.now();
  const existing = memoryHourlyStore.get(keyHash);

  if (!existing || now > existing.expiresAt) {
    memoryHourlyStore.set(keyHash, { count: 1, expiresAt: now + 3600 * 1000 });
    return { allowed: true };
  }

  if (existing.count >= maxPerHour) {
    return { allowed: false };
  }

  existing.count += 1;
  return { allowed: true };
}

/**
 * Store email in Upstash Redis Set ("waitlist") with duplicate protection
 */
export async function saveWaitlistEmail(
  email: string,
  plan = "Pro Creator"
): Promise<{ isNew: boolean }> {
  warnUpstashOnce();
  const normalizedEmail = email.trim().toLowerCase();

  if (redisClient) {
    try {
      // SADD returns 1 if added, 0 if already existed
      const added = await redisClient.sadd("waitlist", normalizedEmail);
      // Also record metadata in a hash if helpful
      await redisClient.hset(`waitlist:meta:${normalizedEmail}`, {
        plan,
        createdAt: new Date().toISOString(),
      });
      return { isNew: added === 1 };
    } catch (err) {
      console.warn("[AuroDxb Redis Error saving waitlist]:", err);
    }
  }

  const isNew = !memoryWaitlistSet.has(normalizedEmail);
  memoryWaitlistSet.add(normalizedEmail);
  return { isNew };
}

/**
 * Store contact message in Upstash Redis List ("contact")
 */
export async function saveContactSubmission(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
  createdAt: string;
}): Promise<void> {
  warnUpstashOnce();

  if (redisClient) {
    try {
      await redisClient.lpush("contact", JSON.stringify(data));
      return;
    } catch (err) {
      console.warn("[AuroDxb Redis Error saving contact]:", err);
    }
  }

  memoryContactList.unshift(data);
}
