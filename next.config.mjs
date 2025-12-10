/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/whatsapp',
        destination: 'https://wa.me/31615571528',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

