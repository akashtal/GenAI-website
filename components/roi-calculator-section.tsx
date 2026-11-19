"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, IndianRupee, Clock, Send, Loader2, CheckCircle } from "lucide-react"
import { toast } from "sonner"
import { motion } from "framer-motion"

interface CalculatorInputs {
  monthlyVisitors: number
  currentConversionRate: number
  averageOrderValue: number
  businessType: string
}

export function ROICalculatorSection() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyVisitors: 10000,
    currentConversionRate: 2,
    averageOrderValue: 15000,
    businessType: "ecommerce",
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("roi-calculator")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const getBusinessDefaults = () => {
    const businessDefaults = {
      ecommerce: { avgOrder: 8000, maxOrder: 50000, conversion: 35, response: 80, satisfaction: 45 },
      retail: { avgOrder: 6000, maxOrder: 30000, conversion: 30, response: 75, satisfaction: 40 },
      realestate: { avgOrder: 500000, maxOrder: 5000000, conversion: 40, response: 85, satisfaction: 50 },
      hospitality: { avgOrder: 18000, maxOrder: 100000, conversion: 25, response: 70, satisfaction: 35 },
      healthcare: { avgOrder: 25000, maxOrder: 200000, conversion: 45, response: 90, satisfaction: 55 },
      finance: { avgOrder: 120000, maxOrder: 1000000, conversion: 35, response: 85, satisfaction: 50 },
      automotive: { avgOrder: 2500000, maxOrder: 10000000, conversion: 30, response: 75, satisfaction: 40 },
      default: { avgOrder: 15000, maxOrder: 200000, conversion: 35, response: 80, satisfaction: 45 },
    }

    return businessDefaults[inputs.businessType as keyof typeof businessDefaults] || businessDefaults.default
  }

  useEffect(() => {
    const defaults = getBusinessDefaults()
    setInputs((prev) => ({ ...prev, averageOrderValue: defaults.avgOrder }))
  }, [inputs.businessType])

  const businessConfig = getBusinessDefaults()
  const improvements = {
    conversion: businessConfig.conversion,
    response: businessConfig.response,
    satisfaction: businessConfig.satisfaction,
  }

  // Current metrics
  const currentLeads = Math.round((inputs.monthlyVisitors * inputs.currentConversionRate) / 100)
  const currentRevenue = currentLeads * inputs.averageOrderValue

  // Improved metrics with AI chatbot
  const newConversionRate = inputs.currentConversionRate * (1 + improvements.conversion / 100)
  const newLeads = Math.round((inputs.monthlyVisitors * newConversionRate) / 100)
  const newRevenue = newLeads * inputs.averageOrderValue

  // Gains
  const additionalLeads = newLeads - currentLeads
  const additionalRevenue = newRevenue - currentRevenue
  const revenueIncrease = ((newRevenue - currentRevenue) / currentRevenue) * 100

  // ── Contact Form State ──
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMessageDirty, setIsMessageDirty] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === "message") {
      setIsMessageDirty(true)
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, source: "roi-calculator" }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast.success(data?.message || 'Message sent successfully!')
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        })
        setIsMessageDirty(false)
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        toast.error(data?.error || 'Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (isMessageDirty) return

    const annualRev = additionalRevenue * 12
    setFormData((prev) => ({
      ...prev,
      message: `Hi, I used your ROI calculator for my ${inputs.businessType} business. My monthly website traffic is ${inputs.monthlyVisitors.toLocaleString('en-US')} visitors with a ${inputs.currentConversionRate}% conversion rate. My estimated annual revenue increase is ₹${annualRev.toLocaleString('en-IN')}. I would like to discuss a customized plan for my project.`,
    }))
  }, [inputs.businessType, inputs.monthlyVisitors, inputs.currentConversionRate, additionalRevenue, isMessageDirty])

  return (
    <section id="roi-calculator" className="py-16 md:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/80">Growth Calculator</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-balance">
            Calculate your{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              revenue potential
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance">
            See how much additional revenue your business could generate with a high-performance digital presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Calculator Inputs */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Card className="p-6 md:p-8 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))] border-white/20 backdrop-blur-sm shadow-2xl h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8">Your Business Metrics</h3>

              <div className="space-y-8 flex-1">
                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Business Type</label>
                  <Select
                    value={inputs.businessType}
                    onValueChange={(value) => setInputs((prev) => ({ ...prev, businessType: value }))}
                  >
                    <SelectTrigger aria-label="Business type" className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="realestate">Real Estate</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Monthly Visitors */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Monthly Website Visitors:{" "}
                    <span className="text-white font-semibold">{inputs.monthlyVisitors.toLocaleString('en-US')}</span>
                  </label>
                  <Slider
                    aria-label="Monthly website visitors"
                    value={[inputs.monthlyVisitors]}
                    onValueChange={([value]) => setInputs((prev) => ({ ...prev, monthlyVisitors: value }))}
                    max={100000}
                    min={1000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1K</span>
                    <span>100K</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Current Conversion Rate:{" "}
                    <span className="text-white font-semibold">{inputs.currentConversionRate}%</span>
                  </label>
                  <Slider
                    aria-label="Current conversion rate (%)"
                    value={[inputs.currentConversionRate]}
                    onValueChange={([value]) => setInputs((prev) => ({ ...prev, currentConversionRate: value }))}
                    max={10}
                    min={0.5}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0.5%</span>
                    <span>10%</span>
                  </div>
                </div>

                {/* Average Order Value */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Average Order Value:{" "}
                    <span className="text-white font-semibold">{inputs.averageOrderValue.toLocaleString('en-US')}</span>
                  </label>
                  <Slider
                    aria-label="Average order value"
                    value={[inputs.averageOrderValue]}
                    onValueChange={([value]) => setInputs((prev) => ({ ...prev, averageOrderValue: value }))}
                    max={businessConfig.maxOrder}
                    min={25}
                    step={inputs.businessType === "automotive" || inputs.businessType === "realestate" ? 1000 : 25}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>2,500</span>
                    <span>{businessConfig.maxOrder.toLocaleString('en-US')}</span>
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>

              <div className="mt-6 lg:hidden">
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="animate-bounce">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-primary font-medium">Scroll down to see your results</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">💡 Industry Insights</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-gray-300">
                          <span className="font-medium text-white">Average improvement:</span> Our clients see{" "}
                          {businessConfig.conversion}% increase in conversions with a redesigned site
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-gray-300">
                          <span className="font-medium text-white">Speed to lead:</span> Automated systems respond{" "}
                          {businessConfig.response}% faster than manual outreach
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-gray-300">
                          <span className="font-medium text-white">Customer retention:</span> Increases by{" "}
                          {businessConfig.satisfaction}% with better UX and support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Results & Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Card className="p-6 md:p-8 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))] border-white/20 backdrop-blur-sm shadow-2xl h-full flex flex-col">
              
              {/* Compact Results Header */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Your Potential Growth
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Additional Revenue (Annual)</div>
                    <div className="text-lg md:text-xl font-bold text-white">
                      ₹{(additionalRevenue * 12).toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Revenue Increase</div>
                    <div className="text-lg md:text-xl font-bold text-green-400">
                      +{revenueIncrease.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Title */}
              <h4 className="text-lg font-medium text-white mb-4">Claim Your Free Growth Plan</h4>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center flex-1"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4 animate-bounce" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-white/80 text-xs">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="h-9 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 text-sm"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-white/80 text-xs">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="h-9 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 text-sm"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-white/80 text-xs">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 99999 99999"
                          className="h-9 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 text-sm"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="company" className="text-white/80 text-xs">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="h-9 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 text-sm"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="service" className="text-white/80 text-xs">Service Interested In</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-white/30 focus:outline-none disabled:opacity-50 text-sm"
                          disabled={isSubmitting}
                        >
                          <option value="" className="bg-gray-900">Select a service</option>
                          <option value="software" className="bg-gray-900">Software Development</option>
                          <option value="mobile" className="bg-gray-900">Mobile App Development</option>
                          <option value="marketing" className="bg-gray-900">Digital Marketing</option>
                          <option value="other" className="bg-gray-900">Other</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="budget" className="text-white/80 text-xs">Estimated Budget</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full h-9 px-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-white/30 focus:outline-none disabled:opacity-50 text-sm"
                          disabled={isSubmitting}
                        >
                          <option value="" className="bg-gray-900">Select budget range</option>
                          <option value="5k-10k" className="bg-gray-900">5,000 - 10,000</option>
                          <option value="10k-25k" className="bg-gray-900">10,000 - 25,000</option>
                          <option value="25k-50k" className="bg-gray-900">25,000 - 50,000</option>
                          <option value="50k-100k" className="bg-gray-900">50,000 - 100,000</option>
                          <option value="100k+" className="bg-gray-900">100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-white/80 text-xs">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows={3}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 resize-none text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black rounded-full py-2.5 font-medium hover:bg-gray-50 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get My Free Growth Plan
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm text-gray-400 mt-4">* Results based on industry averages and may vary by business</p>
        </div>
      </div>
    </section>
  )
}
