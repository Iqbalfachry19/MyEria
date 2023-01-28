/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'links.papareact.com',
      'media-exp1.licdn.com',
      'platform-lookaside.fbsbx.com',
    ],
  },
};

module.exports = nextConfig;
