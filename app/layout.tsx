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
  title: "Adszoo | Best Website Development & Social Media Marketing Agency",
  description:
    "Boost your business with expert PPC, Website Development and Social Media services. Partner with Adszoo for proven digital marketing strategies.",
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "xl5wvfu4ip");
    `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DigitalMarketingAgency",
              name: "Adszoo",
              url: "https://www.adszoo.in",
              logo: "https://scontent.fmaa3-2.fna.fbcdn.net/v/t39.30808-6/458183186_1154363618956225_8041723116845708442_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DVNm2ZPTdb0Q7kNvgFb9Teo&_nc_zt=23&_nc_ht=scontent.fmaa3-2.fna&_nc_gid=Amezj7l9h0sZE6iavzBW-MW&oh=00_AYCSGZJIE2EOEFvZwtc-yQl5TP2K2AGfUbCWLuCJ0alDrw&oe=67147A90",
              description:
                "Adszoo offers Website Development and Social Media services to grow your business online.",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61565406179842",
              ],
              address: {
                "@type": "Chromepet, Chennai",
                streetAddress: "Nehru Nagar",
                addressLocality: "Chennai",
                addressRegion: "TamilNadu",
                postalCode: "600044",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
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
