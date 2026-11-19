import type { Metadata } from "next"
import ServicesPage from "./page-client"

export const metadata: Metadata = {
  title: "Web, App, Software & AI Services",
  description:
    "Websites, Android & iOS apps, custom software, CRM/ERP, AI chatbots and SEO for businesses in Northeast India and worldwide. Fixed quotes and weekly demos.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "Services – Gen AI Digital Solutions" },
}

export default function Page() {
  return <ServicesPage />
}
