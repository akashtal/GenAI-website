"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// The WebGL aurora only renders on desktop. Gate the *import* too, so phones never download
// the ogl/WebGL chunk at all (saves JS parse/execution time on mobile, improving LCP and INP).
const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false })

type Props = React.ComponentProps<typeof Aurora>

export default function AuroraBg(props: Props) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setEnabled(desktop.matches && !reduced.matches)
    // Wait until the browser is idle so the background never competes with first paint.
    const w = window as unknown as { requestIdleCallback?: (cb: () => void) => number }
    const id = w.requestIdleCallback ? w.requestIdleCallback(update) : window.setTimeout(update, 1200)
    desktop.addEventListener("change", update)
    return () => {
      desktop.removeEventListener("change", update)
      if (!w.requestIdleCallback) window.clearTimeout(id)
    }
  }, [])

  return enabled ? <Aurora {...props} /> : null
}
