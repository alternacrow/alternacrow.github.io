const path = require('path');
const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'assets', 'styles')],
  },
  env: {
    TITLE: 'alternacrow',
    URL: 'https://alternacrow.github.io',
    DESCRIPTION: 'I love web development!!',
    USERNAME: 'alternacrow',
    GITHUB_API_URL: 'https://api.github.com',
    QIITA_API_URL: 'https://qiita.com/api/v2',
    GITHUB_GIST_URL: 'https://gist.github.com',
    QIITA_URL: 'https://qiita.com',
  },
};

module.exports = withOptimizedImages({
  ...nextConfig,
  handleImages: ['jpeg', 'png', 'svg'],
});
