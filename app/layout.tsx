import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// import { FooterSection } from "@/components/layout/sections/footer";
// import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
// import PageTransitionProvider from "./PageTransitionProvider";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import SmoothScroll from "@/components/SmoothScroll";
import type { Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Chromepet, Chennai | Adszoo",
  description:
    "Adszoo is a Chromepet-based digital marketing agency helping local businesses rank on Google Maps, run high-converting ads, and turn website traffic into revenue. Free consultation.",
  keywords: [
    "digital marketing agency in Chromepet",
    "website design Chromepet",
    "SEO agency Chromepet",
    "Google Ads management Chromepet",
    "social media marketing Chromepet Chennai",
    "digital marketing agency in Chennai",
    "website design Chennai",
    "SEO agency Chennai",
    "Google Ads management Chennai",
  ],

  alternates: {
    canonical: "https://www.adszoo.in/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.adszoo.in/",
    siteName: "Adszoo",
    locale: "en_IN",
    title: "Best Digital Marketing Agency in Chromepet, Chennai | Adszoo",
    description:
      "Local digital marketing agency in Chromepet helping businesses convert traffic into revenue — websites, SEO, Google Ads, and Meta Ads.",
    images: [
      {
        url: "https://www.adszoo.in/Logo1.png",
        width: 1200,
        height: 630,
        alt: "Adszoo - Digital Marketing Agency in Chromepet, Chennai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Chromepet, Chennai | Adszoo",
    description:
      "Local digital marketing agency in Chromepet helping businesses convert traffic into revenue.",
    images: ["https://www.adszoo.in/Logo1.png"],
  },

  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chromepet, Chennai",
    "geo.position": "12.9516;80.1462",
    ICBM: "12.9516, 80.1462",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="google-site-verification"
          content="2scpu4pXHJ-tPOYU7PA9trnQsFwk6z3AUfDywzNVt6Y"
        />
        <meta
          name="ahrefs-site-verification"
          content="52cc875c8d0ea547fbd9cfc1b7a156038a191d34a4edbf623f55a5e7590ac90b"
        ></meta>

        {/* <title>
          Adszoo - Best Website Development & Social Media Marketing Agency
        </title>
        <meta
          name="description"
          content="Boost your business with expert PPC, Website Development and Social Media services. Partner with Adszoo for proven digital marketing strategies."
        /> */}
        {/* Add JSON-LD structured data */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ProfessionalService", "LocalBusiness"],
              telephone: "+91-6369050929",
              priceRange: "₹50,000 - ₹500,000",
              name: "Adszoo",
              url: "https://www.adszoo.in",
              logo: "https://www.adszoo.in/Logo1.png",
              description:
                "Adszoo offers Website Development and Social Media services to grow your business online.",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61565406179842",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nehru Nagar",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600044",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "xl5wvfu4ip");
    `}
        </Script>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"}
        />
        <Analytics />
        <SpeedInsights />
        <SmoothScroll>{children}</SmoothScroll>
        {/* <Navbar /> */}
        {/* <PageTransitionProvider>{children}</PageTransitionProvider> */}

        {/* <FooterSection /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
