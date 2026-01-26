"use client"

import React from "react"

import { useState } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ChevronDown, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@genai.digital",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+353 1 234 5678",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Dublin, Ireland",
    description: "Book a meeting at our office",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Fri: 9AM - 6PM",
    description: "Weekend support available",
  },
]

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive digital solutions including software development, mobile app development, digital marketing, UI/UX design, cloud services, and cybersecurity consulting.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex mobile app could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. The best model depends on your project requirements and preferences.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch. This includes bug fixes, updates, and feature enhancements.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We can work as an extension of your team, providing additional expertise and resources. We're experienced in collaborating with in-house developers, designers, and product teams.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast.success(data.message || 'Message sent successfully!')
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        })
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
                <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
                Get in Touch
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6"
              >
                <span className="text-foreground">Let&apos;s Build</span>
                <br />
                <span className="text-foreground">Something Great</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl md:text-2xl text-white text-balance max-w-3xl mx-auto mb-8 leading-relaxed font-light"
              >
                Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </motion.p>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-medium mb-1">{info.title}</h3>
                    <p className="text-white/80 text-sm mb-1">{info.details}</p>
                    <p className="text-white/50 text-xs">{info.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                      <p className="text-white/70">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white/80">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white/80">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-white/80">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service" className="text-white/80">Service Interested In</Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-white/30 focus:outline-none disabled:opacity-50"
                            disabled={isSubmitting}
                          >
                            <option value="" className="bg-gray-900">Select a service</option>
                            <option value="software" className="bg-gray-900">Software Development</option>
                            <option value="mobile" className="bg-gray-900">Mobile App Development</option>
                            <option value="marketing" className="bg-gray-900">Digital Marketing</option>
                            <option value="design" className="bg-gray-900">UI/UX Design</option>
                            <option value="cloud" className="bg-gray-900">Cloud Services</option>
                            <option value="other" className="bg-gray-900">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-white/80">Estimated Budget</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-white/30 focus:outline-none disabled:opacity-50"
                          disabled={isSubmitting}
                        >
                          <option value="" className="bg-gray-900">Select budget range</option>
                          <option value="5k-10k" className="bg-gray-900">$5,000 - $10,000</option>
                          <option value="10k-25k" className="bg-gray-900">$10,000 - $25,000</option>
                          <option value="25k-50k" className="bg-gray-900">$25,000 - $50,000</option>
                          <option value="50k-100k" className="bg-gray-900">$50,000 - $100,000</option>
                          <option value="100k+" className="bg-gray-900">$100,000+</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white/80">Project Details *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, goals, and timeline..."
                          rows={5}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 resize-none"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black rounded-full py-4 text-lg font-medium hover:bg-gray-50 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  id="faq"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left"
                        >
                          <span className="text-white font-medium">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-white/60 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {openFaq === index && (
                          <div className="px-6 pb-4">
                            <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick Contact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Prefer a quick chat?</h3>
                        <p className="text-white/60 text-sm">Schedule a 15-minute discovery call</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full rounded-full border-white/20 hover:bg-white/10 bg-transparent text-white">
                      Book a Call
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
