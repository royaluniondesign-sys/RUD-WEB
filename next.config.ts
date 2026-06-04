import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'd8j0ntlcm91z4.cloudfront.net' },
      { protocol: 'https', hostname: '*.oxyzen.es' },
      { protocol: 'https', hostname: '*.kopess23.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.royaluniondesign.com' }],
        destination: 'https://royaluniondesign.com/:path*',
        permanent: true,
      },
      { source: '/work/brandforce', destination: '/work', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:all*(ico|jpg|jpeg|png|gif|webp|avif|svg|woff2|woff)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
};

export default nextConfig;
