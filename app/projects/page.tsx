"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ExternalLink, Code, Smartphone, TrendingUp, Palette, Database, Layout, ShoppingCart, BarChart, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Video Analytics Platform",
    category: "AI & Machine Learning",
    description: "A comprehensive real-time video analytics platform with AI-powered object detection, event tracking, and advanced reporting capabilities. Supports multiple camera feeds with real-time processing and alerting system.",
    image: "/video.png",
    tags: ["Next.js", "Node.js", "WebSockets", "MongoDB", "TensorFlow.js", "Redis"],
    icon: Monitor,
  },
  {
    id: 2,
    title: "School Management System",
    category: "Educational Technology",
    description: "A comprehensive school management system built with PHP and MySQL, featuring student enrollment, teacher management, class scheduling, and admin dashboards. Styled with Bootstrap for responsive design.",
    image: "/school-dash.jpeg",
    tags: ["PHP", "MySQL", "Bootstrap", "CSS", "JavaScript"],
    icon: Database,
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "E-commerce Solution",
    description: "A dynamic e-commerce platform built with PHP and MySQL, featuring product catalog management, shopping cart, secure checkout, order tracking, and admin dashboard.",
    image: "/ecom-1.jpeg",
    tags: ["PHP", "MySQL", "Bootstrap", "CSS", "JavaScript"],
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: "Task Management App",
    category: "Productivity Tool",
    description: "Collaborative task management application with real-time updates, team collaboration, file sharing, and progress tracking. Includes kanban boards and calendar integration.",
    image: "/task.png",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
    icon: Layout,
  },
  {
    id: 5,
    title: "Multi Theme Selector",
    category: "UI Component",
    description: "A customizable theme selector allowing users to switch between multiple color schemes and UI themes in real time, with preferences saved for future visits.",
    image: "/multi-theam.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Context API", "LocalStorage"],
    icon: Palette,
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Personal Branding",
    description: "Modern, responsive portfolio website with smooth animations, dark mode support, contact form, and SEO optimization. Built with performance and accessibility in mind.",
    image: "/port.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Icons"],
    icon: Monitor,
  },
  {
    id: 7,
    title: "E-commerce WordPress Store",
    category: "WordPress Development",
    description: "A fully functional e-commerce platform built with WordPress and WooCommerce, featuring custom themes, payment gateway integration, and inventory management.",
    image: "/e1.jpeg",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL", "Custom CSS", "PayPal API"],
    icon: ShoppingCart,
  },
  {
    id: 8,
    title: "Creative Portfolio WordPress",
    category: "WordPress Development",
    description: "A stunning portfolio website built with WordPress featuring custom post types, advanced custom fields, responsive design, SEO optimization, and gallery showcase.",
    image: "/p1.jpeg",
    tags: ["WordPress", "PHP", "ACF", "Custom CSS", "SEO", "Contact Form 7"],
    icon: Palette,
  },
  {
    id: 9,
    title: "Company Data Scraper",
    category: "Data Extraction",
    description: "An automated web scraping solution built with Next.js that extracts company details, contact information, market data, and business insights from multiple sources.",
    image: "/web-scap.png",
    tags: ["Next.js", "Puppeteer", "Cheerio", "Node.js", "MongoDB", "CSV Export"],
    icon: Database,
  },
  {
    id: 10,
    title: "Analytics Dashboard Pro",
    category: "Data Visualization",
    description: "An interactive data visualization dashboard featuring dynamic charts, real-time data updates, filtering capabilities, and comprehensive business intelligence visualization.",
    image: "/data-v.png",
    tags: ["Next.js", "D3.js", "Recharts", "Shadcn UI", "TypeScript", "Chart.js"],
    icon: BarChart,
  },
  {
    id: 11,
    title: "AI/ML Company Official Website",
    category: "Corporate Website",
    description: "A modern and professional corporate website for an AI/ML company featuring responsive design, interactive elements, service showcases, and team profiles.",
    image: "/goti.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    icon: Monitor,
  },
  {
    id: 11,
    title: "HashView Buisness Review And Rewards App ",
    category: "Mobile App ios and android",
    description: "Turn Real Feedback into Repeat Revenue The automated customer engagement platform that trades instant rewards for verified, real-time reviews. Boost retention and grow your reputation—effortlessly.",
    image: "/6.jpeg",
    tags: ["React Native", "Node.js", "Socket.io", "MongoDB", "Prisma", "NextAuth", "Tailwind CSS", "Shadcn UI", "TypeScript", "Firebase", "Firestore", "Cloud Functions", "Cloud Storage"],
    icon: Monitor,
  },
  {
    id: 12,
    title: "Ecommerce Mobile App",
    category: "Ecommerce Mobile App ios and android",
    description: "B2B ecommerce mobile app ios and android with admin dashboard and user dashboard with all the features of an e-commerce platform.",
    image: "/3.jpeg",
    tags: ["React Native", "Node.js", "Socket.io", "MongoDB", "Prisma", "NextAuth", "Tailwind CSS", "Shadcn UI", "TypeScript", "Firebase", "Firestore", "Cloud Functions", "Cloud Storage"],
    icon: Monitor,
  },
]

const categories = ["All", "AI & Machine Learning", "Web Development", "E-commerce", "Data Science", "Mobile Apps"]

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
          <section className="min-h-[40vh] flex items-center justify-center px-4 py-20 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12"
              >
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
                Extensive Portfolio
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6"
              >
                <span className="text-white">Innovation</span>
                <br />
                <span className="text-slate-400">Delivered</span>
              </motion.h1>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md text-white border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <project.icon className="w-5 h-5 text-indigo-400" />
                        <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                      </div>
                      <p className="text-slate-300 text-sm mb-6 leading-relaxed flex-1">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded text-[10px] uppercase font-semibold bg-white/5 text-slate-400 border border-white/5">
                            {tag}
                          </span>
                        ))}
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
