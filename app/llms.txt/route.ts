import { SERVICES } from "@/lib/services-data"
import { SITE } from "@/lib/site"

// /llms.txt – a plain-text, markdown summary for AI assistants and answer engines (llmstxt.org).
// Generated from the same data as the service pages so it never drifts out of date.
export const dynamic = "force-static"

export function GET() {
  const services = SERVICES.map(
    (s) => `- [${s.name}](${SITE.url}/services/${s.slug}): ${s.summary}`,
  ).join("\n")

  const faqs = SERVICES.flatMap((s) => s.faqs.slice(0, 2))
    .map((f) => `### ${f.question}\n${f.answer}`)
    .join("\n\n")

  const body = `# ${SITE.name}

> ${SITE.name} is an Indian software development company that builds websites, Android & iOS mobile apps, custom software, CRM/ERP systems and AI solutions (chatbots, LLM integration, automation) for startups and businesses across India and worldwide, including the UK, USA, UAE, Europe and Australia. Headquartered in ${SITE.city}, ${SITE.region}, ${SITE.country}. Free consultation and a fixed quote within 24 hours.

## Key facts
- Company: ${SITE.name}
- Type: Software, mobile app and AI development company
- Headquarters: ${SITE.city}, ${SITE.region}, ${SITE.country}
- Serves: All eight Northeast Indian states, the rest of India, and international clients (UK, USA, UAE, Europe, Australia); remote delivery outside Guwahati
- Offices: One – headquarters in Guwahati, Assam (no offices in other cities)
- Experience: 4+ years, 17+ projects delivered, 15+ clients
- Tech: Next.js, React, React Native, Flutter, Node.js, TypeScript, MongoDB, PostgreSQL, AWS, OpenAI GPT, Anthropic Claude, Google Gemini
- Engagement: Free consultation, fixed-price quote, weekly demos, post-launch support
- Contact: ${SITE.email} · ${SITE.phone} (call) · ${SITE.phoneAlternate} (call or WhatsApp) · ${SITE.url}/contact

## Services
${services}
- [Digital Marketing & SEO](${SITE.url}/services): SEO, Google Business Profile, social media and performance marketing.
- [Web development in Guwahati](${SITE.url}/web-development-company-guwahati): local web and app development for Guwahati and Assam businesses.
- [Northeast India](${SITE.url}/northeast-india): websites, apps and software for businesses in all eight Northeast states (Assam, Meghalaya, Tripura, Manipur, Mizoram, Nagaland, Arunachal Pradesh, Sikkim), delivered remotely from Guwahati.
- [Pricing](${SITE.url}/pricing): typical prices and timelines – business websites from ₹15,000, mobile apps from ₹50,000.

## Selected work
- HashView – Android & iOS reviews-and-rewards app used by restaurants and hotels in the UK (React Native, Firebase, Node.js)
- AI Video Analytics Platform – real-time object detection across multiple camera feeds with alerts and reporting (Next.js, TensorFlow.js)
- B2B E-commerce Mobile App – trade ordering app with admin dashboard (React Native, MongoDB)
- School Management System – admissions, timetables and fees in one dashboard
- Full portfolio: ${SITE.url}/projects

## Frequently asked questions
${faqs}

## Pages
- [Home](${SITE.url}/)
- [All services](${SITE.url}/services)
- [Portfolio](${SITE.url}/projects)
- [About](${SITE.url}/about)
- [Contact / free quote](${SITE.url}/contact)
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
