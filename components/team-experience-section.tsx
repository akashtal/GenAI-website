"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Code, Globe, User, Github, Linkedin, Mail, Phone, Calendar, ExternalLink } from "lucide-react"
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

    const skills = [
        "Next.js", "MERN Stack", "PHP", "MySQL", "WordPress", "Front-End Design",
        "AI Tools", "Cloud AI", "GitHub", "GitLab", "Tailwind CSS", "Node.js"
    ]

    const experiences = [
        {
            company: "Gotisheel Technologies LLP",
            role: "Software Developer",
            period: "Jan 2024 - Present",
            description: "Developing and maintaining web applications using the MERN stack. Optimizing UI/UX with Tailwind CSS and Headless UI. Implementing authentication, database interactions, and API integrations."
        },
        {
            company: "WebotApp - Digital Solutions",
            role: "Internship",
            period: "Jul 2023 - Jan 2024",
            description: "Collaborated to design and develop web apps using React.js and Node.js. Customized WordPress themes and resolved frontend/backend issues."
        }
    ]

    const projects = [
        {
            title: "AI-Powered Video Analytics",
            company: "Industrial Basics",
            tech: ["Next.js", "Node.js", "MongoDB", "AI"],
            description: "Real-time system detecting safety violations (helmet, jacket, boots) from live feeds. Built analytics dashboard, REST APIs, and alert systems."
        },
        {
            title: "Official Business Website",
            company: "Gotisheel Technology",
            tech: ["HTML", "CSS", "JavaScript"],
            description: "Fully responsive business website with modern UI sections. Ensured cross-browser compatibility and fast load times."
        },
        {
            title: "School Management Dashboard",
            company: "Internship Project",
            tech: ["PHP", "MySQL", "Chart.js"],
            description: "Admin dashboard for school operations. Features role-based access, attendance tracking, and data visualization."
        },
        {
            title: "WordPress E-commerce",
            company: "Internship Project",
            tech: ["WordPress", "WooCommerce", "PHP"],
            description: "Dynamic e-commerce site with product management, custom themes, and payment gateway integration."
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
                        Meet The Team
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Leading with <span className="text-indigo-400">Experience</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar - Profile Profile */}
                    <div className={`lg:col-span-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                        }`}>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sticky top-24">
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-lg shadow-indigo-500/20">
                                    DT
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">Dibyajyoti Talukdar</h3>
                                <p className="text-indigo-400 font-medium mb-4">Software Developer</p>
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
                                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                        <Code className="w-4 h-4 text-indigo-400" /> Skills
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, i) => (
                                            <Badge key={i} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white/90 border-0">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-6">
                                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4 text-indigo-400" /> Education
                                    </h4>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-white text-sm font-medium">Bachelor of Design in Arts</p>
                                            <p className="text-white/50 text-xs">Thong Nokbe College • 2024</p>
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-medium">Higher Secondary (Arts)</p>
                                            <p className="text-white/50 text-xs">Dokmoka HS School • 2019</p>
                                        </div>
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
                                <User className="w-6 h-6 text-indigo-400" /> About Me
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                I am a dedicated software developer with expertise in full-stack web development, including PHP, Next.js, Node.js, EJS, and WordPress.
                                With 1.7 years of experience, including 6 months in an industry internship, I have contributed to dynamic web solutions by optimizing performance
                                and ensuring seamless user experiences. Passionate about continuous learning, I stay updated with industry trends to deliver high-quality, innovative solutions.
                            </p>
                        </div>

                        {/* Experience Timeline */}
                        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Briefcase className="w-6 h-6 text-indigo-400" /> Experience
                            </h3>
                            <div className="space-y-4">
                                {experiences.map((exp, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                            <Badge variant="outline" className="w-fit border-indigo-500/30 text-indigo-300 bg-indigo-500/10">
                                                {exp.period}
                                            </Badge>
                                        </div>
                                        <p className="text-lg text-indigo-200 mb-3">{exp.company}</p>
                                        <p className="text-slate-300">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-indigo-400" /> Key Projects
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {projects.map((project, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all group">
                                        <div className="mb-4">
                                            <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{project.title}</h4>
                                            <p className="text-sm text-slate-400">{project.company}</p>
                                        </div>
                                        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, index) => (
                                                <span key={index} className="text-xs text-indigo-200 bg-indigo-500/10 px-2 py-1 rounded">
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
