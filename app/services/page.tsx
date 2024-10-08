import { FooterSection } from "@/components/layout/sections/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Website Development",
    description:
      "Custom websites that are designed to elevate your brand and meet your business needs.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image paths
  },
  {
    title: "Custom Web Development",
    description:
      "Tailored, scalable, and high-performance solutions to enhance user engagement.",
    image:
      "https://www.bigeng.io/content/images/2023/02/Product-Lifecycle-Header.jpg",
  },
  {
    title: "Lead Generation",
    description:
      "Targeted ad campaigns on Facebook and Instagram to generate high-quality leads.",
    image: "/services/ads.jpg",
  },
  {
    title: "Social Media Management",
    description:
      "From Instagram to LinkedIn, we craft content that connects with your audience.",
    image:
      "https://cdn.pixabay.com/photo/2021/08/19/08/06/social-media-6557345_1280.jpg",
  },
  {
    title: "Graphic Designing",
    description:
      "Eye-catching logos, banners, and designs to make your brand stand out.",
    image: "/services/graphic.jpg",
  },
  {
    title: "Video Editing",
    description:
      "Create stunning videos with smooth cuts, effects, and storytelling to captivate your audience.",
    image: "/services/video.jpg",
  },
];

const ServicesPage = () => {
  return (
    <section className="container w-full py-20 md:py-32">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto">
        {/* Title Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span>Empower Your Business with</span>{" "}
            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Cutting-Edge Services
            </span>
          </h1>
          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Explore our wide range of digital marketing services designed to
            help your business thrive in the digital era.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                {/* Service Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-[200px] object-cover"
                />
                {/* Background Glow */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[80%] h-24 bg-primary/50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6 space-y-4">
                {/* Service Title */}
                <h3 className="text-2xl font-bold">{service.title}</h3>

                {/* Service Description */}
                <p className="text-muted-foreground">{service.description}</p>

                {/* Call to Action */}
                <Button className="mt-4 group/arrow">
                  <span>Learn More</span>
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
