import Link from "next/link"
import { ArrowUpRight, Bot, Code, Globe, Smartphone, TrendingUp, Database } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, SEO-ready business websites and e-commerce stores that turn visitors into enquiries.",
    href: "/services/web-development",
    tags: ["Next.js", "WordPress", "E-commerce"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Android & iOS apps from one codebase – booking, delivery, loyalty and B2B ordering apps.",
    href: "/services/mobile-app-development",
    tags: ["React Native", "Android", "iOS"],
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Dashboards, portals and internal tools that replace spreadsheets and manual work.",
    href: "/services/custom-software-development",
    tags: ["Web apps", "APIs", "Cloud"],
  },
  {
    icon: Database,
    title: "CRM & ERP Systems",
    description: "Track leads, stock, billing and staff in one place – built around how your business actually runs.",
    href: "/services/crm-erp-development",
    tags: ["Inventory", "Billing", "HR"],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Solutions",
    description: "WhatsApp and website chatbots that answer customers 24/7 and qualify leads for you.",
    href: "/services/ai-solutions",
    tags: ["WhatsApp bots", "GPT", "Automation"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description: "Get found on Google and social media – SEO, Google Business Profile, ads and content that bring enquiries.",
    href: "/services",
    tags: ["SEO", "Google Ads", "Social media"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative px-4 py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300/80">What we build</p>
          <h2 id="services-heading" className="text-balance text-3xl font-bold text-white md:text-5xl">
            One team for your website, app &amp; software
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Pick what you need today – we&apos;ll grow it with you tomorrow.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-sky-400/10 ring-1 ring-white/10">
                  <service.icon className="h-6 w-6 text-emerald-200" aria-hidden="true" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/55">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
