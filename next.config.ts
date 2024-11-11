import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;