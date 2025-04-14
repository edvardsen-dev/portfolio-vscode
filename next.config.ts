import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  env: {
    NEXT_PUBLIC_CMS_BASE_PATH: process.env.NEXT_PUBLIC_CMS_BASE_PATH,
  },
};

export default nextConfig;
