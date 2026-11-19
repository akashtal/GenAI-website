import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { StaticPageShell } from "@/components/static-page-shell"
import { SITE, whatsappLink } from "@/lib/site"

// Every figure below is the business's own published pricing (also stated in the service-page FAQs).
// Where pricing is quoted case-by-case, the page says so instead of inventing a number.
const path = "/pricing"

export const metadata: Metadata = {
  title: "Website & App Development Cost in India",
  description:
    "How much a website, e-commerce store, mobile app, custom software or CRM costs in India, with typical timelines. Business websites from ₹15,000. Fixed quotes.",
  alternates: { canonical: path },
  openGraph: { url: path, title: "Website & App Development Pricing | Gen AI Digital Solutions" },
}

type Row = { service: string; price: string; minPrice?: number; timeline: string; includes: string; href: string }

const rows: Row[] = [
  { service: "Business website", price: "₹15,000 – ₹50,000", minPrice: 15000, timeline: "1–2 weeks", includes: "Mobile-first design, contact & WhatsApp enquiry, technical SEO, Google Business Profile help", href: "/services/web-development" },
  { service: "E-commerce store / web app", price: "From ₹50,000", minPrice: 50000, timeline: "3–6 weeks", includes: "Catalogue, cart, UPI/Razorpay payments, GST invoices, order tracking", href: "/services/web-development" },
  { service: "Simple mobile app (5–10 screens)", price: "₹50,000 – ₹1,50,000", minPrice: 50000, timeline: "4–8 weeks", includes: "Android & iOS from one codebase, store publishing", href: "/services/mobile-app-development" },
  { service: "App with logins, payments & backend", price: "From ₹2,00,000", minPrice: 200000, timeline: "8–16 weeks", includes: "User accounts, payments, admin panel, push notifications", href: "/services/mobile-app-development" },
  { service: "Automation tool", price: "From ₹30,000", minPrice: 30000, timeline: "2–4 weeks", includes: "Replace a manual spreadsheet or reporting process", href: "/services/custom-software-development" },
  { service: "SaaS / custom software platform", price: "From ₹1,50,000", minPrice: 150000, timeline: "Phased", includes: "Multi-user platform, dashboards, integrations", href: "/services/custom-software-development" },
  { service: "Custom CRM / ERP", price: "Quoted after free discovery", timeline: "CRM 6–10 weeks · ERP 3–6 months", includes: "Inventory, GST billing, HR & payroll, WhatsApp/Tally integration", href: "/services/crm-erp-development" },
  { service: "AI chatbot / AI automation", price: "Quoted after free discovery", timeline: "A few weeks for a focused chatbot", includes: "WhatsApp or website chatbot trained on your content, integrations", href: "/services/ai-solutions" },
]

const factors = [
  ["Number of pages or screens", "More unique pages and app screens mean more design and build time."],
  ["Features and integrations", "Payments, logins, booking, CRM, Tally or WhatsApp integrations add scope."],
  ["Content readiness", "Projects move faster (and cost less) when your text, photos and product data are ready."],
  ["Custom design vs. templates", "A fully custom design costs more than adapting a proven layout."],
  ["Ongoing support", "Hosting, maintenance and new features after launch are optional and quoted separately."],
]

const faqs = [
  {
    q: "How much does a website cost in India?",
    a: "A professional business website typically costs ₹15,000–₹50,000 depending on the number of pages and features. E-commerce stores and custom web apps start from ₹50,000. You get a fixed quote in writing before any work starts.",
  },
  {
    q: "How much does it cost to build a mobile app in India?",
    a: "A simple Android & iOS app with 5–10 screens typically costs ₹50,000–₹1,50,000. Apps with user accounts, payments and a custom backend start from around ₹2,00,000.",
  },
  {
    q: "Are your prices fixed?",
    a: "Yes. After a free consultation we send a written fixed-price quote with the scope and timeline. If you later ask for new features, we quote those separately before doing them.",
  },
  {
    q: "Do you charge international clients differently?",
    a: "International projects (UK, USA, UAE, Europe, Australia) are quoted in USD or GBP based on the same scope-driven approach.",
  },
  {
    q: "Do I own the website or app after it is built?",
    a: "Yes. Once the project is paid for, you own the code, design and content.",
  },
]

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE.url}${path}#webpage`,
        url: `${SITE.url}${path}`,
        name: "Website & App Development Pricing",
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "OfferCatalog",
        name: "Development services pricing",
        itemListElement: rows
          .filter((r) => r.minPrice)
          .map((r) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: r.service, url: `${SITE.url}${r.href}`, provider: { "@id": `${SITE.url}/#organization` } },
            priceSpecification: { "@type": "PriceSpecification", minPrice: r.minPrice, priceCurrency: "INR" },
          })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE.url}${path}` },
        ],
      },
    ],
  }

  return (
    <StaticPageShell
      crumb="Pricing"
      eyebrow="Pricing"
      title="How much do websites, apps and software cost?"
      intro={
        <p>
          Typical prices and timelines for projects with {SITE.name}. Every project gets a free consultation and a{" "}
          <strong className="text-white">fixed quote in writing</strong> before work starts – the ranges below help you budget.
          Prices are in Indian rupees; international projects are quoted in USD or GBP.
        </p>
      }
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section aria-labelledby="price-table">
        <h2 id="price-table" className="text-2xl font-bold text-white">Typical project prices</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Typical price and timeline per type of project</caption>
            <thead className="bg-white/[0.06] text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Project</th>
                <th scope="col" className="px-4 py-3 font-semibold">Typical price</th>
                <th scope="col" className="px-4 py-3 font-semibold">Timeline</th>
                <th scope="col" className="px-4 py-3 font-semibold">Typically includes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-black/40 text-white/75">
              {rows.map((r) => (
                <tr key={r.service}>
                  <th scope="row" className="px-4 py-4 font-medium text-white">
                    <Link href={r.href} className="underline-offset-4 hover:underline">{r.service}</Link>
                  </th>
                  <td className="whitespace-nowrap px-4 py-4 font-semibold text-emerald-300">{r.price}</td>
                  <td className="px-4 py-4">{r.timeline}</td>
                  <td className="px-4 py-4">{r.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="factors">
        <h2 id="factors" className="text-2xl font-bold text-white">What affects the price?</h2>
        <ul className="mt-6 space-y-3">
          {factors.map(([t, d]) => (
            <li key={t} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
              <span className="text-white/75"><strong className="text-white">{t}.</strong> {d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16" aria-labelledby="pricing-faq">
        <h2 id="pricing-faq" className="text-2xl font-bold text-white">Pricing questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-semibold text-white">{f.q}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-white/15 bg-white/[0.04] p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Get your exact price</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">Tell us what you need and get a fixed quote within 24 hours.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact#quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black hover:bg-slate-100">
            Get a free quote <ArrowRight className="h-5 w-5" />
          </Link>
          <a href={whatsappLink("Hi! I saw your pricing page and would like a quote.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#15803d] px-7 py-3.5 font-semibold text-white hover:bg-[#166534]">
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </StaticPageShell>
  )
}
