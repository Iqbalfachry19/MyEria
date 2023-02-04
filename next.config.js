/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['argon2'],
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'links.papareact.com',
      'media-exp1.licdn.com',
      'platform-lookaside.fbsbx.com',
      'avatars.dicebear.com',
    ],
  },
};

module.exports = nextConfig;
