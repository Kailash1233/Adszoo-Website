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
import { CONTACT, SITE_URL, SOCIALS, jsonLd } from "@/lib/site";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adszoo | Website Development, SEO & Software Company in Chennai",
  description:
    "Adszoo is a Chennai digital marketing & software company. We build conversion-focused websites, custom web & mobile apps, run social media marketing and SEO/AEO/GEO that generates B2B leads for manufacturers and growing businesses.",
  keywords: [
    "digital marketing agency in Chennai",
    "website development company Chennai",
    "SEO for manufacturers India",
    "B2B lead generation agency Chennai",
    "custom software development Chennai",
    "mobile app development Chennai",
    "social media marketing agency Chennai",
    "AEO GEO services India",
    "digital marketing agency in Chromepet",
  ],
  applicationName: "Adszoo",
  authors: [{ name: "Adszoo", url: SITE_URL }],
  creator: "Adszoo",
  publisher: "Adszoo",
  formatDetection: { telephone: true, email: true, address: true },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "Adszoo",
    locale: "en_IN",
    title: "Adszoo | Website Development, SEO & Software Company in Chennai",
    description:
      "Conversion-focused websites, custom software, social media marketing and SEO/AEO/GEO that turn traffic into enquiries.",
    images: [
      {
        url: "/Logo1.png",
        width: 600,
        height: 600,
        alt: "Adszoo - Digital Marketing & Software Company, Chennai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adszoo | Website Development, SEO & Software Company in Chennai",
    description:
      "Conversion-focused websites, custom software, social media marketing and SEO/AEO/GEO that turn traffic into enquiries.",
    images: ["/Logo1.png"],
  },

  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chromepet, Chennai",
    "geo.position": "12.9516;80.1462",
    ICBM: "12.9516, 80.1462",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Adszoo",
      url: SITE_URL,
      logo: `${SITE_URL}/Logo1.png`,
      email: CONTACT.email,
      telephone: "+91-6369050929",
      sameAs: SOCIALS,
      founder: { "@type": "Person", name: "Kailash" },
      knowsAbout: [
        "Website Development",
        "Conversion Rate Optimization",
        "Search Engine Optimization",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "B2B Lead Generation for Manufacturers",
        "Social Media Marketing",
        "Meta Ads",
        "Google Ads",
        "Custom Software Development",
        "Mobile App Development",
      ],
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Adszoo",
      url: SITE_URL,
      image: `${SITE_URL}/Logo1.png`,
      logo: `${SITE_URL}/Logo1.png`,
      telephone: "+91-6369050929",
      email: CONTACT.email,
      priceRange: "₹₹",
      description:
        "Chennai-based digital marketing and software company: conversion-focused websites, custom web and mobile apps, social media marketing, and SEO/AEO/GEO for B2B manufacturers and growing businesses.",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.locality,
        addressRegion: CONTACT.address.region,
        postalCode: CONTACT.address.postalCode,
        addressCountry: CONTACT.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: CONTACT.geo.lat,
        longitude: CONTACT.geo.lng,
      },
      areaServed: [
        { "@type": "City", name: "Chennai" },
        { "@type": "State", name: "Tamil Nadu" },
        { "@type": "Country", name: "India" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:30",
          closes: "19:00",
        },
      ],
      sameAs: SOCIALS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Adszoo",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
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
    <html lang="en-IN" suppressHydrationWarning>
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
          dangerouslySetInnerHTML={{ __html: jsonLd(orgSchema) }}
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
        <WhatsAppFloat />
        {/* <Navbar /> */}
        {/* <PageTransitionProvider>{children}</PageTransitionProvider> */}

        {/* <FooterSection /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
