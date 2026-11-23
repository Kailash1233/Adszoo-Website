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
    return [
      { source: "/locations/website-design-chennai", destination: "/services/website-design-chennai", permanent: true },
      { source: "/company/contact-us", destination: "/contact", permanent: true },
      { source: "/company/contact", destination: "/contact", permanent: true },
      { source: "/company/client-success-stories", destination: "/case-study", permanent: true },
      { source: "/resources/marketing-blog", destination: "/blogs", permanent: true },
      { source: "/case-studies", destination: "/case-study", permanent: true },
      // Old URLs still indexed by Google (found in Search Console 404 report)
      { source: "/industries/dental-marketing", destination: "/industries/marketing-for-dentists", permanent: true },
      { source: "/industries/ecommerce-marketing", destination: "/industries/marketing-for-ecommerce", permanent: true },
      { source: "/industries/healthcare-marketing", destination: "/industries/marketing-for-hospitals", permanent: true },
      { source: "/industries/interior-design-marketing", destination: "/industries/marketing-for-interior-designers", permanent: true },
      { source: "/industries/real-estate-marketing", destination: "/industries/marketing-for-real-estate", permanent: true },
      { source: "/case-study/spain-academy", destination: "/case-study", permanent: true },
      { source: "/blogs/social-media-management-pricing-2024", destination: "/blogs/social-media-management-pricing-2025", permanent: true },
      { source: "/nfc", destination: "/products/nfc-google-review-card", permanent: true },
      { source: "/google-review-card", destination: "/products/nfc-google-review-card", permanent: true },
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/blog/:slug", destination: "/blogs/:slug", permanent: true },
      { source: "/product", destination: "/products", permanent: true },
      { source: "/unizo", destination: "/products/unizo-gst-billing-inventory-software", permanent: true },
      { source: "/propertygenie", destination: "/products/propertygenie-real-estate-listing-software", permanent: true },
      { source: "/smart-queue", destination: "/products/smart-queue-restaurant-queue-management-system", permanent: true },
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
