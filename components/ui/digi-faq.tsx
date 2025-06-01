"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does Adszoo offer?",
    answer:
      "At Adszoo, we provide a comprehensive range of digital marketing services, including website development, social media marketing, PPC advertising, graphic design, and video editing.",
  },
  {
    question:
      "How long does it take to see results from your marketing campaigns?",
    answer:
      "Results vary based on the specific services and goals of each campaign. Generally, clients start seeing significant improvements within 2-3 months, but we focus on long-term growth strategies.",
  },
  {
    question: "Do you offer customized marketing solutions?",
    answer:
      "Yes! We understand that every business is unique, which is why we tailor our strategies to meet your specific needs and objectives.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Adszoo works with a diverse range of industries, including e-commerce, healthcare, education, technology, and more.",
  },
  {
    question: "How can I get started with Adszoo?",
    answer:
      "Getting started is easy! You can reach out to us through our website's contact form, schedule a consultation, or call us directly.",
  },
];

export default function DigitalMarketingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Only one item open at a time

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 h-screen" id="faq">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Digital Marketing FAQs
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Adszoo’s Digital Marketing FAQ hub — a helpful space
              where business owners, founders, and marketers can get clear
              answers to common questions about SEO, Google Ads, social media,
              and lead generation. As a growing startup, we’re focused on
              delivering results-driven strategies that actually move the
              needle. These insights come straight from our hands-on experience
              helping real businesses grow online.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors duration-200">
              More Questions
            </button>
            <button className="px-8 py-3 text-black font-medium hover:text-gray-600 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right FAQ Accordion */}
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors duration-200"
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
    </div>
  );
}
