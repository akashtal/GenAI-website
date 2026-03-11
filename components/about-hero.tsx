"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const ArrowRight = () => (
    <svg
        className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
)

export function AboutHero() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-slate-200 text-sm font-medium mb-8 mt-12 hover:bg-white/10 transition-colors cursor-default"
                >
                    <span className="flex relative h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Global Innovation Partner
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-balance mb-8 tracking-tight"
                >
                    <span className="inline-block bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent pb-2">
                        Transforming Ideas
                    </span>
                    <br />
                    <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-2">
                        <span className="text-white/90 font-light italic">Into Digital Reality</span>
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="max-w-2xl mx-auto mb-10 sm:mb-12 px-4"
                >
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-6 text-balance">
                        We are a premier digital agency of <span className="text-white font-medium">engineers</span>, <span className="text-white font-medium">designers</span>, and <span className="text-white font-medium">strategists</span> dedicated to scaling your business.
                    </p>
                    <p className="text-base text-slate-400 font-light max-w-lg mx-auto leading-relaxed">
                        Delivering high-performance software, mobile apps, and AI solutions that drive measurable ROI.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
                    <Button
                        size="lg"
                        className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer relative overflow-hidden"
                    >
                        Join Our Journey
                        <ArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    )
}
