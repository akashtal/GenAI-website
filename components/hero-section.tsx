"use client"

import { Button } from "@/components/ui/button"
import RotatingText from "./RotatingText"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Play = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
)

const techStack = [
  { src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", alt: "React" },
  { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", alt: "Next.js" },
  { src: "https://cdn.worldvectorlogo.com/logos/vercel.svg", alt: "Vercel" },
  { src: "https://cdn.worldvectorlogo.com/logos/typescript.svg", alt: "TypeScript" },
  { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", alt: "Stripe" },
  { src: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg", alt: "React Native" },
  { src: "https://cdn.worldvectorlogo.com/logos/apple-13.svg", alt: "iOS" },
  { src: "https://www.vectorlogo.zone/logos/android/android-icon.svg", alt: "Android" },
  { src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", alt: "MongoDB" },
  { src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", alt: "AWS" },
  { src: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg", alt: "Digital Marketing" },
  { src: "https://cdn.worldvectorlogo.com/logos/html-1.svg", alt: "Web Development" },
  { src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", alt: "GitHub" },
  { src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg", alt: "Framer Motion" },
  { src: "https://cdn.worldvectorlogo.com/logos/sanity.svg", alt: "Sanity" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-slate-200 text-sm font-medium mb-8 mt-12 hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="flex relative h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Premium Digital Innovation Partner
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-balance mb-8 tracking-tight flex flex-col items-center"
        >
          <span className="inline-block bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent pb-2">
            Custom Software
          </span>
          <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-2">
            <span className="text-white/90 font-light italic">& AI Solutions</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-6 text-balance px-2 sm:px-0">
            Partner with industry leaders to engineer <span className="text-white font-medium">scalable software</span>, <span className="text-white font-medium">strategic marketing</span>, and <span className="text-white font-medium">award-winning apps</span> that drive real growth.
          </p>
          <p className="text-sm sm:text-base text-slate-400 font-light max-w-lg mx-auto leading-relaxed px-2 sm:px-0">
            We architect the digital ecosystems that power tomorrow's enterprises.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer relative overflow-hidden"
          >
            Start Your Project
            <ArrowRight />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium border-border hover:bg-accent transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer"
          >
            <Play />
            View Our Work
          </Button>
        </div>

        {/* Tech Stack Carousel */}
        <div className="text-center px-4 w-full max-w-6xl mx-auto overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white mb-6">Powered by modern technologies</p>
          <div className="relative">
            {/* Left blur fade */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            {/* Right blur fade */}
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <Carousel
              opts={{ loop: true, dragFree: true }}
              plugins={[
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false,
                })
              ]}
            >
              <CarouselContent className="-ml-4 sm:-ml-8 items-center">
                {techStack.map((tech, index) => (
                  <CarouselItem key={index} className="pl-4 sm:pl-8 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="flex items-center justify-center p-2">
                      <img
                        src={tech.src}
                        alt={tech.alt}
                        width={40}
                        height={40}
                        className="h-8 sm:h-10 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
