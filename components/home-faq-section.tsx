import { ChevronDown } from "lucide-react"
import { SITE } from "@/lib/site"

// Company-level, answer-first FAQs. Rendered with native <details> so every answer is in the
// server HTML (readable by Google and AI crawlers) and mirrored in FAQPage structured data.
const faqs = [
  {
    q: `What does ${SITE.name} do?`,
    a: `${SITE.name} is an Indian software development company. We design and build websites, Android & iOS mobile apps, custom software, CRM/ERP systems and AI solutions such as WhatsApp and website chatbots for startups and businesses across India and worldwide.`,
  },
  {
    q: "Where are you based, and do you work with clients outside India?",
    a: `We are headquartered in ${SITE.city}, ${SITE.region}, India, and work fully remotely with clients across India – Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata and more – and internationally in the UK, USA, UAE, Europe and Australia. You get weekly video calls, live demo links and overlap with your working hours.`,
  },
  {
    q: "How much does a website or mobile app cost?",
    a: "A business website typically costs ₹15,000–₹50,000 and an e-commerce store or web app starts from ₹50,000. A simple Android & iOS app costs ₹50,000–₹1,50,000; apps with payments and a custom backend start from around ₹2,00,000. International projects are quoted in USD or GBP. You always get a fixed quote in writing before work starts.",
  },
  {
    q: "How long does a project take?",
    a: "A business website takes 1–2 weeks, e-commerce and web apps 3–6 weeks, mobile apps 4–8 weeks for a first version, and CRM/ERP systems 6 weeks to 6 months depending on modules. We share a milestone plan on day one.",
  },
  {
    q: "Why hire an Indian development company instead of a local agency?",
    a: "You get the same modern technology – Next.js, React Native, Flutter, Node.js and leading AI models – typically at 40–60% of UK or US agency rates, with a dedicated team, clear English communication and full ownership of your code.",
  },
  {
    q: "How do I get started?",
    a: `Send us a message on WhatsApp at ${SITE.phone}, email ${SITE.email}, or fill in the quote form. We reply within 24 hours with questions, a cost estimate and next steps – the consultation is free and there is no obligation.`,
  },
]

export function HomeFaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <section id="faq" className="relative px-4 py-24" aria-labelledby="home-faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300/80">FAQ</p>
          <h2 id="home-faq-heading" className="text-balance text-3xl font-bold text-white md:text-5xl">
            Questions businesses ask us
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                <h3 className="text-left text-base font-semibold text-white">{f.q}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-white/50 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="border-t border-white/10 px-6 pb-5 pt-4 leading-relaxed text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
