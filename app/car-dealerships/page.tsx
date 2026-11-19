import type { Metadata } from "next"
import CarDealershipsPage from "./page-client"

// Off-topic product page (different brand) – kept live for existing links but excluded from search
// so it doesn't dilute the agency's topical relevance.
export const metadata: Metadata = {
  title: "AI Sales Assistant for Car Dealerships",
  description: "AI-powered WhatsApp and Instagram lead handling for car dealerships.",
  alternates: { canonical: "/car-dealerships" },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <CarDealershipsPage />
}
