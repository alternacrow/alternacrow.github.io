const path = require('path');
const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'assets', 'styles')],
  },
};

module.exports = withOptimizedImages({
  ...nextConfig,
  handleImages: ['jpeg', 'png', 'svg'],
});
