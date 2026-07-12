import type { Metadata } from "next";
import { CheckCircle2, Briefcase, Rocket, Users } from "lucide-react";
import CareerForm from "@/components/CareerForm";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Careers | Adszoo",
  description:
    "Interested in joining Adszoo? We currently don't have active openings, but we're always looking to connect with talented developers, designers, marketers, and creative professionals.",
};

const values = [
  {
    icon: Rocket,
    title: "Build Real Projects",
    description:
      "Work on websites, SEO, AI visibility, branding, and digital marketing projects that help businesses grow.",
  },
  {
    icon: Users,
    title: "Learn Every Day",
    description:
      "You'll collaborate across design, development, marketing, and strategy instead of working in silos.",
  },
  {
    icon: Briefcase,
    title: "Own Your Work",
    description:
      "Good ideas don't wait for permission. If something improves the company or the client, you'll have the opportunity to build it.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black">
        {/* Hero */}
        <section className="border-b">
          <div className="container mx-auto max-w-7xl px-4 py-24">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full bg-[#ff6321]/10 px-4 py-1 text-sm font-medium text-[#ff6321]">
                Careers
              </span>

              <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-tight">
                Build things that
                <span className="text-[#ff6321]"> actually matter.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg text-neutral-600 leading-8">
                At Adszoo, we work with ambitious businesses to improve their
                websites, search visibility, AI presence, branding and digital
                growth.
              </p>

              <p className="mt-4 max-w-2xl text-lg text-neutral-600 leading-8">
                We may not have an open position today, but exceptional people
                are always worth meeting.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl font-bold">
                Why people would enjoy working with us
              </h2>

              <p className="mt-5 text-lg text-neutral-600">
                We&apos;re building a team that enjoys solving problems,
                learning new skills, and creating meaningful results for
                businesses.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-neutral-200 p-8 transition hover:shadow-sm"
                  >
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6321]/10">
                      <Icon className="h-7 w-7 text-[#ff6321]" />
                    </div>

                    <h3 className="text-2xl font-semibold">{item.title}</h3>

                    <p className="mt-4 leading-7 text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="bg-neutral-50 py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="rounded-3xl border border-neutral-200 bg-white p-10 md:p-14">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 text-green-600" />

                <h2 className="text-3xl font-bold">Current Hiring Status</h2>
              </div>

              <p className="mt-8 text-lg leading-8 text-neutral-700">
                At the moment, we don&apos;t have any active job openings.
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                However, we&apos;re always interested in meeting talented
                developers, designers, SEO specialists, marketers, content
                creators, sales professionals, and creative thinkers.
              </p>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                If you believe you&apos;d be a great fit for Adszoo, we&apos;d
                love to keep your profile on record for future opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold">Join Our Talent Network</h2>

              <p className="mt-5 text-lg text-neutral-600">
                Fill out the form below. If a role matching your profile opens
                up, we&apos;ll reach out.
              </p>
            </div>

            <CareerForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t bg-neutral-50 py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-[#ff6321]/10 px-4 py-1 text-sm font-medium text-[#ff6321]">
                Frequently Asked Questions
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight">
                Have questions?
              </h2>

              <p className="mt-4 text-lg text-neutral-600">
                Here are some common questions about careers at Adszoo.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-3 md:p-6 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    When will I hear back?
                  </AccordionTrigger>

                  <AccordionContent className="text-base leading-7 text-neutral-600">
                    We review every submission carefully. Although we don&apos;t
                    have active openings at the moment, we&apos;ll reach out if
                    a role matching your skills becomes available.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Can students or fresh graduates apply?
                  </AccordionTrigger>

                  <AccordionContent className="text-base leading-7 text-neutral-600">
                    Yes. Students, recent graduates, freelancers and experienced
                    professionals are all welcome to submit their profiles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Is this an active job application?
                  </AccordionTrigger>

                  <AccordionContent className="text-base leading-7 text-neutral-600">
                    No. We currently don&apos;t have active openings. This form
                    helps us build a talent network so we can contact suitable
                    candidates when positions become available.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    What roles do you usually hire for?
                  </AccordionTrigger>

                  <AccordionContent className="text-base leading-7 text-neutral-600">
                    We typically hire for Web Development, UI/UX Design, SEO, AI
                    Search Optimization, Digital Marketing, Content Writing,
                    Graphic Design, Video Editing, Sales and Business
                    Development.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Can I update my profile later?
                  </AccordionTrigger>

                  <AccordionContent className="text-base leading-7 text-neutral-600">
                    Absolutely. If your experience, portfolio or resume changes,
                    simply submit the form again with your updated information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
