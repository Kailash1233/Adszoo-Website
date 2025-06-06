import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Naveen M R",
    username: "Founder & CEO, KVM CMart",
    body: "Kailash built our e-commerce site with top-notch quality and speed. Loved the 24-hour delivery feature!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Dhananjeyan S",
    username: "HR, Anthen Engineering",
    body: "Outstanding design and dedication. Kailash was a true professional throughout!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Dr. Mohan Ram",
    username: "Founder, Regain Hair Transplant Clinic",
    body: "Askar and Kailash helped bring in great leads and boosted our clinic’s sales. Impressive work!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Manoj Kumar",
    username: "Founder, Tagknot",
    body: "Loved the logo design! Kailash nailed the vision perfectly.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Yugesh S",
    username: "Freelance Graphic Designer",
    body: "Kailash gave my site a creative, vibrant design. Highly recommend him!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Arief",
    username: "Founder, HiTech Interiors",
    body: "Askar boosted our brand with excellent ad strategies. Great results!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Rakesh",
    username: "Anchor, VJ, and Digital Marketer",
    body: "Kailash’s edits were sharp, timely, and always on point. Game changer for my content!",
    img: "https://avatar.vercel.sh/jill",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
