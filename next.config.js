/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['anitype.site'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hhts://anitype.site',
        port: '',
        pathname: '/app2/users/info/fllcker'
      }
    ]
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
