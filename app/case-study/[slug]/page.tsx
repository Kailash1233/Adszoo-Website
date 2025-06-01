import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCaseStudyBySlug,
  getRelatedCaseStudies,
  caseStudies,
} from "@/lib/case-studies-data";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = getRelatedCaseStudies(slug, 3);

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            {caseStudy.description}
          </p>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-lg font-semibold mb-3">Client</h2>
            <p className="text-xl font-bold">{caseStudy.client}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Turnaround</h2>
            <p className="text-xl font-bold">{caseStudy.turnaround}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-lg font-semibold mb-3">Industry</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.industry.map((industry, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-3">Scope of work</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.scopeOfWork.map((scope, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                >
                  {scope}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Preview */}
        <div className="mb-20 border border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gray-50 p-8">
            <Image
              src={caseStudy.previewImage || "/placeholder.svg"}
              alt={`${caseStudy.title} Preview`}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 mb-10">{caseStudy.challenge}</p>

            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-gray-600 mb-10">{caseStudy.approach}</p>

            <h2 className="text-3xl font-bold mb-6">The Results</h2>
            <p className="text-lg text-gray-600 mb-6">
              The new {caseStudy.title} website has significantly improved user
              engagement metrics:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-10">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="mb-2">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Other Case Studies */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Other Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedCaseStudies.map((study) => (
              <div
                key={study.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="bg-gray-50 p-6 flex items-center justify-center h-48">
                  <Image
                    src={study.logoUrl || "/placeholder.svg"}
                    alt={`${study.title} Logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.shortDescription}</p>
                  <Link
                    href={`/case-study/${study.slug}`}
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
    </div>
  );
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}
