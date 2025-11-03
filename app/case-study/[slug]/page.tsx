// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import {
//   getCaseStudyBySlug,
//   getRelatedCaseStudies,
//   caseStudies,
// } from "@/lib/case-studies-data";
// import { Navbar } from "@/components/layout/navbar";

// interface CaseStudyPageProps {
//   params: Promise<{ slug: string }>;
// }

// export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
//   const { slug } = await params;

//   const caseStudy = getCaseStudyBySlug(slug);

//   if (!caseStudy) {
//     notFound();
//   }

//   const relatedCaseStudies = getRelatedCaseStudies(slug, 3);

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white text-black min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           {/* Hero Section */}
//           <div className="mb-16">
//             <h1 className="text-5xl md:text-7xl font-bold mb-8">
//               {caseStudy.title}
//             </h1>
//             <p className="text-xl text-gray-600 max-w-4xl">
//               {caseStudy.description}
//             </p>
//           </div>

//           {/* Project Details */}
//           <div className="grid md:grid-cols-3 gap-12 mb-16">
//             <div>
//               <h2 className="text-lg font-semibold mb-3">Client</h2>
//               <p className="text-xl font-bold">{caseStudy.client}</p>
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold mb-3">Turnaround</h2>
//               <p className="text-xl font-bold">{caseStudy.turnaround}</p>
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold mb-3">Stack</h2>
//               <div className="flex flex-wrap gap-2">
//                 {caseStudy.stack.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-12 mb-16">
//             <div>
//               <h2 className="text-lg font-semibold mb-3">Industry</h2>
//               <div className="flex flex-wrap gap-2">
//                 {caseStudy.industry.map((industry, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
//                   >
//                     {industry}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="md:col-span-2">
//               <h2 className="text-lg font-semibold mb-3">Scope of work</h2>
//               <div className="flex flex-wrap gap-2">
//                 {caseStudy.scopeOfWork.map((scope, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
//                   >
//                     {scope}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Project Preview */}
//           <div className="mb-20 border border-gray-200 rounded-2xl overflow-hidden">
//             {/* <div className="bg-gray-50 p-8">
//               <Image
//                 src={caseStudy.previewImage || "/placeholder.svg"}
//                 alt={`${caseStudy.title} Preview`}
//                 width={800}
//                 height={400}
//                 className="w-full h-auto rounded-lg shadow-lg"
//               />
//             </div> */}
//             <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg">
//               <Image
//                 src={caseStudy.previewImage || "/placeholder.svg"}
//                 alt={`${caseStudy.title} Preview`}
//                 className="w-full h-auto object-contain"
//                 sizes="100vw"
//                 width={0}
//                 height={0}
//                 style={{ width: "100%", height: "auto" }}
//                 priority
//               />
//             </div>
//           </div>

//           {/* Project Description */}
//           <div className="mb-20">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
//               <p className="text-lg text-gray-600 mb-10">
//                 {caseStudy.challenge}
//               </p>

//               <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
//               <p className="text-lg text-gray-600 mb-10">
//                 {caseStudy.approach}
//               </p>

//               <h2 className="text-3xl font-bold mb-6">The Results</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 The new {caseStudy.title} website has significantly improved
//                 user engagement metrics:
//                 <br /> <br />
//                 {caseStudy.results}
//               </p>
//             </div>
//           </div>

//           {/* Other Case Studies */}
//           <div>
//             <h2 className="text-3xl font-bold mb-8">Other Case Studies</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {relatedCaseStudies.map((study) => (
//                 <div
//                   key={study.id}
//                   className="border border-gray-200 rounded-xl overflow-hidden"
//                 >
//                   <div className="relative h-48 w-full">
//                     <Image
//                       src={study.logoUrl || "/placeholder.svg"}
//                       alt={`${study.title} Image`}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                     />
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-2">{study.title}</h3>
//                     <p className="text-gray-600 mb-4">
//                       {study.shortDescription}
//                     </p>
//                     <Link
//                       href={`/case-study/${study.slug}`}
//                       className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
//                     >
//                       View Case Study
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 ml-1"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export async function generateStaticParams() {
//   return caseStudies.map((study) => ({
//     slug: study.slug,
//   }));
// }
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCaseStudyBySlug,
  getRelatedCaseStudies,
  caseStudies,
} from "@/lib/case-studies-data";
import { Navbar } from "@/components/layout/navbar";
import AnimatedPreviewWithLightbox from "@/components/AnimatedPreviewWithLightbox";
import { GoogleAnalytics } from "@next/third-parties/google";
import { FooterSection } from "@/components/layout/sections/footer";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) notFound();

  const relatedCaseStudies = getRelatedCaseStudies(slug, 3);

  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
      <Navbar />

      <main className="bg-white text-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* HERO */}
          <section className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight transition-transform duration-300">
                {caseStudy.title}
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                {caseStudy.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <a
                  href={caseStudy.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-5 py-3 text-sm font-semibold shadow-md"
                >
                  Visit live site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
                  </svg>
                </a>

                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    {caseStudy.turnaround}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    {Array.isArray(caseStudy.industry)
                      ? caseStudy.industry.join(", ")
                      : caseStudy.industry}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats / Quick Info Panel */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700">
                  Project Snapshot
                </h3>

                <dl className="mt-4 grid gap-3">
                  <div>
                    <dt className="text-xs text-gray-500">Client</dt>
                    <dd className="font-medium">{caseStudy.client}</dd>
                  </div>

                  <div>
                    <dt className="text-xs text-gray-500">Services</dt>
                    <dd className="font-medium">
                      {Array.isArray(caseStudy.services)
                        ? caseStudy.services.join(" • ")
                        : caseStudy.services}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-gray-500">Tech</dt>
                    <dd className="flex flex-wrap gap-2 mt-2">
                      {Array.isArray(caseStudy.stack) &&
                        caseStudy.stack.map((s: string, i: number) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-white border rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </section>

          {/* PREVIEW: mobile = full image, desktop = small preview + lightbox */}
          <div className="mb-20 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="w-full">
              <AnimatedPreviewWithLightbox
                src={caseStudy.previewImage || "/placeholder.svg"}
                alt={`${caseStudy.title} Preview`}
                isNura={caseStudy.slug === "nura"}
              />
            </div>
          </div>

          {/* Challenge / Approach / Results */}
          <section className="grid lg:grid-cols-3 gap-12 mb-20 items-start">
            <div className="lg:col-span-2">
              <article className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-lg text-gray-600">{caseStudy.challenge}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                  <p className="text-lg text-gray-600">{caseStudy.approach}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Results</h2>
                  <p className="text-lg text-gray-600">{caseStudy.results}</p>

                  {/* Optional metrics area */}
                  {caseStudy.metrics && Array.isArray(caseStudy.metrics) && (
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {caseStudy.metrics.map((m: any, idx: number) => (
                        <div
                          key={idx}
                          className="p-4 bg-white border rounded-lg text-center"
                        >
                          <div className="text-2xl font-bold">{m.value}</div>
                          <div className="text-xs text-gray-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </div>

            {/* Callout / CTA */}
            <aside>
              <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
                <h4 className="text-lg font-semibold mb-3">
                  Want a site like this?
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  We build performant, conversion-first websites for B2B and D2C
                  brands.
                </p>

                <Link
                  href="https://cal.com/adszoo/15min"
                  className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-4 py-3 font-medium"
                >
                  Start a project
                </Link>

                <div className="mt-4 text-xs text-gray-500">
                  Or email us at{" "}
                  <a href="mailto:info@adszoo.in" className="underline">
                    info@adszoo.in
                  </a>
                </div>
              </div>
            </aside>
          </section>

          {/* Related Case Studies */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Other case studies</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map((study) => (
                <article
                  key={study.id}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={study.logoUrl || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-semibold mb-2">
                      {study.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {study.shortDescription}
                    </p>
                    <Link
                      href={`/case-study/${study.slug}`}
                      className="text-emerald-600 font-medium inline-flex items-center gap-2 hover:text-emerald-700"
                    >
                      View case study
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
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <FooterSection />
    </>
  );
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}
