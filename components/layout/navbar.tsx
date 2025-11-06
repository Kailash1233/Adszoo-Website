"use client";
import { Menu, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
  scrollToId?: string;
}

const routeList: RouteProps[] = [
  { href: "#service", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQs" },
  { href: "/blogs", label: "Blogs" },
  { href: "/case-study", label: "Case Study" },
];

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavClick = (href: string) => {
    const isSection = href.startsWith("#");

    if (isSection) {
      if (pathname !== "/") {
        localStorage.setItem("scrollTo", href);
        router.push("/");
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(href);
    }

    setIsOpen(false); // Close mobile sheet
  };

  useEffect(() => {
    const scrollTo = localStorage.getItem("scrollTo");
    if (scrollTo && pathname === "/") {
      const el = document.querySelector(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollTo");
      }
    }
  }, [pathname]);

  return (
    <header className="bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-lg tracking-tighter">
      <Link
        href="/"
        className="font-extrabold text-lg flex items-center tracking-tight"
      >
        <Image
          src="/Logo1.png"
          alt="Adszoo Digital Marketing Agency Logo"
          width={24}
          height={24}
          style={{ marginRight: "6px" }}
          loading="lazy"
        />
        Adszoo
      </Link>

      {/* Mobile Navigation */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer lg:hidden" />
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
                    className="font-extrabold text-lg flex items-center tracking-tight"
                  >
                    <Image
                      src="/Logo1.png"
                      alt="Adszoo Logo"
                      width={24}
                      height={24}
                      className="mr-2 w-6 h-6 rounded-full"
                      loading="lazy"
                    />
                    Adszoo
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="#contact">Talk to Us</Link>
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                asChild
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
              >
                <a href={href} className="text-base px-3">
                  {label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <Button className="md:w-4/4 font-bold group/arrow">
          <Link href="https://cal.com/adszoo/15min">Schedule a Call</Link>
          <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
        </Button>
      </div>
    </header>
  );
};
