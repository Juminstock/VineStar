/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'casagrajales.com.co',
      },
    ],
  },
};

module.exports = nextConfig;
