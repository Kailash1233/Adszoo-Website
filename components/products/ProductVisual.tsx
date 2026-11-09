import Image from "next/image";

/** Lightweight, code-drawn product previews (no heavy images) for the hero. */
export default function ProductVisual({ slug }: { slug: string }) {
  if (slug.startsWith("smart-queue")) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
        <Image
          src="/products/smart-queue/tv-display.webp"
          alt="Smart Queue restaurant TV display with token numbers and QR code"
          width={1400}
          height={787}
          priority
          className="h-auto w-full"
        />
      </div>
    );
  }

  if (slug.startsWith("propertygenie")) {
    return (
      <div className="relative mx-auto max-w-md">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-4 shadow-2xl">
          <div className="h-44 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-900 p-4 text-white">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs">For sale · Velachery</span>
            <p className="mt-16 text-2xl font-bold">2 BHK Apartment</p>
            <p className="text-sm opacity-90">1,050 sq.ft · 2nd floor · Car park</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-2xl font-extrabold">₹85 L</p>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">3 new leads</span>
          </div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-600">
            {["East facing", "Gated community", "Near MRTS", "Ready to move"].map((t) => (
              <li key={t} className="rounded-lg bg-gray-50 px-3 py-2">✓ {t}</li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <span className="rounded-full bg-[#25D366] py-2.5 text-center text-sm font-semibold text-white">Share on WhatsApp</span>
            <span className="rounded-full border border-gray-300 py-2.5 text-center text-sm font-semibold">PDF brochure</span>
          </div>
          <div className="mt-3 rounded-xl border border-teal-200 bg-teal-50 p-3 text-xs text-teal-900">
            <strong>New enquiry:</strong> Priya R. wants a site visit this Saturday.
          </div>
        </div>
      </div>
    );
  }

  // Unizo — invoice / dashboard mock
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center gap-2 border-b bg-gray-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs font-semibold text-gray-500">Unizo · New Bill (F9 Save & Print)</span>
      </div>
      <div className="grid gap-4 p-5 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="rounded-xl border">
            <div className="grid grid-cols-12 gap-2 border-b bg-gray-50 px-3 py-2 text-[11px] font-semibold text-gray-500">
              <span className="col-span-6">Item</span>
              <span className="col-span-2 text-right">Qty</span>
              <span className="col-span-2 text-right">GST</span>
              <span className="col-span-2 text-right">Amount</span>
            </div>
            {[
              ["OPC 53 Cement (50kg)", "40 bag", "28%", "15,200"],
              ["TMT Bar 12mm Fe550", "0.5 t", "18%", "29,750"],
              ["PVC Pipe 1\" (3m)", "25 nos", "18%", "4,375"],
              ["River Sand / M-Sand", "2 unit", "5%", "11,000"],
            ].map((r) => (
              <div key={r[0]} className="grid grid-cols-12 gap-2 border-b px-3 py-2 text-xs last:border-0">
                <span className="col-span-6 truncate">{r[0]}</span>
                <span className="col-span-2 text-right text-gray-600">{r[1]}</span>
                <span className="col-span-2 text-right text-gray-600">{r[2]}</span>
                <span className="col-span-2 text-right font-semibold">{r[3]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 text-xs">
          <div className="rounded-xl bg-[#fff6ed] p-3">
            <p className="text-gray-500">Customer</p>
            <p className="font-semibold">Sri Murugan Constructions</p>
            <p className="mt-1 text-gray-500">Contractor price · Credit</p>
            <p className="mt-1 font-semibold text-[#e85716]">Outstanding ₹1,82,400</p>
          </div>
          <div className="rounded-xl border p-3">
            <div className="flex justify-between"><span>Taxable</span><span>₹48,914</span></div>
            <div className="flex justify-between"><span>CGST + SGST</span><span>₹11,411</span></div>
            <div className="mt-2 flex justify-between border-t pt-2 text-sm font-bold"><span>Total</span><span>₹60,325</span></div>
          </div>
          <div className="rounded-xl bg-black p-3 text-center font-semibold text-white">Save & Print</div>
        </div>
      </div>
    </div>
  );
}
