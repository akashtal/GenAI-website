"use client"

import { usePathname } from "next/navigation"
import { SITE, trackEvent, whatsappLink } from "@/lib/site"

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.72C5.79.72.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.5l5.9-1.55a11.3 11.3 0 0 0 5.43 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  )
}

export { WhatsAppIcon }

/**
 * Persistent conversion layer:
 *  - desktop: floating WhatsApp bubble
 *  - mobile: sticky bottom bar with "Call" + "WhatsApp" + "Get a quote"
 */
export function WhatsAppFloat() {
  const pathname = usePathname()
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/login")) return null

  return (
    <>
      {/* Desktop bubble */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("contact_whatsapp", { location: "floating_button", page: pathname })}
        className="hidden md:flex fixed bottom-6 right-6 z-[60] items-center gap-2 rounded-full bg-[#15803d] pl-4 pr-5 py-3 text-white font-semibold shadow-[0_10px_30px_-5px_rgba(21,128,61,0.5)] hover:bg-[#166534] hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="text-sm">Chat on WhatsApp</span>
      </a>

      {/* Mobile sticky action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-[60] border-t border-white/10 bg-black/85 backdrop-blur-xl px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={SITE.phoneHref}
            onClick={() => trackEvent("contact_call", { location: "mobile_bar", page: pathname })}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 py-3 text-sm font-medium text-white"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("contact_whatsapp", { location: "mobile_bar", page: pathname })}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#15803d] py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="/contact#quote"
            onClick={() => trackEvent("cta_click", { location: "mobile_bar", page: pathname })}
            className="flex items-center justify-center rounded-xl bg-white py-3 text-sm font-semibold text-black"
          >
            Free quote
          </a>
        </div>
      </div>
    </>
  )
}
