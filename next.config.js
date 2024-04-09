/** @type {import('next').NextConfig} */
require('dotenv').config()
const { env } = require('process')
const webpack = require('webpack')

const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXTAUTH_URL: env.NEXTAUTH_URL
  },
  images: {
    domains: ['https://i.ibb.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'https',
        hostname: 'celoscan.io'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 's2.coinmarketcap.com'
      },
      {
        protocol: 'https',
        hostname: 'static.innovaz.io'
      }
    ]
  },
  output: 'standalone',
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? ''
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? '../' : ''}static/media/`,
            name: '[name].[hash].[ext]'
          }
        }
      ]
    })
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    return config
  }
}

module.exports = nextConfig
