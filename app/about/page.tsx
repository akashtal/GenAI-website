import type { Metadata } from "next"
import AboutPage from "./page-client"

export const metadata: Metadata = {
  title: "About Us – Indian Software & AI Development Team",
  description:
    "Meet the team behind Gen AI Digital Solutions – an Indian software company headquartered in Guwahati. 17+ projects delivered for businesses across India, the UK and USA: websites, mobile apps, CRM/ERP and AI.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Gen AI Digital Solutions" },
}

export default function Page() {
  return <AboutPage />
}
