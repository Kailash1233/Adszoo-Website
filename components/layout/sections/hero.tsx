"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SponsorsSection } from "./sponsors";

const containerVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const textVariants = {
  // hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonVariants = {
  // hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const HeroSection = () => {
  return (
    <section className="w-full px-4 py-20 md:py-32" id="hero">
      <motion.div
        className="flex flex-col items-center justify-center gap-8 max-w-screen-xl mx-auto"
        variants={containerVariants}
        initial="visible"
        animate="visible"
      >
        <motion.div className="text-center space-y-8" variants={textVariants}>
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight">
            <h1>We Turn Visitors into Paying Customers.</h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-lg md:text-xl text-muted-foreground font-medium">
            {`High-converting websites and targeted ads crafted with clear strategy and smooth execution - designed to attract ready-to-buy customers and help businesses grow fast.`}
          </p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 w-full"
            variants={buttonVariants}
          >
            <Button className="font-bold w-full md:w-auto px-6 py-3 flex items-center justify-center group/arrow">
              <Link
                href="https://cal.com/adszoo/15min"
                target="_blank"
                className="text-white text-lg font-bold cursor-pointer flex items-center"
                rel="noopener noreferrer"
              >
                Schedule a Call
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button className="font-bold w-full md:w-auto px-6 py-3 flex items-center justify-center bg-white border border-black hover:bg-white">
              <Link
                href="/case-study"
                className="w-full text-center text-primary text-lg font-bold"
              >
                View Case Study
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <SponsorsSection />
      </motion.div>
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
//                 href="https://cal.com/adszoo/15min"
//                 target="_blank"
//                 className="text-white text-lg font-bold cursor-pointer flex items-center"
//                 rel="noopener noreferrer"
//               >
//                 Schedule a Call
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
