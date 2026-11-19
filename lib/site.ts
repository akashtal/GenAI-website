// Single source of truth for business contact details (NAP) used across the site,
// structured data, and CTAs. Keep these consistent with the Google Business Profile.
export const SITE = {
  name: "Gen AI Digital Solutions",
  url: "https://genaidigitalsolution.com",
  email: "info@genaidigitalsolution.com",
  phone: "+91 93653 39460",
  phoneHref: "tel:+919365339460",
  phoneAlternate: "+91 91811 88734",
  phoneAlternateHref: "tel:+919181188734",
  whatsappNumber: "919181188734",
  city: "Guwahati",
  region: "Assam",
  country: "India",
} as const

export function whatsappLink(message = "Hi! I found you on your website and I'd like a quote for a project.") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// Fire a GA4 / GTM conversion event (no-op if analytics hasn't loaded).
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return
  const w = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] }
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params)
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...params })
  }
}
