// lib/rss/configer.js
// Central config so every RSS file agrees on locales, item limits, and URL shape.
// Deliberately mirrors lib/sitemap/configer.js so the two systems never drift apart.

import {
  SITE_URL,
  VALID_LOCALES,
  DEFAULT_LOCALE,
  toApiLocale,
  buildUrl,
} from "@/lib/sitemap/configer";

// Re-export so RSS files can import everything from one place if preferred.
export { SITE_URL, VALID_LOCALES, DEFAULT_LOCALE, toApiLocale, buildUrl };

// RSS 2.0 has no hard cap like Google's 50,000-url sitemap limit, but every
// feed reader / aggregator expects a feed to be "the latest N items", not
// your entire archive. 30-50 is the de-facto convention.
export const FEED_ITEM_LIMIT = 30;

// Which content types get a real RSS feed. Whales / ICO / coin-analysis are
// deliberately excluded — they're data listings, not editorial content, and
// most feed readers / Google News penalize or reject non-article feeds.
export const FEED_TYPES = ["news", "events"];

// Same revalidate windows your sitemap chunks already use for these two
// types — feeds reuse the SAME cached upstream fetch, so no extra API load.
export const REVALIDATE_NEWS_FEED = 300;     // 5 min, matches REVALIDATE_NEWS
export const REVALIDATE_EVENTS_FEED = 43200; // 12h,  matches REVALIDATE_EVENTS

// Builds the public RSS feed URL for a given type + locale.
// English stays unprefixed everywhere on this site, feeds follow the rule too.
export function buildFeedUrl(type, locale) {
  return locale === DEFAULT_LOCALE
    ? `${SITE_URL}/feeds/${type}.xml`
    : `${SITE_URL}/feeds/${type}/${locale}.xml`;
}