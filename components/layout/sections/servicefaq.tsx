"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServicesAccordion from "@/components/ui/service-accordion";

export default function ServiceFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      id="service"
      className="min-h-screen py-16 bg-gray-50"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-8" variants={fadeUpVariant}>
          <h2 className="text-lg text-primary text-center mb-2 tracking-tighter">
            Services
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 tracking-tighter">
            Grow Your Business
          </h2>

          <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8 tracking-tighter">
            From marketing and sales to operations and strategy, we have the
            expertise to help you achieve your goals.
          </h3>
        </motion.div>

        <motion.div variants={fadeUpVariant}>
          <ServicesAccordion />
        </motion.div>
      </div>
    </motion.div>
  );
}
