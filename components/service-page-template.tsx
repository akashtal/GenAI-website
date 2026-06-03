"use client"

import { motion, AnimatePresence } from "framer-motion"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Lazy load heavy WebGL background components and ROI Calculator
const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false })
const FloatingShapes3D = dynamic(() => import("@/components/floating-shapes-3d").then((mod) => mod.FloatingShapes3D), { ssr: false })
const ROICalculatorSection = dynamic(
  () => import("@/components/roi-calculator-section").then((mod) => mod.ROICalculatorSection),
  { 
    ssr: false, 
    loading: () => <div className="h-[500px] w-full bg-white/5 animate-pulse rounded-3xl" /> 
  }
)
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Globe,
  MapPin,
  Star,
  Zap,
  Clock,
  Shield,
  Users,
  Code,
  Smartphone,
  Database,
} from "lucide-react"
import { useState } from "react"
import type { LucideIcon } from "lucide-react"

// Icon lookup map — avoids passing functions across Server/Client boundary
const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  code: Code,
  smartphone: Smartphone,
  database: Database,
  zap: Zap,
}

export interface ServiceFeature {
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ServicePageProps {
  badge: string
  headline: string
  headlineAccent: string
  subheadline: string
  description: string
  features: ServiceFeature[]
  benefitsList: string[]
  faqs: FAQItem[]
  ctaTitle: string
  ctaDescription: string
  /** Icon key from the iconMap — string to avoid Server/Client boundary function passing */
  iconName: string
  primaryMarket: string
  markets: string[]
  /** JSON-LD for the specific service page */
  jsonLdData: object
}

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left group hover:bg-white/5 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-white text-sm md:text-base pr-4">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-white/70 text-sm md:text-base leading-relaxed border-t border-white/10 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

const trustBadges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "100% Secure" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Users, label: "Global Clients" },
]

export function ServicePageTemplate({
  badge,
  headline,
  headlineAccent,
  subheadline,
  description,
  features,
  benefitsList,
  faqs,
  ctaTitle,
  ctaDescription,
  iconName,
  primaryMarket,
  markets,
  jsonLdData,
}: ServicePageProps) {
  const HeroIcon = iconMap[iconName] ?? Globe
  return (
    <>
      {/* JSON-LD for this service page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="min-h-screen bg-black overflow-hidden">
        <main className="min-h-screen relative overflow-hidden">
          {/* Background */}
          <div className="fixed inset-0 w-full h-full">
            <Aurora colorStops={["#1e3a5f", "#0f2744", "#1e3a5f"]} amplitude={1.0} blend={0.5} speed={0.6} />
          </div>
          <div className="fixed inset-0 w-full h-full z-[5]">
            <FloatingShapes3D />
          </div>

          <div className="relative z-10">
            <GlassmorphismNav />

            {/* ── Hero ── */}
            <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 relative">
              <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-300 text-sm font-medium mb-8 mt-16"
                >
                  <HeroIcon className="w-4 h-4 mr-2" />
                  {badge}
                </motion.div>

                {/* H1 */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance mb-6 leading-tight"
                >
                  <span className="text-white">{headline}</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {headlineAccent}
                  </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl lg:text-2xl text-white/80 text-balance max-w-3xl mx-auto mb-4 leading-relaxed font-light"
                >
                  {subheadline}
                </motion.p>

                {/* Primary market */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center gap-2 text-white/50 text-sm mb-10"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{primaryMarket}</span>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href="/contact">
                    <Button className="bg-white text-black rounded-full px-8 py-4 text-base font-semibold hover:bg-gray-100 hover:scale-105 transition-all group">
                      Get a Free Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button
                      variant="outline"
                      className="rounded-full px-8 py-4 text-base font-medium border-white/20 hover:bg-white/10 bg-transparent text-white"
                    >
                      View Our Work
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-10 flex flex-wrap items-center justify-center gap-6"
                >
                  {trustBadges.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-white/40 text-xs">
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ── Global Reach Strip ── */}
            <section className="py-8 px-4 border-y border-white/5 bg-white/3 backdrop-blur-sm">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap items-center justify-center gap-3"
                >
                  <Globe className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-white/50 text-sm">Serving clients in:</span>
                  {markets.map((market, i) => (
                    <span
                      key={market}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium"
                    >
                      {market}
                    </span>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ── About / Description ── */}
            <section className="py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-white/70 text-base md:text-lg leading-relaxed"
                >
                  {description}
                </motion.p>
              </div>
            </section>

            {/* ── Features Grid ── */}
            <section className="py-12 px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-14"
                >
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">What We Deliver</h2>
                  <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">
                    End-to-end solutions built for quality, scale, and performance.
                  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.07 }}
                      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                        <Zap className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="py-20 px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                      Why Businesses Choose{" "}
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Gen AI Digital Solutions
                      </span>
                    </h2>
                    <p className="text-white/60 mb-8 leading-relaxed text-sm md:text-base">
                      We combine deep technical expertise with a deep understanding of business goals — whether you are a
                      startup in Assam, a growing SME in India, or a company in the UK or USA looking to partner with an
                      offshore technology team that delivers premium quality at competitive prices.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-3"
                  >
                    {benefitsList.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="flex items-start gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 hover:bg-white/8 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── ROI Calculator ── */}
            <ROICalculatorSection />

            {/* ── FAQ ── */}
            <section className="py-20 px-4">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                  <p className="text-white/50 text-sm md:text-base">Everything you need to know before getting started.</p>
                </motion.div>
                <FAQAccordion faqs={faqs} />
              </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 md:p-14"
                >
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{ctaTitle}</h2>
                  <p className="text-white/70 mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    {ctaDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button className="bg-white text-black rounded-full px-8 py-4 text-base font-semibold hover:bg-gray-100 hover:scale-105 transition-all group">
                        Start Your Project
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        className="rounded-full px-8 py-4 text-base font-medium border-white/20 hover:bg-white/10 bg-transparent text-white"
                      >
                        Explore All Services
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
    </>
  )
}
