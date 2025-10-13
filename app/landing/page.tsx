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
      delay: i * 0.15,
      duration: 0.6,
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
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("scroll", updateScrollProgress);

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
      localStorage.setItem("ab-variant", variant);
      setTestVariant(variant);
    }
  }, []);

  const urgencyText =
    testVariant === "A"
      ? "🚨 Limited slots left for June campaigns. Book your call now!"
      : "📅 Strategy calls are booking fast. Reserve your spot today!";

  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
      <Head>
        <title>Ads Adszoo | Digital Marketing That Delivers Results</title>
        <meta
          name="description"
          content="Ads Adszoo helps businesses boost lead quality and drive more conversions with expert digital marketing strategies. Book your free strategy call now."
        />
        <meta
          name="keywords"
          content="Ads Adszoo, digital marketing, lead generation, SEO, performance marketing, growth strategies"
        />
        <meta
          property="og:title"
          content="Ads Adszoo | Digital Marketing That Delivers Results"
        />
        <meta
          property="og:description"
          content="Our strategies help you get more qualified leads and turn them into sales. Book your free strategy session today."
        />
        <meta property="og:image" content="https://adszoo.in/og-image.jpg" />
        <meta property="og:url" content="https://adszoo.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ads Adszoo | Digital Marketing That Delivers Results"
        />
        <meta
          name="twitter:description"
          content="Get more qualified leads and higher conversion rates with Ads Adszoo’s custom marketing strategies."
        />
        <meta name="twitter:image" content="https://adszoo.in/og-image.jpg" />
      </Head>

      <div className="bg-white text-black relative">
        {/* Scroll Indicator */}
        <div
          className="fixed top-0 left-0 h-1 bg-emerald-600 z-50 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Exit Intent Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-white relative p-8 sm:p-10 rounded-3xl shadow-2xl max-w-sm sm:max-w-md text-center animate-in fade-in zoom-in-95">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                aria-label="Close"
              >
                ✕
              </button>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 leading-snug">
                Wait! Before You Leave...
              </h3>
              <p className="mb-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                Book a free strategy call and discover how Adszoo helps you
                attract quality leads with smart marketing.
              </p>
              <a
                href="https://cal.com/adszoo/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl text-base sm:text-lg transition-transform transform hover:scale-105 shadow-md"
              >
                🚀 Book Your Free Call
              </a>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-5 block mx-auto text-sm text-gray-400 hover:text-gray-600 transition"
              >
                No thanks, maybe later
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-emerald-50"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold max-w-4xl mb-6 leading-tight"
            custom={0}
            variants={fadeIn}
          >
            MOST Businesses see a{" "}
            <span className="text-emerald-600">15% boost in lead quality</span>{" "}
            and more sales with our strategies
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10"
            custom={1}
            variants={fadeIn}
          >
            Here’s how we help you get <strong>more quality leads</strong> — and
            turn them into <strong>more sales</strong>.
          </motion.p>

          <motion.div
            className="w-full max-w-3xl aspect-video rounded-xl mb-10 shadow-md overflow-hidden"
            custom={2}
            variants={fadeIn}
          >
            <iframe
              className="w-full h-full"
              src="https://cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dbx48qPlaGvE&key=925108d922be940af814f71907a7df4b"
              title="Adszoo Strategy Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.a
            href="https://cal.com/adszoo/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-xl text-lg shadow-md"
            custom={3}
            variants={fadeIn}
          >
            Let&apos;s Try
          </motion.a>
        </motion.section>

        {/* Second Section */}
        <motion.section
          className="py-20 px-6 bg-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
            custom={0}
            variants={fadeIn}
          >
            Why You’ll Only Get Qualified Leads That Convert
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
            custom={1}
            variants={fadeIn}
          >
            No guesswork. Just <strong>custom-built targeting</strong> that
            brings the right audience straight to you.
          </motion.p>

          <div className="space-y-4 max-w-3xl mx-auto mb-14 text-center">
            {[
              "Custom-built lead strategy",
              "High-quality targeting on Meta & Google",
              "Zero fluff. Data-backed approach.",
              "Optimized for conversion, not just clicks",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-lg text-gray-800 justify-center"
                custom={index + 2}
                variants={fadeIn}
              >
                ✅ <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Urgency Tagline */}
          <motion.p
            className="text-red-600 font-semibold text-base md:text-lg mb-6 animate-pulse"
            custom={6}
            variants={fadeIn}
          >
            {urgencyText}
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="https://cal.com/adszoo/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl text-lg shadow-lg hover:scale-105 transition-transform"
            custom={7}
            variants={fadeIn}
          >
            🚀 Book My Free Strategy Call
          </motion.a>
        </motion.section>

        {/* Objection Handling */}
        <motion.section
          className="bg-emerald-100 py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.div
            className="text-center mb-12"
            custom={0}
            variants={fadeIn}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Still not convinced?
            </h3>
            <p className="text-lg text-gray-700">
              See the transformation yourself 👇
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center"
            custom={1}
            variants={fadeIn}
          >
            {/* Before Image */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Before
              </h4>
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-300">
                <Image
                  src="/sales/Before.webp" // Replace with your actual path
                  alt="Before Strategy"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* After Image */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                After
              </h4>
              <div className="rounded-2xl overflow-hidden shadow-md border border-emerald-400">
                <Image
                  src="/sales/After.webp" // Replace with your actual path
                  alt="After Strategy"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
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
            className="text-3xl font-bold text-center mb-12"
            custom={0}
            variants={fadeIn}
          >
            Real Businesses. Real Results.
          </motion.h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study, index) => (
              <motion.div
                key={study.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={study.logoUrl || "/placeholder.svg"}
                    alt={`${study.title} Image`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-bold mb-2">{study.title}</h5>
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
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            custom={3}
            variants={fadeIn}
          >
            <a
              href="https://cal.com/adszoo/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-xl text-lg shadow-md"
            >
              Let&apos;s Try
            </a>
          </motion.div>
        </motion.section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 w-full bg-emerald-600 text-white text-center py-3 px-4 z-40 md:hidden">
          <a
            href="https://cal.com/adszoo/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-lg"
          >
            🚀 Book Your Free Strategy Call
          </a>
        </div>
      </div>
    </>
  );
}
