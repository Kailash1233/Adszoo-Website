"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { blogPosts } from "@/lib/blog-posts";
import { GoogleAnalytics } from "@next/third-parties/google";
import { FooterSection } from "@/components/layout/sections/footer";
import FeaturedCard from "@/components/blog/FeaturedCard";

/**
 * Blog listing page with a large "featured" hero post and a grid of other posts below.
 * The featured post is chosen randomly on each render (useMemo with no deps will be stable per render).
 *
 * Required fields per post:
 * - slug: string
 * - title: string
 * - description: string
 * - image: string (path or url)
 * - date: string | Date
 * Optional:
 * - author: string
 * - authorAvatar: string
 * - readTime: string
 * - tags: string[]
 */

const title = "Best Digital Marketing Blogs in 2025 | Adszoo";
const description =
  "Stay updated with the latest trends, tips, and strategies in digital marketing. Explore in-depth insights on social media, advertising, and online business growth.";

function formatDate(d?: string | Date) {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  // If blogPosts is empty, we won't crash.
  const posts = Array.isArray(blogPosts) ? blogPosts : [];

  // Pick a random featured post (memoized per render)
  const featured = useMemo(() => {
    if (!posts.length) return null;
    const idx = Math.floor(Math.random() * posts.length);
    return posts[idx];
  }, [posts]);

  // Other posts (keep original order but exclude featured)
  const otherPosts = useMemo(() => {
    if (!posts.length) return [];
    return posts.filter((p) => p !== featured);
  }, [posts, featured]);

  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
      <Navbar />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="digital marketing, SEO, social media, business growth"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/blogs/why-you-need-website.jpg" />
        <meta property="og:type" content="article" />
      </Head>

      <main className="bg-gray-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          {/* Header */}
          <header className="flex items-start justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-emerald-600 font-semibold mb-2">Our Blogs</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
                Ideas, Insights & Real Talk
              </h1>
              <p className="text-gray-600 mt-3">
                No jargon. No fluff. Just straight-up marketing tips, trends,
                and stories from the frontlines. Whether you&apos;re a business
                owner or a curious marketer, there&apos;s something here for
                you.
              </p>
            </div>
          </header>

          {/* Featured Hero */}
          {featured ? (
            <FeaturedCard featured={featured} />
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-12 mb-12">
              No posts yet.
            </div>
          )}

          {/* Grid of other posts (visual like screenshot) */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Link
                  href={`/blogs/${post.slug}`}
                  className="block relative h-48"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </Link>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 leading-snug">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="hover:text-emerald-600"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {post.description?.slice(0, 140) ?? ""}
                    {post.description && post.description.length > 140
                      ? "..."
                      : ""}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                        {post.authorAvatar ? (
                          <Image
                            src={post.authorAvatar}
                            alt={post.author || "Author"}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-300" />
                        )}
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">
                          {post.author ?? "Kailash"}
                        </div>
                        <div className="text-xs text-gray-500">
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-gray-200 text-sm font-semibold"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
