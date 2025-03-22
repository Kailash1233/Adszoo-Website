"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const title = "Best Digital Marketing Blogs in 2025 | Adszoo";
const description =
  "Stay updated with the latest trends, tips, and strategies in digital marketing. Explore in-depth insights on social media, advertising, and online business growth.";

const BlogPage = () => {
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
      description: `2.9 billion. That’s the total number of monthly active users on Meta platforms today. 
        Advertising on Meta allows you to tap into this vast audience, giving your brand the potential to reach billions of people directly across Facebook, Instagram, Messenger, and more. Discovering effective strategies to engage this audience is essential for maximizing your ad performance.`,
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
      description: `Looking for a faster and easier way to create Instagram reels? Wondering when to use native tools and when to use a third-party app?
  
        In this article, you'll learn how to make the most of Instagram’s reels editor and learn when third-party apps are worth the extra steps.`,
      image: "/blogs/reels.webp",
      href: "/blogs/quality-instagram-reels",
      date: "October 1, 2024",
    },
  ];

  return (
    <>
      {/* Dynamic SEO Metadata */}
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
      <section className="container w-full">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
          {/* Featured Blog Post */}
          <div className="text-center space-y-8">
            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-5xl font-bold">
              <h1>
                Stay Ahead with Our
                <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  Blog Insights
                </span>
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              Discover the latest trends, tips, and strategies in digital
              marketing to help your business thrive.
            </p>
          </div>

          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    width={600}
                    height={400}
                    src={post.image}
                    alt={post.title}
                    className="object-cover h-48 w-full"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-70"></div>
                </div>

                <div className="p-5 space-y-3">
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  <p className="text-muted-foreground text-sm">{post.date}</p>
                  <p className="text-base text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>

                  <Button variant="link" className="p-0">
                    <Link href={post.href}>
                      <span className="inline-flex items-center">
                        Read More
                        <ArrowRight className="ml-2" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <Button className="w-full md:w-3/3 font-bold group/arrow">
              <Link href="/blogs">
                <span className="inline-flex items-center">
                  View All Blog Posts
                  <ArrowRight className="ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
