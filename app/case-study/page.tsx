import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies-data";
import { Navbar } from "@/components/layout/navbar";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Client Success Stories | Real Digital Marketing Results - Adszoo",
  description:
    "Explore Adszoo's case studies and discover how we've helped clients increase leads, boost revenue, and grow online. Real strategies. Real results.",
  keywords: [
    "case studies",
    "digital marketing success",
    "adszoo results",
    "marketing campaigns",
    "lead generation",
    "performance marketing",
    "client success",
  ],
  openGraph: {
    title: "Client Success Stories | Real Digital Marketing Results - Adszoo",
    description:
      "Discover real-world case studies of how Adszoo has delivered measurable results for clients across industries.",
    url: "https://adszoo.in/case-study",
    siteName: "Adszoo",
    images: [
      {
        url: "https://adszoo.in/og-case-studies.png",
        width: 1200,
        height: 630,
        alt: "Adszoo Case Studies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Success Stories | Real Digital Marketing Results - Adszoo",
    description:
      "Explore how Adszoo helped real businesses grow using proven digital marketing strategies.",
    images: ["https://adszoo.in/og-case-studies.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://adszoo.in/case-study",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
      <Navbar />
      <div className="bg-white text-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-medium mb-3">Case Studies</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              Real Work. Real Results.
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Here&apos;s a look at the kind of impact we&apos;ve made for our
              clients. From growing leads to scaling revenue, these are real
              stories of businesses we&apos;ve helped grow, the honest way.
            </p>
          </div>

          <div className="grid gap-12 md:gap-16">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="grid md:grid-cols-2 gap-8 border border-gray-200 rounded-2xl overflow-hidden"
              >
                <div className="relative h-64 md:h-auto bg-gray-200">
                  <Image
                    src={caseStudy.logoUrl || "/placeholder.svg"}
                    alt={`${caseStudy.title} Image`}
                    fill
                    className="object-cover filter grayscale"
                  />
                  {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-bold text-center">
                      {caseStudy.title}
                    </h3>
                  </div> */}
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{caseStudy.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-gray-500 mb-2">Industry</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.industry.map((industry, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/case-study/${caseStudy.slug}`}
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                  >
                    View Case Study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
