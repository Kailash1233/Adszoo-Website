// "use client";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel";
// // import { Star } from "lucide-react";
// import { MarqueeDemo } from "./marqueedemo";

// // interface ReviewProps {
// //   image: string;
// //   name: string;
// //   userName: string;
// //   comment: string;
// //   rating: number;
// // }

// export const TestimonialSection = () => {
//   return (
//     <section id="testimonials" className="container py-24 sm:py-32">
//       <div className="text-center mb-8">
//         <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
//           Testimonials
//         </h2>

//         <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
//           What Our Clients Are Saying
//         </h2>
//       </div>

//       {/* <Carousel
//         opts={{
//           align: "start",
//         }}
//         className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
//       >
//         <CarouselContent>
//           {reviewList.map((review) => (
//             <CarouselItem
//               key={review.name}
//               className="md:basis-1/2 lg:basis-1/3"
//             >
//               <Card className="bg-muted/50 dark:bg-card">
//                 <CardContent className="pt-6 pb-0">
//                   <div className="flex gap-1 pb-6">
//                     <Star className="size-4 fill-yellow-500 text-yellow-500" />
//                     <Star className="size-4 fill-yellow-500 text-yellow-500" />
//                     <Star className="size-4 fill-yellow-500 text-yellow-500" />
//                     <Star className="size-4 fill-yellow-500 text-yellow-500" />
//                     <Star className="size-4 fill-yellow-500 text-yellow-500" />
//                   </div>
//                   {`"${review.comment}"`}
//                 </CardContent>

//                 <CardHeader>
//                   <div className="flex flex-row items-center gap-4">
//                     <Avatar>
//                       <AvatarImage src="/profilepic.webp" alt="Profile Pic" />
//                       <AvatarFallback>SV</AvatarFallback>
//                     </Avatar>

//                     <div className="flex flex-col">
//                       <CardTitle className="text-lg">{review.name}</CardTitle>
//                       <CardDescription>{review.userName}</CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel> */}

//       <MarqueeDemo />
//     </section>
//   );
// };

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MarqueeDemo } from "./marqueedemo";

export const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

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
    <motion.section
      ref={ref}
      id="testimonials"
      className="container py-24 sm:py-32"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-8" variants={fadeUpVariant}>
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What Our Clients Are Saying
        </h2>
      </motion.div>

      <motion.div variants={fadeUpVariant}>
        <MarqueeDemo />
      </motion.div>
    </motion.section>
  );
};
