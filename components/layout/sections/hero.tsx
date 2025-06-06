"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="container w-full h-screen"
      id="hero"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <motion.div className="text-center space-y-8" variants={fadeUpVariant}>
          <div className="max-w-screen-md mx-auto text-6xl md:text-7xl font-extrabold tracking-tighter">
            <h1>We Turn Visitors into Paying Customers.</h1>
          </div>
        </motion.div>

        <motion.p
          className="max-w-screen-sm mx-auto text-xl text-muted-foreground font-medium"
          variants={fadeUpVariant}
        >
          High-converting websites and targeted ads crafted with clear strategy
          and smooth execution—designed to attract ready-to-buy customers and
          help businesses grow fast.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 w-full"
          variants={fadeUpVariant}
        >
          <Button className="font-bold w-full md:w-auto px-6 py-3 flex items-center justify-center group/arrow">
            <Link
              href="https://cal.com/adszoo/15min"
              target="_blank"
              className="text-white text-lg font-bold flex items-center"
              rel="noopener noreferrer"
            >
              Schedule a Call
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button className="font-bold w-full md:w-auto px-6 py-3 flex items-center justify-center bg-white border border-black hover:bg-white">
            <Link href="/case-study" className="text-primary text-lg font-bold">
              View Case Study
            </Link>
          </Button>
        </motion.div>

        <motion.div className="mt-8 text-center" variants={fadeUpVariant}>
          <p className="text-muted-foreground text-sm">
            Trusted by 15+ Businesses
          </p>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-4">
            {[
              { src: "/clients/Anthen.webp", alt: "Anthen Engineering" },
              { src: "/clients/Kvm.webp", alt: "KVM CMart" },
              { src: "/clients/Regain.webp", alt: "Regain Hair Care" },
              { src: "/clients/Gafur.webp", alt: "Gaf Clickz" },
              { src: "/clients/Tagknot.webp", alt: "Tagknot" },
              { src: "/clients/Taiyo.webp", alt: "Taiyo" },
              { src: "/clients/abdesignlabs.webp", alt: "AB Design Labs" },
            ].map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={`${logo.alt} Logo`}
                width={80}
                height={40}
                className="filter grayscale hover:grayscale-0 transition duration-300 w-12 sm:w-16 md:w-20 h-auto object-contain"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
