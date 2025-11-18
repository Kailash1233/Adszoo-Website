import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies-data";
import { Navbar } from "@/components/layout/navbar";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { FooterSection } from "@/components/layout/sections/footer";

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
      <div className="bg-white text-black min-h-screen tracking-tighter">
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
      <FooterSection />
    </>
  );
}

// 2nd edit
// app/case-study/page.tsx
// import Link from "next/link";
// import Image from "next/image";
// import { caseStudies } from "@/lib/case-studies-data";
// import { Navbar } from "@/components/layout/navbar";
// import type { Metadata } from "next";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import { FooterSection } from "@/components/layout/sections/footer";

// export const metadata: Metadata = {
//   title: "Client Success Stories | Real Digital Marketing Results - Adszoo",
//   description:
//     "Explore Adszoo's case studies and discover how we've helped clients increase leads, boost revenue, and grow online. Real strategies. Real results.",
//   openGraph: {
//     title: "Client Success Stories | Real Digital Marketing Results - Adszoo",
//     description:
//       "Discover real-world case studies of how Adszoo has delivered measurable results for clients across industries.",
//     url: "https://adszoo.in/case-study",
//     siteName: "Adszoo",
//     images: [
//       {
//         url: "https://adszoo.in/og-case-studies.png",
//         width: 1200,
//         height: 630,
//         alt: "Adszoo Case Studies",
//       },
//     ],
//     type: "website",
//   },
// };

// export default function CaseStudiesPage() {
//   // deterministic featured: first case study (avoid randomness that breaks hydration)
//   const featured = caseStudies[0];
//   const others = caseStudies.slice(1);

//   return (
//     <>
//       <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
//       <Navbar />

//       <main className="bg-white text-black min-h-screen tracking-tighter">
//         {/* HERO */}
//         <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
//           <div className="text-center max-w-3xl mx-auto">
//             <p className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-600 px-3 py-1 text-sm font-medium mb-4">
//               Case Studies
//             </p>

//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
//               Real Work. Real Results.
//             </h1>

//             <p className="text-gray-600 text-lg md:text-xl mb-8">
//               We combine strategy, design and performance to grow our clients'
//               revenue and leads. Below are selected stories that show our
//               approach and outcomes.
//             </p>

//             <div className="flex items-center justify-center gap-3">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full font-semibold shadow"
//               >
//                 Book a free strategy call
//               </Link>

//               <Link
//                 href="/services"
//                 className="inline-flex items-center gap-2 border px-5 py-3 rounded-full text-sm hover:bg-gray-50"
//               >
//                 Our Services
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* FEATURED CASE STUDY */}
//         <section className="max-w-7xl mx-auto px-6 pb-12">
//           <article className="grid gap-8 md:grid-cols-3 items-stretch">
//             <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
//               <div className="relative h-64 md:h-96">
//                 <Image
//                   src={
//                     featured.previewImage ??
//                     featured.logoUrl ??
//                     "/placeholder.svg"
//                   }
//                   alt={`${featured.title} preview`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1000px"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
//               </div>

//               <div className="p-8 md:p-10">
//                 <div className="flex items-start justify-between gap-6">
//                   <div className="flex items-start gap-6">
//                     <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/60 border flex-shrink-0">
//                       <Image
//                         src={featured.logoUrl ?? "/placeholder.svg"}
//                         alt={`${featured.title} logo`}
//                         width={80}
//                         height={80}
//                         className="object-cover"
//                       />
//                     </div>

//                     <div>
//                       <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
//                         {featured.title}
//                       </h2>
//                       <p className="text-sm text-gray-500 mt-3 max-w-xl">
//                         {featured.shortDescription ?? featured.description}
//                       </p>

//                       <div className="mt-4 flex flex-wrap gap-2">
//                         {featured.services?.slice(0, 4).map((s, i) => (
//                           <span
//                             key={i}
//                             className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700"
//                           >
//                             {s}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="hidden md:flex flex-col items-end gap-3 text-right">
//                     <div className="text-sm text-gray-500">Turnaround</div>
//                     <div className="text-lg font-semibold">
//                       {featured.turnaround ?? "Completed"}
//                     </div>
//                     <div className="text-sm text-gray-500 mt-2">
//                       {featured.stack?.slice(0, 3).join(" • ")}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-2">
//                       Challenge
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       {featured.challenge ?? "—"}
//                     </p>
//                   </div>

//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-2">
//                       Approach
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       {featured.approach ?? "—"}
//                     </p>
//                   </div>

//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-2">
//                       Results
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       {featured.results ?? "—"}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-6 flex items-center gap-3">
//                   <Link
//                     href={`/case-study/${featured.slug}`}
//                     className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-semibold shadow"
//                   >
//                     View Case Study
//                   </Link>

//                   {featured.website ? (
//                     <Link
//                       href={featured.website}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gray-800"
//                     >
//                       Visit website
//                     </Link>
//                   ) : null}
//                 </div>
//               </div>
//             </div>

//             {/* Aside quick facts */}
//             <aside className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
//               <h3 className="text-sm font-semibold mb-3">Quick facts</h3>

//               <dl className="grid gap-4">
//                 <div>
//                   <dt className="text-xs text-gray-500">Client</dt>
//                   <dd className="font-medium">{featured.client}</dd>
//                 </div>

//                 <div>
//                   <dt className="text-xs text-gray-500">Industry</dt>
//                   <dd className="font-medium">
//                     {featured.industry?.join(", ")}
//                   </dd>
//                 </div>

//                 <div>
//                   <dt className="text-xs text-gray-500">Scope</dt>
//                   <dd className="font-medium">
//                     {featured.scopeOfWork?.join(", ")}
//                   </dd>
//                 </div>

//                 <div>
//                   <dt className="text-xs text-gray-500">Stack</dt>
//                   <dd className="font-medium">{featured.stack?.join(", ")}</dd>
//                 </div>
//               </dl>

//               <div className="mt-6">
//                 <Link
//                   href={`/case-study/${featured.slug}`}
//                   className="block text-center rounded-md px-4 py-2 bg-emerald-50 text-emerald-700 font-semibold"
//                 >
//                   Read full case study
//                 </Link>
//               </div>
//             </aside>
//           </article>
//         </section>

//         {/* GRID: other case studies */}
//         <section className="max-w-7xl mx-auto px-6 pb-20">
//           <h3 className="text-2xl font-bold mb-6">More case studies</h3>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {others.map((cs) => (
//               <article
//                 key={cs.id}
//                 className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
//               >
//                 <div className="relative h-44">
//                   <Image
//                     src={cs.previewImage ?? cs.logoUrl ?? "/placeholder.svg"}
//                     alt={`${cs.title} preview`}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 640px) 100vw, 33vw"
//                     priority={false}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
//                 </div>

//                 <div className="p-5">
//                   <h4 className="text-lg font-semibold mb-2">{cs.title}</h4>

//                   <p className="text-sm text-gray-600 mb-3 line-clamp-3">
//                     {cs.shortDescription ?? cs.description?.slice(0, 120)}
//                   </p>

//                   <div className="flex items-center justify-between mt-4">
//                     <div className="flex flex-wrap gap-2">
//                       {cs.services?.slice(0, 3).map((s, i) => (
//                         <span
//                           key={i}
//                           className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700"
//                         >
//                           {s}
//                         </span>
//                       ))}
//                     </div>

//                     <Link
//                       href={`/case-study/${cs.slug}`}
//                       className="text-emerald-600 font-medium hover:text-emerald-700"
//                     >
//                       View Case Study
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>
//       </main>

//       <FooterSection />
//     </>
//   );
// }

// with backend

// app/case-study/page.tsx
// import Link from "next/link";
// import Image from "next/image";
// import type { Metadata } from "next";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import { Navbar } from "@/components/layout/navbar";
// import { FooterSection } from "@/components/layout/sections/footer";
// import { caseStudies as localCaseStudies } from "@/lib/case-studies-data";
// import { createClient } from "@supabase/supabase-js";

// export const metadata: Metadata = {
//   title: "Client Success Stories | Real Digital Marketing Results - Adszoo",
//   description:
//     "Explore Adszoo's case studies and discover how we've helped clients increase leads, boost revenue, and grow online. Real strategies. Real results.",
//   openGraph: {
//     title: "Client Success Stories | Real Digital Marketing Results - Adszoo",
//     description:
//       "Discover real-world case studies of how Adszoo has delivered measurable results for clients across industries.",
//     url: "https://adszoo.in/case-study",
//     siteName: "Adszoo",
//     images: [
//       {
//         url: "https://adszoo.in/og-case-studies.png",
//         width: 1200,
//         height: 630,
//         alt: "Adszoo Case Studies",
//       },
//     ],
//     type: "website",
//   },
// };

// // Type for the case study row from Supabase (subset of fields you use)
// type CaseStudy = {
//   id: string;
//   slug: string;
//   title: string;
//   client?: string;
//   short_description?: string | null;
//   description?: string | null;
//   challenge?: string | null;
//   approach?: string | null;
//   results?: string | null;
//   image?: string | null;
//   preview_image?: string | null; // if you use this field in DB
//   logo_url?: string | null;
//   stack?: string[] | null;
//   industry?: string[] | null;
//   services?: string[] | null;
//   scope_of_work?: string[] | null;
//   turnaround?: string | null;
// };

// const supabaseClient = () => {
//   const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
//   const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//   if (!url || !anon) {
//     // We'll let callers know by returning null; fallbacks will be used
//     return null;
//   }

//   return createClient(url, anon, {
//     auth: { persistSession: false },
//   });
// };

// async function fetchCaseStudiesFromSupabase(): Promise<CaseStudy[] | null> {
//   const supabase = supabaseClient();
//   if (!supabase) return null;

//   // server-side call to fetch published case studies
//   const { data, error } = await supabase
//     .from<CaseStudy>("case_studies")
//     .select("*")
//     .eq("published", true)
//     .order("created_at", { ascending: false });

//   if (error) {
//     // Log server-side if you want (Vercel logs) and fallback later
//     // console.error("Supabase fetch error:", error);
//     return null;
//   }

//   return data ?? null;
// }

// export default async function CaseStudiesPage() {
//   // Try server-side fetch; fallback to local caseStudies if anything fails
//   const fetched = await fetchCaseStudiesFromSupabase();
//   const allCaseStudies: CaseStudy[] =
//     fetched && fetched.length > 0 ? fetched : localCaseStudies;

//   // deterministic featured: first item in the array (newest)
//   const featured = allCaseStudies[0];
//   const others = allCaseStudies.slice(1);

//   return (
//     <>
//       <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
//       <Navbar />

//       <main className="bg-white text-black min-h-screen tracking-tighter">
//         {/* HERO */}
//         <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
//           <div className="text-center max-w-3xl mx-auto">
//             <p className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-600 px-3 py-1 text-sm font-medium mb-4">
//               Case Studies
//             </p>

//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
//               Real Work. Real Results.
//             </h1>

//             <p className="text-gray-600 text-lg md:text-xl mb-8">
//               We combine strategy, design and performance to grow our
//               clients&apos; revenue and leads. Below are selected stories that
//               show our approach and outcomes.
//             </p>

//             <div className="flex items-center justify-center gap-3">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full font-semibold shadow"
//               >
//                 Book a free strategy call
//               </Link>

//               <Link
//                 href="/services"
//                 className="inline-flex items-center gap-2 border px-5 py-3 rounded-full text-sm hover:bg-gray-50"
//               >
//                 Our Services
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* FEATURED CASE STUDY */}
//         <section className="max-w-7xl mx-auto px-6 pb-12">
//           <article className="grid gap-8 md:grid-cols-3 items-stretch">
//             <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
//               <div className="relative h-64 md:h-96">
//                 <Image
//                   src={
//                     // prefer preview_image or image, fall back to logo or placeholder
//                     (featured as any).preview_image ??
//                     featured.image ??
//                     featured.logo_url ??
//                     "/placeholder.svg"
//                   }
//                   alt={`${featured.title} preview`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1000px"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
//               </div>

//               <div className="p-8 md:p-10">
//                 <div className="flex items-start justify-between gap-6">
//                   <div className="flex items-start gap-6">
//                     <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/60 border flex-shrink-0">
//                       <Image
//                         src={featured.logo_url ?? "/placeholder.svg"}
//                         alt={`${featured.title} logo`}
//                         width={80}
//                         height={80}
//                         className="object-cover"
//                       />
//                     </div>

//                     <div>
//                       <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
//                         {featured.title}
//                       </h2>
//                       <p className="text-sm text-gray-500 mt-3 max-w-xl">
//                         {featured.short_description ?? featured.description}
//                       </p>

//                       <div className="mt-4 flex flex-wrap gap-2">
//                         {featured.services?.slice(0, 4).map((s, i) => (
//                           <span
//                             key={i}
//                             className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700"
//                           >
//                             {s}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="hidden md:flex flex-col items-end gap-3 text-right">
//                     <div className="text-sm text-gray-500">Turnaround</div>
//                     <div className="text-lg font-semibold">
//                       {featured.turnaround ?? "Completed"}
//                     </div>
//                     <div className="text-sm text-gray-500 mt-2">
//                       {featured.stack?.slice(0, 3).join(" • ")}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-2">
//                       Challenge
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       {featured.challenge ?? "—"}
//                     </p>
//                   </div>

//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-2">
//                       Approach
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       {featured.approach ?? "—"}
//                     </p>
//                   </div>

//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-2">
//                       Results
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       {featured.results ?? "—"}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-6 flex items-center gap-3">
//                   <Link
//                     href={`/case-study/${(featured as any).slug ?? ""}`}
//                     className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-semibold shadow"
//                   >
//                     View Case Study
//                   </Link>

//                   {featured.client && (
//                     <a
//                       href={featured.client}
//                       // if 'website' field exists in your DB, swap accordingly
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gray-800"
//                     >
//                       Visit website
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Aside quick facts */}
//             <aside className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
//               <h3 className="text-sm font-semibold mb-3">Quick facts</h3>

//               <dl className="grid gap-4">
//                 <div>
//                   <dt className="text-xs text-gray-500">Client</dt>
//                   <dd className="font-medium">{featured.client}</dd>
//                 </div>

//                 <div>
//                   <dt className="text-xs text-gray-500">Industry</dt>
//                   <dd className="font-medium">
//                     {featured.industry?.join(", ")}
//                   </dd>
//                 </div>

//                 <div>
//                   <dt className="text-xs text-gray-500">Scope</dt>
//                   <dd className="font-medium">
//                     {featured.scope_of_work?.join(", ")}
//                   </dd>
//                 </div>

//                 <div>
//                   <dt className="text-xs text-gray-500">Stack</dt>
//                   <dd className="font-medium">{featured.stack?.join(", ")}</dd>
//                 </div>
//               </dl>

//               <div className="mt-6">
//                 <Link
//                   href={`/case-study/${(featured as any).slug ?? ""}`}
//                   className="block text-center rounded-md px-4 py-2 bg-emerald-50 text-emerald-700 font-semibold"
//                 >
//                   Read full case study
//                 </Link>
//               </div>
//             </aside>
//           </article>
//         </section>

//         {/* GRID: other case studies */}
//         <section className="max-w-7xl mx-auto px-6 pb-20">
//           <h3 className="text-2xl font-bold mb-6">More case studies</h3>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {others.map((cs) => (
//               <article
//                 key={cs.id}
//                 className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
//               >
//                 <div className="relative h-44">
//                   <Image
//                     src={
//                       // prefer preview_image or image, fallback to logo
//                       (cs as any).preview_image ??
//                       cs.image ??
//                       cs.logo_url ??
//                       "/placeholder.svg"
//                     }
//                     alt={`${cs.title} preview`}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 640px) 100vw, 33vw"
//                     priority={false}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
//                 </div>

//                 <div className="p-5">
//                   <h4 className="text-lg font-semibold mb-2">{cs.title}</h4>

//                   <p className="text-sm text-gray-600 mb-3 line-clamp-3">
//                     {cs.short_description ??
//                       (cs.description ? cs.description.slice(0, 120) : "")}
//                   </p>

//                   <div className="flex items-center justify-between mt-4">
//                     <div className="flex flex-wrap gap-2">
//                       {cs.services?.slice(0, 3).map((s, i) => (
//                         <span
//                           key={i}
//                           className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700"
//                         >
//                           {s}
//                         </span>
//                       ))}
//                     </div>

//                     <Link
//                       href={`/case-study/${cs.slug}`}
//                       className="text-emerald-600 font-medium hover:text-emerald-700"
//                     >
//                       View Case Study
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>
//       </main>

//       <FooterSection />
//     </>
//   );
// }
