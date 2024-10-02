import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does Adszoo offer?",
    answer:
      "At Adszoo, we provide a comprehensive range of digital marketing services, including website development, social media marketing, PPC advertising, graphic design, and video editing.",
    value: "item-1",
  },
  {
    question:
      "How long does it take to see results from your marketing campaigns?",
    answer:
      "Results vary based on the specific services and goals of each campaign. Generally, clients start seeing significant improvements within 2-3 months, but we focus on long-term growth strategies.",
    value: "item-2",
  },
  {
    question: "Do you offer customized marketing solutions?",
    answer:
      "Yes! We understand that every business is unique, which is why we tailor our strategies to meet your specific needs and objectives.",
    value: "item-3",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Adszoo works with a diverse range of industries, including e-commerce, healthcare, education, technology, and more.",
    value: "item-4",
  },
  {
    question: "How can I get started with Adszoo?",
    answer:
      "Getting started is easy! You can reach out to us through our website's contact form, schedule a consultation, or call us directly.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQs
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
