"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string[];
}

const accordionData: AccordionItem[] = [
  {
    title: "PERFORMANCE MARKETING FOR ECOM BRANDS",
    content: [
      "Paid Social Media Advertising (Facebook, Instagram, TikTok)",
      "Google Ads & Shopping Campaigns",
      "Email Marketing & Automation",
      "Conversion Rate Optimization",
      "Analytics & Performance Tracking",
    ],
  },
  {
    title: "LEAD GENERATION",
    content: [
      "B2B Lead Generation Campaigns",
      "Landing Page Optimization",
      "Lead Nurturing Sequences",
      "CRM Integration & Management",
      "Sales Funnel Development",
    ],
  },
  {
    title: "BRANDING",
    content: [
      "Brand Identity & Logo Design",
      "Brand Strategy & Positioning",
      "Visual Identity Systems",
      "Brand Guidelines Development",
      "Marketing Collateral Design",
    ],
  },
  {
    title: "WEBSITE UI/UX AND DEVELOPMENT",
    content: [
      "Custom Website Design & Development",
      "E-commerce Platform Development",
      "Mobile-First Responsive Design",
      "User Experience Optimization",
      "Website Performance & SEO",
    ],
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-white text-black">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-black">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-start justify-between py-8 px-6 md:px-12 text-left"
          >
            <div className="flex flex-col text-left">
              {item.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-tight"
                >
                  {word}
                </span>
              ))}
            </div>
            <ChevronDown
              className={`w-6 h-6 text-black ml-4 flex-shrink-0 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              strokeWidth={2.5}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 md:px-12 pb-8">
              <ul className="space-y-3">
                {item.content.map((contentItem, contentIndex) => (
                  <li
                    key={contentIndex}
                    className="text-black/80 text-base md:text-lg leading-relaxed flex items-start"
                  >
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    {contentItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
