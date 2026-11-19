"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Clock, Loader2, Mail, Phone, ShieldCheck } from "lucide-react"
import { toast } from "sonner"
import { WhatsAppIcon } from "@/components/whatsapp-float"
import { SITE, trackEvent, whatsappLink } from "@/lib/site"

const needs = ["Website", "Mobile app", "Custom software / CRM / ERP", "AI chatbot / automation", "Digital marketing / SEO", "Not sure yet"]

export function CTASection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", website: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) return toast.error("Please tell us your name")
    if (!form.phone.trim() && !form.email.trim()) return toast.error("Please add a phone/WhatsApp number or an email so we can reply")

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: form.service ? `Quick quote request: ${form.service}` : "Quick quote request from homepage",
          source: "homepage-quote",
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setIsSubmitted(true)
        trackEvent("generate_lead", { form: "homepage_quote", service: form.service })
        toast.success(data.message || "Thanks! We'll be in touch within 24 hours.")
      } else {
        toast.error(data.error || "Something went wrong. Please message us on WhatsApp.")
      }
    } catch {
      toast.error("Network error. Please message us on WhatsApp instead.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const field =
    "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-white placeholder:text-white/40 transition-colors focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"

  return (
    <section id="contact" className="relative px-4 pb-32 pt-16 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
      <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-[radial-gradient(60%_80%_at_0%_0%,rgba(52,211,153,0.15),transparent),radial-gradient(50%_60%_at_100%_100%,rgba(56,189,248,0.12),transparent)] lg:grid-cols-2">
        {/* Left: pitch */}
        <div className="p-8 md:p-12">
          <h2 id="cta-heading" className="text-balance text-3xl font-bold leading-tight text-white md:text-4xl">
            Tell us what you need. Get a fixed quote within 24 hours.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            No sales pitch – just a straight answer on cost, timeline and the best way to build it.
          </p>
          <ul className="mt-8 space-y-4 text-white/80">
            <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />Reply within 24 hours (usually same day)</li>
            <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />Free consultation, no obligation</li>
            <li className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />Fixed price agreed before we start</li>
          </ul>
          <div className="mt-10 flex flex-col flex-wrap gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("contact_whatsapp", { location: "cta_section" })}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#15803d] px-6 py-3 font-semibold text-white hover:bg-[#166534]"
            >
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
            </a>
            <a
              href={SITE.phoneHref}
              onClick={() => trackEvent("contact_call", { location: "cta_section" })}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>

        {/* Right: short form */}
        <div className="border-t border-white/10 bg-black/40 p-8 backdrop-blur-md md:p-12 lg:border-l lg:border-t-0">
          {isSubmitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center" role="status">
              <CheckCircle className="mb-4 h-14 w-14 text-emerald-400" />
              <h3 className="text-2xl font-semibold text-white">Got it – thank you!</h3>
              <p className="mt-2 text-white/70">We&apos;ll reach out within 24 hours. Want a faster reply?</p>
              <a href={whatsappLink(`Hi, I just sent a quote request on your website. My name is ${form.name}.`)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#15803d] px-6 py-3 font-semibold text-white">
                <WhatsAppIcon className="h-5 w-5" /> Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <h3 className="text-lg font-semibold text-white">Get your free quote</h3>
              <div>
                <label htmlFor="cta-name" className="mb-1.5 block text-sm text-white/70">Your name</label>
                <input id="cta-name" name="name" autoComplete="name" value={form.name} onChange={update} className={field} placeholder="e.g. Rahul Das" disabled={isSubmitting} required />
              </div>
              <div>
                <label htmlFor="cta-phone" className="mb-1.5 block text-sm text-white/70">Phone / WhatsApp</label>
                <input id="cta-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={update} className={field} placeholder="+91 98xxx xxxxx" disabled={isSubmitting} />
              </div>
              <div>
                <label htmlFor="cta-email" className="mb-1.5 block text-sm text-white/70">Email <span className="text-white/40">(optional)</span></label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input id="cta-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} className={`${field} pl-11`} placeholder="you@business.com" disabled={isSubmitting} />
                </div>
              </div>
              <div>
                <label htmlFor="cta-service" className="mb-1.5 block text-sm text-white/70">What do you need?</label>
                <select id="cta-service" name="service" value={form.service} onChange={update} className={field} disabled={isSubmitting}>
                  <option value="" className="bg-slate-900">Choose one</option>
                  {needs.map((n) => (
                    <option key={n} value={n} className="bg-slate-900">{n}</option>
                  ))}
                </select>
              </div>
              {/* honeypot */}
              <input type="text" name="website" value={form.website} onChange={update} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-black transition-all hover:bg-slate-100 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</>
                ) : (
                  <>Get my free quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></>
                )}
              </button>
              <p className="text-center text-xs text-white/60">We never share your details. No spam, ever. <a href="/privacy-policy" className="underline underline-offset-2 hover:text-white">Privacy policy</a></p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
