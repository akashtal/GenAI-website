import type { Metadata } from "next"
import ProjectsPage from "./page-client"

export const metadata: Metadata = {
  title: "Portfolio – Web, App & AI Projects",
  description:
    "See websites, Android & iOS apps, dashboards, e-commerce stores and AI platforms built by Gen AI Digital Solutions for clients in India, the UK and USA.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects", title: "Portfolio – Gen AI Digital Solutions" },
}

export default function Page() {
  return <ProjectsPage />
}
