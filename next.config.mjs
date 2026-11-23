/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },

  // 301s consolidate duplicate / thin pages so ranking signals aren't split.
  async redirects() {
    // Absolute www destinations so an old path on the apex host (adszoo.in)
    // resolves in ONE hop instead of apex → www → new path.
    const www = (path) => `https://www.adszoo.in${path}`;
    return [
      { source: "/locations/website-design-chennai", destination: www("/services/website-design-chennai"), permanent: true },
      { source: "/company/contact-us", destination: www("/contact"), permanent: true },
      { source: "/company/contact", destination: www("/contact"), permanent: true },
      { source: "/company/client-success-stories", destination: www("/case-study"), permanent: true },
      { source: "/resources/marketing-blog", destination: www("/blogs"), permanent: true },
      { source: "/case-studies", destination: www("/case-study"), permanent: true },
      // Old URLs still indexed by Google (found in Search Console 404 report)
      { source: "/industries/dental-marketing", destination: www("/industries/marketing-for-dentists"), permanent: true },
      { source: "/industries/ecommerce-marketing", destination: www("/industries/marketing-for-ecommerce"), permanent: true },
      { source: "/industries/healthcare-marketing", destination: www("/industries/marketing-for-hospitals"), permanent: true },
      { source: "/industries/interior-design-marketing", destination: www("/industries/marketing-for-interior-designers"), permanent: true },
      { source: "/industries/real-estate-marketing", destination: www("/industries/marketing-for-real-estate"), permanent: true },
      { source: "/case-study/spain-academy", destination: www("/case-study"), permanent: true },
      { source: "/blogs/social-media-management-pricing-2024", destination: www("/blogs/social-media-management-pricing-2025"), permanent: true },
      { source: "/nfc", destination: www("/products/nfc-google-review-card"), permanent: true },
      { source: "/google-review-card", destination: www("/products/nfc-google-review-card"), permanent: true },
      { source: "/blog", destination: www("/blogs"), permanent: true },
      { source: "/blog/:slug", destination: www("/blogs/:slug"), permanent: true },
      { source: "/product", destination: www("/products"), permanent: true },
      { source: "/unizo", destination: www("/products/unizo-gst-billing-inventory-software"), permanent: true },
      { source: "/propertygenie", destination: www("/products/propertygenie-real-estate-listing-software"), permanent: true },
      { source: "/smart-queue", destination: www("/products/smart-queue-restaurant-queue-management-system"), permanent: true },
      // Force the canonical www host (also set www as primary in Vercel → Domains).
      {
        source: "/:path*",
        has: [{ type: "host", value: "adszoo.in" }],
        destination: "https://www.adszoo.in/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
