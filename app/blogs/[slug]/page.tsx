import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
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
      <section className="container w-full py-10">
        <div className="lg:max-w-screen-xl mx-auto space-y-10">
          {/* Blog Image */}
          <div className="relative w-full h-[400px] lg:h-[600px]">
            <Image
              src={image}
              alt={`Image for blog post: ${title}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>

          {/* Blog Content */}
          <div className="prose dark:prose-invert max-w-screen-lg mx-auto my-6 text-lg leading-relaxed">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-muted-foreground text-sm">{date}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <Button asChild className="mt-10">
              <Link href="/blogs" className="inline-flex items-center">
                Back to Blogs
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
