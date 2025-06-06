// import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
// import Link from "next/link";
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// export const FooterSection = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer id="footer" className="container py-4 sm:py-4">
//       <div className="p-10 bg-card border border-secondary rounded-2xl">
//         <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
//           <div className="col-span-full xl:col-span-2">
//             <Link href="/" className="font-bold text-lg flex items-center">
//               <Image
//                 src="/Logo.webp"
//                 alt="Adszoo Logo"
//                 width={24}
//                 height={24}
//                 style={{ marginRight: "6px" }}
//               />
//               ADSZOO
//             </Link>
//           </div>

//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">Pages</h3>
//             <div>
//               <Link href="/services" className="opacity-60 hover:opacity-100">
//                 Services
//               </Link>
//             </div>
//             <div>
//               <Link href="/" className="opacity-60 hover:opacity-100">
//                 About Us
//               </Link>
//             </div>
//             <div>
//               <Link href="#contact" className="opacity-60 hover:opacity-100">
//                 Contact Us
//               </Link>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">Services</h3>
//             <div>
//               <Link href="/" className="opacity-60 hover:opacity-100">
//                 Web Development
//               </Link>
//             </div>
//             <div>
//               <Link href="/" className="opacity-60 hover:opacity-100">
//                 Lead Generation
//               </Link>
//             </div>
//             <div>
//               <Link href="/" className="opacity-60 hover:opacity-100">
//                 Social Media Management
//               </Link>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">Help</h3>
//             <div>
//               <Link href="#contact" className="opacity-60 hover:opacity-100">
//                 Contact Us
//               </Link>
//             </div>
//             <div>
//               <Link href="#faq" className="opacity-60 hover:opacity-100">
//                 FAQ
//               </Link>
//             </div>
//             <div>
//               <Link href="/" className="opacity-60 hover:opacity-100">
//                 Feedback
//               </Link>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">Quick Links</h3>
//             <div>
//               <Link
//                 href="https://www.freeprivacypolicy.com/live/88aab8d7-80e1-4933-b668-bd3ade2e645a"
//                 className="opacity-60 hover:opacity-100"
//               >
//                 Privacy Policy
//               </Link>
//             </div>
//             <div>
//               <Link
//                 href="https://www.termsfeed.com/live/a6fc321c-401b-4e40-a8f8-b488b9697882"
//                 className="opacity-60 hover:opacity-100"
//               >
//                 Terms and Conditions
//               </Link>
//             </div>
//             <div>
//               <Link
//                 href="https://www.termsfeed.com/live/a6fc321c-401b-4e40-a8f8-b488b9697882"
//                 className="opacity-60 hover:opacity-100"
//               >
//                 Code of Conduct
//               </Link>
//             </div>
//           </div>
//         </div>

//         <Separator className="my-6" />

//         <section className="flex justify-between items-center">
//           <h3>
//             &copy; {currentYear} All rights reserved
//             <Link
//               target="_blank"
//               href="/"
//               className="text-primary transition-all border-primary hover:border-b-2 ml-1"
//             >
//               Adszoo
//             </Link>
//           </h3>

//           <div className="flex gap-4">
//             <Link
//               href="https://www.facebook.com/profile.php?id=61565406179842"
//               target="_blank"
//             >
//               <Facebook className="w-5 h-5 text-accent-foreground hover:text-primary" />
//             </Link>
//             <Link href="https://x.com/Kailash61203" target="_blank">
//               <Twitter className="w-5 h-5 text-accent-foreground hover:text-primary" />
//             </Link>
//             <Link href="https://www.instagram.com/adszoo_/" target="_blank">
//               <Instagram className="w-5 h-5 text-accent-foreground hover:text-primary" />
//             </Link>
//             <Link
//               href="https://www.linkedin.com/company/adszoo/"
//               target="_blank"
//             >
//               <Linkedin className="w-5 h-5 text-accent-foreground hover:text-primary" />
//             </Link>
//           </div>
//         </section>
//       </div>
//     </footer>
//   );
// };

"use client";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black py-16 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Image src="/Logo.webp" alt="Adszoo Logo" width={32} height={32} />
            <span className="ml-2 font-bold text-xl">Adszoo</span>
          </Link>
          <p className="text-sm text-muted-foreground mb-4">
            We offer a comprehensive suite of digital marketing services that
            cover all aspects of your online presence. From SEO and social media
            marketing to content creation and PPC advertising, we have the
            expertise and resources to handle your diverse marketing needs.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="https://www.facebook.com/profile.php?id=61565406179842">
              <Facebook className="w-5 h-5 hover:text-primary" />
            </Link>
            {/* <Link href="#">
              <Twitter className="w-5 h-5 hover:text-primary" />
            </Link> */}
            <Link href="https://www.linkedin.com/company/adszoo/">
              <Linkedin className="w-5 h-5 hover:text-primary" />
            </Link>
            <Link href="https://www.instagram.com/adszoo_/">
              <Instagram className="w-5 h-5 hover:text-primary" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-lg mb-2">Navigation</h4>
          <Link
            href="/blogs"
            className="text-sm text-muted-foreground hover:text-black"
          >
            Blogs
          </Link>
          {/* <Link
            href="/agency"
            className="text-sm text-muted-foreground hover:text-black"
          >
            Agency
          </Link> */}
          <Link
            href="/case-study"
            className="text-sm text-muted-foreground hover:text-black"
          >
            Case Study
          </Link>
          {/* <Link
            href="/resources"
            className="text-sm text-muted-foreground hover:text-black"
          >
            Resource
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-black"
          >
            Contact
          </Link> */}
        </div>

        {/* Licence */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-lg mb-2">Licence</h4>
          <Link
            href="https://www.termsfeed.com/live/db33214e-8ccd-4fa2-a894-871b309c383c"
            className="text-sm text-muted-foreground hover:text-black"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://www.termsfeed.com/live/db33214e-8ccd-4fa2-a894-871b309c383c"
            className="text-sm text-muted-foreground hover:text-black"
          >
            Copyright
          </Link>
          <Link
            href="mailto:adszoo.digital@gmail.com"
            className="text-sm text-muted-foreground hover:text-black"
          >
            Email Address
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-lg mb-2">Contact</h4>
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="w-4 h-4 mr-2 fill-black text-white" />
            +91 63690 50929
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="w-4 h-4 mr-2 fill-black text-white" />
            adszoo.digital@gmail.com
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 fill-black text-white" />
            Chromepet, Chennai, India
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground mt-12">
        &copy; {currentYear} Adszoo. All rights reserved.
      </div>
    </footer>
  );
};
