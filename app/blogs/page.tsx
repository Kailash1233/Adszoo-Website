import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { blogPosts } from "@/lib/blog-posts";
import { FooterSection } from "@/components/layout/sections/footer";
import FeaturedCard from "@/components/blog/FeaturedCard";

function formatDate(d?: string | Date) {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  // Server component: only slim fields reach the client (no article HTML).
  const posts = blogPosts.map(({ content, faqs, ...rest }) => rest);
  const featured = posts[0] ?? null; // newest post
  const otherPosts = posts.slice(1);

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          {/* Header */}
          <header className="flex items-start justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <p className="text-[#ff6321] font-semibold mb-2">The Adszoo Blog</p>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
                Guides on SEO, Websites, Software &amp; Growth
              </h1>
              <p className="text-gray-600 mt-3">
                In-depth, practical guides on SEO, AEO &amp; GEO, B2B lead
                generation for manufacturers, conversion-focused websites,
                social media, ads and business software — written from real
                client work in Chennai and across India.
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
                      className="hover:text-[#ff6321]"
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
