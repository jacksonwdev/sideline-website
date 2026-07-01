import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  CircleDollarSign,
  Crown,
  ShieldCheck,
  Share2,
  UserCog,
  UserPlus,
  Users,
} from "lucide-react";
import { FoundingValueStrip } from "../components/FoundingValueStrip";
import { HeroBadge } from "../components/HeroBadge";
import { SiteHeader } from "../components/SiteHeader";
import { StadiumCta } from "../components/StadiumCta";

export const metadata: Metadata = {
  title: "Creators | Sideline",
  description:
    "Build a home for your fans on Sideline — premium spaces, direct relationships, and early access to creator tools.",
  alternates: {
    canonical: "/creators",
  },
};

const creatorBenefits = [
  ["community", "Own the community", "Create channels, prediction rooms, and premium spaces for your audience."],
  ["money", "Build premium spaces", "Offer members-only rooms and creator-led experiences — when tools launch."],
  ["bolt", "Keep fans engaged", "Give your audience a place to compete, talk, and participate every day."],
  ["chart", "See what resonates", "Understand what your community cares about through built-in tools."],
];

const communityTools = [
  "Free and premium channels",
  "Prediction rooms",
  "Game-day threads",
  "Leaderboards and competitions",
  "Admins and moderators",
  "Exclusive creator posts",
];

const earnItems = [
  ["1", "Premium Communities", "Create members-only spaces for the fans who want more from you."],
  ["2", "Direct Relationships", "Build closer ties with your audience — not a one-way feed."],
  ["3", "Creator Tools Early", "Get access to creator features before they open to everyone."],
];

const teamRoles = [
  ["You (Owner)", "50%"],
  ["Co-Host", "20%"],
  ["Analyst", "20%"],
  ["Moderator", "10%"],
];

const activityItems = [
  ["New Subscriber", "Premium", "Just now"],
  ["Referral Conversion", "Referral", "Today"],
  ["Premium Upgrade", "Upgrade", "Today"],
  ["New Member", "Joined", "Today"],
];

function CreatorBenefitIcon({ type }: Readonly<{ type: string }>) {
  if (type === "community") {
    return (
      <div className="relative h-8 w-9">
        <span className="absolute left-3 top-0 h-4 w-4 rounded-full bg-[#b9ff22]" />
        <span className="absolute bottom-0 left-1 h-4 w-7 rounded-t-full bg-[#b9ff22]" />
        <span className="absolute right-0 top-2 h-3 w-3 rounded-full bg-[#b9ff22]/75" />
        <span className="absolute bottom-0 right-[-2px] h-3 w-5 rounded-t-full bg-[#b9ff22]/75" />
      </div>
    );
  }

  if (type === "bolt") {
    return (
      <div className="h-9 w-6 skew-x-[-10deg] bg-[#b9ff22] [clip-path:polygon(52%_0,100%_0,65%_42%,100%_42%,32%_100%,48%_55%,0_55%)]" />
    );
  }

  if (type === "chart") {
    return (
      <svg
        viewBox="0 0 44 36"
        className="h-9 w-11"
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M3 31V5M3 31H41"
          stroke="#b9ff22"
          strokeLinecap="round"
          strokeWidth="2"
          opacity="0.45"
        />
        <path
          d="M6 27L14 21L21 24L29 13L37 7"
          stroke="#b9ff22"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <circle cx="14" cy="21" r="2.5" fill="#b9ff22" />
        <circle cx="29" cy="13" r="2.5" fill="#b9ff22" />
        <circle cx="37" cy="7" r="3" fill="#b9ff22" />
      </svg>
    );
  }

  return <span className="text-4xl font-black leading-none text-[#b9ff22]">$</span>;
}

function EarningsCategoryIcon({ number }: Readonly<{ number: string }>) {
  if (number === "1") {
    return (
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-11"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <rect x="5" y="10" width="38" height="30" rx="7" />
        <path d="M5 19h38" />
        <path d="M15 6v8M33 6v8" />
        <path d="M11 25h12M11 31h9" opacity="0.72" />
        <path
          d="M33.5 25.5l1.45 2.95 3.25.47-2.35 2.3.56 3.23-2.91-1.53-2.9 1.53.55-3.23-2.35-2.3 3.25-.47 1.45-2.95z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  if (number === "2") {
    return <UserPlus className="h-9 w-9" strokeWidth={2.2} />;
  }

  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <CircleDollarSign className="h-9 w-9" strokeWidth={2.35} />
      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#182708] text-[#b9ff22] ring-2 ring-[#182708]">
        <Share2 className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    </div>
  );
}

function TeamRoleIcon({ role }: Readonly<{ role: string }>) {
  const iconClass = "h-4 w-4";

  if (role === "Owner") {
    return <Crown className={iconClass} strokeWidth={2.2} />;
  }
  if (role === "Co-Hosts" || role === "Co-Host") {
    return <Users className={iconClass} strokeWidth={2.2} />;
  }
  if (role === "Analysts" || role === "Analyst") {
    return <ChartNoAxesColumnIncreasing className={iconClass} strokeWidth={2.2} />;
  }
  if (role === "Moderators" || role === "Moderator") {
    return <ShieldCheck className={iconClass} strokeWidth={2.2} />;
  }
  return <UserCog className={iconClass} strokeWidth={2.2} />;
}

function CreatorCommandCenter() {
  const metrics = [
    ["Your community", "Active fans"],
    ["Premium tiers", "Member spaces"],
    ["Creator tools", "Coming soon"],
  ];

  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="absolute -inset-16 bg-[#b9ff22]/10 blur-[90px]" />
      <div className="absolute -right-5 -top-5 h-28 w-48 border-r border-t border-[#b9ff22]/30" />
      <div className="absolute -bottom-5 -left-5 h-24 w-40 border-b border-l border-[#b9ff22]/20" />

      <div className="relative overflow-hidden rounded-lg border border-[#b9ff22]/30 bg-[linear-gradient(145deg,rgba(15,19,13,.98),rgba(4,6,7,.98)_42%)] shadow-[0_32px_100px_rgba(0,0,0,.68),0_0_55px_rgba(185,255,34,.1)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b9ff22] to-transparent" />

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md border border-[#b9ff22]/35 bg-[#b9ff22]/10 text-[#b9ff22]">
              <Crown className="size-5" />
            </span>
            <div>
              <p className="text-sm font-black sm:text-base">Creator Command Center</p>
              <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                <span className="size-1.5 rounded-full bg-[#b9ff22] shadow-[0_0_8px_#b9ff22]" />
                Coach D&apos;s Community
              </span>
            </div>
          </div>
          <span className="hidden rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] font-black text-zinc-300 sm:block">
            Preview
          </span>
        </div>

        <div className="grid gap-3 border-b border-white/8 p-4 sm:grid-cols-3 sm:p-5">
          {metrics.map(([label, value], index) => (
            <div
              className={`rounded-lg border p-4 ${
                index === 2
                  ? "border-[#b9ff22]/35 bg-[#b9ff22]/10"
                  : "border-white/10 bg-white/[0.025]"
              }`}
              key={label}
            >
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">
                {label}
              </p>
              <div className="mt-2 flex items-end justify-between gap-2">
                <strong className="text-lg font-black text-white sm:text-xl">{value}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="grid min-h-[300px] gap-3 p-4 sm:p-5 lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/25 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
                  Community activity
                </p>
                <h3 className="mt-2 text-lg font-black">Sample activity</h3>
              </div>
              <span className="rounded-md bg-[#b9ff22]/10 px-2.5 py-1.5 text-[10px] font-black text-[#b9ff22]">
                30 days
              </span>
            </div>

            <div className="relative mt-7 h-36">
              <div className="absolute inset-0 grid grid-rows-4">
                {[0, 1, 2, 3].map((line) => (
                  <span className="border-t border-white/[0.06]" key={line} />
                ))}
              </div>
              <svg
                aria-label="Engagement growth chart"
                className="absolute inset-0 h-full w-full overflow-visible"
                preserveAspectRatio="none"
                role="img"
                viewBox="0 0 420 140"
              >
                <defs>
                  <linearGradient id="creator-chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#b9ff22" stopOpacity=".24" />
                    <stop offset="100%" stopColor="#b9ff22" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 120 L35 105 L70 112 L105 78 L140 91 L175 68 L210 74 L245 43 L280 56 L315 28 L350 42 L385 15 L420 5 L420 140 L0 140 Z"
                  fill="url(#creator-chart-fill)"
                />
                <path
                  d="M0 120 L35 105 L70 112 L105 78 L140 91 L175 68 L210 74 L245 43 L280 56 L315 28 L350 42 L385 15 L420 5"
                  fill="none"
                  stroke="#b9ff22"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-4 text-xs">
              <span className="text-zinc-500">Weekly active fans</span>
              <strong className="text-white">Track engagement</strong>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
              <div className="flex items-center justify-between">
                <span className="grid size-9 place-items-center rounded-md bg-[#b9ff22]/10 text-[#b9ff22]">
                  <CircleDollarSign className="size-5" />
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.14em] text-zinc-600">
                  This month
                </span>
              </div>
              <p className="mt-5 text-[10px] font-bold text-zinc-500">Premium spaces</p>
              <p className="mt-1 text-xl font-black">Your dashboard</p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
                <div className="h-full w-[76%] bg-[#b9ff22]" />
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-600">
                Live community
              </p>
              <div className="mt-4 space-y-3">
                {[
                  ["Premium joined", "New"],
                  ["Referral converted", "New"],
                  ["New member", "Live"],
                ].map(([label, value], index) => (
                  <div className="flex items-center gap-3" key={label}>
                    <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#b9ff22]/25 bg-[#b9ff22]/8 text-[8px] font-black text-[#b9ff22]">
                      {index === 0 ? "PR" : index === 1 ? "RF" : "NM"}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[11px] font-bold text-zinc-300">
                      {label}
                    </span>
                    <span className="text-[10px] font-black text-[#b9ff22]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-white/8 bg-black/20">
          {[
            [Users, "Members"],
            [Share2, "Referrals"],
            [ChartNoAxesColumnIncreasing, "Analytics"],
          ].map(([Icon, label]) => {
            const ToolIcon = Icon as typeof Users;
            return (
              <div
                className="flex items-center justify-center gap-2 border-r border-white/8 px-3 py-3 text-[10px] font-black text-zinc-500 last:border-0"
                key={label as string}
              >
                <ToolIcon className="size-3.5 text-[#b9ff22]" />
                <span className="hidden sm:inline">{label as string}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function CreatorsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(185,255,34,0.15),transparent_28%),radial-gradient(circle_at_20%_58%,rgba(185,255,34,0.075),transparent_24%)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader active="Creators" />

        <section className="relative left-1/2 min-h-0 w-screen -translate-x-1/2 overflow-hidden border-b border-white/10 bg-[#050708] lg:min-h-[720px]">
          <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_76%_34%,rgba(185,255,34,0.15),transparent_44%),radial-gradient(circle_at_12%_84%,rgba(185,255,34,0.05),transparent_40%)] lg:block" />
          <div className="pointer-events-none absolute inset-0 hidden opacity-[0.16] [background-image:linear-gradient(rgba(185,255,34,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(185,255,34,0.06)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(circle_at_72%_38%,black,transparent_72%)] lg:block" />
          <div className="absolute right-[5%] top-14 hidden size-72 rounded-full border border-[#b9ff22]/8 lg:block" />
          <div className="absolute right-[12%] top-28 hidden size-44 rounded-full border border-[#b9ff22]/10 lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070a0b]/55 to-transparent" />
          <div className="relative z-10 mx-auto grid min-h-0 w-full max-w-[1480px] items-center gap-12 px-5 py-14 sm:px-8 lg:min-h-[720px] lg:grid-cols-[0.8fr_1.2fr] lg:px-14 lg:py-0">
          <div className="motion-enter max-w-3xl self-start lg:pt-16">
            <HeroBadge icon={UserPlus}>
              Creators
            </HeroBadge>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.01] text-white sm:text-6xl lg:text-[4.7rem]">
              Build your community.
              <br />
              <span className="text-[#b9ff22]">Own the relationship.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
              Build a home for your fans — game-day rooms, premium spaces, and
              direct relationships. Access creator tools early and grow alongside
              the platform.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/waitlist"
                className="motion-action group inline-flex h-14 items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-[#b9ff22] px-6 text-sm font-black text-black shadow-[0_0_36px_rgba(185,255,34,0.28)] transition hover:-translate-y-0.5 hover:bg-[#d0ff53]"
              >
                Join as a Founding Member
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
              <Link
                href="/communities"
                className="motion-action motion-action-dark group inline-flex h-14 items-center justify-center gap-3 whitespace-nowrap rounded-lg border border-white/30 bg-black/25 px-6 text-sm font-bold text-white transition hover:border-[#b9ff22]/70 hover:bg-[#b9ff22]/5"
              >
                Explore Creator Communities
                <ArrowRight className="size-5 text-[#b9ff22] transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            </div>
          </div>
          <div className="motion-enter-late hidden min-w-0 lg:block">
            <CreatorCommandCenter />
          </div>
          </div>
        </section>

        <section className="relative z-10 mt-6 rounded-lg border border-white/10 bg-[#07090b]/95 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:mt-8 sm:p-9">
          <h2 className="mb-5 text-2xl font-black text-white sm:mb-7 sm:text-3xl">
            Why Creators Use Sideline
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {creatorBenefits.map(([icon, title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(185,255,34,0.18),rgba(255,255,255,0.035)_44%,rgba(255,255,255,0.012)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.25)] sm:min-h-[220px] sm:p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#b9ff22]/35 bg-[#b9ff22]/16 shadow-[0_0_28px_rgba(185,255,34,0.18)] sm:mb-7 sm:h-16 sm:w-16">
                  <CreatorBenefitIcon type={icon} />
                </div>
                <h3 className="text-base font-black text-white sm:text-lg">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-300 sm:mt-3 sm:text-sm sm:leading-6">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-lg border border-[#b9ff22]/25 bg-[radial-gradient(circle_at_15%_0%,rgba(185,255,34,0.12),rgba(7,9,11,0.96)_46%)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.3)] sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
                Built for creators, not against them
              </span>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Why Sideline Is Creator Friendly
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-300 sm:text-base">
                Most platforms own the audience. Sideline is designed to help
                creators build deeper relationships with their communities
                instead of competing for attention in someone else&apos;s feed.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  Icon: ShieldCheck,
                  title: "You control your community",
                  body: "Your space, your rules, your members — not an algorithm's.",
                },
                {
                  Icon: Users,
                  title: "Direct relationships",
                  body: "Talk to your fans directly instead of fighting for reach.",
                },
                {
                  Icon: UserPlus,
                  title: "Grow alongside fans",
                  body: "Build something lasting as your community grows with you.",
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-white/[0.025] p-5"
                >
                  <span className="grid size-11 place-items-center rounded-lg border border-[#b9ff22]/30 bg-[#b9ff22]/8 text-[#b9ff22]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-black text-white">{title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-zinc-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="grid gap-6 py-6 sm:gap-3 sm:py-4 lg:grid-cols-[0.98fr_1.02fr]"
        >
          <article className="relative min-h-0 overflow-hidden rounded-lg border border-white/10 border-l-[#b9ff22]/55 bg-[#07090b]/95 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.3),inset_3px_0_20px_rgba(185,255,34,0.04)] sm:p-8 lg:min-h-[460px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(185,255,34,0.22),transparent_34%),linear-gradient(115deg,transparent_0%,transparent_44%,rgba(185,255,34,0.07)_100%)]" />
            <div className="absolute right-[-70px] top-[-110px] h-72 w-72 rounded-full border border-[#b9ff22]/15" />
            <div className="absolute right-[-20px] top-[-80px] h-56 w-56 rounded-full border border-[#b9ff22]/10" />
            <div className="relative z-10 grid h-full gap-7 lg:grid-cols-[0.98fr_0.82fr]">
              <div className="max-w-[430px] self-center">
                <p className="mb-4 inline-flex rounded-full border border-[#b9ff22]/30 bg-[#b9ff22]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#b9ff22]">
                  All-in-one creator hub
                </p>
                <h2 className="text-3xl font-black text-white">Creator Communities</h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-300">
                  Everything you need to build, manage, and grow a thriving sports
                  community.
                </p>
                <div className="mt-7 space-y-3">
                  {communityTools.map((tool) => (
                    <div key={tool} className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b9ff22]">
                        <span className="h-2 w-3 rotate-[-45deg] border-b-2 border-l-2 border-black" />
                      </span>
                      {tool}
                    </div>
                  ))}
                </div>
                <div className="mt-7 grid max-w-sm grid-cols-3 gap-2">
                  {[
                    ["24/7", "Fan chat"],
                    ["Live", "Predictions"],
                    ["Paid", "Channels"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3"
                    >
                      <p className="text-sm font-black text-[#b9ff22]">{value}</p>
                      <p className="mt-1 text-[10px] font-semibold text-zinc-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden min-h-[390px] lg:block">
                <div className="absolute bottom-[-70px] left-1/2 w-[210px] -translate-x-1/2 xl:w-[228px]">
                  <div className="absolute -inset-10 rounded-[3rem] bg-[#b9ff22]/18 blur-3xl" />
                  <div className="absolute inset-x-5 bottom-[-10px] h-8 rounded-full bg-[#b9ff22]/30 blur-xl" />
                  <div className="relative rounded-[2rem] border border-white/20 border-b-[#b9ff22]/55 bg-black p-2 shadow-[0_30px_70px_rgba(0,0,0,0.72),0_0_35px_rgba(185,255,34,0.12)]">
                    <div className="absolute left-1/2 top-3 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black/80" />
                    <div className="relative aspect-[9/16] overflow-hidden rounded-[1.55rem] bg-[#050607]">
                      <div className="relative h-[27%] overflow-hidden border-b border-white/10">
                        <Image
                          src="/assets/creators-cta-crowd-v1.png"
                          alt=""
                          fill
                          sizes="230px"
                          className="object-cover object-[68%_center] opacity-65"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-black/30 to-black/15" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-end gap-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b9ff22] bg-black/75 text-xs font-black text-[#b9ff22]">
                            CD
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[10px] font-black text-white">
                              Coach D&apos;s Community
                            </p>
                            <p className="text-[8px] text-zinc-400">Sports community</p>
                          </div>
                          <div className="rounded-full border border-[#b9ff22]/35 bg-[#b9ff22]/12 px-2 py-1 text-[7px] font-black text-[#b9ff22]">
                            LIVE
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 border-b border-white/10 px-3 text-center text-[8px] font-bold text-zinc-500">
                        <span className="border-b-2 border-[#b9ff22] py-2 text-[#b9ff22]">Channels</span>
                        <span className="py-2">Predictions</span>
                        <span className="py-2">Leaderboard</span>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 px-3 pt-3">
                        {[
                          ["24/7", "Chat"],
                          ["Live", "Picks"],
                          ["Top", "Rank"],
                        ].map(([value, label]) => (
                          <div key={label} className="rounded-md border border-white/8 bg-white/[0.035] px-2 py-1.5">
                            <p className="text-[9px] font-black text-[#b9ff22]">{value}</p>
                            <p className="text-[7px] font-bold text-zinc-500">{label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2 p-3">
                        <div className="rounded-lg border border-[#b9ff22]/25 bg-[#b9ff22]/8 p-2.5">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-[8px] font-black text-[#b9ff22]">Prediction Room</span>
                            <span className="text-[7px] font-black text-zinc-500">Open</span>
                          </div>
                          <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                            <div className="h-2 rounded-full bg-white/10">
                              <div className="h-full w-[72%] rounded-full bg-[#b9ff22]" />
                            </div>
                            <span className="text-[8px] font-black text-[#b9ff22]">Live</span>
                          </div>
                        </div>
                        {[
                          { tag: "CHAT", label: "Game Day Chat", status: "Live", locked: false },
                          { tag: "TOP", label: "Weekly Leaderboard", status: "Ranked", locked: false },
                          { tag: "VIP", label: "Premium Picks", status: "Paid", locked: true },
                          { tag: "MOD", label: "Admin Tools", status: "Mods", locked: false },
                          { tag: "POST", label: "Creator Post Drop", status: "New", locked: true },
                        ].map(({ tag, label, status, locked }) => (
                          <div
                            key={label}
                            className={`grid grid-cols-[32px_1fr_auto] items-center gap-2 rounded-lg border px-2.5 py-2 ${
                              locked
                                ? "border-[#b9ff22]/28 bg-[#b9ff22]/8"
                                : "border-white/8 bg-white/[0.035]"
                            }`}
                          >
                            <span className="text-[7px] font-black text-[#b9ff22]">{tag}</span>
                            <span className="truncate text-[8px] font-bold text-zinc-200">{label}</span>
                            <span className="text-[7px] font-black text-zinc-500">{status}</span>
                          </div>
                        ))}
                      </div>

                      <div className="absolute inset-x-3 bottom-3 grid grid-cols-4 rounded-xl border border-white/10 bg-black/85 px-2 py-2 text-center text-[7px] font-bold text-zinc-500">
                        <span className="text-[#b9ff22]">Home</span>
                        <span>Compete</span>
                        <span>Create</span>
                        <span>Profile</span>
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-[1.55rem] bg-[linear-gradient(110deg,rgba(255,255,255,0.12),transparent_18%,transparent_76%,rgba(255,255,255,0.06))]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07090b]/95 p-8 shadow-[0_22px_70px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_8%,rgba(185,255,34,0.12),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.035),transparent_42%)]" />
            <div className="relative z-10 mb-6">
              <div>
                <h2 className="text-3xl font-black text-white">Creator Monetization Options</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                  Monetization tools for creators who build engaged communities —
                  premium access, referrals, and early creator features.
                </p>
              </div>
            </div>
            <div className="relative z-10 space-y-4">
              {earnItems.map(([number, title, body]) => (
                <div
                  key={title}
                  className="grid grid-cols-[64px_1fr] items-center gap-4 rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(8,11,14,0.97))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:grid-cols-[64px_1fr_210px]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#b9ff22]/30 bg-[#b9ff22]/10 text-3xl font-black text-[#b9ff22]">
                    {number}
                  </div>
                  <div>
                    <h3 className="font-black text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-5 text-zinc-300">{body}</p>
                  </div>
                  <div className="hidden items-center justify-end gap-3 sm:flex">
                    <div className="flex min-w-[202px] items-center gap-4 rounded-xl border border-[#b9ff22]/30 bg-[radial-gradient(circle_at_20%_50%,rgba(185,255,34,0.12),rgba(185,255,34,0.05)_42%,transparent_75%)] px-4 py-3 text-[#b9ff22] shadow-[0_0_24px_rgba(185,255,34,0.06)]">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-[#b9ff22]/20 bg-[#b9ff22]/10 shadow-[0_0_22px_rgba(185,255,34,0.1)]">
                        <EarningsCategoryIcon number={number} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
                          {number === "1" ? "Premium" : number === "2" ? "Community" : "Tools"}
                        </p>
                        <p className="mt-1 text-base font-black text-[#b9ff22]">
                          {number === "1" ? "Premium" : number === "2" ? "Referrals" : "Share"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="grid gap-3 rounded-lg border border-[#b9ff22]/60 bg-[#b9ff22]/10 p-5 shadow-[0_0_24px_rgba(185,255,34,0.1)] sm:grid-cols-[52px_1fr]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#b9ff22] text-2xl font-black text-black">
                  *
                </div>
                <div>
                  <h3 className="font-black text-[#b9ff22]">Early creator access</h3>
                  <p className="mt-1 text-sm font-semibold leading-6 text-zinc-200">
                    Founding creators get early access to tools and a direct
                    line to the team while we&apos;re building.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="grid gap-6 py-6 sm:gap-3 sm:py-4 lg:grid-cols-[0.82fr_0.55fr_0.55fr]">
          <article className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07090b]/95 p-8 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_70%,rgba(185,255,34,0.1),transparent_34%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-white">Built for Creator Teams</h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-300">
                Add your team, assign roles, and collaborate with co-hosts,
                analysts, and moderators in one community.
              </p>
            </div>
            <div className="relative z-10 mt-7 grid max-w-[620px] gap-3 sm:grid-cols-3">
              {["Owner", "Co-Hosts", "Analysts", "Moderators", "Community Managers"].map(
                (role, index) => (
                  <div
                    key={role}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-xs font-black ${
                      index === 0
                        ? "border-[#b9ff22]/45 bg-[#b9ff22]/10 text-[#b9ff22]"
                        : "border-white/10 bg-black/35 text-zinc-200"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        index === 0 ? "bg-[#b9ff22]/15" : "bg-white/[0.04]"
                      }`}
                    >
                      <TeamRoleIcon role={role} />
                    </span>
                    {role}
                  </div>
                ),
              )}
            </div>
            <div className="relative z-10 mt-8 flex max-w-[620px] items-center gap-3 rounded-lg border border-[#b9ff22]/30 bg-[#b9ff22]/8 px-4 py-3 text-[#b9ff22] shadow-[0_0_24px_rgba(185,255,34,0.08)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#b9ff22]/12">
                <Share2 className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
                  Shared roles
                </p>
                <p className="mt-1 text-sm font-black text-[#b9ff22]">
                  Collaborate with your team
                </p>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-lg border border-white/10 bg-[#07090b]/95 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-white">Example team roles</h3>
                <p className="mt-1 text-[10px] font-semibold text-zinc-500">Sample layout</p>
              </div>
              <span className="rounded-full border border-[#b9ff22]/25 bg-[#b9ff22]/8 px-3 py-1 text-[10px] font-black text-[#b9ff22]">
                100% assigned
              </span>
            </div>
            <div className="space-y-3">
              {teamRoles.map(([role, percent], index) => (
                <div
                  key={role}
                  className="rounded-lg border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-3"
                >
                  <div className="mb-2 grid grid-cols-[34px_1fr_auto] items-center gap-3 text-xs">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                        index === 0
                          ? "bg-[#b9ff22]/14 text-[#b9ff22]"
                          : "bg-white/[0.045] text-zinc-400"
                      }`}
                    >
                      <TeamRoleIcon role={role === "You (Owner)" ? "Owner" : role} />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-200">{role}</p>
                      <p className="mt-0.5 text-[9px] text-zinc-500">
                        {["Primary account", "Content partner", "Insights", "Community safety"][index]}
                      </p>
                    </div>
                    <span className="font-black text-[#b9ff22]">{percent}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#83c900] to-[#b9ff22] shadow-[0_0_12px_rgba(185,255,34,0.3)]"
                      style={{ width: percent }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-5">
              <div className="grid grid-cols-2 gap-2 rounded-lg border border-white/8 bg-black/25 p-3">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-wide text-zinc-500">Your team</p>
                  <p className="mt-1 text-sm font-black text-white">Add roles</p>
                </div>
                <div className="border-l border-white/10 pl-3">
                  <p className="text-[9px] font-black uppercase tracking-wide text-zinc-500">Payouts</p>
                  <p className="mt-1 text-sm font-black text-[#b9ff22]">Automatic</p>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-lg border border-white/10 bg-[#07090b]/95 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-white">Recent Activity</h3>
                <p className="mt-1 text-[10px] font-semibold text-zinc-500">Sample activity feed</p>
              </div>
              <span className="flex items-center gap-2 text-[10px] font-black text-[#b9ff22]">
                <span className="h-2 w-2 rounded-full bg-[#b9ff22] shadow-[0_0_10px_rgba(185,255,34,0.8)]" />
                Preview
              </span>
            </div>
            <div className="space-y-2">
              {activityItems.map(([label, amount, time], index) => (
                <div
                  key={`${label}-${time}`}
                  className="grid grid-cols-[36px_1fr_auto] items-center gap-3 rounded-lg border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-3 text-xs"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b9ff22]/10 text-[#b9ff22]">
                    {index === 1 ? (
                      <UserPlus className="h-4 w-4" strokeWidth={2.2} />
                    ) : index === 2 ? (
                      <Crown className="h-4 w-4" strokeWidth={2.2} />
                    ) : (
                      <CircleDollarSign className="h-4 w-4" strokeWidth={2.2} />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-200">{label}</p>
                    <p className="mt-0.5 text-[10px] text-zinc-500">{time}</p>
                  </div>
                  <span className="font-black text-[#b9ff22]">{amount}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-5">
              <div className="rounded-lg border border-[#b9ff22]/20 bg-[#b9ff22]/7 p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-wide text-zinc-500">
                      Earnings dashboard
                    </p>
                    <p className="mt-1 text-base font-black text-white">Sample dashboard</p>
                  </div>
                  <ChartNoAxesColumnIncreasing className="size-5 text-[#b9ff22]" />
                </div>
                <div className="mt-3 flex h-8 items-end gap-1">
                  {[35, 48, 42, 63, 55, 76, 68, 92].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="flex-1 rounded-t-sm bg-[#b9ff22]"
                      style={{ height: `${height}%`, opacity: 0.35 + index * 0.08 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>

        <div className="py-6 lg:py-8">
          <FoundingValueStrip />
        </div>

        <div id="apply">
          <StadiumCta
            body="Sideline is just getting started. Apply for early access and help shape the future of creator-led sports communities."
            buttonLabel="Join as a Founding Member"
            eyebrow="Build with us"
            title="Ready to bring your fans to the Sideline?"
          />
        </div>
      </div>
    </main>
  );
}
