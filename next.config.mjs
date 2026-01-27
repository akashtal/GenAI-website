/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'bcryptjs'],
    serverActions: {
      allowedOrigins: ["10.200.237.97:3000", "localhost:3000"],
    },
  },
}

export default nextConfig
