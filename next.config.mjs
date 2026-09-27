/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mind-map-app-ladestack',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig