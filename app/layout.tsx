import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
// import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Adszoo | Best Website Development & Social Media Marketing Agency",
  description:
    "Boost your business with expert PPC, Website Development and Social Media services. Partner with Adszoo for proven digital marketing strategies.",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="2scpu4pXHJ-tPOYU7PA9trnQsFwk6z3AUfDywzNVt6Y"
        />
        <title>
          Adszoo - Best Website Development & Social Media Marketing Agency
        </title>
        <meta
          name="description"
          content="Boost your business with expert PPC, Website Development and Social Media services. Partner with Adszoo for proven digital marketing strategies."
        />
        {/* Add JSON-LD structured data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "DigitalMarketingAgency",
            "name": "Adszoo",
            "url": "https://www.adszoo.in",
            "logo": "https://scontent.fmaa3-2.fna.fbcdn.net/v/t39.30808-6/458183186_1154363618956225_8041723116845708442_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DVNm2ZPTdb0Q7kNvgFb9Teo&_nc_zt=23&_nc_ht=scontent.fmaa3-2.fna&_nc_gid=Amezj7l9h0sZE6iavzBW-MW&oh=00_AYCSGZJIE2EOEFvZwtc-yQl5TP2K2AGfUbCWLuCJ0alDrw&oe=67147A90",
            "description": "Adszoo offers Website Development and Social Media services to grow your business online.",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61565406179842",
            ],
            "address": {
              "@type": "Chromepet, Chennai",
              "streetAddress": "123 Adszoo St.",
              "addressLocality": "Chennai",
              "addressRegion": "TamilNadu",
              "postalCode": "600044",
              "addressCountry": "IN"
            }
          }`}
        </script>
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <Analytics />
        <Navbar />

        {children}
        <FooterSection />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
