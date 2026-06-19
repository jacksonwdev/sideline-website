"use client";

import { Check, LoaderCircle, LockKeyhole, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SidelineSelect } from "../components/SidelineSelect";
import { getSupabaseClient } from "../lib/supabase";

const categories = [
  "Creator Partnerships",
  "Community Questions",
  "Brand & Business Partnerships",
  "General Questions",
  "Technical Support",
  "Press & Investors",
];

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const supabase = getSupabaseClient();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const category = String(formData.get("category") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!supabase) {
      setStatus("error");
      return;
    }

    if (!name || !email || !category || !message) {
      setStatus("error");
      return;
    }

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name,
        email,
        category,
        subject,
        message,
      });

      if (error) {
        setStatus("error");
        return;
      }

      try {
        await fetch("/api/contact-notification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            category,
            subject,
            message,
          }),
        });
      } catch {
        // Supabase is the source of truth; email must never block form success.
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="grid min-h-[520px] place-items-center rounded-lg border border-[#b9ff22]/35 bg-[radial-gradient(circle_at_50%_30%,rgba(185,255,34,.1),transparent_40%),rgba(255,255,255,.02)] p-8 text-center">
        <div>
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#b9ff22] text-black shadow-[0_0_34px_rgba(185,255,34,.24)]">
            <Check className="size-8 stroke-[3]" />
          </span>
          <h2 className="mt-6 text-3xl font-black">
            Message sent. We&apos;ll get back to you soon.
          </h2>
          <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-300">
            Thanks for reaching out to Sideline.
          </p>
          <button
            className="motion-action motion-action-dark mt-7 rounded-md border border-white/15 bg-white/[0.025] px-6 py-3 text-sm font-black text-white"
            onClick={() => setStatus("idle")}
            type="button"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  const fieldClass =
    "mt-2.5 w-full rounded-md border border-white/15 bg-black/25 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#b9ff22]/70 focus:ring-2 focus:ring-[#b9ff22]/10";

  return (
    <form
      className="rounded-lg border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,.04),rgba(255,255,255,.015))] p-6 shadow-[0_28px_80px_rgba(0,0,0,.38)] sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold" htmlFor="contact-name">
          Name
          <input
            className={`${fieldClass} h-14`}
            id="contact-name"
            maxLength={120}
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>

        <label className="block text-sm font-bold" htmlFor="contact-email">
          Email
          <input
            className={`${fieldClass} h-14`}
            id="contact-email"
            maxLength={320}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-bold" htmlFor="contact-category">
          Category
        </label>
        <SidelineSelect
          className="mt-2.5"
          id="contact-category"
          name="category"
          options={categories.map((category) => ({
            label: category,
            value: category,
          }))}
          placeholder="Select a topic"
          required
        />
      </div>

      <label className="mt-5 block text-sm font-bold" htmlFor="contact-subject">
        Subject
        <input
          className={`${fieldClass} h-14`}
          id="contact-subject"
          maxLength={200}
          name="subject"
          placeholder="What can we help with?"
          required
          type="text"
        />
      </label>

      <label className="mt-5 block text-sm font-bold" htmlFor="contact-message">
        Message
        <textarea
          className={`${fieldClass} min-h-40 resize-y py-4`}
          id="contact-message"
          maxLength={5000}
          name="message"
          placeholder="Tell us a little more..."
          required
        />
      </label>

      {status === "error" ? (
        <p
          className="mt-5 rounded-md border border-red-400/30 bg-red-400/8 px-4 py-3 text-sm text-red-200"
          role="alert"
        >
          We couldn&apos;t send your message right now. Please try again.
        </p>
      ) : null}

      <button
        className="motion-action mt-6 inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-[#b9ff22] text-sm font-black text-black shadow-[0_0_28px_rgba(185,255,34,.18)] hover:bg-[#d0ff53] disabled:cursor-wait disabled:opacity-65"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? (
          <>
            <LoaderCircle className="size-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="size-4" strokeWidth={2.5} />
          </>
        )}
      </button>

      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <LockKeyhole className="size-4" />
        Your information is used only to respond to your inquiry.
      </p>
    </form>
  );
}
