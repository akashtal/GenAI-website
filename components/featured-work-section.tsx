import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
// Static imports: Next.js knows the exact size and embeds a tiny blurred preview,
// so the card shows something instantly instead of an empty box while the image loads.
import hashviewImg from "@/public/6.jpeg"
import videoImg from "@/public/video.png"
import ecomAppImg from "@/public/3.jpeg"
import schoolImg from "@/public/school-dash.jpeg"
import { ArrowRight } from "lucide-react"

type Work = {
  title: string
  category: string
  result: string
  image: StaticImageData
  kind: "phone" | "desktop"
  tags: string[]
}

// Real projects from /projects – lead with outcomes, not tech.
const work: Work[] = [
  {
    title: "HashView – Reviews & Rewards App",
    category: "Mobile app · UK hospitality",
    result: "Android & iOS app that lets restaurants and hotels trade instant rewards for verified Google reviews.",
    image: hashviewImg,
    kind: "phone",
    tags: ["React Native", "Firebase", "Node.js"],
  },
  {
    title: "AI Video Analytics Platform",
    category: "AI · Safety & surveillance",
    result: "Real-time object detection across multiple camera feeds with alerts, reporting and an admin panel.",
    image: videoImg,
    kind: "desktop",
    tags: ["Next.js", "TensorFlow.js", "WebSockets"],
  },
  {
    title: "B2B E-commerce Mobile App",
    category: "Mobile app · Wholesale",
    result: "Ordering app for trade customers with a full admin dashboard for products, orders and stock.",
    image: ecomAppImg,
    kind: "phone",
    tags: ["React Native", "MongoDB", "Admin panel"],
  },
  {
    title: "School Management System",
    category: "Custom software · Education",
    result: "Admissions, teachers, timetables and fees managed from one dashboard instead of registers and Excel.",
    image: schoolImg,
    kind: "desktop",
    tags: ["PHP", "MySQL", "Dashboards"],
  },
]

function Shot({ item }: { item: Work }) {
  if (item.kind === "phone") {
    return (
      <div className="relative flex h-full items-end justify-center overflow-hidden bg-gradient-to-br from-violet-500/25 via-slate-900 to-emerald-500/20 pt-8">
        <div className="relative w-[46%] max-w-[190px] translate-y-6 overflow-hidden rounded-[1.6rem] border-[6px] border-slate-800 shadow-2xl transition-transform duration-500 group-hover:translate-y-3">
          <Image src={item.image} alt={`${item.title} screenshot`} placeholder="blur" loading="eager" sizes="200px" quality={70} className="h-auto w-full" />
        </div>
      </div>
    )
  }
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-sky-500/20 via-slate-900 to-emerald-500/15 px-6 pt-8">
      <div className="overflow-hidden rounded-t-xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex gap-1.5 bg-slate-800 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </div>
        <Image src={item.image} alt={`${item.title} screenshot`} placeholder="blur" loading="eager" sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 90vw" quality={70} className="h-auto w-full" />
      </div>
    </div>
  )
}

export function FeaturedWorkSection() {
  return (
    <section id="work" className="relative px-4 py-24" aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300/80">Recent work</p>
            <h2 id="work-heading" className="text-balance text-3xl font-bold text-white md:text-5xl">
              Real products, live with real users
            </h2>
            <p className="mt-4 text-lg text-white/70">From UK hospitality apps to AI surveillance dashboards – here&apos;s a slice of what we&apos;ve shipped.</p>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
            View all projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {work.map((item) => (
            <Link
              key={item.title}
              href="/projects"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <div className="h-64 sm:h-72">
                <Shot item={item} />
              </div>
              <div className="border-t border-white/10 p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300/80">{item.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.result}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/55">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
