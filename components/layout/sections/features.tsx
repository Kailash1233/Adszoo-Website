import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Website Development",
    description:
      "Custom websites that are designed to elevate your brand and meet your business needs.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Media Management",
    description:
      "From Instagram to LinkedIn, we craft content that connects with your audience.",
  },
  {
    icon: "Goal",
    title: "Lead Generation",
    description:
      "Targeted ad campaigns on Facebook and Instagram to generate high-quality leads.",
  },
  {
    icon: "PictureInPicture",
    title: "Custom Software Development",
    description:
      "Tailored, scalable, and high-performance solutions to enhance user engagement.",
  },
  {
    icon: "MousePointerClick",
    title: "Graphic Designing",
    description:
      "Eye-catching logos, banners, and designs to make your brand stand out.",
  },
  {
    icon: "Newspaper",
    title: "Video Editing",
    description:
      "Create stunning videos with smooth cuts, effects, and storytelling to captivate your audience.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-4 sm:py-4">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Digital Solutions Tailored for Your Success
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        At Adszoo, we specialize in empowering your business with a
        comprehensive suite of digital solutions. Explore our core services:
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
