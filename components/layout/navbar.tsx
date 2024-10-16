"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
// import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
// import { ToggleTheme } from "./toogle-theme";
// import { useTheme } from "next-themes";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#team",
    label: "Team",
  },
  // {
  //   href: "#contact",
  //   label: "Contact",
  // },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Website Development",
    description:
      "Custom websites that are designed to elevate your brand and meet your business needs.",
  },
  {
    title: "Lead Generation",
    description:
      "Targeted ad campaigns on Facebook and Instagram to generate high-quality leads.",
  },
  {
    title: "Social Media Management",
    description:
      "From Instagram to LinkedIn, we craft content that connects with your audience.",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored, scalable, and high-performance solutions to enhance user engagement.",
  },
  {
    title: "Graphic Designing",
    description:
      "Eye-catching logos, banners, and designs to make your brand stand out.",
  },
  {
    title: "Video Editing",
    description:
      "Create stunning videos with smooth cuts, effects, and storytelling to captivate your audience.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const { theme } = useTheme();
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        {/* <img src="/Logo.png" alt="Adszoo Logo" className="mr-2 w-6 h-6" /> */}
        <Image
          src="/Logo.png"
          alt="Adszoo Digital Marketing Agency Logo"
          width={24}
          height={24}
          style={{ marginRight: "6px" }}
          loading="lazy"
        />
        ADSZOO
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link
                    href="/"
                    className="font-bold text-lg flex items-center"
                  >
                    <img
                      src="/Logo.png"
                      alt="Adszoo Digital Marketing Agency Logo"
                      className="mr-2 w-6 h-6"
                      loading="lazy"
                    />
                    ADSZOO
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>
            {/* 
            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter> */}
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="#contact">Talk to Us</Link>
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <Link href="/services">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card text-base">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                  <Image
                    className="h-full w-full rounded-md object-cover"
                    width={600}
                    height={600}
                    // src={theme === "light" ? "/img.jpg" : "/img.jpg"}
                    src="/img.jpg"
                    alt="Adszoo Digital Marketing"
                    loading="lazy"
                  />
                  <ul className="flex flex-col gap-2">
                    {featureList.map(({ title, description }) => (
                      <li
                        key={title}
                        className="rounded-md p-3 text-sm hover:bg-muted"
                      >
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {title}
                        </p>
                        <p className="line-clamp-2 text-muted-foreground">
                          {description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </Link>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className={`text-base px-2 ${
                    label === "Services" ? "hidden" : ""
                  }`}
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <Button className="md:w-4/4 font-bold group/arrow">
          <Link href="#contact">Talk to Us</Link>
          <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
        </Button>
        {/* <ToggleTheme /> */}
      </div>
    </header>
  );
};
