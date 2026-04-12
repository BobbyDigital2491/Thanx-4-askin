import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myxlfdxeqryemfmyfnoi.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  reactStrictMode: true,

  experimental: {
    serverComponentsExternalPackages: ["@supabase/ssr", "@supabase/supabase-js"],
  },

  // No webpack section → Turbopack warning disappears
  // turbopack: {},  // optional: explicit empty object to silence in some cases
};

export default nextConfig;