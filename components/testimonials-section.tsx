"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      text: "The custom software they built for us streamlined our entire inventory process. We're saving 20 hours a week and scaling faster than ever.",
      name: "Rahul Sharma",
      role: "Logistics CEO",
    },
    {
      text: "Our new mobile app is flawless. The user experience is incredible, and we've seen a 300% increase in mobile orders since launch. Worth every penny.",
      name: "Priya Patel",
      role: "Retail Director",
    },
    {
      text: "Finally, a marketing team that delivers real results. Our ROAS has doubled in just three months. They truly understand digital growth.",
      name: "Amit Verma",
      role: "CMO",
    },
    {
      text: "The website redesign completely transformed our brand image. We're getting qualified leads daily, and the team was a joy to work with.",
      name: "Sneha Gupta",
      role: "Operations Director",
    },
    {
      text: "I was skeptical about the price being so affordable, but the quality is elite. They operate like a top-tier agency without the massive fees.",
      name: "Vikram Malhotra",
      role: "Startup Founder",
    },
    {
      text: "Their SEO strategy put us on the first page of Google for our main keywords. Traffic is up 60% and sales are following suit.",
      name: "Anjali Rao",
      role: "E-com Owner",
    },
    {
      text: "We needed a complex web app built in weeks, not months. They delivered on time, within budget, and the code quality is exceptional.",
      name: "Arjun Mehta",
      role: "Tech Lead",
    },
    {
      text: "The app they developed for our hotel chain has improved guest satisfaction scores by 45%. Seamless booking and check-in features.",
      name: "Kavita Singh",
      role: "Hospitality Manager",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section - Keep as user loves it */}
        <div className="text-center mb-16 md:mb-32">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-white/30"></div>
            Success Stories
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            Partners in your <span className="font-medium italic">success</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of businesses growing faster with our high-impact digital solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden">
          <div
            className="flex gap-8 max-w-6xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} className="flex-1" />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 5)}
              duration={12}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(1, 4)}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
