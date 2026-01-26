"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ExternalLink, Code, Smartphone, TrendingUp, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Software Development",
    description: "A comprehensive financial management platform with real-time analytics, portfolio tracking, and AI-powered insights for investment firms.",
    image: "/images/dealership-showroom.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    icon: Code,
    results: ["40% increase in user engagement", "Real-time data processing", "99.9% uptime"],
  },
  {
    id: 2,
    title: "HealthCare Mobile App",
    category: "Mobile App Development",
    description: "Cross-platform mobile application connecting patients with healthcare providers, featuring telemedicine, appointment scheduling, and health tracking.",
    image: "/bmw-x5-luxury-suv.jpg",
    tags: ["React Native", "Firebase", "HIPAA Compliant"],
    icon: Smartphone,
    results: ["100K+ downloads", "4.8 star rating", "30% reduction in no-shows"],
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Digital Marketing",
    description: "Full-stack e-commerce solution with integrated marketing automation, SEO optimization, and conversion tracking for a retail brand.",
    image: "/professional-man-avatar.png",
    tags: ["Next.js", "Shopify", "Google Ads", "SEO"],
    icon: TrendingUp,
    results: ["250% ROI increase", "3x organic traffic", "45% conversion improvement"],
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "UI/UX Design",
    description: "Complete brand redesign including visual identity, design system, and website for a tech startup entering the market.",
    image: "/professional-woman-avatar.png",
    tags: ["Figma", "Design System", "Branding"],
    icon: Palette,
    results: ["Modern brand identity", "Consistent design language", "Improved user trust"],
  },
  {
    id: 5,
    title: "SaaS Analytics Platform",
    category: "Software Development",
    description: "Business intelligence platform with custom dashboards, automated reporting, and data visualization for enterprise clients.",
    image: "/professional-man-avatar-2.png",
    tags: ["Vue.js", "Python", "BigQuery", "D3.js"],
    icon: Code,
    results: ["50% faster insights", "Custom integrations", "Enterprise-grade security"],
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "Mobile App Development",
    description: "Native iOS and Android app with workout tracking, nutrition planning, and social features for a fitness brand.",
    image: "/professional-woman-avatar-2.png",
    tags: ["Swift", "Kotlin", "ML Kit", "HealthKit"],
    icon: Smartphone,
    results: ["500K+ active users", "AI-powered recommendations", "Wearable integration"],
  },
]

const categories = ["All", "Software Development", "Mobile App Development", "Digital Marketing", "UI/UX Design"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          
          {/* Hero Section */}
          <section className="min-h-[50vh] flex items-center justify-center px-4 py-20 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12"
              >
                <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
                Our Portfolio
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6"
              >
                <span className="text-foreground">Projects That</span>
                <br />
                <span className="text-foreground">Make an Impact</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl md:text-2xl text-white text-balance max-w-3xl mx-auto mb-8 leading-relaxed font-light"
              >
                Explore our portfolio of successful projects across various industries and technologies.
              </motion.p>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all border border-white/10"
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-white">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <project.icon className="w-5 h-5 text-white/60" />
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      </div>
                      <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded-md text-xs bg-white/10 text-white/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Results */}
                      <div className="border-t border-white/10 pt-4 mt-4">
                        <p className="text-xs text-white/40 mb-2">Key Results:</p>
                        <ul className="space-y-1">
                          {project.results.map((result) => (
                            <li key={result} className="text-white/60 text-xs flex items-center gap-2">
                              <span className="w-1 h-1 bg-white/40 rounded-full" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
                <p className="text-white/70 max-w-2xl mx-auto">What our clients say about working with us</p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    quote: "Gen AI Digital Solutions delivered exceptional results. Their team understood our vision and brought it to life perfectly.",
                    author: "Sarah Johnson",
                    role: "CEO, TechStart Inc",
                    avatar: "/professional-woman-avatar.png",
                  },
                  {
                    quote: "The mobile app they built exceeded our expectations. User engagement increased by 200% in the first month.",
                    author: "Michael Chen",
                    role: "Product Manager, HealthFirst",
                    avatar: "/professional-man-avatar.png",
                  },
                  {
                    quote: "Professional, responsive, and incredibly talented. They transformed our digital presence completely.",
                    author: "Emily Rodriguez",
                    role: "Marketing Director, RetailPro",
                    avatar: "/professional-woman-avatar-2.png",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={testimonial.author}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
                  >
                    <p className="text-white/80 text-sm leading-relaxed mb-6">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-white font-medium text-sm">{testimonial.author}</p>
                        <p className="text-white/50 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Let&apos;s collaborate and create something amazing together. Tell us about your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium hover:bg-gray-50 hover:scale-105 transition-all">
                      Start a Project
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="rounded-full px-8 py-4 text-lg font-medium border-white/20 hover:bg-white/10 bg-transparent text-white">
                      Explore Services
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
