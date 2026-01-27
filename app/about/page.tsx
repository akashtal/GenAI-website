import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { AboutHero } from "@/components/about-hero"
import { OurStorySection } from "@/components/our-story-section"
import { TeamExperienceSection } from "@/components/team-experience-section"
import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"
import { FloatingShapes3D } from "@/components/floating-shapes-3d"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
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
                    <AboutHero />
                    <OurStorySection />
                    <TeamExperienceSection />
                    <CTASection />
                    <Footer />
                </div>
            </main>
        </div>
    )
}
