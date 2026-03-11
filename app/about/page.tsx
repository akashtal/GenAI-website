"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { AboutHero } from "@/components/about-hero"
import { motion } from "framer-motion"
import { OurStorySection } from "@/components/our-story-section"
import { TeamExperienceSection } from "@/components/team-experience-section"
import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"
import { FloatingShapes3D } from "@/components/floating-shapes-3d"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
    const stats = [
        { value: "17+", label: "Projects Delivered" },
        { value: "15+", label: "Happy Clients" },
        { value: "5+", label: "Team Members" },
        { value: "4+", label: "Years Experience" },
    ]

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
                    
                    {/* Stats Section */}
                    <section className="py-12 px-4 border-y border-white/5 bg-white/5 backdrop-blur-sm -mt-10 relative z-20">
                        <div className="max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                        <div className="text-white/60 text-sm md:text-base">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    <OurStorySection />
                    <TeamExperienceSection />
                    <CTASection />
                    <Footer />
                </div>
            </main>
        </div>
    )
}
