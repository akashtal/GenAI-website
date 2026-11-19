import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import AuroraBg from "@/components/aurora-bg"

// Lightweight server-rendered shell for content pages (pricing, legal): same look as the rest of the
// site, but no client-side animation on the content, so all text is in the initial HTML.
export function StaticPageShell({
  crumb,
  eyebrow,
  title,
  intro,
  children,
}: {
  crumb: string
  eyebrow?: string
  title: string
  intro?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div className="fixed inset-0 h-full w-full opacity-60" aria-hidden="true">
        <AuroraBg colorStops={["#1e293b", "#0f766e", "#1e3a5f"]} amplitude={1.0} blend={0.5} speed={0.5} />
      </div>
      <GlassmorphismNav />
      <main className="relative z-10 px-4 pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-xs text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-white/80" aria-current="page">{crumb}</span>
          </nav>
          {eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300/80">{eyebrow}</p>}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
          {intro && <div className="mt-5 text-lg leading-relaxed text-white/75">{intro}</div>}
          <div className="mt-12">{children}</div>
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
