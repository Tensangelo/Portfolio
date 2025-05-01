/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/styles')],
  },
  images: {
    domains: [],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    })

    return config
  },
}

module.exports = nextConfig;
