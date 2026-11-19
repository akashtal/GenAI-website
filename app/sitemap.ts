import { MetadataRoute } from "next"

const baseUrl = "https://genaidigitalsolution.com"

// Bump this when page content meaningfully changes. A constant date is better than `new Date()`,
// which tells Google every page changed on every crawl (and gets ignored as a result).
const LAST_UPDATED = new Date("2026-11-20")

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services/web-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/mobile-app-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/custom-software-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/crm-erp-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ai-solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/web-development-company-guwahati", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
