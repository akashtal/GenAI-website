import type { Metadata } from "next"
import ServicesPage from "./page-client"

export const metadata: Metadata = {
  title: "Services – Web, Mobile App, Software & AI Development",
  description:
    "Website development, Android & iOS apps, custom software, CRM/ERP systems, AI chatbots and digital marketing for businesses across India and worldwide. Fixed quotes, weekly demos, ongoing support.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "Services – Gen AI Digital Solutions" },
}

export default function Page() {
  return <ServicesPage />
}
