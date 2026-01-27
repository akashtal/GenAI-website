"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Users, Globe, Award, Sparkles, Heart } from "lucide-react"

export function OurStorySection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const values = [
        {
            icon: Target,
            title: "Impact Driven",
            description: "We focus on measurable results that drive real business growth for our clients.",
            color: "text-blue-400",
            bg: "bg-blue-500/20",
            border: "border-blue-400/30",
        },
        {
            icon: Users,
            title: "Client Centric",
            description: "Your success is our success. We build long-term partnerships based on trust.",
            color: "text-purple-400",
            bg: "bg-purple-500/20",
            border: "border-purple-400/30",
        },
        {
            icon: Globe,
            title: "Global Standards",
            description: "We bring world-class engineering practices to every project we touch.",
            color: "text-green-400",
            bg: "bg-green-500/20",
            border: "border-green-400/30",
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We don't settle for good. We strive for exceptional in every line of code.",
            color: "text-orange-400",
            bg: "bg-orange-500/20",
            border: "border-orange-400/30",
        },
        {
            icon: Sparkles,
            title: "Innovation",
            description: "We stay ahead of the curve, leveraging the latest AI and tech trends.",
            color: "text-pink-400",
            bg: "bg-pink-500/20",
            border: "border-pink-400/30",
        },
        {
            icon: Heart,
            title: "Passion",
            description: "We love what we do, and that energy reflects in the products we build.",
            color: "text-red-400",
            bg: "bg-red-500/20",
            border: "border-red-400/30",
        },
    ]

    return (
        <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 sm:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
                        Our Philosophy
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-6">
                        Driven by <span className="text-indigo-400">Purpose</span>, <br />
                        Powered by <span className="text-indigo-400">Passion</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                        We started with a simple idea: that high-quality digital solutions shouldn't be reserved for Fortune 500 companies. We're democratizing access to elite engineering.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className={`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={`p-3 rounded-xl w-fit mb-6 ${item.bg}`}>
                                <item.icon className={`w-8 h-8 ${item.color}`} />
                            </div>
                            <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
                            <p className="text-white/70 leading-relaxed font-light">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
