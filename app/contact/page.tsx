import type { Metadata } from "next"
import ContactPage from "./page-client"

export const metadata: Metadata = {
  title: "Contact Us – Get a Free Quote",
  description:
    "Free quote for your website, app, CRM/ERP or AI project. Call +91 93653 39460 or +91 91811 88734, or WhatsApp +91 91811 88734. Reply within 24h.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact Gen AI Digital Solutions – Free Quote in 24 Hours" },
}

export default function Page() {
  return <ContactPage />
}
