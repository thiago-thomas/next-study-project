import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt'
  },
  */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
      },
    ],
  },
};

export default nextConfig;