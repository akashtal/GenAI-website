import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import dynamic from "next/dynamic"

// Lazy load heavy WebGL/Three.js backgrounds and calculator
const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false })
const FloatingShapes3D = dynamic(() => import("@/components/floating-shapes-3d").then((mod) => mod.FloatingShapes3D), { ssr: false })
const ROICalculatorSection = dynamic(
  () => import("@/components/roi-calculator-section").then((mod) => mod.ROICalculatorSection),
  {
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-white/5 animate-pulse rounded-3xl" />
  }
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        {/* 3D Floating Shapes Layer */}
        <div className="fixed inset-0 w-full h-full z-[5]">
          <FloatingShapes3D />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <ServicesSection />
          <TestimonialsSection />
          <ROICalculatorSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
