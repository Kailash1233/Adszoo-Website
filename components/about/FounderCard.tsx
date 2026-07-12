import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Globe } from "lucide-react";

interface FounderCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
}

export default function FounderCard({
  name,
  role,
  image,
  description,
  linkedin,
  instagram,
  website,
}: FounderCardProps) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white transition-all duration-500">
      {/* Hero Image */}

      <div className="relative h-[520px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

        {/* Name */}

        <div className="absolute bottom-8 left-8">
          <h3 className="text-4xl font-black text-white">{name}</h3>

          <p className="mt-2 uppercase tracking-[0.3em] text-sm font-semibold text-[#ff6321]">
            {role}
          </p>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        <p className="text-lg leading-8 text-neutral-600">{description}</p>

        {(linkedin || instagram || website) && (
          <div className="mt-8 flex gap-4">
            {linkedin && (
              <Link
                href={linkedin}
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-[#ff6321] hover:text-white"
              >
                <Linkedin size={20} />
              </Link>
            )}

            {instagram && (
              <Link
                href={instagram}
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-[#ff6321] hover:text-white"
              >
                <Instagram size={20} />
              </Link>
            )}

            {website && (
              <Link
                href={website}
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-[#ff6321] hover:text-white"
              >
                <Globe size={20} />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
