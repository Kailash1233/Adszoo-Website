"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/profilepic.webp",
    name: "Naveen M R",
    userName: "Founder & CEO, KVM CMart",
    comment:
      "Kailash helped me design the website for my construction raw material company, KVM Agency, and also built an e-commerce site called KVM CMart for 24-hour delivery. The websites are smooth and responsive.",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Dhananjeyan S",
    userName: "HR, Anthen Engineering",
    comment:
      "Kailash from Adszoo designed our company's graphics, created our ID cards, and handled our mail setup and domain configuration. Everything was done efficiently. ",
    rating: 5.0,
  },

  {
    image: "/profilepic.webp",
    name: "Dr. Mohan Ram",
    userName: "Founder, Regain Hair Transplant Clinic",
    comment:
      "Askar and Kailash helped me improve sales for my hair transplant clinic and generated a good number of leads. Their work made a great difference.",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Manoj Kumar",
    userName: "Founder, Tagknot",
    comment:
      "I recently worked with Kailash for my business logo, and I am extremely happy with the result. He understood my vision right away and created a design that perfectly captures my brand. ",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Yugesh S",
    userName: "Freelance Graphic Designer",
    comment:
      "I had the pleasure of working with Kailash on my website, and I am beyond impressed with his creativity and attention to detail.",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Arief",
    userName: "Founder, HiTech Interiors",
    comment:
      "Askar helped my Interior business grow and make brand more visible. His commitment is good, and he did a very good job to make the ads better.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/profilepic.webp" alt="Profile Pic" />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
