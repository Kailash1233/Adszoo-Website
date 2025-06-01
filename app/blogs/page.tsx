"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const title = "Best Digital Marketing Blogs in 2025 | Adszoo";
const description =
  "Stay updated with the latest trends, tips, and strategies in digital marketing. Explore in-depth insights on social media, advertising, and online business growth.";

const blogPosts = [
  {
    title: "Top 15 Reasons Why Your Business Needs a Website",
    description:
      "In today's digital age, having a website is essential for businesses. It increases online visibility, builds credibility, showcases products/services, reaches a wider audience, and provides convenience to customers. Embrace the digital era now!",
    image: "/blogs/why-you-need-website.jpg",
    href: "/blogs/why-your-business-needs-a-website",
    date: "September 15, 2024",
  },
  {
    title: "9 Strategies To Grow Your Online Business",
    description:
      "Discover 7 powerful strategies to grow your online business and generate stable incomes through Digital Marketing. Understand the significance of specifying your niche, developing a unique brand, and knowing your audience well for targeted growth.",
    image: "/blogs/business-growth.jpg",
    href: "/blogs/strategies-to-grow-online-business",
    date: "September 25, 2024",
  },
  {
    title: "How Much to Charge for Social Media Management in 2024",
    description:
      "Pricing your social media services fairly can be daunting whether you’ve just started your social media marketing agency or you’re a well-established agency. How much should one charge for a social media post? What about a campaign? Or a social media content strategy?",
    image: "/blogs/social-media.jpg",
    href: "/blogs/social-media-management-pricing-2024",
    date: "September 25, 2024",
  },
  {
    title: "Top 5 Meta Ads Strategies",
    description: `2.9 billion. That’s the total number of monthly active users on Meta platforms today. Advertising on Meta allows you to tap into this vast audience, giving your brand the potential to reach billions of people directly across Facebook, Instagram, Messenger, and more. Discovering effective strategies to engage this audience is essential for maximizing your ad performance.`,
    image: "/blogs/meta_ads.webp",
    href: "/blogs/top-5-meta-ads-strategies",
    date: "September 15, 2024",
  },
  {
    title: "How to Use Social Media to Grow Your Business",
    description:
      "You can leverage social media marketing to grow your business in many ways, from building your brand to engaging with customers. But no matter your business goal, you’ll want to be sure you’re using the right social media tool for your needs.",
    image: "/blogs/smma.jpg",
    href: "/blogs/social-media-to-grow-business",
    date: "October 1, 2024",
  },
  {
    title: "How to Create Quality Instagram Reels in Less Time",
    description: `Looking for a faster and easier way to create Instagram reels? Wondering when to use native tools and when to use a third-party app? In this article, you'll learn how to make the most of Instagram’s reels editor and learn when third-party apps are worth the extra steps.`,
    image: "/blogs/reels.webp",
    href: "/blogs/quality-instagram-reels",
    date: "October 1, 2024",
  },
];

export default function BlogPage() {
  return (
    <>
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
            {blogPosts.map(({ title, description, image, href, date }) => (
              <article
                key={href}
                className="group rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <Link
                  href={href}
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
                    <Link href={href}>{title}</Link>
                  </h3>

                  <p className="text-gray-700 line-clamp-3 mb-6">
                    {description}
                  </p>

                  <Button
                    variant="outline"
                    className="self-start font-semibold"
                  >
                    <Link
                      href={href}
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
