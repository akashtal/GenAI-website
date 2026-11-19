import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"
import { JsonLd } from "@/components/SEC/json-ld"
import { GoogleTagManager } from "@/components/SEC/google-tag-manager"
import { GoogleAnalytics } from "@/components/SEC/google-analytics"
import { Toaster } from "sonner"
import { WhatsAppFloat } from "@/components/whatsapp-float"

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
    default: "Software, App & AI Development Company in India | Gen AI Digital Solutions",
    template: "%s | Gen AI Digital Solutions",
  },
  description:
    "Indian software company building websites, Android & iOS apps, custom software, CRM/ERP and AI chatbots for businesses across India, the UK, USA and worldwide. Free consultation and a fixed quote within 24 hours.",
  keywords: [
    "software development company India",
    "mobile app development company India",
    "web development company India",
    "AI development company India",
    "custom CRM ERP development",
    "offshore software development India",
  ],
  authors: [{ name: "Gen AI Digital Solutions" }],
  creator: "Gen AI Digital Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://genaidigitalsolution.com",
    title: "Software, App & AI Development Company in India | Gen AI Digital Solutions",
    description:
      "Websites, mobile apps, custom software, CRM/ERP and AI chatbots for businesses across India and worldwide. Free consultation and a fixed quote within 24 hours.",
    siteName: "Gen AI Digital Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software, App & AI Development Company in India | Gen AI Digital Solutions",
    description:
      "Websites, mobile apps, custom software, CRM/ERP and AI chatbots for businesses across India and worldwide. Free consultation and a fixed quote within 24 hours.",
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
  verification: {
    other: {
      "p:domain_verify": "25de536c34380a09fc975a9cae416580",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className="dark">
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <WhatsAppFloat />
        <Toaster theme="dark" position="top-center" richColors closeButton />
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
