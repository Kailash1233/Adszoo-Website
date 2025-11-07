/* eslint-disable @next/next/no-img-element */
// // app/layout.tsx
// import { GoogleAnalytics } from "@next/third-parties/google";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Adszoo | High-Converting Websites & Sales Funnels",
//   description:
//     "This is a private landing page for business owners. If you're here, it means we sent you this page personally to explore how we can grow your business online.",
//   robots: {
//     index: false,
//     follow: false,
//   },
//   openGraph: {
//     title: "Adszoo | High-Converting Websites & Funnels",
//     description:
//       "Custom-built websites and sales funnels that convert visitors into paying customers.",
//     url: "https://adszoo.in",
//     siteName: "Adszoo",
//     images: [
//       {
//         url: "https://adszoo.in/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Adszoo Landing Page",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Adszoo | High-Converting Websites & Funnels",
//     description:
//       "Let’s help your business generate more leads and sales online.",
//     images: ["https://adszoo.in/og-image.jpg"],
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="robots" content="noindex, nofollow" />

// <script>
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '1940003706575360');
// fbq('track', 'PageView');
// </script>

//       </head>
//       <body className={`${inter.className} bg-white text-black antialiased`}>
//         <GoogleAnalytics
//           gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"}
//         />
//         {children}

//         <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=1940003706575360&ev=PageView&noscript=1"
// /></noscript>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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
      {/* You can omit this <head> entirely since metadata handles robots.
          Keeping it is fine if you want the explicit meta tag. */}
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`${inter.className} bg-white text-black antialiased`}>
        {/* Google Analytics (App Router helper) */}
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"}
        />

        {/* Facebook Pixel via next/script (avoids SSR errors) */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1940003706575360');
            fbq('track', 'PageView');
          `}
        </Script>

        {children}

        {/* Correct JSX style object + alt for accessibility */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1940003706575360&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
