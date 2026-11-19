"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  Database,
  FileCheck,
  Globe,
  MapPin,
  MessagesSquare,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { WhatsAppIcon } from "@/components/whatsapp-float"
import { SITE, trackEvent, whatsappLink } from "@/lib/site"
import { SERVICES, SERVICE_MARKETS, type IconKey, type ServiceData } from "@/lib/services-data"

const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false })

const iconMap: Record<IconKey, LucideIcon> = {
  globe: Globe,
  code: Code,
  smartphone: Smartphone,
  database: Database,
  zap: Zap,
}

const assurances = [
  { icon: FileCheck, label: "Fixed quote before we start" },
  { icon: Clock, label: "Reply within 24 hours" },
  { icon: MessagesSquare, label: "Weekly demos & updates" },
  { icon: Globe, label: "Clients in India & abroad" },
]

export function ServicePageTemplate({ service }: { service: ServiceData }) {
  const HeroIcon = iconMap[service.icon] ?? Globe
  const related = SERVICES.filter((s) => s.slug !== service.slug)
  const waMessage = `Hi! I'm interested in ${service.name.toLowerCase()} and would like a quote.`

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div className="fixed inset-0 h-full w-full opacity-70" aria-hidden="true">
        <Aurora colorStops={["#1e293b", "#0f766e", "#1e3a5f"]} amplitude={1.0} blend={0.5} speed={0.5} />
      </div>
      <GlassmorphismNav />

      <main className="relative z-10">
        {/* ── Hero ── */}
        <section className="px-4 pb-16 pt-32 md:pt-40">
          <div className="mx-auto max-w-5xl text-center">
            {/* Breadcrumbs (mirrors BreadcrumbList schema) */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-1 text-xs text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/services" className="hover:text-white">Services</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/80" aria-current="page">{service.shortName}</span>
            </nav>

            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-200 sm:text-sm">
              <HeroIcon className="h-4 w-4" aria-hidden="true" />
              {service.badge}
            </p>

            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.headline}{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                {service.headlineAccent}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-white/75 md:text-xl">
              {service.subheadline}
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact#quote"
                onClick={() => trackEvent("cta_click", { location: "service_hero", service: service.slug })}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Get a free quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("contact_whatsapp", { location: "service_hero", service: service.slug })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {assurances.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-white/55">
                  <Icon className="h-4 w-4 text-emerald-300/80" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Quick answer (answer-first block for Google AI Overviews / ChatGPT / Perplexity) ── */}
        <section className="px-4 pb-8" aria-labelledby="summary-heading">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-10">
            <h2 id="summary-heading" className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              {service.name} at a glance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">{service.summary}</p>
            <p className="mt-4 text-base leading-relaxed text-white/65">{service.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs text-white/50">
                <MapPin className="h-3.5 w-3.5" /> Serving:
              </span>
              {SERVICE_MARKETS.map((m) => (
                <span key={m} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="px-4 py-16" aria-labelledby="features-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 id="features-heading" className="text-3xl font-bold text-white md:text-4xl">
                What our {service.shortName.toLowerCase()} service includes
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/55">End-to-end delivery – design, build, launch and support.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-colors hover:border-white/20"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-white/10">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why us ── */}
        <section className="px-4 py-16" aria-labelledby="why-heading">
          <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2">
            <div>
              <h2 id="why-heading" className="text-3xl font-bold text-white md:text-4xl">
                Why businesses choose {SITE.name}
              </h2>
              <p className="mt-5 leading-relaxed text-white/65">
                Whether you are a startup, a growing SME in India, or a company in the UK, USA or Middle East looking for a
                reliable offshore team, you get senior-level engineering, clear communication and pricing that makes sense.
              </p>
              {service.priceFrom && (
                <p className="mt-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                  {service.priceFrom.note} · fixed quote in 24h
                </p>
              )}
            </div>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                  <span className="text-sm text-white/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ – native <details> so answers are always in the HTML for search & AI crawlers ── */}
        <section className="px-4 py-16" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl">
            <h2 id="faq-heading" className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
              {service.name}: frequently asked questions
            </h2>
            <div className="space-y-3">
              {service.faqs.map((faq, i) => (
                <details
                  key={faq.question}
                  open={i === 0}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                    <h3 className="text-sm font-semibold text-white md:text-base">{faq.question}</h3>
                    <ChevronDown className="h-5 w-5 shrink-0 text-white/50 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="border-t border-white/10 px-6 pb-5 pt-4 text-sm leading-relaxed text-white/70 md:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[radial-gradient(60%_80%_at_0%_0%,rgba(52,211,153,0.15),transparent),radial-gradient(50%_60%_at_100%_100%,rgba(56,189,248,0.12),transparent)] p-8 text-center md:p-14">
            <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">{service.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">{service.ctaDescription}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact#quote" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black hover:bg-slate-100">
                Get a free quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-semibold text-white hover:bg-[#1ebe5b]">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
              </a>
            </div>
          </div>
        </section>

        {/* ── Related services (internal linking) ── */}
        <section className="px-4 pb-24 pt-8" aria-labelledby="related-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="related-heading" className="mb-6 text-xl font-semibold text-white">Other services</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => {
                const Icon = iconMap[r.icon]
                return (
                  <Link key={r.slug} href={`/services/${r.slug}`} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-white/25">
                    <Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                    <span className="flex-1 text-sm font-medium text-white">{r.name}</span>
                    <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
