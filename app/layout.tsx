import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"
import { JsonLd } from "@/components/json-ld"
import { GoogleAnalytics } from "@/components/google-analytics"

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
  title: {
    default: "Gen AI Digital Solutions | Enterprise Software & App Development",
    template: "%s | Gen AI Digital Solutions",
  },
  description:
    "Leading digital transformation agency specializing in custom software, mobile app development (iOS/Android), AI implementation, and ROI-driven marketing solutions.",
  keywords: [
    "Software Development",
    "Mobile App Development",
    "AI Solutions",
    "Freelance Software Developer",
    "Digital Marketing",
    "Web Development",
    "Enterprise Software",
    "Next.js Developers",
    "React Native Experts",
  ],
  authors: [{ name: "Gen AI Digital Solutions" }],
  creator: "Gen AI Digital Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.genai-solutions.com",
    title: "Gen AI Digital Solutions | Enterprise Software & App Development",
    description:
      "Leading digital transformation agency specializing in custom software, mobile app development (iOS/Android), AI implementation, and ROI-driven marketing solutions.",
    siteName: "Gen AI Digital Solutions",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure this image exists or is a placeholder
        width: 1200,
        height: 630,
        alt: "Gen AI Digital Solutions - Transforming Business Through Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen AI Digital Solutions | Enterprise Software & App Development",
    description:
      "Leading digital transformation agency maximizing business growth through custom software and AI solutions.",
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
          <NavigationTransition />
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <SpeedInsights />
        <JsonLd />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
