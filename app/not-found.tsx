import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl space-y-6">
        <h1 className="text-6xl font-extrabold text-emerald-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Oops! This page doesn&apos;t exist.
        </h2>
        <p className="text-muted-foreground text-base">
          The page you&apos;re looking for might have been removed or is
          temporarily unavailable.
        </p>
        <Button asChild className="mt-4 inline-flex gap-2">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Go to Homepage
          </Link>
        </Button>
      </div>
    </section>
  );
}
