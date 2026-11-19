"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { WhatsAppIcon } from "@/components/whatsapp-float"
import { trackEvent, whatsappLink } from "@/lib/site"

const techStack = [
  { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", alt: "Next.js" },
  { src: "https://cdn.worldvectorlogo.com/logos/typescript.svg", alt: "TypeScript" },
  { src: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg", alt: "React Native" },
  { src: "https://cdn.worldvectorlogo.com/logos/apple-13.svg", alt: "iOS" },
  { src: "https://www.vectorlogo.zone/logos/android/android-icon.svg", alt: "Android" },
  { src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", alt: "MongoDB" },
  { src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", alt: "AWS" },
  { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", alt: "Stripe" },
  { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", alt: "GitHub" },
  { src: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg", alt: "Google Analytics" },
]

// Keep these consistent with the About page – inconsistent numbers destroy trust.
const proof = [
  { value: "17+", label: "projects delivered" },
  { value: "15+", label: "happy clients" },
  { value: "4+", label: "years building" },
  { value: "24h", label: "reply guarantee" },
]

const services = ["Business websites", "Android & iOS apps", "CRM / ERP software", "AI chatbots & automation"]

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center px-4 pt-28 pb-16 md:pt-32">
      {/* w-full + min-w-0 stops the logo carousel from stretching this column wider than the phone screen */}
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-5xl text-center">
        {/* Location eyebrow – tells Google AND the visitor who/where we are in 1 second */}
        <p className="hero-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Software &amp; app development company · India &amp; worldwide
        </p>

        {/* H1 is rendered immediately (no opacity:0) so it can be the LCP element */}
        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Websites, apps &amp; AI software{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
            that bring you customers
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
          We design and build fast, good-looking digital products for growing businesses across India and around the world. You get a fixed quote, a weekly demo and support after launch.
        </p>

        <ul className="mx-auto mt-6 hidden max-w-2xl flex-wrap items-center justify-center gap-2 sm:flex" aria-label="Services">
          {services.map((s) => (
            <li key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300 sm:text-sm">
              {s}
            </li>
          ))}
        </ul>

        {/* Primary conversion actions */}
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact#quote"
            onClick={() => trackEvent("cta_click", { location: "hero_primary" })}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-black shadow-[0_8px_30px_-6px_rgba(255,255,255,0.35)] transition-all hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get a free quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("contact_whatsapp", { location: "hero" })}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
          <Link
            href="/projects"
            onClick={() => trackEvent("cta_click", { location: "hero_work" })}
            className="inline-flex items-center justify-center gap-1 rounded-full px-5 py-4 text-base font-medium text-slate-200 underline-offset-4 hover:text-white hover:underline"
          >
            See our work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-4 text-sm text-slate-400">Free 30-minute consultation · No obligation · Reply within 24 hours</p>

        {/* Proof strip */}
        <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {proof.map((p) => (
            <div key={p.label} className="bg-black/60 px-4 py-5 backdrop-blur-md">
              <dt className="sr-only">{p.label}</dt>
              <dd className="text-2xl font-bold text-white sm:text-3xl">{p.value}</dd>
              <dd className="mt-1 text-xs uppercase tracking-wider text-slate-400">{p.label}</dd>
            </div>
          ))}
        </dl>

        {/* Tech stack */}
        <div className="mt-14 w-full min-w-0 overflow-hidden">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-slate-500">Built with the same stack as top product teams</p>
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent" />
            <Carousel opts={{ loop: true, dragFree: true }} plugins={[AutoScroll({ speed: 0.8, stopOnInteraction: false })]}>
              <CarouselContent className="-ml-6 items-center">
                {techStack.map((tech) => (
                  <CarouselItem key={tech.alt} className="basis-1/4 pl-6 sm:basis-1/6 lg:basis-[12.5%]">
                    <div className="flex items-center justify-center p-2">
                      <img
                        src={tech.src}
                        alt={tech.alt}
                        width={36}
                        height={36}
                        loading="lazy"
                        decoding="async"
                        className="h-8 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
