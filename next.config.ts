import type { NextConfig } from "next";

// Mirrors site.indexable in src/lib/site.ts: non-production hosts send a noindex header on every response,
// including images and files that can't carry a meta robots tag.
function isIndexable() {
  if (process.env.NEXT_PUBLIC_NOINDEX === "true") return false;
  try {
    const host = new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").hostname;
    if (host === "localhost" || host === "127.0.0.1") return false;
    if (/^(dev|staging|stage|preview|test|qa)\./.test(host)) return false;
    return !(host.endsWith(".vercel.app") || host.endsWith(".netlify.app"));
  } catch {
    return false;
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          ...(isIndexable() ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
        ],
      },
    ];
  },
};

export default nextConfig;
