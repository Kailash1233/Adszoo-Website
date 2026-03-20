"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/maqpqezz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      router.push("/thank-you");
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 mt-2">
        <div>
          <label className="block text-sm mb-2">Name</label>

          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Email</label>

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Company / Business</label>

          <input
            type="text"
            name="company"
            placeholder="Your company"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Service Interested In</label>

          <select name="service" className="w-full border rounded-lg px-4 py-3">
            <option>Select a service</option>
            <option>Conversion Focused Website</option>
            <option>Landing Page Design</option>
            <option>Google Ads Management</option>
            <option>Meta Ads Management</option>
            <option>Conversion Rate Optimization</option>
            <option>Lead Generation Systems</option>
            <option>Sales Funnel Building</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2">Message</label>

          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell us about your project"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
