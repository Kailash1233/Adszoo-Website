import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6321]/40 hover:shadow-xl">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6321]/10 text-[#ff6321] transition-all group-hover:bg-[#ff6321] group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-2xl font-bold tracking-tight">{title}</h3>

      <p className="mt-4 leading-7 text-neutral-600">{description}</p>

      <div className="mt-8 inline-flex items-center gap-2 font-medium text-[#ff6321] transition-transform group-hover:translate-x-1">
        Learn more
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}
