import type { Metadata } from "next"
import AboutPage from "./page-client"

export const metadata: Metadata = {
  title: "About Us – Software Team in Guwahati",
  description:
    "Meet the Guwahati-based team behind Gen AI Digital Solutions: 17+ websites, apps, CRM/ERP and AI projects delivered for clients in India, the UK and USA.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Gen AI Digital Solutions" },
}

export default function Page() {
  return <AboutPage />
}
