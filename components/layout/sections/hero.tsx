// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { SponsorsSection } from "./sponsors";
// import { HeroImageSlider } from "@/components/HeroImageSlider";
// import { ArrowRight } from "lucide-react";

// const containerVariants = {
//   hidden: { opacity: 1, y: 0 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//     },
//   },
// };

// const textVariants = {
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const buttonVariants = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
// };

// export const HeroSection = () => {
//   return (
//     <section className="w-full px-4 py-20 md:py-32" id="hero">
//       <motion.div
//         className="flex flex-col items-center justify-center gap-8 max-w-screen-xl mx-auto"
//         variants={containerVariants}
//         initial="visible"
//         animate="visible"
//       >
//         <motion.div className="text-center space-y-8" variants={textVariants}>
//           <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
//             <h1>
//               Getting Website Visitors…
//               <br /> But No Customers?
//             </h1>
//           </div>

//           <p className="max-w-screen-sm mx-auto text-lg md:text-xl text-muted-foreground font-medium tracking-tighter">
//             {`We build conversion-focused websites and run targeted ad campaigns that turn visitors into real paying customers.`}
//           </p>

//           {/* <motion.div
//             className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 w-full"
//             variants={buttonVariants}
//           >
//             <Button className="font-bold w-full md:w-auto px-6 py-3 flex items-center justify-center group/arrow">
//               <Link
//                 href="https://cal.com/adszoo/30min"
//                 target="_blank"
//                 className="text-white text-lg font-bold cursor-pointer flex items-center"
//                 rel="noopener noreferrer"
//               >
//                 Book a Strategy Call
//                 <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
//               </Link>
//             </Button>
//             <Button className="font-bold w-full md:w-auto px-6 py-3 flex items-center justify-center bg-white border border-black hover:bg-white">
//               <Link
//                 href="/case-study"
//                 className="w-full text-center text-primary text-lg font-bold"
//               >
//                 View Case Studies
//               </Link>
//             </Button>
//           </motion.div> */}
//           <motion.div
//             className="flex flex-row justify-center items-center gap-3 mt-6 flex-nowrap"
//             variants={buttonVariants}
//           >
//             {/* PRIMARY */}
//             <Link
//               href="https://cal.com/adszoo/30min"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm transition-all hover:bg-black/90 tracking-tighter font-bold group/arrow"
//             >
//               Book a Strategy Call
//               <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
//             </Link>

//             {/* SECONDARY */}
//             <Link
//               href="/case-study"
//               className="inline-flex items-center rounded-full border border-black px-6 py-3 text-sm font-semibold tracking-tighter text-black transition-all hover:bg-black/10"
//             >
//               See Real Client Results
//             </Link>
//           </motion.div>
//         </motion.div>
//         {/* <HeroImageSlider /> */}

//         <SponsorsSection />
//       </motion.div>
//     </section>
//   );
// };

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PenTool, Code2, Megaphone, Palette } from "lucide-react";
import Image from "next/image";
import { SponsorsSection } from "./sponsors";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-28 px-4 min-h-screen">
      {/* BACKGROUND RINGS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1200px] h-[1200px] border border-black/5 rounded-full" />
        <div className="absolute w-[900px] h-[900px] border border-black/5 rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-black/5 rounded-full" />
      </div>

      {/* FLOATING CARDS */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* TOP LEFT */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[20%] left-[15%] w-14 h-14 bg-white shadow-lg rounded-2xl rotate-6 flex items-center justify-center"
        >
          <PenTool className="w-5 h-5 text-black/70" />
        </motion.div>

        {/* TOP RIGHT */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[30%] right-[15%] w-14 h-14 bg-white shadow-lg rounded-2xl -rotate-6 flex items-center justify-center"
        >
          <Code2 className="w-5 h-5 text-black/70" />
        </motion.div>

        {/* BOTTOM LEFT */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-[20%] left-[20%] w-14 h-14 bg-white shadow-lg rounded-2xl rotate-12 flex items-center justify-center"
        >
          <Megaphone className="w-5 h-5 text-black/70" />
        </motion.div>

        {/* BOTTOM RIGHT */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute bottom-[25%] right-[20%] w-14 h-14 bg-white shadow-lg rounded-2xl -rotate-12 flex items-center justify-center"
        >
          <Palette className="w-5 h-5 text-black/70" />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        {/* TAG */}
        <div className="text-xs tracking-widest uppercase text-black/50 border border-black/10 px-3 py-1 rounded-full">
          Digital Growth Partner
        </div>

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-black">
          Getting Website Visitors…
          <br /> <span className="text-[#ff6321]">But No Customers?</span>
        </h1>

        {/* SUBTEXT */}
        <p className="max-w-xl text-base md:text-lg text-black/60">
          We build fast, conversion-focused websites and get you found on
          Google, AI Overviews, and ChatGPT - turning search traffic into real,
          paying customers.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          {/* PRIMARY CTA */}
          <div className="relative">
            {/* Floating annotation */}
            {/* <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
absolute
left-5
-top-10
md:left-6
lg:left-8
flex
items-end
gap-2
whitespace-nowrap
pointer-events-none
"
            >
              <span className="font-[cursive] text-sm text-[#ff6321]">
                Schedule a free call
              </span>

              <svg
                width="38"
                height="24"
                viewBox="0 0 38 24"
                fill="none"
                className="rotate-[15deg]"
              >
                <path
                  d="M2 2 C12 2 22 8 24 18"
                  stroke="#ff6321"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M20 15 L24 18 L21 22"
                  stroke="#ff6321"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div> */}

            <Link
              href="https://cal.com/adszoo/30min"
              className="bg-[#ff6321] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition flex items-center gap-2"
            >
              Discuss your ideas
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                →
              </span>
            </Link>
          </div>

          <Link
            href="/case-study"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Real Client Results
          </Link>
        </div>

        {/* TRUST LINE */}
        {/* <div className="mt-10 text-xs text-black/40 tracking-wide">
          TRUSTED BY 22+ BUSINESSES
        </div> */}

        {/* LOGOS */}
        {/* <div className="flex items-center gap-8 opacity-60 mt-4">
          <Image
            src="/clients/Anthen.webp"
            alt="Client Logo"
            className="h-14 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
            width={60}
            height={30}
          />

          <Image
            src="/clients/Taiyo.webp"
            alt="Client Logo"
            className="h-14 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
            width={60}
            height={30}
          />

          <Image
            src="/clients/Tagknot.webp"
            alt="Client Logo"
            className="h-14 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
            width={60}
            height={30}
          />

          <Image
            src="/clients/Gafur.webp"
            alt="Client Logo"
            className="h-14 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
            width={60}
            height={30}
          />
        </div> */}
        <SponsorsSection />
      </div>
    </section>
  );
};

// "use client";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// // import { Link as ScrollLink } from "react-scroll";
// import Image from "next/image";
// import Link from "next/link";

// const containerVariants = {
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const textVariants = {
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const buttonVariants = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
// };

// export const HeroSection = () => {
//   return (
//     <section className="container w-full h-screen" id="hero">
//       <motion.div
//         className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
//         variants={containerVariants}
//         initial="visible"
//         animate="visible"
//       >
//         {/* Text Section */}
//         <motion.div className="text-center space-y-8" variants={textVariants}>
//           <div className="max-w-screen-md mx-auto text-center text-6xl md:text-7xl font-extrabold tracking-tighter">
//             <h1>We Turn Visitors into Paying Customers.</h1>
//           </div>

//           <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground font-medium">
//             {`High-converting websites and targeted ads crafted with clear strategy and smooth execution-designed to attract ready-to-buy customers and help businesses grow fast.`}
//           </p>

//           {/* Call-to-Action Section */}
//           <motion.div
//             className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 w-full"
//             variants={buttonVariants}
//           >
//             <Button className="font-bold w-full md:w-auto px-6 py-3 flex items-center justify-center group/arrow">
//               <Link
//                 href="https://cal.com/adszoo/30min"
//                 target="_blank"
//                 className="text-white text-lg font-bold cursor-pointer flex items-center"
//                 rel="noopener noreferrer"
//               >
//                 Book a Strategy Call
//                 <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
//               </Link>
//             </Button>
//             <Button className="font-bold w-full md:w-auto px-6 py-3 flex items-center justify-center bg-white border border-black hover:bg-white">
//               <Link
//                 href="/case-study"
//                 className="w-full md:w-auto text-center text-primary text-lg font-bold cursor-pointer"
//               >
//                 View Case Study
//               </Link>
//             </Button>
//           </motion.div>

//           <div className="mt-10 text-center">
//             <p className="text-muted-foreground text-sm mb-4">
//               Trusted by 15+ Businesses
//             </p>

//             <div className="relative w-full overflow-hidden">
//               <div className="flex animate-slide gap-6 min-w-full px-4">
//                 {[
//                   { src: "/clients/Anthen.webp", alt: "Anthen Engineering" },
//                   { src: "/clients/Kvm.webp", alt: "KVM CMart" },
//                   { src: "/clients/Regain.webp", alt: "Regain Hair Care" },
//                   { src: "/clients/Gafur.webp", alt: "Gaf Clickz" },
//                   { src: "/clients/Tagknot.webp", alt: "Tagknot" },
//                   { src: "/clients/Taiyo.webp", alt: "Taiyo" },
//                   { src: "/clients/abdesignlabs.webp", alt: "AB Design Labs" },
//                   // duplicated below for seamless loop
//                   { src: "/clients/Anthen.webp", alt: "Anthen Engineering" },
//                   { src: "/clients/Kvm.webp", alt: "KVM CMart" },
//                   { src: "/clients/Regain.webp", alt: "Regain Hair Care" },
//                   { src: "/clients/Gafur.webp", alt: "Gaf Clickz" },
//                   { src: "/clients/Tagknot.webp", alt: "Tagknot" },
//                   { src: "/clients/Taiyo.webp", alt: "Taiyo" },
//                   { src: "/clients/abdesignlabs.webp", alt: "AB Design Labs" },
//                 ].map((logo, i) => (
//                   <Image
//                     key={i}
//                     src={logo.src}
//                     alt={logo.alt}
//                     width={60}
//                     height={30}
//                     className="grayscale hover:grayscale-0 transition duration-300 w-12 sm:w-14 h-auto object-contain"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };
