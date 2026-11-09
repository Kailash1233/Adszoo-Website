// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Ads Adszoo | Get More Qualified Leads Today",
  description:
    "Discover how Adszoo boosts lead quality and conversion rates with expert digital marketing strategies. Book your free strategy call now.",
  keywords: [
    "Adszoo",
    "lead generation",
    "digital marketing agency",
    "performance marketing",
    "social media marketing",
    "website development",
  ],
  openGraph: {
    title: "Ads Adszoo | Get More Qualified Leads Today",
    description:
      "Discover how Adszoo boosts lead quality and conversion rates with expert digital marketing strategies.",
    url: "https://adszoo.in",
    siteName: "Ads Adszoo",
    images: [
      {
        url: "https://www.adszoo.in/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Ads Adszoo Landing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ads Adszoo | Get More Qualified Leads Today",
    description:
      "Book your free strategy session and start converting better with Adszoo.",
    images: ["https://www.adszoo.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} bg-white text-black antialiased`}>
        {children}
    </div>
  );
}
