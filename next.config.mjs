/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a verification build run alongside `next dev` without overwriting its .next folder.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Optimisation enabled: serves resized WebP/AVIF instead of raw 300–650 KB PNGs.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'bcryptjs'],
    serverActions: {
      allowedOrigins: ["10.200.237.97:3000", "localhost:3000"],
    },
  },
  async redirects() {
    return [
      // Old location-specific URLs -> national service pages (301 keeps existing ranking signals)
      { source: "/mobile-app-development-guwahati", destination: "/services/mobile-app-development", permanent: true },
      { source: "/software-development-assam", destination: "/services/custom-software-development", permanent: true },
      { source: "/crm-erp-development-assam", destination: "/services/crm-erp-development", permanent: true },
      { source: "/ai-solutions-guwahati", destination: "/services/ai-solutions", permanent: true },
      { source: "/services/ai-automation", destination: "/services/ai-solutions", permanent: true },
    ]
  },
}

export default nextConfig
