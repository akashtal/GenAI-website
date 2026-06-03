import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"
import { JsonLd } from "@/components/SEC/json-ld"
import { GoogleTagManager } from "@/components/SEC/google-tag-manager"
import { GoogleAnalytics } from "@/components/SEC/google-analytics"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://genaidigitalsolution.com"),
  title: {
    default: "Gen AI Digital Solutions | Software, AI & App Development Company",
    template: "%s | Gen AI Digital Solutions",
  },
  description:
    "Gen AI Digital Solutions — a global software & AI company based in Guwahati, Assam. We build custom software, mobile apps (iOS/Android), AI solutions, CRM/ERP systems, and digital marketing for clients in India, UK & USA.",
  keywords: [
    // Global / service-level
    "Software Development Company",
    "Mobile App Development Company",
    "AI Solutions Company",
    "Custom Software Development",
    "Enterprise Software Development",
    "Web Development Company",
    "React Native App Development",
    "Next.js Development Agency",
    "Digital Marketing Agency",
    "CRM Software Development",
    "ERP Software Development",
    "AI Chatbot Development",
    "Machine Learning Solutions",
    // India-wide
    "Software Company India",
    "AI Company India",
    "Web Development Company India",
    "Mobile App Development India",
    "Affordable Software Development India",
    // Assam / Guwahati (local primary)
    "Web Development Company Guwahati",
    "Software Company Assam",
    "Mobile App Development Guwahati",
    "AI Solutions Guwahati",
    "Custom Software Development Assam",
    "ERP Software Guwahati",
    "CRM Development Assam",
    "Digital Marketing Guwahati",
    // UK
    "Software Development Company UK",
    "AI Solutions UK",
    "Offshore Development UK",
    // US
    "Software Development Company USA",
    "AI Solutions USA",
    "Offshore Software Development USA",
  ],
  authors: [{ name: "Gen AI Digital Solutions" }],
  creator: "Gen AI Digital Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://genaidigitalsolution.com",
    title: "Gen AI Digital Solutions | Software, AI & App Development Company",
    description:
      "Gen AI Digital Solutions — a global software & AI company based in Guwahati, Assam. We build custom software, mobile apps, AI solutions, and digital marketing for clients in India, UK & USA.",
    siteName: "Gen AI Digital Solutions",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gen AI Digital Solutions - Transforming Business Through Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen AI Digital Solutions | Software, AI & App Development",
    description:
      "Global software & AI company based in India. Custom software, mobile apps, AI chatbots, CRM/ERP, and digital marketing for India, UK & USA businesses.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <SpeedInsights />
        <JsonLd />
        <GoogleTagManager />
        <GoogleAnalytics />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LWH544G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  )
}
