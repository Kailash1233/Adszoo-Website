"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does Adszoo offer?",
    answer:
      "We provide website development, social media marketing, PPC ads, graphic design, and video editing.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most clients see noticeable improvements within 2–3 months. We focus on sustainable, long-term growth.",
  },
  {
    question: "Are your services customized?",
    answer:
      "Yes! Every business is unique. We create custom plans for your specific goals and budget.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We serve startups, e-commerce, healthcare, education, real estate, and more.",
  },
  {
    question: "How do I start with Adszoo?",
    answer:
      "Contact us via the website, book a call, or just say hi on WhatsApp!",
  },
];

export default function DigitalMarketingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.div
      ref={ref}
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto px-4 py-24 tracking-tighter"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Digital Marketing FAQs
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Adszoo&apos;s FAQ hub - where business owners get clear
              answers to SEO, Ads, social media, and leads. These come straight
              from real projects that worked.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors duration-200">
              More Questions
            </button>
            <button className="px-8 py-3 text-black font-medium hover:text-gray-600 transition-colors duration-200">
              <a href="https://cal.com/adszoo/15min" target="_blank">
                Contact Us
              </a>
            </button>
          </div>
        </div>

        <div className="space-y-0">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between py-6 text-left  transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-black pr-8 leading-tight">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-black" />
                  ) : (
                    <Plus className="w-6 h-6 text-black" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 pr-12">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
