import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'storage.efferd.com',
      },
      {
        protocol: 'https',
        hostname: 'oxymor-ns.tailus.io',
      },
    ],
  },
  transpilePackages: ['recharts'],
};

export default nextConfig;
