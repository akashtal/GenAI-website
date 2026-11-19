import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageTemplate } from "@/components/service-page-template"
import { SERVICES, getService } from "@/lib/services-data"
import { SITE } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug)
  if (!service) return {}
  const path = `/services/${service.slug}`
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: `${service.metaTitle} | ${SITE.name}`,
      description: service.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | ${SITE.name}`,
      description: service.metaDescription,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()

  const url = `${SITE.url}/services/${service.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.summary,
        url,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Place", name: "Worldwide" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.name,
          itemListElement: service.features.map((f) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: f.title, description: f.description },
          })),
        },
        ...(service.priceFrom && {
          offers: {
            "@type": "Offer",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: service.priceFrom.amount,
              priceCurrency: service.priceFrom.currency,
            },
            availability: "https://schema.org/InStock",
          },
        }),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: service.faqs.map((f) => ({
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
          { "@type": "ListItem", position: 3, name: service.shortName, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageTemplate service={service} />
    </>
  )
}
