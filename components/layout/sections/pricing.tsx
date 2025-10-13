// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Check } from "lucide-react";

// enum PopularPlan {
//   NO = 0,
//   YES = 1,
// }

// interface PlanProps {
//   title: string;
//   popular: PopularPlan;
//   price: number;
//   description: string;
//   buttonText: string;
//   benefitList: string[];
// }

// const plans: PlanProps[] = [
//   {
//     title: "Free",
//     popular: 0,
//     price: 0,
//     description:
//       "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
//     buttonText: "Start Free Trial",
//     benefitList: [
//       "1 team member",
//       "1 GB storage",
//       "Upto 2 pages",
//       "Community support",
//       "AI assistance",
//     ],
//   },
//   {
//     title: "Premium",
//     popular: 1,
//     price: 45,
//     description:
//       "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
//     buttonText: "Get starterd",
//     benefitList: [
//       "4 team member",
//       "8 GB storage",
//       "Upto 6 pages",
//       "Priority support",
//       "AI assistance",
//     ],
//   },
//   {
//     title: "Enterprise",
//     popular: 0,
//     price: 120,
//     description:
//       "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
//     buttonText: "Contact US",
//     benefitList: [
//       "10 team member",
//       "20 GB storage",
//       "Upto 10 pages",
//       "Phone & email support",
//       "AI assistance",
//     ],
//   },
// ];

// export const PricingSection = () => {
//   return (
//     <section className="container py-24 sm:py-32">
//       <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
//         Pricing
//       </h2>

//       <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
//         Get unlimitted access
//       </h2>

//       <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
//         Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
//       </h3>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
//         {plans.map(
//           ({ title, popular, price, description, buttonText, benefitList }) => (
//             <Card
//               key={title}
//               className={
//                 popular === PopularPlan?.YES
//                   ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
//                   : ""
//               }
//             >
//               <CardHeader>
//                 <CardTitle className="pb-2">{title}</CardTitle>

//                 <CardDescription className="pb-4">
//                   {description}
//                 </CardDescription>

//                 <div>
//                   <span className="text-3xl font-bold">${price}</span>
//                   <span className="text-muted-foreground"> /month</span>
//                 </div>
//               </CardHeader>

//               <CardContent className="flex">
//                 <div className="space-y-4">
//                   {benefitList.map((benefit) => (
//                     <span key={benefit} className="flex">
//                       <Check className="text-primary mr-2" />
//                       <h3>{benefit}</h3>
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>

//               <CardFooter>
//                 <Button
//                   variant={
//                     popular === PopularPlan?.YES ? "default" : "secondary"
//                   }
//                   className="w-full"
//                 >
//                   {buttonText}
//                 </Button>
//               </CardFooter>
//             </Card>
//           )
//         )}
//       </div>
//     </section>
//   );
// };

// components/PricingPackages.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";

type Package = {
  id: string;
  title: string;
  headline: string;
  priceText: string;
  subText?: string;
  cta: string;
  features: string[];
  highlight?: boolean;
  footnote?: string;
};

const packages: Package[] = [
  {
    id: "starter",
    title: "Starter",
    headline: "Launch your presence",
    priceText: "₹15,000",
    subText: "One-time (website + basic setup)",
    cta: "Claim Starter",
    features: [
      "5-page responsive website",
      "Basic SEO & speed optimisation",
      "Contact form + WhatsApp integration",
      "1 week support after launch",
    ],
    footnote: "Ideal for local businesses & solopreneurs",
  },
  {
    id: "growth",
    title: "Growth",
    headline: "Get predictable leads",
    priceText: "Starts ₹25,000",
    subText: "Setup + 30 days ad management",
    cta: "Claim Growth",
    features: [
      "Custom landing + CRO-ready design",
      "Meta/Google ads setup & creatives",
      "Lead tracking + CRM integration",
      "Weekly optimisation & reporting",
    ],
    highlight: true, // most popular
    footnote: "Best for service businesses aiming to scale",
  },
  {
    id: "scale",
    title: "Scale",
    headline: "Full-funnel growth",
    priceText: "Custom pricing",
    subText: "Tailored strategy & execution",
    cta: "Talk to sales",
    features: [
      "Dedicated growth strategy",
      "Multichannel ads & remarketing",
      "Conversion tracking & analytics",
      "Priority support & quarterly roadmap",
    ],
    footnote: "For companies ready to grow aggressively",
  },
];

export const PricingSection: React.FC = () => {
  const handleClaim = (pkgId: string) => {
    // Replace this with your actual lead modal / route
    // Example: openLeadPopup(pkgId) or router.push(`/contact?plan=${pkgId}`)
    if (typeof window !== "undefined") {
      // lightweight tracking + navigation example
      window.location.href = `/contact?plan=${pkgId}`;
    }
  };

  return (
    <section className="container py-20 sm:py-28">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-sm font-semibold text-emerald-600 tracking-wide">
          Our Services
        </h3>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          Choose a package that fits your stage
        </h2>
        <p className="mt-3 text-gray-600">
          Clear packages — measurable outcomes. Pick a plan and we&apos;ll send
          a tailored proposal with timelines and next steps.
        </p>
      </div>

      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
        {packages.map((p) => (
          <Card
            key={p.id}
            className={`relative overflow-visible ${
              p.highlight
                ? "scale-[1.03] border-[1.5px] border-emerald-600 drop-shadow-xl"
                : ""
            }`}
          >
            {/* badge */}
            {p.highlight && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  <Star className="h-4 w-4" />
                  <span>Most popular</span>
                </div>
              </div>
            )}

            <CardHeader className="pt-8 pb-4 text-center">
              <CardTitle className="text-xl">{p.title}</CardTitle>
              <CardDescription className="mt-1">{p.headline}</CardDescription>

              <div className="mt-4 flex flex-col items-center">
                <div className="text-3xl font-extrabold">{p.priceText}</div>
                {p.subText && (
                  <div className="text-sm text-gray-500 mt-1">{p.subText}</div>
                )}
              </div>
            </CardHeader>

            <CardContent className="pt-4 pb-2">
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-600">
                      <Check className="h-5 w-5" />
                    </span>
                    <div className="text-sm text-gray-700 leading-snug">
                      {f}
                    </div>
                  </li>
                ))}
              </ul>

              {/* trust + scarcity row */}
              <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                <div>14-day support · 30-day minor fixes</div>
                <div className="inline-flex items-center gap-2">
                  <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">
                    Limited
                  </span>
                  <span className="text-[11px]">Slots left</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-4">
              <div className="w-full">
                <Button
                  className={`w-full ${
                    p.highlight ? "bg-emerald-600 hover:bg-emerald-700" : ""
                  }`}
                  onClick={() => handleClaim(p.id)}
                >
                  {p.cta}
                </Button>

                {p.footnote && (
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    {p.footnote}
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-600 max-w-2xl mx-auto">
        <strong>Need a custom plan?</strong> Schedule a quick 15-minute call and
        we&apos;ll audit your current funnel and recommend the fastest path to
        ROI.
      </div>
    </section>
  );
};

export default PricingSection;
