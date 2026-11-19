"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"

const Aurora = dynamic(() => import("@/components/aurora-bg"), { ssr: false })
import { motion } from "framer-motion"
import { Code, Smartphone, TrendingUp, Palette, Database, Cloud, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SERVICES } from "@/lib/services-data"
import { ArrowRight } from "lucide-react"

// Detail pages come from lib/services-data – each card links to its own SEO landing page.
const services = [
  ...SERVICES.map((s) => ({
    id: s.slug,
    href: `/services/${s.slug}` as string | undefined,
    icon: s.icon === "globe" ? Code : s.icon === "smartphone" ? Smartphone : s.icon === "zap" ? Cloud : Database,
    title: s.name,
    description: s.subheadline,
    features: s.features.slice(0, 5).map((f) => f.title),
  })),
  {
    id: "marketing",
    href: undefined as string | undefined,
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing that increases your online visibility, drives organic traffic and converts visitors into customers.",
    features: ["SEO Optimization", "Google Business Profile", "Social Media Marketing", "Performance Marketing", "Analytics & Reporting"],
  },
]

const stats = [
  { value: "17+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "5+", label: "Team Members" },
  { value: "4+", label: "Years Experience" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* Hero Section */}
          <section className="min-h-[60vh] flex items-center justify-center px-4 py-20 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12"
              >
                <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
                Our Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6"
              >
                <span className="text-foreground">Custom Software &</span>
                <br />
                <span className="text-foreground">AI Development Services</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl md:text-2xl text-white text-balance max-w-3xl mx-auto mb-8 leading-relaxed font-light"
              >
                Websites, mobile apps, custom software, CRM/ERP and AI – designed, built and supported end-to-end for businesses across India and worldwide.
              </motion.p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 px-4">
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

          {/* Services Grid */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    id={service.id}
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
                    {service.href && (
                      <Link href={service.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
                        Explore {service.title.toLowerCase()} <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
                <p className="text-white/70 max-w-2xl mx-auto">A streamlined approach to delivering exceptional results</p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Discovery", description: "We understand your goals, challenges, and requirements." },
                  { step: "02", title: "Strategy", description: "We create a detailed roadmap and technical architecture." },
                  { step: "03", title: "Development", description: "Our team builds your solution with agile methodology." },
                  { step: "04", title: "Launch", description: "We deploy, test, and provide ongoing support." },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl font-bold text-white/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help transform your digital presence and achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium hover:bg-gray-50 hover:scale-105 transition-all">
                      Get in Touch
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button variant="outline" className="rounded-full px-8 py-4 text-lg font-medium border-white/20 hover:bg-white/10 bg-transparent text-white">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
