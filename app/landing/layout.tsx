// app/layout.tsx
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
        url: "https://adszoo.in/og-image.jpg", // Replace with your actual OG image
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
    images: ["https://adszoo.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black antialiased`}>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"}
        />
        {children}
      </body>
    </html>
  );
}
