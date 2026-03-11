"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Code, Globe, User, Github, Linkedin, Mail, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TeamExperienceSection() {
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

    const coreCompetencies = [
        "Next.js & React Ecosystem", "Node.js & Express", "MongoDB & PostgreSQL",
        "Cloud Architecture (AWS/Vercel)", "AI/LLM Integration", "React Native",
        "Tailwind CSS & Framer Motion", "Enterprise System Design"
    ]

    const agencyHighlights = [
        {
            title: "Custom Enterprise Software",
            role: "Full-Stack Architecture",
            period: "Current Focus",
            description: "Architecting and deploying scalable web applications using the MERN stack and Next.js. Optimizing complex database interactions, implementing secure authentication, and building fluid UI/UX with Tailwind CSS and Headless UI."
        },
        {
            title: "Digital Transformation & E-commerce",
            role: "Solution Delivery",
            period: "Specialized Expertise",
            description: "Leading the development of highly customized platforms. Engineering custom integrations, payment gateway architecture, and resolving critical performance bottlenecks for high-traffic environments."
        }
    ]

    const flagshipProjects = [
        {
            title: "AI-Powered Video Analytics Engine",
            company: "Industrial Sector",
            tech: ["Next.js", "Node.js", "MongoDB", "AI Vision"],
            description: "Engineered a real-time system detecting safety violations (helmet, jacket, boots) from live industrial feeds. Built the analytics dashboard, REST APIs, and automated alert systems."
        },
        {
            title: "Omnichannel E-commerce Platform",
            company: "Retail Technology",
            tech: ["React", "Express", "Payment Gateways"],
            description: "Developed a dynamic, high-conversion e-commerce architecture with advanced cart management, seamless checkout flows, and complex third-party API integrations."
        },
        {
            title: "Enterprise Management Dashboard",
            company: "Corporate Solutions",
            tech: ["Next.js", "SQL", "Data Visualization"],
            description: "Architected a comprehensive admin dashboard for organizational operations. Features precise role-based access control (RBAC) and real-time data visualization."
        },
        {
            title: "Lead Generation & CRM Portal",
            company: "B2B Services",
            tech: ["Next.js", "Tailwind", "Nodemailer"],
            description: "Built high-performance landing pages coupled with a secure backend CRM to capture, validate, and route client leads directly into email and database pipelines."
        }
    ]

    return (
        <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
                        Our Expertise
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Engineering <span className="text-indigo-400">Excellence</span>
                    </h2>
                </div>
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar - Leadership Profile */}
                    <div className={`lg:col-span-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                        }`}>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sticky top-24">
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-lg shadow-indigo-500/20">
                                    DT
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">Dibyajyoti Talukdar</h3>
                                <p className="text-indigo-400 font-medium mb-4">Founder & Lead Engineer</p>
                                <div className="flex gap-2 mb-6">
                                    <Button size="icon" variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10" asChild>
                                        <a href="https://github.com/akashtal" target="_blank" rel="noreferrer"><Github className="w-5 h-5" /></a>
                                    </Button>
                                    <Button size="icon" variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10" asChild>
                                        <a href="https://linkedin.com/in/dibyajyoti-talukdar" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5" /></a>
                                    </Button>
                                    <Button size="icon" variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10" asChild>
                                        <a href="mailto:akashtalukdar290@gmail.com"><Mail className="w-5 h-5" /></a>
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Agency Capabilities
                                    </h4>
                                    <div className="flex flex-col gap-3">
                                        {coreCompetencies.map((skill, i) => (
                                            <div key={i} className="flex items-center text-slate-300 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></div>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* About / Summary */}
                        <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <User className="w-6 h-6 text-indigo-400" /> Executive Summary
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                GenAI Digital Solutions is led by a commitment to elite software engineering. We specialize in full-stack architecture, building robust data pipelines, and designing high-performance interfaces using modern frameworks like Next.js and React. Our approach is purely results-driven—we don't just write code; we architect systems that optimize operations and deliver exceptional user experiences for our clients.
                            </p>
                        </div>

                        {/* Experience Timeline */}
                        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Briefcase className="w-6 h-6 text-indigo-400" /> Core Operations
                            </h3>
                            <div className="space-y-4">
                                {agencyHighlights.map((exp, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                            <Badge variant="outline" className="w-fit border-indigo-500/30 text-indigo-300 bg-indigo-500/10">
                                                {exp.period}
                                            </Badge>
                                        </div>
                                        <p className="text-lg text-indigo-200 mb-3">{exp.title}</p>
                                        <p className="text-slate-300">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-indigo-400" /> Featured Implementations
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {flagshipProjects.map((project, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all group">
                                        <div className="mb-4">
                                            <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{project.title}</h4>
                                            <p className="text-sm text-slate-400 mt-1">{project.company}</p>
                                        </div>
                                        <p className="text-slate-300 text-sm mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((t, index) => (
                                                <span key={index} className="text-xs text-indigo-200 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

