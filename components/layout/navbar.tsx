"use client";
import { Menu, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
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
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/services/seo-for-manufacturers", label: "B2B SEO" },
  { href: "/case-study", label: "Case Studies" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

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
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href} onClick={() => setIsOpen(false)}>
                      {label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow bg-[#ff6321] hover:bg-[#e85716]">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Talk to Us
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className={`text-base px-3 hover:text-[#ff6321] ${
                    pathname === href ? "text-[#ff6321] font-semibold" : ""
                  }`}
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        {/* <Button className="md:w-4/4 font-bold group/arrow">
          <Link href="https://cal.com/adszoo/30min">Book a Strategy Call</Link>
          <Link href="https://cal.com/adszoo/30min">Discuss your ideas</Link>

          <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
        </Button> */}
        <Link
          href="/contact"
          className="bg-[#ff6321] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition flex items-center gap-2"
        >
          Get a free consultation
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
            →
          </span>
        </Link>
      </div>
    </header>
  );
};
