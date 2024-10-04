import { Separator } from "@/components/ui/separator";
import Image from "@/node_modules/next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-4 sm:py-4">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="font-bold text-lg flex items-center">
              <Image
                src="/Logo.png"
                alt="Adszoo Logo"
                width={24}
                height={24}
                style={{ marginRight: "6px" }}
              />
              ADSZOO
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Pages</h3>
            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Services
              </Link>
            </div>

            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                About Us
              </Link>
            </div>

            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Services</h3>
            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Web Development
              </Link>
            </div>

            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Lead Generation
              </Link>
            </div>

            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Social Media Management
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div>
              <Link
                href="https://www.freeprivacypolicy.com/live/88aab8d7-80e1-4933-b668-bd3ade2e645a"
                className="opacity-60 hover:opacity-100"
              >
                Privacy Policy
              </Link>
            </div>

            <div>
              <Link
                href="https://www.termsfeed.com/live/a6fc321c-401b-4e40-a8f8-b488b9697882"
                className="opacity-60 hover:opacity-100"
              >
                Terms and Conditions
              </Link>
            </div>

            <div>
              <Link
                href="https://www.termsfeed.com/live/a6fc321c-401b-4e40-a8f8-b488b9697882"
                className="opacity-60 hover:opacity-100"
              >
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 All rights reserved
            <Link
              target="_blank"
              href=""
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Adszoo
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
