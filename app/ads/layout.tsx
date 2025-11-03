// app/layout.tsx
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adszoo | High-Converting Websites & Sales Funnels",
  description:
    "This is a private landing page for business owners. If you're here, it means we sent you this page personally to explore how we can grow your business online.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Adszoo | High-Converting Websites & Funnels",
    description:
      "Custom-built websites and sales funnels that convert visitors into paying customers.",
    url: "https://adszoo.in",
    siteName: "Adszoo",
    images: [
      {
        url: "https://adszoo.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adszoo Landing Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adszoo | High-Converting Websites & Funnels",
    description:
      "Let’s help your business generate more leads and sales online.",
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
      <head>
        {/* Explicit noindex for safety */}
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`${inter.className} bg-white text-black antialiased`}>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"}
        />
        {children}
      </body>
    </html>
  );
}
