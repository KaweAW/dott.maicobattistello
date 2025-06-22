/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/chisono',
        destination: '/about-me',
        permanent: true,
      },
      // Aggiungi altri redirect se necessario per altre pagine del vecchio sito
      {
        source: '/chi-sono',
        destination: '/about-me',
        permanent: true,
      },
    ]
  },
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
