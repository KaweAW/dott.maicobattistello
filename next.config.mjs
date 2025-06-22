/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/chisono',
        destination: '/about-me',
        permanent: true,
      },
      {
        source: '/chi-sono',
        destination: '/about-me',
        permanent: true,
      },
      // Redirect da www a non-www per consistenza SEO
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dottmaicobattistello.it',
          },
        ],
        destination: 'https://dottmaicobattistello.it/:path*',
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
