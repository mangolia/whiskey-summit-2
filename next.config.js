/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: {
      inlineFonts: false,
    },
  },
};

module.exports = nextConfig; 