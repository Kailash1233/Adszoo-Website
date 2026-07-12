"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 25,
    suffix: "+",
    title: "Businesses Served",
    description:
      "Across multiple industries including healthcare, construction, education, manufacturing and technology.",
  },
  {
    value: 100,
    suffix: "+",
    title: "Projects Delivered",
    description:
      "Websites, SEO campaigns, branding, AI optimization and digital marketing projects.",
  },
  {
    value: 15,
    suffix: "+",
    title: "Industries",
    description:
      "Experience working with startups, SMEs and established businesses across different sectors.",
  },
  {
    value: null,
    label: "AI",
    title: "Future Ready",
    description:
      "Optimizing businesses for ChatGPT, Gemini, Perplexity and the future of AI-powered search.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function StatsSection() {
  return (
    <section className="border-y bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-5xl font-black text-[#ff6321] tracking-tight">
                {stat.value !== null ? (
                  <>
                    <CountUp
                      end={stat.value}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </>
                ) : (
                  stat.label
                )}
              </h3>

              <p className="mt-3 text-lg font-semibold">{stat.title}</p>

              <p className="mt-2 leading-7 text-neutral-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
