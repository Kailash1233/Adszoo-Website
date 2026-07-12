import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({
  icon: Icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <div className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6321]/40 hover:shadow-xl">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6321]/10 text-[#ff6321] transition-colors group-hover:bg-[#ff6321] group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-2xl font-bold tracking-tight">{title}</h3>

      <p className="mt-4 leading-7 text-neutral-600">{description}</p>
    </div>
  );
}
