import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { NORTHEAST_PAGE as page } from "@/lib/services-data"
import { SITE } from "@/lib/site"

const path = "/northeast-india"

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: path },
  openGraph: { type: "website", url: path, title: `${page.metaTitle} | ${SITE.name}`, description: page.metaDescription },
}

const STATES = ["Assam", "Meghalaya", "Tripura", "Manipur", "Mizoram", "Nagaland", "Arunachal Pradesh", "Sikkim"]

export default function NortheastPage() {
  const url = `${SITE.url}${path}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.name,
        serviceType: "Web, app and software development",
        description: page.summary,
        url,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: STATES.map((name) => ({ "@type": "State", name, containedInPlace: { "@type": "Country", name: "India" } })),
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
          { "@type": "ListItem", position: 3, name: "Northeast India", item: url },
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
