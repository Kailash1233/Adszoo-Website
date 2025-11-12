"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Featured = {
  slug: string;
  title: string;
  description?: string;
  image: string;
  author?: string;
  authorAvatar?: string;
  date?: string;
  readTime?: string;
  href?: string;
  tags?: string[];
};

export default function FeaturedCard({ featured }: { featured: Featured }) {
  const router = useRouter();

  const handleNavigate = (url: string) => {
    // client-side navigation for instant feel
    router.push(url);
  };

  const postUrl = featured.href ?? `/blogs/${featured.slug}`;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigate(postUrl);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => handleNavigate(postUrl)}
      onKeyDown={onKeyDown}
      className="relative rounded-2xl overflow-hidden shadow-lg mb-12 border border-gray-200 cursor-pointer group transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-300"
      aria-label={"Read featured article: ${featured.title}"}
    >
      {/* Image */}
      <div className="relative w-full h-[420px] md:h-[480px] lg:h-[520px]">
        <Image
          src={featured.image}
          alt={featured.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 80vw"
          className="object-cover"
          priority
        />
        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
      </div>

      {/* content overlay */}
      <div className="absolute left-6 right-6 bottom-6 md:left-12 md:right-12 md:bottom-12 text-white max-w-3xl">
        {/* small meta row */}
        <div className="flex items-center gap-3 text-sm mb-3 opacity-95">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
            {featured.authorAvatar ? (
              <Image
                src={featured.authorAvatar}
                alt={featured.author ?? "Author"}
                width={40}
                height={40}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300" />
            )}
          </div>

          <div>
            <div className="font-medium text-sm">
              {featured.author ?? "Adszoo"}
            </div>
            <div className="text-xs opacity-80">
              {featured.date ?? ""} · {featured.readTime ?? "5 min read"}
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3 drop-shadow-lg">
          {featured.title}
        </h2>

        {featured.description ? (
          <p className="max-w-2xl text-sm md:text-base opacity-95 line-clamp-3">
            {featured.description}
          </p>
        ) : null}

        {/* Buttons: inner Link must NOT be nested inside an <a> (we are safe because outer is div) */}
        <div className="mt-4 flex items-center gap-3">
          <Link
            href={postUrl}
            onClick={(e) => {
              // stop outer onClick when user explicitly clicks the anchor (prevent double-push)
              e.stopPropagation();
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full"
          >
            Read article
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* optional secondary CTA that also doesn't conflict */}
          {/* <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              // example secondary action — replace with your own if needed
              // here we also navigate to same post for simplicity
              handleNavigate(postUrl);
            }}
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full bg-transparent border border-white/20 hover:bg-white/6"
          >
            Open
          </button> */}
        </div>
      </div>
    </article>
  );
}
