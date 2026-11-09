import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Software Blog — Practical Guides | Adszoo",
  description:
    "In-depth guides on SEO, AEO & GEO, B2B lead generation for manufacturers, website conversion, social media, Google & Meta Ads, and business software for Indian SMEs.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    url: "/blogs",
    title: "The Adszoo Blog — SEO, Websites, Software & Marketing Guides",
    description:
      "Practical, in-depth guides that help Indian businesses get found online and turn traffic into enquiries.",
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
