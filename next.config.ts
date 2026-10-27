import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes a plain website to `out/`
  // that can be uploaded to any host (cPanel, Hostinger, Netlify, Vercel).
  output: "export",
  trailingSlash: true,
  images: {
    // Images in /public are pre-optimized and keep their original filenames,
    // so they can be swapped by replacing the file with the same name.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
