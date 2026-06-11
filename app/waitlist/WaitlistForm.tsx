"use client";

import { Check, LockKeyhole } from "lucide-react";
import { FormEvent, useState } from "react";
import { SidelineSelect } from "../components/SidelineSelect";
import { getSupabaseClient } from "../lib/supabase";

const sports = [
  "Football",
  "Basketball",
  "Baseball",
  "Hockey",
  "Soccer",
  "MMA",
  "Esports",
  "Other",
];

export function WaitlistForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "duplicate" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const supabase = getSupabaseClient();

    if (!supabase) {
      setStatus("error");
      return;
    }

    const selectedSports = formData
      .getAll("sports")
      .map(String)
      .filter(Boolean);

    try {
      const { error } = await supabase.from("waitlist").insert({
        name: String(formData.get("fullName") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim().toLowerCase(),
        user_type: String(formData.get("role") ?? ""),
        favorite_sport: selectedSports.length ? selectedSports.join(", ") : null,
        referral_code: String(formData.get("referralCode") ?? "").trim() || null,
      });

      if (error?.code === "23505") {
        setStatus("duplicate");
        return;
      }

      if (error) {
        setStatus("error");
        return;
      }

      try {
        await fetch("/api/kit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: String(formData.get("email") ?? "").trim().toLowerCase(),
            name: String(formData.get("fullName") ?? "").trim(),
            user_type: String(formData.get("role") ?? ""),
            favorite_sport: selectedSports.length ? selectedSports.join(", ") : null,
            referral_code: String(formData.get("referralCode") ?? "").trim() || null,
          }),
        });

      } catch {
        // Supabase is the source of truth; Kit must never block waitlist success.
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-[#b9ff22]/45 bg-[#b9ff22]/8 px-7 py-12 text-center shadow-[0_0_38px_rgba(185,255,34,.1)]">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#b9ff22] text-black">
          <Check className="size-8 stroke-[3]" />
        </span>
        <h2 className="mt-6 text-3xl font-black">
          You&apos;re on the list. Welcome to Sideline.
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-300">
          Thanks for joining Sideline. We&apos;ll keep you posted as the platform develops.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-lg border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.015))] p-6 shadow-[0_28px_80px_rgba(0,0,0,.45)] sm:p-8"
      onSubmit={handleSubmit}
    >
      <label className="block text-sm font-bold" htmlFor="full-name">
        Full Name
      </label>
      <input
        className="mt-3 h-14 w-full rounded-md border border-white/15 bg-black/25 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#b9ff22]/70 focus:ring-2 focus:ring-[#b9ff22]/10"
        id="full-name"
        name="fullName"
        placeholder="Enter your full name"
        required
        type="text"
      />

      <label className="mt-6 block text-sm font-bold" htmlFor="email">
        Email Address
      </label>
      <input
        className="mt-3 h-14 w-full rounded-md border border-white/15 bg-black/25 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#b9ff22]/70 focus:ring-2 focus:ring-[#b9ff22]/10"
        id="email"
        name="email"
        placeholder="Enter your email address"
        required
        type="email"
      />

      <label className="mt-6 block text-sm font-bold" htmlFor="role">
        I am a...
      </label>
      <SidelineSelect
        className="mt-3"
        id="role"
        name="role"
        options={[
          { label: "Sports fan", value: "fan" },
          { label: "Creator", value: "creator" },
          { label: "Analyst", value: "analyst" },
          { label: "Community builder", value: "community-builder" },
          { label: "Other", value: "other" },
        ]}
        placeholder="Select one"
        required
      />
      <p className="mt-2 text-xs text-zinc-500">This helps us personalize your experience.</p>

      <fieldset className="mt-6">
        <legend className="text-sm font-bold">
        Favorite Sport <span className="font-normal text-zinc-500">(Optional)</span>
        </legend>
        <p className="mt-2 text-xs text-zinc-500">Select all that apply.</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {sports.map((sport) => (
            <label
              className="group relative flex min-h-12 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-black/25 px-3 text-center text-sm font-semibold text-zinc-400 transition has-[:checked]:border-[#b9ff22]/65 has-[:checked]:bg-[#b9ff22]/10 has-[:checked]:text-[#b9ff22] hover:border-white/30"
              key={sport}
            >
              <input
                className="peer sr-only"
                name="sports"
                type="checkbox"
                value={sport.toLowerCase()}
              />
              {sport}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block text-sm font-bold" htmlFor="referral-code">
        Referral Code <span className="font-normal text-zinc-500">(Optional)</span>
      </label>
      <input
        className="mt-3 h-14 w-full rounded-md border border-white/15 bg-black/25 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#b9ff22]/70 focus:ring-2 focus:ring-[#b9ff22]/10"
        id="referral-code"
        name="referralCode"
        placeholder="Enter a referral code"
        type="text"
      />

      {status === "duplicate" ? (
        <p
          className="mt-5 rounded-md border border-[#b9ff22]/30 bg-[#b9ff22]/8 px-4 py-3 text-sm font-semibold text-[#b9ff22]"
          role="status"
        >
          Looks like you&apos;re already on the waitlist.
        </p>
      ) : null}

      {status === "error" ? (
        <p
          className="mt-5 rounded-md border border-red-400/30 bg-red-400/8 px-4 py-3 text-sm text-red-200"
          role="alert"
        >
          We couldn&apos;t join the waitlist right now. Please try again.
        </p>
      ) : null}

      <button
        className="motion-action mt-6 h-14 w-full rounded-md bg-[#b9ff22] text-sm font-black text-black shadow-[0_0_28px_rgba(185,255,34,.2)] transition hover:bg-[#d0ff53] disabled:cursor-wait disabled:opacity-65"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? "Joining..." : "Join the Waitlist"}
      </button>
      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <LockKeyhole className="size-4" />
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
