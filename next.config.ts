import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's6.imgcdn.dev',
      },
    ],
  },
};

export default nextConfig;
