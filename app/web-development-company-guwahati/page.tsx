import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { GUWAHATI_PAGE as page } from "@/lib/services-data"
import { SITE } from "@/lib/site"

// Kept at its original URL: it has Search Console history for "web development company in guwahati".
const path = "/web-development-company-guwahati"

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: page.keywords,
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title: `${page.metaTitle} | ${SITE.name}`, description: page.metaDescription },
}

export default function GuwahatiPage() {
  const url = `${SITE.url}${path}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.name,
        serviceType: "Web development",
        description: page.summary,
        url,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: [
          { "@type": "City", name: "Guwahati" },
          { "@type": "State", name: "Assam" },
          { "@type": "Place", name: "Northeast India" },
        ],
        offers: {
          "@type": "Offer",
          priceSpecification: { "@type": "PriceSpecification", minPrice: 15000, priceCurrency: "INR" },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
          { "@type": "ListItem", position: 3, name: "Guwahati", item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageTemplate service={page} />
    </>
  )
}
