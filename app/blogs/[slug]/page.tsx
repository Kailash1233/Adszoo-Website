import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { Navbar } from "@/components/layout/navbar";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareBar from "@/components/blog/ShareBar";
import TableOfContents from "@/components/blog/TableOfContents";
import { FooterSection } from "@/components/layout/sections/footer";
import BackToTop from "@/components/BackToTop";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BlogConversionBox, { getTopicLinks } from "@/components/blog/BlogConversionBox";
import { SITE_URL, absUrl, toISODate } from "@/lib/site";

function getReadingTime(content: string) {
  const plainText = content.replace(/<[^>]+>/g, ""); // Strip HTML tags
  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  const time = Math.max(1, Math.round(words / 225));
  return `${time} min read`;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function safeJsonLd(data: object) {
  // Prevents "</script>" (or any "<") inside content from breaking out of the script tag
  return JSON.stringify(data).replace(/</g, "\\u003c");
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) return { title: "Not Found" };

  const url = `/blogs/${slug}`;
  const img = absUrl(blogPost.image);

  return {
    title: blogPost.metaTitle ?? blogPost.title,
    description: blogPost.metaDescription ?? blogPost.description,
    keywords: blogPost.keywords ?? blogPost.tags,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: blogPost.metaTitle ?? blogPost.title,
      description: blogPost.metaDescription ?? blogPost.description,
      url,
      siteName: "Adszoo",
      images: [
        {
          url: img,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: toISODate(blogPost.date),
      modifiedTime: toISODate(blogPost.updatedDate ?? blogPost.date),
      authors: [blogPost.author ?? "Adszoo"],
      tags: blogPost.tags,
    },

    twitter: {
      card: "summary_large_image",
      title: blogPost.metaTitle ?? blogPost.title,
      description: blogPost.metaDescription ?? blogPost.description,
      images: [img],
    },
  };
}

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    notFound();
  }

  const { title, content, image, date, author = "Adszoo" } = blogPost;
  const readingTime = getReadingTime(content);

  // Suggested posts
  const suggestedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const shareUrl = absUrl(`/blogs/${blogPost.slug}`);

  // Related posts: tag overlap first (topical internal linking), then recency.
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .map((p, i) => ({
      p,
      i,
      score: (p.tags ?? []).filter((t) => (blogPost.tags ?? []).includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .slice(0, 6)
    .map((x) => x.p);
  const topic = getTopicLinks(blogPost.tags ?? [], blogPost.slug);


  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: absUrl(image),
    author: {
      "@type": "Person",
      name: blogPost.author ?? author,
      url: absUrl("/company/about-adszoo"),
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished: toISODate(blogPost.date),
    dateModified: toISODate(blogPost.updatedDate ?? blogPost.date),
    keywords: (blogPost.keywords ?? blogPost.tags ?? []).join(", "),
    articleSection: blogPost.tags?.[0],
    inLanguage: "en-IN",
    description: blogPost.metaDescription ?? blogPost.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
  };

  const faqSchema =
    blogPost.faqs && blogPost.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blogPost.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  // Combine into one graph so there's only ever one script tag
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": faqSchema ? [blogSchema, faqSchema] : [blogSchema],
  };

  return (
    <>
      <Navbar />
      <ReadingProgress targetSelector="article" />

      {/* JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaGraph) }}
      />

      <section className="w-full tracking-tight">
        {/* HERO (centered title + small subtitle + rounded image card) */}
        <div className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 text-center">
            <Breadcrumbs
              className="mb-6 flex justify-center"
              items={[
                { name: "Blog", href: "/blogs" },
                { name: title.length > 38 ? title.slice(0, 36) + "…" : title, href: `/blogs/${slug}` },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter mb-4">
              {title}
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {blogPost.description ||
                "No jargon. No fluff. Just straight-up marketing tips, trends, and stories from the frontlines."}
            </p>

            {/* Rounded featured image (not full-bleed) */}
            <div className="mx-auto w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="relative h-64 md:h-96">
                <Image
                  src={image}
                  alt={`Featured image for ${title}`}
                  fill
                  className="object-cover"
                  priority
                />
                {/* subtle overlay for legibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* meta row */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/10">
                {blogPost.author ?? author}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/10">
                <time dateTime={toISODate(blogPost.updatedDate ?? date)}>
                  {blogPost.updatedDate ? `Updated ${blogPost.updatedDate}` : date}
                </time>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/10">
                {readingTime}
              </span>
            </div>
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="container w-full">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[72px_minmax(0,1fr)_300px] gap-8">
              {/* Left sticky share */}
              <div className="hidden lg:block">
                <div className="sticky top-36">
                  <ShareBar url={shareUrl} title={title} vertical />
                </div>
              </div>

              {/* Article content */}
              <article
                className="prose prose-neutral prose-lg leading-relaxed max-w-none mx-auto prose-headings:tracking-tight prose-headings:font-bold prose-a:text-[#e85716] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-li:my-1 prose-table:text-base prose-th:bg-gray-50 prose-img:rounded-xl"
                id="article-content"
                aria-labelledby="article-title"
              >
                {/* mobile meta + compact share */}
                <div className="md:hidden mb-6 flex items-center justify-between gap-3">
                  <div className="text-sm text-muted-foreground">
                    <span className="inline-block mr-3">{date}</span>
                    <span className="inline-block">{readingTime}</span>
                  </div>
                  <div>
                    <ShareBar url={shareUrl} title={title} compact />
                  </div>
                </div>

                <div className="prose-h2:scroll-mt-28 prose-h3:scroll-mt-28">
                  {/* content kept untouched */}
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>

                <BlogConversionBox topic={topic} />

                {/* author CTA */}
                <div className="mt-12 rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {/* Author Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        {blogPost.authorAvatar ? (
                          <Image
                            src={blogPost.authorAvatar}
                            alt={blogPost.author || "Author"}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-300" />
                        )}
                      </div>
                      <div>
                        <div className="text-base font-semibold">
                          {blogPost.author ?? author}
                        </div>
                        <div className="text-sm text-gray-500">
                          Founder &amp; strategist at Adszoo
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full md:w-auto">
                      <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 border bg-[#ff6321] text-white font-semibold hover:opacity-95 transition"
                      >
                        Work with us
                      </Link>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto"
                      >
                        <Link
                          href="/blogs"
                          className="font-semibold inline-flex items-center justify-center gap-2"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back to Blogs
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Suggested posts */}
                <div className="mt-20 border-t pt-12 mb-6">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Related guides
                  </h2>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blogs/${post.slug}`}
                          className="group block rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                        >
                          <div className="relative w-full h-44 sm:h-40">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1 group-hover:text-[#ff6321]">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {post.description?.slice(0, 100)}
                              {post.description && post.description.length > 100
                                ? "..."
                                : ""}
                            </p>

                            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                              <span>{post.date}</span>
                              <span>
                                {post.readTime ?? getReadingTime(post.content)}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </article>

              {/* Right: TOC + CTA */}
              <div className="hidden lg:block">
                <div className="sticky top-28 space-y-4">
                  <div className="rounded-xl border bg-white p-4 shadow-sm">
                    <div className="mb-3 text-sm font-semibold">
                      On this page
                    </div>
                    <TableOfContents containerSelector="#article-content" />
                  </div>

                  <div>
                    <Link
                      href={topic.primary.href}
                      className="block rounded-xl border px-4 py-3 text-center font-semibold bg-[#ff6321] text-white hover:opacity-95"
                    >
                      {topic.primary.cta}
                    </Link>
                    <a
                      href={topic.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block rounded-xl border border-[#25D366] px-4 py-3 text-center font-semibold text-[#128C7E]"
                    >
                      WhatsApp us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
      <FooterSection />
    </>
  );
};

export default BlogPostPage;
