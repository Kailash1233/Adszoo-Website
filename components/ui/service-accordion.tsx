"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string[];
}

const accordionData: AccordionItem[] = [
  {
    title: "Websites Built for Impact",
    content: [
      "Custom-coded websites tailored for conversions",
      "Execution on any platform: Shopify, Next.js & more",
      "Digital style guide & scalable design systems",
      "UI/UX principles that blend beauty & usability",
      "High-performance builds that load fast and stay true to your brand",
    ],
  },
  {
    title: "Performance Marketing That Scales",
    content: [
      "High-impact ad creatives with no design caps",
      "Meta and Google ad campaigns built for ROI",
      "Funnel strategy & audience segmentation",
      "CRM automation to boost repeat purchases",
      "Full-funnel performance tracking & analytics",
    ],
  },
  {
    title: "Lead Generation",
    content: [
      "Meta Ads with advanced bid strategy execution",
      "Unlimited ad variations tailored for lead quality",
      "CRM setup, integration & lifecycle automation",
      "Landing page optimization for better conversions",
      "End-to-end ownership of lead gen funnel",
    ],
  },
  {
    title: "The Branding Blueprint",
    content: [
      "Deep-dive customer research & persona mapping",
      "Strategic brand positioning & storytelling",
      "Logo, typography & design systems built for recall",
      "Modern brand guidelines with timeless principles",
      "On-brand assets that elevate your perception",
    ],
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-gray-50 text-black">
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
