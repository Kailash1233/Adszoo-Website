import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Case Study Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We couldn&apos;t find the case study you&apos;re looking for. It may
          have been moved or doesn&apos;t exist.
        </p>
        <Link
          href="/case-study"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
        >
          View All Case Studies
        </Link>
      </div>
    </div>
  );
}
