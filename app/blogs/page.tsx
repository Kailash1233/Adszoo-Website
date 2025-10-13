"use client";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { blogPosts } from "@/lib/blog-posts";
import { GoogleAnalytics } from "@next/third-parties/google";

const title = "Best Digital Marketing Blogs in 2025 | Adszoo";
const description =
  "Stay updated with the latest trends, tips, and strategies in digital marketing. Explore in-depth insights on social media, advertising, and online business growth.";

export default function BlogPage() {
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

      <section className="bg-white text-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          {/* Header */}
          <header className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide mb-2">
              Our Blogs
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              Ideas, Insights & Real Talk
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
              No jargon. No fluff. Just straight-up marketing tips, trends, and
              stories from the frontlines. Whether you&apos;re a business owner
              or a curious marketer, there&apos;s something here for you.
            </p>
          </header>

          {/* Blog Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(({ slug, title, description, image, date }) => (
              <article
                key={slug}
                className="group rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <Link
                  href={`/blogs/${slug}`}
                  className="block relative h-52 md:h-48 lg:h-56"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                  />
                  <span className="absolute bottom-3 right-3 bg-emerald-600 text-white text-xs font-semibold rounded-full px-3 py-1 uppercase tracking-wider select-none">
                    {date}
                  </span>
                </Link>

                <div className="p-6 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    <Link href={`/blogs/${slug}`}>{title}</Link>
                  </h3>

                  <p className="text-gray-700 line-clamp-3 mb-6">
                    {description.slice(0, 140)}...
                  </p>

                  <Button
                    variant="outline"
                    className="self-start font-semibold"
                  >
                    <Link
                      href={`/blogs/${slug}`}
                      className="inline-flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Button size="lg" className="font-bold px-10 bg-primary">
              <Link href="/blogs" className="inline-flex items-center gap-2">
                View All Blog Posts
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
