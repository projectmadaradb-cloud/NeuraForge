/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  reactStrictMode: true,
  // Fix for framer-motion SSR issues
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig