import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Check,
  FlaskConical,
  LockKeyhole,
  Star,
} from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist | Sideline",
  description:
    "Join the Sideline waitlist and help shape the future of sports communities.",
};

const benefits = [
  {
    title: "Early Access",
    copy: "Be among the first to explore Sideline.",
    Icon: LockKeyhole,
  },
  {
    title: "Platform Updates",
    copy: "Get the latest news and feature updates.",
    Icon: Bell,
  },
  {
    title: "Testing Opportunities",
    copy: "Help shape the platform through early feedback.",
    Icon: FlaskConical,
  },
  {
    title: "Founding Member Status",
    copy: "Earn special recognition as an early supporter.",
    Icon: Star,
  },
];

const steps = [
  { label: "Website Complete", complete: true },
  { label: "Waitlist Open", complete: true },
  { label: "Platform In Development", complete: false },
  { label: "Testing Coming Soon", complete: false },
  { label: "Launch", complete: false },
];

export default function WaitlistPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(185,255,34,.065),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1120px] px-5 py-10 sm:px-8 sm:py-14">
        <Link className="mx-auto block w-fit" href="/" aria-label="Return to Sideline home">
          <Image
            alt="Sideline"
            className="h-auto w-[190px]"
            height={255}
            priority
            src="/assets/sideline-logo-transparent.png"
            width={1571}
          />
        </Link>

        <header className="mx-auto mt-10 max-w-3xl text-center">
          <h1 className="text-5xl font-black leading-none sm:text-7xl">
            Join the <span className="text-[#b9ff22]">Sideline</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Be among the first fans and creators to help shape the future of sports communities.
          </p>
        </header>

        <div className="mx-auto mt-9 max-w-[690px]">
          <WaitlistForm />
        </div>

        <section className="mt-14">
          <h2 className="text-center text-3xl font-black">Why Join Early?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, copy, Icon }) => (
              <article
                className="border-b border-white/10 pb-6 text-center sm:border-b-0 sm:border-r sm:px-5 sm:last:border-0"
                key={title}
              >
                <Icon className="mx-auto size-10 text-[#b9ff22]" />
                <h3 className="mt-5 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-3xl font-black">Development Status</h2>
          <div className="relative mt-10 grid grid-cols-2 gap-8 sm:grid-cols-5">
            <div className="absolute left-[8%] right-[8%] top-6 hidden border-t border-dashed border-white/25 sm:block" />
            <div className="absolute left-[8%] top-6 hidden w-[21%] border-t border-[#b9ff22] sm:block" />
            {steps.map(({ label, complete }) => (
              <div className="relative text-center" key={label}>
                <span
                  className={`relative z-10 mx-auto grid size-12 place-items-center rounded-full border bg-[#07090a] ${
                    complete
                      ? "border-[#b9ff22] text-[#b9ff22] shadow-[0_0_18px_rgba(185,255,34,.15)]"
                      : "border-zinc-500 text-transparent"
                  }`}
                >
                  {complete && <Check className="size-5 stroke-[3]" />}
                </span>
                <p className="mx-auto mt-4 max-w-[130px] text-sm font-bold leading-5">{label}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
