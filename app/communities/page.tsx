import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Flame,
  LockKeyhole,
  MessageCircle,
  Radio,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { FoundingValueStrip } from "../components/FoundingValueStrip";
import { HeroBadge } from "../components/HeroBadge";
import { SiteHeader } from "../components/SiteHeader";
import { StadiumCta } from "../components/StadiumCta";

export const metadata: Metadata = {
  title: "Communities | Sideline",
  description:
    "Find sports communities on Sideline for discussion, predictions, leaderboards, premium channels, and fan events.",
  alternates: {
    canonical: "/communities",
  },
};

const channels = [
  ["ANN", "Announcements"],
  ["NFL", "NFL Discussion"],
  ["HOT", "Hot Takes"],
  ["PCK", "Predictions"],
  ["TOP", "Leaderboards"],
  ["GEN", "General Chat"],
  ["VIP", "Premium Lounge"],
];

const whyItems = [
  ["Connect", "Meet fans who share your passion."],
  ["Compete", "Make predictions and climb community rankings."],
  ["Learn", "Follow analysts, creators, and experienced fans."],
  ["Belong", "Become part of something bigger than another comment section."],
];

const fanTypes = ["Football", "Basketball", "Baseball", "MMA", "Hockey", "Soccer", "Esports"];

const featureItems = [
  ["Live Discussions", "Talk sports with fans in real time."],
  ["Predictions", "Share your takes before the game begins."],
  ["Leaderboards", "Track performance and earn recognition."],
  ["Creator Communities", "Connect directly with your favorite creators."],
  ["Premium Channels", "Unlock exclusive content and analysis."],
  ["Community Events", "Join challenges and competitions."],
];

function CommunityDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[720px]">
      <div className="absolute -inset-12 bg-[#b9ff22]/10 blur-[80px]" />
      <div className="absolute -right-5 -top-5 h-28 w-44 border-r border-t border-[#b9ff22]/30" />
      <div className="absolute -bottom-5 -left-5 h-24 w-36 border-b border-l border-[#b9ff22]/20" />

      <div className="relative overflow-hidden rounded-lg border border-[#b9ff22]/30 bg-[linear-gradient(145deg,rgba(18,22,15,.98),rgba(4,5,6,.98)_42%)] shadow-[0_30px_90px_rgba(0,0,0,.65),0_0_50px_rgba(185,255,34,.1)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b9ff22] to-transparent" />
        <div className="grid grid-cols-[58px_minmax(0,1fr)] sm:grid-cols-[72px_minmax(0,1fr)]">
          <aside className="flex flex-col items-center border-r border-white/8 bg-black/35 py-4">
            <span
              aria-label="Sideline"
              className="block h-8 w-10 bg-[url('/assets/sideline-logo-transparent.png')] bg-no-repeat"
              role="img"
              style={{
                backgroundPosition: "left center",
                backgroundSize: "197px 32px",
              }}
            />
            <div className="mt-7 space-y-3">
              {[MessageCircle, Users, Trophy, Flame].map((Icon, index) => (
                <span
                  className={`grid size-9 place-items-center rounded-md border ${
                    index === 1
                      ? "border-[#b9ff22]/45 bg-[#b9ff22]/12 text-[#b9ff22]"
                      : "border-transparent text-zinc-600"
                  }`}
                  key={index}
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
            <span className="mt-auto grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-black text-zinc-400">
              JD
            </span>
          </aside>

          <div className="min-w-0">
            <div className="flex items-center justify-between border-b border-white/8 px-4 py-4 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-md border border-[#b9ff22]/35 bg-[#b9ff22]/10 text-xs font-black text-[#b9ff22]">
                  NFL
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black sm:text-base">Fourth Down Society</p>
                  <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                    <span className="size-1.5 rounded-full bg-[#b9ff22] shadow-[0_0_8px_#b9ff22]" />
                    Live game room
                  </span>
                </div>
              </div>
              <span className="hidden rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] font-black text-zinc-300 sm:block">
                Preview
              </span>
            </div>

            <div className="grid min-h-[390px] lg:grid-cols-[0.68fr_1.32fr]">
              <div className="hidden border-r border-white/8 p-3 lg:block">
                <p className="px-2 pb-3 text-[9px] font-black uppercase tracking-[0.18em] text-zinc-600">
                  Community rooms
                </p>
                {channels.slice(0, 6).map(([tag, label], index) => (
                  <div
                    className={`mb-1 flex items-center gap-2 rounded-md px-2 py-2.5 text-xs ${
                      index === 2
                        ? "border border-[#b9ff22]/20 bg-[#b9ff22]/10 font-bold text-white"
                        : "text-zinc-500"
                    }`}
                    key={label}
                  >
                    <span className="w-7 text-[9px] font-black text-[#b9ff22]">{tag}</span>
                    <span className="truncate">{label}</span>
                  </div>
                ))}
              </div>

              <div className="min-w-0 p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(185,255,34,.08),rgba(255,255,255,.025))] p-4">
                  <div className="absolute -right-8 -top-12 size-36 rounded-full border border-[#b9ff22]/10" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
                        <Radio className="size-3.5" />
                        Live game room
                      </span>
                      <h3 className="mt-2 text-lg font-black">Chiefs vs Bills</h3>
                      <p className="mt-1 text-[11px] text-zinc-500">4th quarter / 02:14 remaining</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black">24 - 21</p>
                      <span className="text-[9px] font-bold uppercase text-zinc-600">Live score</span>
                    </div>
                  </div>
                  <div className="relative mt-4 h-1 overflow-hidden rounded-full bg-white/8">
                    <div className="h-full w-[84%] bg-gradient-to-r from-[#b9ff22]/30 to-[#b9ff22]" />
                  </div>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-[1.08fr_.92fr]">
                  <div className="rounded-lg border border-white/10 bg-white/[0.025] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">Live pulse</span>
                      <span className="flex items-center gap-1 text-[9px] font-bold text-[#b9ff22]">
                        <Zap className="size-3 fill-[#b9ff22]" />
                        Live now
                      </span>
                    </div>
                    <div className="mt-3 space-y-3">
                      {[
                        ["JG", "That fourth-down call was fearless.", "Now"],
                        ["NE", "Defense needs one stop here.", "12s"],
                        ["AP", "This is why game rooms are unmatched.", "31s"],
                      ].map(([initials, copy, time]) => (
                        <div className="grid grid-cols-[28px_1fr_auto] items-start gap-2" key={copy}>
                          <span className="grid size-7 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[8px] font-black text-zinc-300">
                            {initials}
                          </span>
                          <p className="text-[10px] leading-4 text-zinc-300">{copy}</p>
                          <span className="text-[8px] text-zinc-700">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-lg border border-white/10 bg-white/[0.025] p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">Example pick</span>
                        <Trophy className="size-3.5 text-[#b9ff22]" />
                      </div>
                      <p className="mt-2 text-xs font-bold">Who closes it out?</p>
                      <div className="mt-3 space-y-2">
                        <div>
                          <div className="mb-1 flex justify-between text-[9px]"><span>Chiefs</span><strong className="text-[#b9ff22]">68%</strong></div>
                          <div className="h-1.5 rounded-full bg-white/8"><div className="h-full w-[68%] rounded-full bg-[#b9ff22]" /></div>
                        </div>
                        <div>
                          <div className="mb-1 flex justify-between text-[9px]"><span>Bills</span><strong>32%</strong></div>
                          <div className="h-1.5 rounded-full bg-white/8"><div className="h-full w-[32%] rounded-full bg-zinc-600" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-[#b9ff22]/20 bg-[#b9ff22]/[0.055] p-3">
                      <div>
                        <span className="text-[8px] font-black uppercase tracking-[0.16em] text-zinc-500">Your community rank</span>
                        <p className="mt-1 text-sm font-black"><span className="text-[#b9ff22]">Climb</span> the board</p>
                      </div>
                      <ChevronRight className="size-4 text-[#b9ff22]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-7 left-[16%] hidden items-center gap-3 rounded-lg border border-white/10 bg-[#090b0c]/95 px-4 py-3 shadow-2xl sm:flex">
        <span className="grid size-9 place-items-center rounded-md bg-[#b9ff22]/10 text-[#b9ff22]">
          <LockKeyhole className="size-4" />
        </span>
        <div>
          <span className="text-[8px] font-black uppercase tracking-[0.16em] text-zinc-600">Members-only room</span>
          <p className="mt-0.5 text-xs font-bold">Film Room unlocked</p>
        </div>
      </div>
    </div>
  );
}

function CommunityPreview() {
  const gameDayStages = [
    { label: "Pregame Discussion", Icon: MessageCircle },
    { label: "Predictions Open", Icon: Trophy },
    { label: "Predictions Lock", Icon: LockKeyhole },
    { label: "Live Game Chat", Icon: Radio },
    { label: "Results Posted", Icon: Zap },
    { label: "Leaderboard Updated", Icon: BarChart3 },
    { label: "Creator Breakdown Released", Icon: Sparkles },
  ];

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="pointer-events-none absolute inset-x-[8%] top-1/2 h-28 -translate-y-1/2 bg-[#b9ff22]/7 blur-[70px]" />
      <div className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(90deg,rgba(185,255,34,.035),transparent_22%,transparent_78%,rgba(185,255,34,.035))] py-6 sm:px-4 lg:py-8">
        <div className="mb-6 px-2 lg:mb-8">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
            Game day flow
          </span>
          <h3 className="mt-2 text-2xl font-black text-white">How a community moves through game day</h3>
        </div>

        <div className="hidden lg:block">
          <div className="relative px-2">
            <div className="pointer-events-none absolute left-[4%] right-[4%] top-[26px] h-px bg-gradient-to-r from-[#b9ff22]/15 via-[#b9ff22] to-[#b9ff22]/15" />
            <div className="flex items-start justify-between gap-1">
              {gameDayStages.map(({ label, Icon }, index) => (
                <div key={label} className="flex min-w-0 flex-1 items-start">
                  <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                    <div
                      className={`relative z-10 grid size-12 place-items-center rounded-full border bg-[#080b0c] ${
                        index === 3
                          ? "border-[#b9ff22] text-[#b9ff22] shadow-[0_0_28px_rgba(185,255,34,.25)]"
                          : "border-white/15 text-zinc-500"
                      }`}
                    >
                      <Icon className="size-5" strokeWidth={2} />
                    </div>
                    <p className="mt-3 text-[10px] font-black leading-4 text-zinc-200">{label}</p>
                  </div>
                  {index < gameDayStages.length - 1 ? (
                    <ArrowRight className="mx-0.5 mt-3 size-4 shrink-0 text-[#b9ff22]/50" aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-0 px-4 lg:hidden">
          {gameDayStages.map(({ label, Icon }, index) => (
            <div key={label} className="flex w-full max-w-sm flex-col items-center">
              <div className="flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3">
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-full border bg-[#080b0c] ${
                    index === 3
                      ? "border-[#b9ff22] text-[#b9ff22]"
                      : "border-white/15 text-zinc-500"
                  }`}
                >
                  <Icon className="size-4" />
                </span>
                <p className="text-sm font-black text-white">{label}</p>
              </div>
              {index < gameDayStages.length - 1 ? (
                <ChevronDown className="my-1 size-5 text-[#b9ff22]/60" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 px-2 sm:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/25 px-5 py-4">
            <MessageCircle className="size-5 shrink-0 text-[#b9ff22]" />
            <div>
              <p className="text-sm font-black text-white">The conversation stays connected.</p>
              <p className="mt-1 text-xs text-zinc-500">
                Picks, reactions, reputation, and premium analysis all live inside the same community.
              </p>
            </div>
          </div>
          <Link
            href="/waitlist"
            className="motion-action inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#b9ff22] px-8 text-sm font-black text-black"
          >
            Join as a Founding Member
            <ArrowRight className="size-5" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CommunitiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(185,255,34,0.1),transparent_28%),radial-gradient(circle_at_20%_45%,rgba(185,255,34,0.055),transparent_22%)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader active="Communities" />

        <section className="relative grid min-h-0 items-center gap-14 border-b border-white/10 py-14 lg:min-h-[720px] lg:grid-cols-[0.82fr_1.18fr] lg:py-0">
          <div className="pointer-events-none absolute right-[-8%] top-14 hidden size-[520px] rounded-full border border-[#b9ff22]/10 lg:block" />
          <div className="pointer-events-none absolute right-[4%] top-36 hidden size-[310px] rounded-full border border-[#b9ff22]/10 lg:block" />
          <div className="pointer-events-none absolute left-[42%] top-1/2 hidden h-px w-[18%] bg-gradient-to-r from-transparent via-[#b9ff22]/45 to-transparent lg:block" />
          <div className="motion-enter relative z-10 max-w-2xl self-start lg:pt-16">
            <HeroBadge icon={Users}>
              Communities
            </HeroBadge>
            <h1 className="text-5xl font-black leading-[0.96] tracking-normal text-white sm:text-7xl lg:text-[5.4rem]">
              Find Your
              <br />
              <span className="text-[#b9ff22]">Sideline</span>
            </h1>
            <p className="mt-6 text-xl font-black text-white">
              Every fan belongs somewhere.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
              Your team. Your people. Your reactions on every drive, every
              bucket, every round. Sideline communities are game-day rooms
              built for belonging — not betting, not another endless group chat.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/waitlist"
                className="motion-action group inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#b9ff22] px-8 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-[#d0ff53]"
              >
                Join as a Founding Member
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
              <Link
                href="/compete"
                className="motion-action motion-action-dark group inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-[#b9ff22]/45 bg-white/[0.02] px-8 text-sm font-bold text-white transition hover:border-[#b9ff22] hover:bg-[#b9ff22]/5"
              >
                See Fans Compete
                <ArrowRight className="size-5 text-[#b9ff22] transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 py-4">
              {[
                ["Live", "Game rooms"],
                ["Ranked", "Community play"],
                ["Private", "Member spaces"],
              ].map(([value, label]) => (
                <div className="border-r border-white/10 px-4 first:pl-0 last:border-0" key={label}>
                  <strong className="block text-lg font-black text-[#b9ff22]">{value}</strong>
                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-600">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <CommunityDashboard />
          </div>
        </section>

        <section id="community" className="relative mt-8 border-b border-white/10 py-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b9ff22] to-transparent" />
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              One home for every kind of fan
            </span>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              More Than A Group Chat
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              A home for your people — live reactions, shared picks, creator
              rooms, and the familiar faces you want beside you on game day.
              Built around communities, not gambling.
            </p>
          </div>
          <CommunityPreview />
        </section>

        <section className="grid gap-6 border-b border-white/10 py-8 lg:grid-cols-[220px_1fr]">
          <h2 className="text-3xl font-black leading-tight text-white">
            Why
            <br />
            <span className="text-[#b9ff22]">Communities?</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {whyItems.map(([title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-[#b9ff22]/25 bg-[radial-gradient(circle_at_50%_0%,rgba(185,255,34,0.12),rgba(255,255,255,0.025)_52%,rgba(255,255,255,0.015)_100%)] p-5 text-center shadow-[0_0_34px_rgba(185,255,34,0.1)] sm:p-7"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#b9ff22] text-sm font-black text-[#b9ff22]">
                  {title.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative left-1/2 min-h-0 w-screen -translate-x-1/2 overflow-hidden border-b border-white/10 py-12 lg:min-h-[500px]">
          <div
            className="pointer-events-none absolute bottom-0 left-[12vw] top-0 hidden w-[58vw] max-w-[1120px] lg:block"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 82%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 82%, transparent 100%)",
            }}
          >
            <div
              className="relative h-full w-full"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 22%, black 72%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 22%, black 72%, transparent 100%)",
              }}
            >
              <Image
                src="/assets/communities-sports-overlay-v4.png"
                alt="Anonymous athletes from several sports surrounded by Sideline neon energy"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain object-left opacity-95 mix-blend-screen"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-[-12%] left-[40%] z-[1] w-[26%] bg-[linear-gradient(90deg,transparent_0%,rgba(2,3,5,0.5)_38%,rgba(2,3,5,0.68)_58%,transparent_100%)] blur-2xl" />
          <div className="relative z-10 mx-auto grid max-w-[1480px] items-center gap-6 px-5 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:px-14">
            <div className="hidden min-h-[300px] lg:block" aria-hidden="true" />
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-wide text-[#b9ff22]">
                Built For Every Fan
              </p>
              <h2 className="text-5xl font-black leading-none text-white">
                Built For
                <br />
                <span className="text-[#b9ff22]">Every Fan</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
                Whether you are a die-hard football fan, an MMA enthusiast, a
                fantasy sports addict, or someone who simply loves sports
                conversations, there is a place for you on Sideline.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {fanTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-white/12 bg-white/[0.045] px-5 py-2 text-sm font-semibold text-zinc-200"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-8">
          <h2 className="mb-7 text-center text-3xl font-black text-white">
            Community <span className="text-[#b9ff22]">Features</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
            {featureItems.map(([title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-[#b9ff22]/20 bg-[radial-gradient(circle_at_50%_0%,rgba(185,255,34,0.08),rgba(255,255,255,0.025)_60%,rgba(255,255,255,0.015)_100%)] p-5 text-center shadow-[0_0_24px_rgba(185,255,34,0.06)] sm:p-6"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#b9ff22]/40 text-xs font-black text-[#b9ff22]">
                  {title.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-sm font-black text-white">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-400">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="py-6 lg:py-8">
          <FoundingValueStrip />
        </div>

        <StadiumCta
          body="Join the waitlist and be among the first fans to discover communities built around the teams, creators, and sports you care about."
          buttonLabel="Join as a Founding Member"
          eyebrow="Find your people"
          title="Ready to find your community?"
        />

      </div>
    </main>
  );
}
