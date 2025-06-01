import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies-data";

export default function CaseStudiesPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-medium mb-3">Case Studies</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Success Stories
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore how we&apos;ve transformed digital experiences across
            diverse industries, delivering impactful results for our clients.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="grid md:grid-cols-2 gap-8 border border-gray-200 rounded-2xl overflow-hidden"
            >
              <div className="bg-black p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <Image
                      src={caseStudy.logoUrl || "/placeholder.svg"}
                      alt={`${caseStudy.title} Logo`}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {caseStudy.title}
                  </h3>
                </div>
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
  );
}
