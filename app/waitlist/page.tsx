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
import { FoundingValueStrip } from "../components/FoundingValueStrip";
import { WaitlistForm } from "./WaitlistForm";

const whatHappensNext = [
  { step: "1", title: "Join Waitlist", copy: "Reserve your spot as a founding member." },
  { step: "2", title: "Receive Early Access Invite", copy: "Get notified when your invite is ready." },
  { step: "3", title: "Participate In Community Testing", copy: "Help shape features before public launch." },
  { step: "4", title: "Platform Launch", copy: "Walk in with founding status on day one." },
];

export const metadata: Metadata = {
  title: "Join the Waitlist | Sideline",
  description:
    "Claim your spot as a founding member — reserve your username, earn permanent status, and help shape Sideline before launch.",
  alternates: {
    canonical: "/waitlist",
  },
};

const foundingBenefits = [
  {
    title: "Claim your identity",
    copy: "Lock in the username that becomes your reputation on Sideline.",
    Icon: AtSign,
  },
  {
    title: "Be there from day one",
    copy: "Walk into communities before the crowd and help set the culture.",
    Icon: LockKeyhole,
  },
  {
    title: "Shape the platform",
    copy: "Tell us what to build — founding members influence what ships first.",
    Icon: FlaskConical,
  },
  {
    title: "Creator priority",
    copy: "Creators who join early get reviewed first when tools open.",
    Icon: Sparkles,
  },
  {
    title: "Permanent founding status",
    copy: "A badge that proves you were here before launch — earned once, kept forever.",
    Icon: Star,
  },
  {
    title: "Community influence",
    copy: "Help decide which rooms launch first and what they feel like.",
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
          <span className="inline-flex items-center gap-2 rounded-full border border-[#b9ff22]/30 bg-[#b9ff22]/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-[#b9ff22]">
            Founding access open
          </span>
          <h1 className="mt-5 text-5xl font-black leading-none sm:text-7xl">
            Claim your spot on the{" "}
            <span className="text-[#b9ff22]">Sideline</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300 sm:mt-6 sm:text-xl">
            You&apos;re not signing up for updates — you&apos;re joining early.
            Reserve your username, earn founding-member status, and help shape
            the communities, creators, and competition we&apos;re building
            together.
          </p>
        </header>

        <p className="mx-auto mt-6 max-w-lg text-center text-sm leading-6 text-zinc-500">
          Sideline is in active development. Founding members get in first and
          influence what launches — before the public ever sees it.
        </p>

        <div className="mx-auto mt-8 max-w-[690px]">
          <WaitlistForm />
        </div>

        <section className="mx-auto mt-10 max-w-4xl sm:mt-12">
          <h2 className="text-center text-2xl font-black uppercase tracking-wide sm:text-3xl">
            What Happens Next?
          </h2>

          <div className="relative mt-8 hidden sm:mt-10 sm:block">
            <div className="absolute left-[10%] right-[10%] top-6 border-t border-dashed border-[#b9ff22]/35" />
            <div className="grid grid-cols-4 gap-3">
              {whatHappensNext.map(({ step, title, copy }) => (
                <article
                  key={title}
                  className="relative rounded-lg border border-white/10 bg-[#0b0f12]/85 p-4 pt-10 text-center"
                >
                  <span className="absolute left-1/2 top-0 z-10 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#b9ff22]/40 bg-[#0b0f12] text-sm font-black text-[#b9ff22]">
                    {step}
                  </span>
                  <h3 className="text-sm font-black text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-400">{copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-0 sm:hidden">
            {whatHappensNext.map(({ step, title, copy }, index) => (
              <div key={title}>
                <article className="flex items-start gap-4 rounded-lg border border-white/10 bg-[#0b0f12]/85 p-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#b9ff22]/40 bg-[#070a0b] text-sm font-black text-[#b9ff22]">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-sm font-black text-white">{title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-zinc-400">{copy}</p>
                  </div>
                </article>
                {index < whatHappensNext.length - 1 ? (
                  <p className="py-2 text-center text-lg text-[#b9ff22]/60" aria-hidden="true">
                    ↓
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 sm:mt-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              Why founding members matter
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              More than a waitlist spot
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Everyone who joins after launch gets the product. Founding members
              get something different — identity, status, influence, and a place
              in the community before it exists. These perks are only available
              while we&apos;re building.
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

        <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
          <FoundingValueStrip />
        </div>

        <section className="mt-10 sm:mt-12">
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
