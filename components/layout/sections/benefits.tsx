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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Makes Adszoo Different?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We&apos;re not just another agency. We&apos;re your growth partner —
            creative, strategic, and always focused on results. Here&apos;s why
            businesses trust us:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
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
              <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
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
