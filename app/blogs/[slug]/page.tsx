// import { notFound } from "next/navigation";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import Head from "next/head";
// import { blogPosts } from "@/lib/blog-posts";
// import { Navbar } from "@/components/layout/navbar";

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const blogPost = blogPosts.find((post) => post.slug === slug);

//   if (!blogPost) {
//     return { title: "Not Found" };
//   }

//   const description = blogPost.content
//     .replace(/<\/?[^>]+(>|$)/g, "")
//     .slice(0, 160);

//   return {
//     title: `${blogPost.metaTitle} | Adszoo Blog`,
//     description,
//   };
// }

// const BlogPostPage = async ({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) => {
//   const { slug } = await params;

//   const blogPost = blogPosts.find((post) => post.slug === slug);

//   if (!blogPost) {
//     notFound();
//   }

//   const { title, content, image, date, metaTitle, metaDescription } = blogPost;

//   return (
//     <>
//       <Navbar />
//       <Head>
//         <title>{metaTitle}</title>
//         <meta name="description" content={metaDescription} />
//       </Head>
//       <section className="container w-full py-16 md:py-24 lg:py-32">
//         <div className="max-w-screen-xl mx-auto space-y-14 px-4 sm:px-6 lg:px-8">
//           {/* Blog Image */}
//           <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl shadow-lg overflow-hidden">
//             <Image
//               src={image}
//               alt={`Image for blog post: ${title}`}
//               fill
//               style={{ objectFit: "cover" }}
//               className="rounded-xl"
//               priority
//             />
//           </div>

//           {/* Blog Content */}
//           <article className="prose prose-emerald max-w-screen-md mx-auto dark:prose-invert leading-relaxed text-lg">
//             <h1 className="text-4xl font-extrabold tracking-tight mb-3">
//               {title}
//             </h1>
//             <p className="text-sm text-muted-foreground mb-10">{date}</p>
//             <div dangerouslySetInnerHTML={{ __html: content }} />

//             <Button
//               asChild
//               variant="outline"
//               className="mt-12 font-semibold group inline-flex items-center gap-2 hover:bg-primary hover:text-white transition"
//             >
//               <Link href="/blogs">
//                 <ArrowLeft className="transition-transform group-hover:translate-x-1" />
//                 Back to Blogs
//               </Link>
//             </Button>
//           </article>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogPostPage;

import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { Navbar } from "@/components/layout/navbar";

function getReadingTime(content: string) {
  const plainText = content.replace(/<[^>]+>/g, ""); // Strip HTML tags
  const wordCount = plainText.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / 200); // avg 200 WPM
  return `${time} min read`;
}

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

  // const description = blogPost.content
  //   .replace(/<\/?[^>]+(>|$)/g, "")
  //   .slice(0, 160);

  return {
    title: `${blogPost.metaTitle}`,
    description: `${blogPost.metaDescription}`,
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
  const readingTime = getReadingTime(content);

  // Random blogs for bottom suggestions
  const suggestedPosts = blogPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  const shareUrl = `https://adszoo.in${blogPost.href}`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: `https://adszoo.in${image}`,
    author: {
      "@type": "Organization",
      name: "Adszoo",
    },
    publisher: {
      "@type": "Organization",
      name: "Adszoo",
      logo: {
        "@type": "ImageObject",
        url: "https://adszoo.in/logo.png",
      },
    },
    datePublished: date,
    description: blogPost.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
  };

  return (
    <>
      <Navbar />
      {/* <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head> */}
      <section className="container w-full py-16 md:py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto space-y-14 px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
          />
          {/* Blog Image */}
          <div className="relative w-full h-[280px] md:h-[380px] lg:h-[420px] rounded-xl shadow-md overflow-hidden">
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
            <h1 className="text-4xl font-extrabold tracking-tight text-center mb-4">
              {title}
            </h1>
            <div className="text-sm text-muted-foreground text-center mb-8 space-x-4">
              <span>{date}</span>
              <span>•</span>
              <span>{readingTime}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                className="mt-12 font-semibold group inline-flex items-center gap-2 hover:bg-primary hover:text-white transition"
              >
                <Link href="/blogs">
                  <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
                  Back to Blogs
                </Link>
              </Button>
            </div>
          </article>

          {/* Suggested Posts */}
          <div className="mt-20 border-t pt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              More from the Blog
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.href}
                  className="rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all bg-white dark:bg-zinc-900"
                >
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {post.description.slice(0, 80)}...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
