"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FacebookIcon, InstagramIcon, LinkedinIcon, Mail, MapPin, Phone } from "lucide-react"
import { SITE, whatsappLink } from "@/lib/site"
import Image from "next/image"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  rel?: string
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "Website Development", href: "/services/web-development" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
      { title: "Custom Software", href: "/services/custom-software-development" },
      { title: "CRM & ERP Development", href: "/services/crm-erp-development" },
      { title: "AI Solutions & Chatbots", href: "/services/ai-solutions" },
      { title: "Web Development in Guwahati", href: "/web-development-company-guwahati" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Our Work", href: "/projects" },
      { title: "All Services", href: "/services" },
      { title: "FAQs", href: "/contact#faq" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Follow Us",
    links: [
      { title: "Facebook", href: "https://www.facebook.com/profile.php?id=61587441681086", icon: FacebookIcon, rel: "me noopener noreferrer" },
      { title: "Instagram", href: "https://www.instagram.com/genai.digital.290/", icon: InstagramIcon, rel: "me noopener noreferrer" },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/genaidigitalsolustion/", icon: LinkedinIcon, rel: "me noopener noreferrer" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Image src="/images/gen-ai-logo.png" alt="Gen AI Digital Solutions" width={64} height={64} className="size-16" />

          {/* NAP – keep identical to Google Business Profile for local SEO */}
          <address className="not-italic mt-6 space-y-2 text-sm text-white/70">
            <p className="text-white font-medium">{SITE.name}</p>
            <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /><span>HQ: {SITE.city}, {SITE.region}, {SITE.country}<br /><span className="text-white/50">Serving clients across India &amp; worldwide</span></span></p>
            <p><a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4" />{SITE.phone}</a></p>
            <p><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" />{SITE.email}</a></p>
            <p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 rounded-full bg-[#25D366] px-4 py-2 text-white font-medium hover:bg-[#1ebe5b]">Chat on WhatsApp</a></p>
          </address>

          <div className="text-muted-foreground mt-8 text-sm md:mt-0 md:block hidden">
            <p>© {new Date().getFullYear()} Gen AI Digital Solutions. All rights reserved.</p>
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        rel={link.rel ?? (link.href.startsWith("http") ? "noopener noreferrer" : undefined)}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-8 text-center space-y-2">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Gen AI Digital Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
