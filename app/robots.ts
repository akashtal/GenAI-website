import { MetadataRoute } from "next"

const baseUrl = "https://genaidigitalsolution.com"
const PRIVATE = ["/admin", "/api/", "/login", "/private"]

// Search + AI answer engines we explicitly want to crawl the site, so the business can be
// cited in Google AI Overviews, ChatGPT search, Perplexity, Claude, Copilot and Apple Intelligence.
const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
  "DuckAssistBot",
  "meta-externalagent",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_AND_SEARCH_BOTS, allow: "/", disallow: PRIVATE },
      { userAgent: "*", allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
