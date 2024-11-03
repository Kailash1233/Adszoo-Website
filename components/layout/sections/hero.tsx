// "use client";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Link as ScrollLink } from "react-scroll";

// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
// };

// const textVariants = {
//   hidden: { opacity: 0, y: -50 },
//   visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
// };

// const buttonVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.4 } },
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.8 } },
// };

// export const HeroSection = () => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true); // This ensures the component is mounted
//   }, []);
//   return (
//     <section className="container w-full" id="hero">
//       {isMounted && (
//         <motion.div
//           className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Text Section */}
//           <motion.div className="text-center space-y-8" variants={textVariants}>
//             <div className="max-w-screen-md mx-auto text-center text-4xl md:text-5xl font-bold">
//               <h1>
//                 Accelerate Your Growth:
//                 <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
//                   Drive Engagement,
//                 </span>
//                 Boost Sales
//               </h1>
//             </div>

//             <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
//               {`We craft jaw-dropping websites and deliver unmatched ROI through expert digital marketing.`}
//             </p>

//             {/* Button Section */}
//             <motion.div
//               className="space-y-4 md:space-y-0 md:space-x-4"
//               variants={buttonVariants}
//             >
//               <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
//                 <ScrollLink to="contact" smooth={true}>
//                   Talk to Us
//                 </ScrollLink>
//                 <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div className="relative group mt-14" variants={imageVariants}>
//             <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
//             <Image
//               width={1200}
//               height={1200}
//               className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border-secondary  border-t-primary/30"
//               src="/hero-bg.jpeg"
//               alt="Adszoo Digital Marketing"
//               loading="lazy"
//             />
//             <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
//           </motion.div>
//         </motion.div>
//       )}
//     </section>
//   );
// };

"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

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
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  }, // Smooth transition with ease
};

// Image array
const images = [
  { src: "/hero-bg.jpeg", alt: "Adszoo Digital Marketing" },
  { src: "/image2.jpg", alt: "Second Image" },
  { src: "/image1.jpg", alt: "Third Image" },
];

export const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is mounted
    // Set up an interval to change the current image
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <section className="container w-full" id="hero">
      {isMounted && (
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
                <ScrollLink to="contact" smooth={true}>
                  Talk to Us
                </ScrollLink>
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Carousel Section */}
          <motion.div className="relative group mt-14" variants={imageVariants}>
            <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
            <motion.div
              key={currentImageIndex} // Ensure Framer Motion detects the change in image
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth transition for image switch
            >
              <Image
                width={1200}
                height={1200}
                className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border-secondary border-t-primary/30"
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                loading="lazy"
              />
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
