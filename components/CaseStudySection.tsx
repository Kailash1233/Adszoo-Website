"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies-data";

export function CaseStudyPreview() {
  const [featured, second, third] = caseStudies;

  return (
    <section className="bg-white text-black py-8 md:py-12 tracking-tighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-10 md:mb-12">
          <p className="text-emerald-600 font-medium mb-2">Case Studies</p>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Real businesses. Real measurable growth.
          </h2>

          <p className="text-gray-600 text-lg">
            We don&apos;t talk about marketing theories. We show what actually
            worked for real companies.
          </p>
        </div>

        {/* Featured Case Study */}
        <Link
          href={`/case-study/${featured.slug}`}
          className="group grid lg:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16"
        >
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={featured.logoUrl || "/placeholder.svg"}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">
              {featured.industry.join(", ")}
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {featured.title}
            </h3>

            <p className="text-gray-600 mb-4">
              Services: {featured.services.join(", ")}
            </p>

            <span className="text-emerald-600 font-semibold group-hover:underline">
              Read the full case study →
            </span>
          </div>
        </Link>

        {/* Smaller case studies */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[second, third].map((study) => (
            <Link
              key={study.id}
              href={`/case-study/${study.slug}`}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition bg-white"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={study.logoUrl || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">
                  {study.industry.join(", ")}
                </p>

                <h4 className="text-lg md:text-xl font-bold mb-3 leading-snug">
                  {study.title}
                </h4>

                <span className="text-emerald-600 font-medium group-hover:underline">
                  View Case Study →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <Link
            href="/case-study"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition"
          >
            See All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
