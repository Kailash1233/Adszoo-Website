// "use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

function getRandomBlogs(count: number) {
  const shuffled = [...blogPosts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function BlogSection() {
  const randomBlogs = getRandomBlogs(3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Blogs
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            From Our Blogs{" "}
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {randomBlogs.map(({ slug, title, description, image, date }) => (
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
                  {description.slice(0, 120)}...
                </p>

                <Button variant="outline" className="self-start font-semibold">
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

        <div className="mt-12 text-center">
          <Link href="/blogs">
            <Button size="lg" className="text-lg font-medium">
              More Blogs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
