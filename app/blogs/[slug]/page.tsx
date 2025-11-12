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
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareBar from "@/components/blog/ShareBar";
import TableOfContents from "@/components/blog/TableOfContents";
import { GoogleAnalytics } from "@next/third-parties/google";
import { FooterSection } from "@/components/layout/sections/footer";
import BackToTop from "@/components/BackToTop";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogPost = blogPosts.find((post) => post.slug === slug);
  if (!blogPost) return { title: "Not Found" };

  return {
    title: blogPost.metaTitle ?? blogPost.title,
    description: blogPost.metaDescription ?? blogPost.description,
    openGraph: {
      title: blogPost.metaTitle ?? blogPost.title,
      description: blogPost.metaDescription ?? blogPost.description,
      images: [
        {
          url: `https://adszoo.in${blogPost.image}`,
        },
      ],
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

  const shareUrl = `https://adszoo.in${
    blogPost.href ?? `/blogs/${blogPost.slug}`
  }`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: `https://adszoo.in${image}`,
    author: {
      "@type": "Person",
      name: blogPost.author ?? author,
    },
    publisher: {
      "@type": "Organization",
      name: "Adszoo",
      logo: {
        "@type": "ImageObject",
        url: "https://adszoo.in/Logo1.png",
      },
    },
    datePublished: blogPost.date,
    dateModified: blogPost.date,
    description: blogPost.metaDescription ?? blogPost.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
  };

  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
      <Navbar />
      <ReadingProgress targetSelector="article" />

      {/* JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="w-full tracking-tight">
        {/* HERO (centered title + small subtitle + rounded image card) */}
        <div className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 text-center">
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
                {date}
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
                className="prose prose-emerald dark:prose-invert leading-relaxed max-w-none text-[18px] mx-auto"
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
                          Writer at Adszoo
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full md:w-auto">
                      <Link
                        href="https://cal.com/adszoo/30min"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 border bg-emerald-600 text-white font-semibold hover:opacity-95 transition"
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
                    More from the Blog
                  </h2>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts
                      .filter((post) => post.slug !== slug) // exclude current blog
                      .sort(() => 0.5 - Math.random()) // randomize order
                      .slice(0, 3) // pick 3 random blogs
                      .map((post) => (
                        <Link
                          key={post.slug}
                          href={post.href ?? `/blogs/${post.slug}`}
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
                            <h3 className="text-lg font-semibold mb-1 group-hover:text-emerald-600">
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
                      href="/contact"
                      className="block rounded-md border px-4 py-3 text-center font-semibold bg-emerald-600 text-white hover:opacity-95"
                    >
                      Book a free strategy call
                    </Link>
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

// app/blog/[slug]/page.tsx  (or wherever your slug page lives)
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { blogPosts } from "@/lib/blog-posts";
// import { Navbar } from "@/components/layout/navbar";
// import { FooterSection } from "@/components/layout/sections/footer";
// import ReadingProgress from "@/components/blog/ReadingProgress";
// import { GoogleAnalytics } from "@next/third-parties/google";

// function getReadingTime(content: string) {
//   const plainText = content.replace(/<[^>]+>/g, "");
//   const wordCount = plainText.trim().split(/\s+/).length || 0;
//   const time = Math.max(1, Math.ceil(wordCount / 200));
//   return `${time} min read`;
// }

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({ slug: post.slug }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const blogPost = blogPosts.find((p) => p.slug === slug);
//   if (!blogPost) return { title: "Not Found" };
//   const description = (blogPost.content || "")
//     .replace(/<\/?[^>]+(>|$)/g, "")
//     .slice(0, 160);
//   return {
//     title: `${blogPost.metaTitle || blogPost.title} | Adszoo`,
//     description,
//   };
// }

// const BlogPostPage = async ({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) => {
//   const { slug } = await params;
//   const blogPost = blogPosts.find((p) => p.slug === slug);
//   if (!blogPost) notFound();

//   const { title, content, image, date, author = "Kailash G" } = blogPost;
//   const readingTime = getReadingTime(content);
//   const suggestedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
//   const shareUrl = `https://adszoo.in${blogPost.href || `/blogs/${slug}`}`;

//   const blogSchema = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     headline: title,
//     image: `https://adszoo.in${image}`,
//     author: { "@type": "Person", name: author },
//     publisher: {
//       "@type": "Organization",
//       name: "Adszoo",
//       logo: { "@type": "ImageObject", url: "https://adszoo.in/Logo1.png" },
//     },
//     datePublished: date,
//     description: blogPost.description || "",
//     mainEntityOfPage: { "@type": "WebPage", "@id": shareUrl },
//   };

//   return (
//     <>
//       <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
//       <Navbar />
//       <ReadingProgress targetSelector="article" />

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
//       />

//       <main className="bg-white text-slate-900">
//         <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
//           {/* Top heading + meta */}
//           <header className="mb-8">
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
//               {title}
//             </h1>

//             <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
//               {/* small avatar circle */}
//               <div className="flex items-center gap-2">
//                 <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-200">
//                   {/* you can replace with author avatar */}
//                   <Image
//                     src="/avatar-small.png"
//                     alt={author}
//                     width={28}
//                     height={28}
//                   />
//                 </div>
//                 <span className="font-medium text-slate-700">{author}</span>
//               </div>

//               <span className="text-slate-400">•</span>
//               <span className="text-slate-500">{date}</span>
//               <span className="text-slate-400">•</span>
//               <span className="text-slate-500">{readingTime}</span>
//             </div>
//           </header>

//           {/* Cover image + content two-column-like flow (left content width) */}
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
//             {/* Left column: image + article */}
//             <div>
//               <div className="rounded-lg overflow-hidden border border-slate-100 shadow-sm mb-6">
//                 <div className="relative w-full h-[300px] md:h-[360px] lg:h-[420px]">
//                   <Image
//                     src={image}
//                     alt={`Cover image for ${title}`}
//                     fill
//                     className="object-cover"
//                     priority
//                   />
//                 </div>
//               </div>

//               {/* Article card that matches screenshot: narrow left column feel */}
//               <article className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm prose prose-slate max-w-none">
//                 {/* If content is plain HTML (your existing), render: */}
//                 <div dangerouslySetInnerHTML={{ __html: content }} />

//                 {/* Example: If you want explicit checklist style (screenshot shows a "Checklist:" heading
//                     then list), but you already include that in post content. If not, you can programmatically
//                     render a small checklist here. */}

//                 <div className="mt-8 flex justify-start">
//                   <Button asChild variant="outline" className="font-medium">
//                     <Link href="/blogs">
//                       <ArrowLeft className="mr-2" />
//                       Back to Blogs
//                     </Link>
//                   </Button>
//                 </div>
//               </article>
//             </div>

//             {/* Right column: Recent Posts card (as in screenshot) */}
//             <aside>
//               <div className="sticky top-28">
//                 <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
//                   <div className="px-5 py-4 border-b border-slate-100">
//                     <h3 className="text-lg font-semibold text-slate-900">
//                       Recent Posts (1)
//                     </h3>
//                   </div>

//                   <div className="p-4">
//                     {suggestedPosts.length === 0 ? (
//                       <div className="text-sm text-slate-500">
//                         No recent posts
//                       </div>
//                     ) : (
//                       suggestedPosts.map((p) => (
//                         <Link
//                           key={p.slug}
//                           href={p.href || `/blogs/${p.slug}`}
//                           className="block p-3 rounded-md hover:bg-slate-50 transition mb-3 last:mb-0 border border-slate-100"
//                         >
//                           <div className="flex items-start gap-3">
//                             <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-slate-100">
//                               <Image
//                                 src={p.image}
//                                 alt={p.title}
//                                 width={48}
//                                 height={48}
//                                 className="object-cover"
//                               />
//                             </div>
//                             <div className="flex-1">
//                               <h4 className="text-sm font-medium text-slate-900">
//                                 {p.title}
//                               </h4>
//                               <div className="text-xs text-slate-500 mt-1">
//                                 <span>By Adszoo</span>
//                                 <span className="mx-1">•</span>
//                                 <span>{p.date}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                       ))
//                     )}
//                   </div>

//                   <div className="px-4 py-3 border-t border-slate-100">
//                     <Link
//                       href="/blogs"
//                       className="text-sm inline-flex items-center gap-2 text-emerald-600 font-medium"
//                     >
//                       View all posts
//                       <svg
//                         className="w-4 h-4"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                       >
//                         <path
//                           d="M5 12h14M13 5l7 7-7 7"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Optional small CTA or author box to mimic screenshot spacing */}
//                 <div className="mt-6 text-center text-xs text-slate-500">
//                   <div>
//                     Do a few items each week. Small wins add up to big results.
//                   </div>
//                 </div>
//               </div>
//             </aside>
//           </div>

//           {/* bottom divider + suggested grid (kept minimal like screenshot) */}
//           <div className="mt-12 border-t border-slate-100 pt-8">
//             <h3 className="text-lg font-semibold text-slate-900 mb-4">
//               More from the blog
//             </h3>
//             <div className="grid gap-4 sm:grid-cols-2">
//               {suggestedPosts.map((p) => (
//                 <Link
//                   key={p.slug}
//                   href={p.href || `/blogs/${p.slug}`}
//                   className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition"
//                 >
//                   <div className="w-28 h-16 relative rounded-md overflow-hidden flex-shrink-0">
//                     <Image
//                       src={p.image}
//                       alt={p.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-slate-900">
//                       {p.title}
//                     </h4>
//                     <p className="text-xs text-slate-500 mt-1">
//                       {p.description?.slice(0, 90)}...
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       <FooterSection />
//     </>
//   );
// };

// export default BlogPostPage;
