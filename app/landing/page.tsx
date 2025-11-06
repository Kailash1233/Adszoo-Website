// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { caseStudies } from "@/lib/case-studies-data";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { GoogleAnalytics } from "@next/third-parties/google";

// const fadeIn = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function LandingPage() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleMouseLeave = (e: MouseEvent) => {
//       if (e.clientY < 10) setShowPopup(true);
//     };

//     const updateScrollProgress = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.scrollHeight - window.innerHeight;
//       const scrolled = (scrollTop / docHeight) * 100;
//       setScrollProgress(scrolled);
//     };

//     window.addEventListener("mouseout", handleMouseLeave);
//     window.addEventListener("scroll", updateScrollProgress);

//     return () => {
//       window.removeEventListener("mouseout", handleMouseLeave);
//       window.removeEventListener("scroll", updateScrollProgress);
//     };
//   }, []);

//   const [testVariant, setTestVariant] = useState("A");

//   useEffect(() => {
//     const savedVariant = localStorage.getItem("ab-variant");
//     if (savedVariant) {
//       setTestVariant(savedVariant);
//     } else {
//       const variant = Math.random() > 0.5 ? "A" : "B";
//       localStorage.setItem("ab-variant", variant);
//       setTestVariant(variant);
//     }
//   }, []);

//   const urgencyText =
//     testVariant === "A"
//       ? "🚨 Limited slots left for June campaigns. Book your call now!"
//       : "📅 Strategy calls are booking fast. Reserve your spot today!";

//   return (
//     <>
//       <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
//       <Head>
//         <title>Ads Adszoo | Digital Marketing That Delivers Results</title>
//         <meta
//           name="description"
//           content="Ads Adszoo helps businesses boost lead quality and drive more conversions with expert digital marketing strategies. Book your free strategy call now."
//         />
//         <meta
//           name="keywords"
//           content="Ads Adszoo, digital marketing, lead generation, SEO, performance marketing, growth strategies"
//         />
//         <meta
//           property="og:title"
//           content="Ads Adszoo | Digital Marketing That Delivers Results"
//         />
//         <meta
//           property="og:description"
//           content="Our strategies help you get more qualified leads and turn them into sales. Book your free strategy session today."
//         />
//         <meta property="og:image" content="https://adszoo.in/og-image.jpg" />
//         <meta property="og:url" content="https://adszoo.in" />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Ads Adszoo | Digital Marketing That Delivers Results"
//         />
//         <meta
//           name="twitter:description"
//           content="Get more qualified leads and higher conversion rates with Ads Adszoo’s custom marketing strategies."
//         />
//         <meta name="twitter:image" content="https://adszoo.in/og-image.jpg" />
//       </Head>

//       <div className="bg-white text-black relative">
//         {/* Scroll Indicator */}
//         <div
//           className="fixed top-0 left-0 h-1 bg-emerald-600 z-50 transition-all duration-200"
//           style={{ width: `${scrollProgress}%` }}
//         />

//         {/* Exit Intent Popup */}
//         {showPopup && (
//           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
//             <div className="bg-white relative p-8 sm:p-10 rounded-3xl shadow-2xl max-w-sm sm:max-w-md text-center animate-in fade-in zoom-in-95">
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
//                 aria-label="Close"
//               >
//                 ✕
//               </button>
//               <h3 className="text-3xl font-bold mb-4 text-gray-900 leading-snug">
//                 Wait! Before You Leave...
//               </h3>
//               <p className="mb-6 text-gray-600 text-base sm:text-lg leading-relaxed">
//                 Book a free strategy call and discover how Adszoo helps you
//                 attract quality leads with smart marketing.
//               </p>
//               <a
//                 href="https://cal.com/adszoo/30min"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl text-base sm:text-lg transition-transform transform hover:scale-105 shadow-md"
//               >
//                 🚀 Book Your Free Call
//               </a>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="mt-5 block mx-auto text-sm text-gray-400 hover:text-gray-600 transition"
//               >
//                 No thanks, maybe later
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Hero Section */}
//         <motion.section
//           className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-emerald-50"
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//         >
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold max-w-4xl mb-6 leading-tight"
//             custom={0}
//             variants={fadeIn}
//           >
//             MOST Businesses see a{" "}
//             <span className="text-emerald-600">15% boost in lead quality</span>{" "}
//             and more sales with our strategies
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10"
//             custom={1}
//             variants={fadeIn}
//           >
//             Here’s how we help you get <strong>more quality leads</strong> - and
//             turn them into <strong>more sales</strong>.
//           </motion.p>

//           <motion.div
//             className="w-full max-w-3xl aspect-video rounded-xl mb-10 shadow-md overflow-hidden"
//             custom={2}
//             variants={fadeIn}
//           >
//             <iframe
//               className="w-full h-full"
//               src="https://cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dbx48qPlaGvE&key=925108d922be940af814f71907a7df4b"
//               title="Adszoo Strategy Video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </motion.div>

//           <motion.a
//             href="https://cal.com/adszoo/30min"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-xl text-lg shadow-md"
//             custom={3}
//             variants={fadeIn}
//           >
//             Let&apos;s Try
//           </motion.a>
//         </motion.section>

//         {/* Second Section */}
//         <motion.section
//           className="py-20 px-6 bg-white text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeIn}
//         >
//           <motion.h2
//             className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
//             custom={0}
//             variants={fadeIn}
//           >
//             Why You’ll Only Get Qualified Leads That Convert
//           </motion.h2>

//           <motion.p
//             className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
//             custom={1}
//             variants={fadeIn}
//           >
//             No guesswork. Just <strong>custom-built targeting</strong> that
//             brings the right audience straight to you.
//           </motion.p>

//           <div className="space-y-4 max-w-3xl mx-auto mb-14 text-center">
//             {[
//               "Custom-built lead strategy",
//               "High-quality targeting on Meta & Google",
//               "Zero fluff. Data-backed approach.",
//               "Optimized for conversion, not just clicks",
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-center gap-3 text-lg text-gray-800 justify-center"
//                 custom={index + 2}
//                 variants={fadeIn}
//               >
//                 ✅ <span>{feature}</span>
//               </motion.div>
//             ))}
//           </div>

//           {/* Urgency Tagline */}
//           <motion.p
//             className="text-red-600 font-semibold text-base md:text-lg mb-6 animate-pulse"
//             custom={6}
//             variants={fadeIn}
//           >
//             {urgencyText}
//           </motion.p>

//           {/* CTA Button */}
//           <motion.a
//             href="https://cal.com/adszoo/30min"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl text-lg shadow-lg hover:scale-105 transition-transform"
//             custom={7}
//             variants={fadeIn}
//           >
//             🚀 Book My Free Strategy Call
//           </motion.a>
//         </motion.section>

//         {/* Objection Handling */}
//         <motion.section
//           className="bg-emerald-100 py-20 px-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//         >
//           <motion.div
//             className="text-center mb-12"
//             custom={0}
//             variants={fadeIn}
//           >
//             <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
//               Still not convinced?
//             </h3>
//             <p className="text-lg text-gray-700">
//               See the transformation yourself 👇
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center"
//             custom={1}
//             variants={fadeIn}
//           >
//             {/* Before Image */}
//             <div className="text-center">
//               <h4 className="text-xl font-semibold text-gray-800 mb-3">
//                 Before
//               </h4>
//               <div className="rounded-2xl overflow-hidden shadow-md border border-gray-300">
//                 <Image
//                   src="/sales/Before.webp" // Replace with your actual path
//                   alt="Before Strategy"
//                   width={600}
//                   height={400}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             </div>

//             {/* After Image */}
//             <div className="text-center">
//               <h4 className="text-xl font-semibold text-gray-800 mb-3">
//                 After
//               </h4>
//               <div className="rounded-2xl overflow-hidden shadow-md border border-emerald-400">
//                 <Image
//                   src="/sales/After.webp" // Replace with your actual path
//                   alt="After Strategy"
//                   width={600}
//                   height={400}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </motion.section>

//         {/* Case Studies */}
//         <motion.section
//           className="py-16 px-6 max-w-7xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//         >
//           <motion.h4
//             className="text-3xl font-bold text-center mb-12"
//             custom={0}
//             variants={fadeIn}
//           >
//             Real Businesses. Real Results.
//           </motion.h4>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {caseStudies.slice(0, 3).map((study, index) => (
//               <motion.div
//                 key={study.id}
//                 className="border border-gray-200 rounded-xl overflow-hidden"
//                 custom={index}
//                 variants={fadeIn}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <div className="relative h-48 w-full">
//                   <Image
//                     src={study.logoUrl || "/placeholder.svg"}
//                     alt={`${study.title} Image`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h5 className="text-xl font-bold mb-2">{study.title}</h5>
//                   <p className="text-gray-600 mb-4">{study.shortDescription}</p>
//                   <Link
//                     href={`/case-study/${study.slug}`}
//                     className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
//                   >
//                     View Case Study
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 ml-1"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             className="text-center mt-16"
//             custom={3}
//             variants={fadeIn}
//           >
//             <a
//               href="https://cal.com/adszoo/30min"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-xl text-lg shadow-md"
//             >
//               Let&apos;s Try
//             </a>
//           </motion.div>
//         </motion.section>

//         {/* Mobile Sticky CTA */}
//         <div className="fixed bottom-0 left-0 w-full bg-emerald-600 text-white text-center py-3 px-4 z-40 md:hidden">
//           <a
//             href="https://cal.com/adszoo/30min"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block font-semibold text-lg"
//           >
//             🚀 Book Your Free Strategy Call
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies-data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) setShowPopup(true);
    };

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("scroll", updateScrollProgress);

    updateScrollProgress();

    return () => {
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const [testVariant, setTestVariant] = useState("A");

  useEffect(() => {
    const savedVariant = localStorage.getItem("ab-variant");
    if (savedVariant) {
      setTestVariant(savedVariant);
    } else {
      const variant = Math.random() > 0.5 ? "A" : "B";
      try {
        localStorage.setItem("ab-variant", variant);
      } catch (e) {
        // ignore
      }
      setTestVariant(variant);
    }
  }, []);

  const urgencyText =
    testVariant === "A"
      ? "🚨 Limited slots left for June campaigns. Book your call now!"
      : "📅 Strategy calls are booking fast. Reserve your spot today!";

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Adszoo",
    url: "https://adszoo.in",
    logo: "https://adszoo.in/og-image.jpg",
    description:
      "Adszoo helps small businesses get higher quality leads and better conversions using data-driven digital marketing.",
    telephone: "+91-7200580860",
    sameAs: [
      "https://www.instagram.com/adszoo",
      "https://www.linkedin.com/company/adszoo",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
      <Head>
        <title>
          Adszoo - Lead Generation & Digital Marketing for Small Businesses
        </title>
        <meta
          name="description"
          content="Adszoo helps Chennai small businesses get more qualified leads and higher conversions through data-driven ads on Google & Meta. Book a free 30-minute strategy call."
        />
        <meta
          name="keywords"
          content="lead generation Chennai, digital marketing Chennai, small business marketing, ad management, Adszoo"
        />
        <meta
          property="og:title"
          content="Adszoo - Lead Generation for Small Businesses"
        />
        <meta
          property="og:description"
          content="Get better quality leads and higher conversion rates with Adszoo's tailored digital marketing strategies. Book your free 30-minute strategy call."
        />
        <meta property="og:image" content="https://adszoo.in/og-image.jpg" />
        <meta property="og:url" content="https://adszoo.in/landing" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://adszoo.in/landing" />

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
      </Head>

      <div className="bg-white text-black relative tracking-tighter">
        {/* Scroll Indicator */}
        <div
          className="fixed top-0 left-0 h-1 bg-emerald-600 z-50 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden
        />

        {/* Exit Intent Popup */}
        {showPopup && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-title"
          >
            <div className="bg-white relative p-6 sm:p-10 rounded-3xl shadow-2xl max-w-sm sm:max-w-md text-center">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                aria-label="Close popup"
              >
                ✕
              </button>
              <h3
                id="exit-popup-title"
                className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 leading-snug"
              >
                Wait - Don’t leave empty-handed
              </h3>
              <p className="mb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                Book a free 30-minute strategy call tailored for small
                businesses in Chennai and Tamil Nadu. No obligation, actionable
                recommendations.
              </p>
              <a
                href="https://cal.com/adszoo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl text-base sm:text-lg transition-transform transform hover:scale-105 shadow-md"
              >
                ✅ Yes - Book My Free 30-Minute Call
              </a>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 block mx-auto text-sm text-gray-500 hover:text-gray-700 transition"
              >
                No thanks, I’ll pass for now
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-gradient-to-b from-emerald-50 to-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold max-w-4xl mb-4 leading-tight"
            custom={0}
            variants={fadeIn}
          >
            MOST small businesses see a{" "}
            <span className="text-emerald-600">15% boost in lead quality</span>{" "}
            and more sales
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-700 max-w-2xl mb-6"
            custom={1}
            variants={fadeIn}
          >
            Data-driven ads on Google & Meta that deliver qualified leads.
            Tailored for Chennai & Tamil Nadu small businesses.
          </motion.p>

          <motion.div
            className="w-full max-w-4xl mb-8"
            custom={2}
            variants={fadeIn}
          >
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-64 md:h-96"
                src="https://www.youtube.com/embed/bx48qPlaGvE?rel=0"
                title="Adszoo Strategy Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="Adszoo explainer video"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            custom={3}
            variants={fadeIn}
          >
            <a
              href="https://cal.com/adszoo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl text-lg shadow-lg"
              aria-label="Book my free 30 minute call"
            >
              ✅ Yes - Book My Free 30-Minute Strategy Call
            </a>

            <Link
              href="/case-study"
              className="inline-block text-emerald-700 font-medium py-3 px-6 rounded-xl border border-emerald-200 hover:bg-emerald-50"
              aria-label="See case studies"
            >
              See our results
            </Link>
          </motion.div>

          <motion.p
            className="text-sm text-gray-600 mt-6 max-w-2xl"
            custom={4}
            variants={fadeIn}
          >
            <strong>Free audit included:</strong> We&apos;ll review your current
            ads & landing page and give 3 quick improvements on the call.
          </motion.p>
        </motion.section>

        {/* Benefits */}
        <motion.section
          className="py-16 px-6 bg-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-4 text-gray-900"
            custom={0}
            variants={fadeIn}
          >
            Why You&apos;ll Only Get Qualified Leads That Convert
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base max-w-2xl mx-auto mb-8"
            custom={1}
            variants={fadeIn}
          >
            No guesswork - custom-built targeting, conversion-focused creatives
            and ongoing optimisation.
          </motion.p>

          <div className="space-y-4 max-w-3xl mx-auto mb-12 text-center">
            {[
              {
                title: "Custom-built lead strategy",
                desc: "Tailored campaigns for your business goals.",
              },
              {
                title: "High-quality targeting",
                desc: "Meta & Google audiences tuned to convert.",
              },
              {
                title: "Data-backed optimisations",
                desc: "We optimise for revenue, not clicks.",
              },
              {
                title: "Transparent reporting",
                desc: "Weekly insights and easy-to-understand dashboards.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center gap-3 text-left md:text-lg text-gray-800 justify-center bg-white p-4 rounded-lg shadow-sm border border-gray-50"
                custom={index + 2}
                variants={fadeIn}
              >
                <div className="text-2xl">✅</div>
                <div>
                  <div className="font-semibold">{feature.title}</div>
                  <div className="text-sm text-gray-600">{feature.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-red-600 font-semibold text-base md:text-lg mb-6 animate-pulse"
            custom={6}
            variants={fadeIn}
          >
            {urgencyText}
          </motion.p>

          <motion.a
            href="https://cal.com/adszoo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl text-lg shadow-lg hover:scale-105 transition-transform"
            custom={7}
            variants={fadeIn}
            aria-label="Book my free 30 minute strategy call"
          >
            🚀 Book My Free 30 - Minute Strategy Call
          </motion.a>
        </motion.section>

        {/* Testimonials & Trust */}
        <motion.section
          className="py-12 px-6 bg-emerald-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            custom={0}
            variants={fadeIn}
          >
            Trusted by small businesses in Chennai & Tamil Nadu
          </motion.h3>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Adszoo doubled our high-quality leads in 2 months and reduced wasted ad spend.",
                name: "Ramesh Kumar",
                title: "Owner - Local Plumbing Co.",
                photo: "/testimonials/Profile.png",
              },
              {
                quote:
                  "Their approach is simple, fast and delivers results. Highly recommended for small businesses.",
                name: "Priya Sharma",
                title: "Founder - Beauty Studio",
                photo: "/testimonials/Profile.png",
              },
              {
                quote:
                  "Clear reporting and measurable results - our footfall increased within weeks.",
                name: "S. Ram",
                title: "Manager - Cafe Corner",
                photo: "/testimonials/Profile.png",
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                className="bg-white p-5 rounded-lg shadow-sm text-left"
                custom={i + 1}
                variants={fadeIn}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.photo}
                      alt={`${t.name} photo`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800">&quot;{t.quote}&quot;</p>
                    <footer className="mt-3 text-sm text-gray-600">
                      {t.name} - <span className="font-medium">{t.title}</span>
                    </footer>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            {/* Trust badges / logos */}
            <Image
              src="/testimonials/google-partner.png"
              alt="Google Partner"
              width={120}
              height={40}
            />
            <Image
              src="/testimonials/meta-badge.png"
              alt="Meta Ads Partner"
              width={120}
              height={40}
            />
            <Image
              src="/testimonials/ssl.png"
              alt="Secure"
              width={120}
              height={40}
            />
          </div>
        </motion.section>

        {/* Before/After */}
        <motion.section
          className="bg-white py-12 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold">See the transformation</h4>
            <p className="text-gray-600 mt-2">
              Real metrics from a recent campaign - simplified.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center"
            custom={1}
            variants={fadeIn}
          >
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-3">
                Before - Low-quality leads & high spend
              </h5>
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-300">
                <Image
                  src="/sales/Before.webp"
                  alt="Before strategy dashboard showing high bounce"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Example: High bounce rate, scattered targeting.
              </p>
            </div>

            <div className="text-center">
              <h5 className="text-lg font-semibold mb-3">
                After - Qualified leads & better ROI
              </h5>
              <div className="rounded-2xl overflow-hidden shadow-md border border-emerald-400">
                <Image
                  src="/sales/After.webp"
                  alt="After strategy dashboard showing improved metrics"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Example: Conversion-focused traffic, lowered CPL.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Case Studies */}
        <motion.section
          className="py-16 px-6 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h4
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            custom={0}
            variants={fadeIn}
          >
            Real Businesses. Real Results.
          </motion.h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 6).map((study, index) => (
              <motion.div
                key={study.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={study.logoUrl || "/placeholder.svg"}
                    alt={`${study.title} logo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-bold mb-2">{study.title}</h5>
                  <p className="text-gray-600 mb-4">{study.shortDescription}</p>
                  <Link
                    href={`/case-study/${study.slug}`}
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                    aria-label={`View case study ${study.title}`}
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
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            custom={3}
            variants={fadeIn}
          >
            <a
              href="https://cal.com/adszoo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-xl text-lg shadow-md"
              aria-label="Book my free 30 minute call"
            >
              ✅ Book My Free 30‑Minute Strategy Call
            </a>
          </motion.div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="py-12 px-6 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-bold mb-4">
              Frequently asked questions
            </h4>
            <details className="mb-3 p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                How long is the strategy call?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                The call is 30 minutes. We review your current setup and give 3
                quick recommendations you can implement right away.
              </p>
            </details>
            <details className="mb-3 p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                Do you work with my industry?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes - we specialise in local service businesses across Chennai
                and Tamil Nadu (clinics, salons, turfs, restaurants, home
                services).
              </p>
            </details>
            <details className="mb-3 p-4 bg-white rounded-lg shadow-sm">
              <summary className="font-medium cursor-pointer">
                Is there any obligation after the call?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                No. The audit and call are free and carry no obligation. Many
                businesses choose to continue after seeing results.
              </p>
            </details>
          </div>
        </motion.section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 w-full bg-emerald-600 text-white text-center py-3 px-4 z-40 md:hidden">
          <a
            href="https://cal.com/adszoo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-lg"
            aria-label="Book Free 30 minute strategy call mobile"
          >
            🚀 Book Your Free 30‑Minute Strategy Call
          </a>
        </div>

        {/* Floating chat (WhatsApp) - simple fallback link for fast replies */}
        {/* <a
          href="https://wa.me/916369050929?text=Hi%20Adszoo%2C%20I%27d%20like%20a%20free%20strategy%20call"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 bottom-4 text-white p-3 z-50 hidden md:block"
          aria-label="Chat on WhatsApp"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp logo"
            width={48}
            height={48}
          />
        </a> */}
      </div>
    </>
  );
}
