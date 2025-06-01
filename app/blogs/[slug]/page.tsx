import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { blogPosts } from "@/lib/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return { title: "Not Found" };
  }

  const description = blogPost.content
    .replace(/<\/?[^>]+(>|$)/g, "")
    .slice(0, 160);

  return {
    title: `${blogPost.title} | Adszoo Blog`,
    description,
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

  const { title, content, image, date } = blogPost;

  return (
    <>
      <Head>
        <title>{title} | Adszoo Blog</title>
      </Head>
      <section className="container w-full py-16 md:py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto space-y-14 px-4 sm:px-6 lg:px-8">
          {/* Blog Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl shadow-lg overflow-hidden">
            <Image
              src={image}
              alt={`Image for blog post: ${title}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              priority
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-emerald max-w-screen-md mx-auto dark:prose-invert leading-relaxed text-lg">
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">
              {title}
            </h1>
            <p className="text-sm text-muted-foreground mb-10">{date}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <Button
              asChild
              variant="outline"
              className="mt-12 font-semibold group inline-flex items-center gap-2 hover:bg-primary hover:text-white transition"
            >
              <Link href="/blogs">
                <ArrowLeft className="transition-transform group-hover:translate-x-1" />
                Back to Blogs
              </Link>
            </Button>
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
