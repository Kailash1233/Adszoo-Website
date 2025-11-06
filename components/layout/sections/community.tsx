"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import CalDotCom from "@/components/cal";

export const CommunitySection = () => {
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reduceMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
          when: "beforeChildren",
          staggerChildren: reduceMotion ? 0 : 0.08,
        },
      },
    }),
    [reduceMotion]
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reduceMotion ? 0 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }),
    [reduceMotion]
  );

  const iframeVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: reduceMotion ? 0 : 10,
        scale: reduceMotion ? 1 : 0.99,
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: reduceMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }),
    [reduceMotion]
  );

  return (
    <section id="community" className="py-10 sm:py-12 bg-white text-black">
      <div className="container px-4">
        {/* Top Section */}
        <motion.div
          className="lg:w-[60%] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-white text-black border border-black/10 rounded-3xl shadow-sm text-center flex flex-col items-center justify-center tracking-tighter">
              <CardHeader className="px-4 sm:px-8 pt-8 sm:pt-10">
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold flex flex-col items-center gap-3 leading-tight tracking-tighter">
                  <div>If you&apos;re ready to stop leaving money behind</div>
                </CardTitle>
              </CardHeader>

              <CardContent className="lg:w-[80%] px-4 sm:px-8 text-base sm:text-lg md:text-xl text-black/70">
                Let&apos;s fix the bottlenecks and unlock your revenue potential
                today.
              </CardContent>

              <CardFooter className="pb-8 sm:pb-10">
                <Button
                  asChild
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white hover:bg-black/90"
                >
                  <Link
                    href="https://cal.com/adszoo/30min?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book a Strategy Call"
                  >
                    Book a Strategy Call
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>

        {/* CalDotCom Embed Section - Added spacing */}
        <motion.div
          variants={iframeVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 sm:mt-16"
        >
          <CalDotCom />
        </motion.div>
      </div>
    </section>
  );
};
