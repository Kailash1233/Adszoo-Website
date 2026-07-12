"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(8, "Enter a valid phone number."),
  location: z.string().min(2, "Enter your location."),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  role: z.string().min(1, "Select a role."),
  experience: z.string().min(1, "Select your experience."),
  about: z.string().min(30, "Tell us a little more about yourself."),
  resume: z.string().optional(),
  _gotcha: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI / UX Designer",
  "SEO Specialist",
  "Content Writer",
  "Digital Marketing",
  "Performance Marketing",
  "Video Editor",
  "Graphic Designer",
  "Sales",
  "Business Development",
  "Internship",
  "Other",
];

const experiences = [
  "Student",
  "0-1 Years",
  "1-3 Years",
  "3-5 Years",
  "5+ Years",
];

export default function CareerForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    if (values._gotcha) return;

    setLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_CAREERS!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setSubmitted(true);
      reset();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border bg-white p-12 text-center shadow-sm"
      >
        <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />

        <h3 className="mt-6 text-3xl font-bold">Thank you for applying!</h3>

        <p className="mt-4 text-neutral-600 leading-7">
          We&apos;ve received your details successfully.
        </p>

        <p className="mt-2 text-neutral-600 leading-7">
          Although we don&apos;t have any active openings today, we&apos;ll
          reach out if a suitable opportunity becomes available.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border bg-white p-8 md:p-10 shadow-sm space-y-8"
    >
      {/* Honeypot */}
      <input
        {...register("_gotcha")}
        type="text"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Full Name *</label>

          <input
            {...register("fullName")}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#ff6321]"
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">Email Address *</label>

          <input
            {...register("email")}
            type="email"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#ff6321]"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">Phone Number *</label>

          <input
            {...register("phone")}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#ff6321]"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">Location *</label>

          <input
            {...register("location")}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#ff6321]"
          />

          {errors.location && (
            <p className="mt-2 text-sm text-red-600">
              {errors.location.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">LinkedIn Profile</label>

          <input
            {...register("linkedin")}
            placeholder="https://linkedin.com/in/yourname"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#ff6321]"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Portfolio / Website</label>

          <input
            {...register("portfolio")}
            placeholder="https://yourportfolio.com"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#ff6321]"
          />
        </div>
        <div>
          <label className="mb-2 block font-medium">
            Role You&apos;re Interested In *
          </label>

          <select
            {...register("role")}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#ff6321] bg-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select a role
            </option>

            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          {errors.role && (
            <p className="mt-2 text-sm text-red-600">{errors.role.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">Experience *</label>

          <select
            {...register("experience")}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#ff6321] bg-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select your experience
            </option>

            {experiences.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>

          {errors.experience && (
            <p className="mt-2 text-sm text-red-600">
              {errors.experience.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium">Resume URL</label>

        <input
          {...register("resume")}
          placeholder="Google Drive, Dropbox, OneDrive, etc."
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#ff6321]"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Tell us about yourself *
        </label>

        <textarea
          {...register("about")}
          rows={6}
          placeholder="Tell us about your experience, projects, achievements, interests, or why you'd like to work at Adszoo."
          className="w-full rounded-xl border px-4 py-3 outline-none resize-none focus:border-[#ff6321]"
        />

        {errors.about && (
          <p className="mt-2 text-sm text-red-600">{errors.about.message}</p>
        )}
      </div>

      <div className="rounded-2xl bg-orange-50 border border-orange-200 p-5">
        <p className="text-sm leading-7 text-neutral-700">
          <strong>Note:</strong> We currently don&apos;t have any active job
          openings. This form helps us build a talent network for future
          opportunities. If a suitable role opens up, we&apos;ll get in touch
          with shortlisted candidates.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center rounded-xl bg-[#ff6321] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#e8591b] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Your Profile"
        )}
      </button>
    </motion.form>
  );
}
