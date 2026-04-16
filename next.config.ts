import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Cloudflare Pages compatible configuration
  assetPrefix: "",
};

export default nextConfig;
