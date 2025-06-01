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
      "Kailash's expertise was instrumental in building our e-commerce site, KVM CMart. The 24-hour delivery feature is a game-changer for our customers, and the site's performance has been excellent. We're thrilled with how it turned out!",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Dhananjeyan S",
    userName: "HR, Anthen Engineering",
    comment:
      "I am incredibly grateful to Mr. Kailash for the outstanding website design he delivered for Anthen India Engineering Pvt Ltd. Working with him over the course of a week, I was consistently impressed by his exceptional design skills, dedication to excellence, and attention to detail, all of which have greatly benefited our company. I highly recommend Mr. Kailash to anyone in need of a website designer. He is a true professional and a pleasure to work with.",
    rating: 5.0,
  },

  {
    image: "/profilepic.webp",
    name: "Dr. Mohan Ram",
    userName: "Founder, Regain Hair Transplant Clinic",
    comment:
      "Askar and Kailash's efforts have significantly boosted sales for my hair transplant clinic. Their lead generation strategies brought in a strong flow of potential clients, making a noticeable difference for our business. I'm grateful for their expertise and dedication!",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Manoj Kumar",
    userName: "Founder, Tagknot",
    comment:
      "I recently collaborated with Kailash on the logo design for my business, and I couldn't be more pleased with the result. He understood my vision immediately and crafted a design that truly embodies my brand. His creativity, attention to detail, and flexibility in accommodating revisions made the whole process smooth and enjoyable. I highly recommend Kailash to anyone seeking top-notch design work.",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Yugesh S",
    userName: "Freelance Graphic Designer",
    comment:
      "I had the pleasure of working with Kailash on my website, and I'm beyond impressed with his creativity and attention to detail. The color combinations he selected were stunning, giving the site a vibrant yet professional look. His innovative design approach truly made my website stand out. I highly recommend his work!",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Arief",
    userName: "Founder, HiTech Interiors",
    comment:
      "Askar has been instrumental in helping my interior business grow and enhancing our brand visibility. His commitment to the project was impressive, and he did an excellent job optimizing our ads for better results. I highly recommend his services!",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Rakesh",
    userName: "Anchor, VJ, and Digital Marketer",
    comment:
      "I was struggling to find a reliable video editor for my social media needs until I connected with Kailash through a WhatsApp group. He quickly grasped the requirements and goals of each video, offering valuable insights on the possible outcomes we could achieve. His work consistently meets our needs, and he always delivers on time. If you're looking for top-notch video editing services, I highly recommend Kailash—you can thank me later!",
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
          What Our Clients Are Saying
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
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
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
