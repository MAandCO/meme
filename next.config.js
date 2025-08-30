/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  experimental: {
    typedRoutes: true
  }
};

module.exports = nextConfig;
