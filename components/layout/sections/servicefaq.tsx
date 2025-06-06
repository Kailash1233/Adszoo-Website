import ServicesAccordion from "@/components/ui/service-accordion";

export default function ServiceFAQ() {
  return (
    <div className="min-h-screen py-16 bg-gray-50" id="service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Services
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Grow Your Business
          </h2>

          <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
            From marketing and sales to operations and strategy, we have the
            expertise to help you achieve your goals.
          </h3>
        </div>

        <ServicesAccordion />
      </div>
    </div>
  );
}
