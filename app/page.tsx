import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedWorkSection } from "@/components/featured-work-section"
import { ProcessSection } from "@/components/process-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { HomeFaqSection } from "@/components/home-faq-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

// Lazy-load the WebGL background and the calculator so they never block first paint.
const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false })
const ROICalculatorSection = dynamic(
  () => import("@/components/roi-calculator-section").then((mod) => mod.ROICalculatorSection),
  {
    ssr: false,
    loading: () => <div className="mx-auto h-[500px] w-full max-w-6xl animate-pulse rounded-3xl bg-white/5" />,
  },
)

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div className="fixed inset-0 h-full w-full opacity-70" aria-hidden="true">
        <Aurora colorStops={["#1e293b", "#0f766e", "#1e3a5f"]} amplitude={1.0} blend={0.5} speed={0.5} />
      </div>
      <GlassmorphismNav />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <FeaturedWorkSection />
        <ProcessSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ROICalculatorSection />
        <HomeFaqSection />
        <CTASection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
