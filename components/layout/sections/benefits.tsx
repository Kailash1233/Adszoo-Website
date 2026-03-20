"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "TrendingUp",
    title: "Real Results",
    description: "We don’t just run campaigns, we help you grow your revenue.",
  },
  {
    icon: "Settings",
    title: "Custom Strategies",
    description: "Everything is tailored to your business goals.",
  },
  {
    icon: "Users",
    title: "Skilled Team",
    description: "From design to ads, our experts know what actually works.",
  },
  {
    icon: "Heart",
    title: "People-First",
    description:
      "We care. Your wins are our wins, and we treat you like a partner.",
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const BenefitsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="container py-24 sm:py-32 mt-6 md:mt-12 min-h-screen"
    >
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">
            A Strategic Partner, Not Just an Agency
          </h2>
          <p className="text-xl text-muted-foreground mb-8 tracking-tighter">
            Adszoo works with growth-focused businesses that value structure,
            clarity, and consistent execution. Our approach is designed to scale
            with your organization, not around one-off campaigns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full tracking-tighter">
          {benefitList.map(({ icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={
                index % 2 === 0
                  ? cardVariants
                  : { ...cardVariants, hidden: cardVariants.hiddenRight }
              }
              initial="hiddenLeft"
              animate={isInView ? "visible" : "hiddenLeft"}
            >
              <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number tracking-tighter">
                <CardHeader>
                  <div className="flex justify-between">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={32}
                      color="hsl(var(--primary))"
                      className="mb-6 text-primary"
                    />
                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  {description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// "use client";

// import React from "react";
// import { Card } from "@/components/ui/card";
// import { Icon } from "@/components/ui/icon";
// import { icons } from "lucide-react";
// import { motion } from "framer-motion";

// interface BenefitsProps {
//   icon: string;
//   title: string;
//   description: string;
// }

// const benefitList: BenefitsProps[] = [
//   {
//     icon: "TrendingUp",
//     title: "Outcome-Driven Execution",
//     description:
//       "Every initiative is tied to measurable business outcomes, not vanity metrics.",
//   },
//   {
//     icon: "Settings",
//     title: "Tailored Growth Systems",
//     description:
//       "We design custom acquisition and conversion systems aligned with your business model.",
//   },
//   {
//     icon: "Users",
//     title: "Specialist-Led Teams",
//     description:
//       "Execution is handled by experienced specialists across strategy, design, and performance.",
//   },
//   {
//     icon: "Shield",
//     title: "Long-Term Partnership Mindset",
//     description:
//       "We operate as an extension of your team, prioritizing sustainability over short-term wins.",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export const BenefitsSection = () => {
//   return (
//     <section className="container py-24 lg:py-32">
//       <div className="grid lg:grid-cols-2 gap-20 items-start">
//         {/* LEFT CONTENT */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
//             A Strategic Partner, Not Just an Agency
//           </h2>
//           <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
//             Adszoo works with growth-focused businesses that value structure,
//             clarity, and consistent execution. Our approach is designed to scale
//             with your organization, not around one-off campaigns.
//           </p>
//         </div>

//         {/* RIGHT GRID */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid sm:grid-cols-2 gap-6"
//         >
//           {benefitList.map(({ icon, title, description }, index) => (
//             <motion.div key={title} variants={cardVariants}>
//               <Card className="p-6 border border-border/60 bg-background hover:bg-muted/30 transition-colors">
//                 <div className="flex items-start justify-between mb-4">
//                   <Icon
//                     name={icon as keyof typeof icons}
//                     size={22}
//                     className="text-primary"
//                     color={""}
//                   />
//                   <span className="text-sm font-medium text-muted-foreground">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-semibold mb-2">{title}</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   {description}
//                 </p>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// "use client";

// import React from "react";
// import { Card } from "@/components/ui/card";
// import { Icon } from "@/components/ui/icon";
// import { icons } from "lucide-react";
// import { motion } from "framer-motion";

// interface BenefitsProps {
//   icon: string;
//   title: string;
//   description: string;
// }

// const benefitList: BenefitsProps[] = [
//   {
//     icon: "TrendingUp",
//     title: "Outcome-Driven Execution",
//     description:
//       "Every initiative is measured against revenue impact, efficiency, and long-term scalability.",
//   },
//   {
//     icon: "Users",
//     title: "Specialist-Led Teams",
//     description:
//       "Execution is owned by senior specialists, not generalists or junior handoffs.",
//   },
//   {
//     icon: "Shield",
//     title: "Partnership Mindset",
//     description:
//       "We operate as a long-term growth partner, not a short-term service vendor.",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.45, ease: "easeOut" },
//   },
// };

// export const BenefitsSection = () => {
//   return (
//     <section className="container py-28 lg:py-36">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid lg:grid-cols-5 gap-10 items-start"
//       >
//         {/* ANCHOR TILE */}
//         <motion.div variants={itemVariants} className="lg:col-span-2">
//           <Card className="h-full p-8 lg:p-10 border border-border/60 bg-muted/40">
//             <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
//               Built for Sustainable Growth, Not Campaign Wins
//             </h2>
//             <p className="text-base text-muted-foreground leading-relaxed max-w-md">
//               Adszoo partners with businesses that value structure,
//               accountability, and repeatable growth systems. Our work is
//               designed to compound over time, not spike and fade.
//             </p>
//           </Card>
//         </motion.div>

//         {/* BENTO GRID */}
//         <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {benefitList.map(({ icon, title, description }, index) => (
//             <motion.div
//               key={title}
//               variants={itemVariants}
//               className={index === 0 ? "sm:col-span-2" : ""}
//             >
//               <Card className="p-6 border border-border/60 bg-background hover:bg-muted/30 transition-colors h-full">
//                 <div className="flex items-center justify-between mb-4">
//                   <Icon
//                     name={icon as keyof typeof icons}
//                     size={20}
//                     className="text-primary"
//                   />
//                   <span className="text-xs font-medium text-muted-foreground">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-semibold mb-2">{title}</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   {description}
//                 </p>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };
