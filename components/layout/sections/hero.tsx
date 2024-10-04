"use client";
import { motion } from "framer-motion"; // Import Framer Motion
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.4 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.8 } },
};

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <motion.div
        className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <motion.div className="text-center space-y-8" variants={textVariants}>
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-5xl font-bold">
            <h1>
              Accelerate Your Growth:
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Drive Engagement,
              </span>
              Boost Sales
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We craft jaw-dropping websites and deliver unmatched ROI through expert digital marketing.`}
          </p>

          {/* Button Section */}
          <motion.div
            className="space-y-4 md:space-y-0 md:space-x-4"
            variants={buttonVariants}
          >
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="/">Talk to Us</Link>
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative group mt-14"
          variants={imageVariants}
        >
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border-secondary  border-t-primary/30"
            src="/hero-bg.jpeg"
            alt="dashboard"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};
