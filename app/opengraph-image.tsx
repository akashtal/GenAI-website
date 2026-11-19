import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Gen AI Digital Solutions – Software, App & AI Development Company in India"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 20% 0%, #334155 0%, #0b0f19 55%, #000 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#cbd5e1" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#34d399" }} />
          Gen AI Digital Solutions · India & Worldwide
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Websites, apps & AI software
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: "#94a3b8" }}>
            that win you customers.
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 28, color: "#e2e8f0" }}>
          <div style={{ display: "flex", padding: "12px 24px", borderRadius: 999, background: "white", color: "black", fontWeight: 700 }}>
            Free quote in 24 hours
          </div>
          <div style={{ display: "flex", padding: "12px 24px", borderRadius: 999, border: "2px solid #475569" }}>
            genaidigitalsolution.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
