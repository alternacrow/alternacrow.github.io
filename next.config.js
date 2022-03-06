const withOptimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withOptimizedImages({
  ...nextConfig,
  handleImages: ["jpeg", "png", "svg"],
});
