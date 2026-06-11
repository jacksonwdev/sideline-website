import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CircleDot, Radio, Trophy, UsersRound } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Page Not Found | Sideline",
  description: "This page is out of bounds. Return to the Sideline homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

const signals = [
  { icon: UsersRound, label: "Communities" },
  { icon: Radio, label: "Creators" },
  { icon: Trophy, label: "Competition" },
] as const;

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-117px)] overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(185,255,34,0.12),transparent_28%),radial-gradient(circle_at_20%_76%,rgba(117,255,95,0.05),transparent_24%)]" />
      <div className="pointer-events-none absolute right-[-12rem] top-24 size-[42rem] rounded-full border border-[#b9ff22]/10" />
      <div className="pointer-events-none absolute right-[-5rem] top-[11rem] size-[28rem] rounded-full border border-[#b9ff22]/10" />
      <div className="pointer-events-none absolute right-[8.5rem] top-[24.5rem] size-3 rounded-full bg-[#b9ff22] shadow-[0_0_24px_rgba(185,255,34,0.8)]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader />

        <section className="grid min-h-[700px] items-center gap-14 py-16 lg:grid-cols-[1fr_0.78fr] lg:py-20">
          <div className="motion-enter max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-lg border border-[#b9ff22]/30 bg-[#b9ff22]/[0.07] px-4 py-2 text-sm font-black uppercase text-[#b9ff22]">
              <CircleDot className="size-4" strokeWidth={2.5} />
              Signal Lost
            </div>

            <p className="text-[7rem] font-black leading-[0.72] tracking-normal text-[#b9ff22] sm:text-[9rem] lg:text-[11rem]">
              404
            </p>
            <h1 className="mt-9 max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              This page is
              <br />
              <span className="text-[#b9ff22]">out of bounds.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
              The play you&apos;re looking for isn&apos;t on the board. Head
              back home and rejoin the conversation.
            </p>

            <Link
              href="/"
              className="motion-action group mt-9 inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#b9ff22] px-8 text-base font-black text-black shadow-[0_0_35px_rgba(185,255,34,0.25)] hover:bg-[#d0ff53]"
            >
              <ArrowLeft
                className="size-5 transition-transform group-hover:-translate-x-1"
                strokeWidth={3}
              />
              Back to Homepage
            </Link>
          </div>

          <div className="motion-enter-late relative hidden min-h-[430px] lg:block">
            <div className="absolute left-1/2 top-1/2 size-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b9ff22]/15" />
            <div className="absolute left-1/2 top-1/2 size-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b9ff22]/20" />
            <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b9ff22]/50 bg-[#0b1109] shadow-[0_0_55px_rgba(185,255,34,0.18)]">
              <span className="text-4xl font-black italic text-[#b9ff22]">S</span>
            </div>

            {signals.map(({ icon: Icon, label }, index) => {
              const positions = [
                "left-1/2 top-0 -translate-x-1/2",
                "bottom-5 left-7",
                "bottom-5 right-7",
              ];

              return (
                <div
                  key={label}
                  className={`absolute ${positions[index]} flex flex-col items-center gap-3`}
                >
                  <span className="flex size-16 items-center justify-center rounded-full border border-[#b9ff22]/35 bg-[#0a0e0d] text-[#b9ff22] shadow-[0_0_30px_rgba(185,255,34,0.1)]">
                    <Icon className="size-7" strokeWidth={2} />
                  </span>
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-zinc-400">
                    {label}
                  </span>
                </div>
              );
            })}

            <span className="absolute left-1/2 top-16 h-[116px] w-px -translate-x-1/2 bg-gradient-to-b from-[#b9ff22]/60 to-[#b9ff22]/10" />
            <span className="absolute bottom-[93px] left-[114px] h-px w-[150px] rotate-[29deg] bg-gradient-to-r from-[#b9ff22]/30 to-[#b9ff22]/60" />
            <span className="absolute bottom-[93px] right-[114px] h-px w-[150px] -rotate-[29deg] bg-gradient-to-l from-[#b9ff22]/30 to-[#b9ff22]/60" />
          </div>
        </section>
      </div>
    </main>
  );
}
