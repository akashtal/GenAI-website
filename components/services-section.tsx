"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, TrendingUp, Palette, Cloud, Shield, Zap } from "lucide-react"

const services = [
    {
        id: "software",
        icon: Code,
        title: "Software Development",
        description: "Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable and robust solutions.",
        features: ["Custom Web Applications", "Enterprise Software", "API Development", "System Integration", "Cloud Solutions", "Database Design"],
    },
    {
        id: "mobile",
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
        features: ["iOS Development", "Android Development", "React Native Apps", "Flutter Development", "App Store Optimization", "Mobile UI/UX"],
    },
    {
        id: "marketing",
        icon: TrendingUp,
        title: "Digital Marketing",
        description: "Data-driven marketing strategies that increase your online visibility, drive traffic, and convert visitors into customers.",
        features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Marketing", "Email Marketing", "Analytics & Reporting"],
    },
    {
        id: "design",
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centered design that creates intuitive, engaging, and visually stunning digital experiences.",
        features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Design Systems", "Usability Testing"],
    },
    {
        id: "cloud",
        icon: Cloud,
        title: "Cloud Services",
        description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
        features: ["AWS Solutions", "Azure Services", "Cloud Migration", "DevOps", "Serverless Architecture", "Container Orchestration"],
    },
    {
        id: "security",
        icon: Shield,
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
        features: ["Security Audits", "Penetration Testing", "Compliance Management", "Data Protection", "Incident Response", "Security Training"],
    },
]

export function ServicesSection() {
    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
                        Our Expertise
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Services We Offer</h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Empowering your digital transformation with cutting-edge technology and strategic innovation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                                <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-white/70 mb-4 text-sm leading-relaxed">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-white/60 text-sm">
                                        <Zap className="w-3 h-3 mr-2 text-white/40" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
