/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.NEXT_PUBLIC_DOMAIN1,
      process.env.NEXT_PUBLIC_DOMAIN2,
      process.env.NEXT_PUBLIC_DOMAIN3,
      process.env.NEXT_PUBLIC_DOMAIN4,
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL + "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
