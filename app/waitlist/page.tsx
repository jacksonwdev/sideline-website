import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AtSign,
  Check,
  FlaskConical,
  LockKeyhole,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist | Sideline",
  description:
    "Reserve your username, earn founding-member status, and get early access to Sideline before launch.",
  alternates: {
    canonical: "/waitlist",
  },
};

const foundingBenefits = [
  {
    title: "Claim your identity",
    copy: "Reserve the username you want before launch day.",
    Icon: AtSign,
  },
  {
    title: "Be there from day one",
    copy: "Get into communities before the doors open to everyone.",
    Icon: LockKeyhole,
  },
  {
    title: "Shape the platform",
    copy: "Tell us what to build — your input ships before public launch.",
    Icon: FlaskConical,
  },
  {
    title: "Creator priority",
    copy: "Front-of-line review when creator applications open.",
    Icon: Sparkles,
  },
  {
    title: "Permanent founding status",
    copy: "A founding-member badge that only early joiners can earn.",
    Icon: Star,
  },
  {
    title: "Community influence",
    copy: "Help set the tone for the rooms and culture that launch first.",
    Icon: MessageCircle,
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

        <header className="mx-auto mt-8 max-w-3xl text-center">
          <h1 className="text-5xl font-black leading-none sm:text-7xl">
            Join the <span className="text-[#b9ff22]">Sideline</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300 sm:mt-6 sm:text-xl">
            Reserve your username, earn founding-member status, and get early
            access to communities, creators, picks, and leaderboards — while
            your input still shapes what we ship first.
          </p>
        </header>

        <div className="mx-auto mt-8 max-w-[690px]">
          <WaitlistForm />
        </div>

        <section className="mt-12 sm:mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              Why join now
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Founding Member Benefits
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Joining now means more than a spot in line. Founding members get
              reserved usernames, early access, creator priority, and a real say
              in what we build — perks that won&apos;t exist after launch.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-3">
            {foundingBenefits.map(({ title, copy, Icon }) => (
              <article
                className="rounded-lg border border-white/10 bg-[#0b0f12]/85 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-6"
                key={title}
              >
                <span className="grid size-10 place-items-center rounded-xl border border-[#b9ff22]/35 bg-[#b9ff22]/10 text-[#b9ff22] sm:size-12">
                  <Icon className="size-5 sm:size-6" />
                </span>
                <h3 className="mt-3 text-sm font-black text-white sm:mt-5 sm:text-base">{title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-zinc-400 sm:mt-2 sm:text-sm sm:leading-6">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
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
