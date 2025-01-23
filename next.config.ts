import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // Set to true for a 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
