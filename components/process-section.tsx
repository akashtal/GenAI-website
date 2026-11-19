import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    n: "01",
    title: "Free consultation",
    body: "A 30-minute call or WhatsApp chat to understand your business, goals and budget.",
    when: "Day 1",
  },
  {
    n: "02",
    title: "Fixed quote & plan",
    body: "A clear scope, timeline and fixed price in writing – no surprise bills later.",
    when: "Within 48 hours",
  },
  {
    n: "03",
    title: "Design & build",
    body: "You see progress every week with a live demo link, and can change direction early.",
    when: "Weekly demos",
  },
  {
    n: "04",
    title: "Launch & support",
    body: "We launch, train your team and stay on for fixes, updates and growth.",
    when: "Ongoing",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative px-4 py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300/80">How it works</p>
          <h2 id="process-heading" className="text-balance text-3xl font-bold text-white md:text-5xl">
            From first message to launch – no guesswork
          </h2>
        </div>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white/50" aria-hidden="true">{s.n}</span>
                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">{s.when}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Link
            href="/contact#quote"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Start with a free consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
