const path = require('path');
const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'assets', 'styles')],
  },
  env: {
    USERNAME: 'alternacrow',
    GITHUB_API_URL: 'https://api.github.com',
    GITHUB_GIST_URL: 'https://gist.github.com',
  },
};

module.exports = withOptimizedImages({
  ...nextConfig,
  handleImages: ['jpeg', 'png', 'svg'],
});
