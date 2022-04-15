/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack5: true,
  productionBrowserSourceMaps: false,
  images: {
      formats: ["image/avif", "image/webp"],
  },
  experimental: {
      outputStandalone: true,
  },
};
