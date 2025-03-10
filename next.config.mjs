/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable Image Optimization for static export

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zeeshan.flutterforever.com',
      },
    ],
  },
}

export default nextConfig;