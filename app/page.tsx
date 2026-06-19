import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AtSign,
  ChevronRight,
  Crown,
  Eye,
  Heart,
  House,
  MessageCircle,
  Radio,
  Rocket,
  ShieldCheck,
  ShieldOff,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { HeroBadge } from "./components/HeroBadge";
import { SiteHeader } from "./components/SiteHeader";
import { StadiumCta } from "./components/StadiumCta";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const pillars = [
  {
    Icon: Users,
    title: "Communities",
    body: "Join private rooms for every team, sport, and slate.",
  },
  {
    Icon: TrendingUp,
    title: "Predictions",
    body: "Post picks, track your record, build a reputation.",
  },
  {
    Icon: Sparkles,
    title: "Creators",
    body: "Follow analysts and unlock premium creator feeds.",
  },
  {
    Icon: Trophy,
    title: "Competition",
    body: "Climb leaderboards with transparent win rates.",
  },
];

const stats = [
  ["4-in-1", "Communities, creators, picks, competition"],
  ["24/7", "Always-on game-day rooms"],
  ["Free", "To join and start competing"],
  ["Founding", "Early access + member status"],
];

const howItWorks = [
  {
    step: "01",
    Icon: Users,
    title: "Join your communities",
    body: "Find rooms for the teams, sports, and creators you already follow.",
  },
  {
    step: "02",
    Icon: TrendingUp,
    title: "Make your predictions",
    body: "Lock in picks before every game and put your takes on record.",
  },
  {
    step: "03",
    Icon: Trophy,
    title: "Climb the leaderboards",
    body: "Build streaks, track accuracy, and earn your spot at the top.",
  },
  {
    step: "04",
    Icon: Crown,
    title: "Unlock premium access",
    body: "Subscribe to creator communities for exclusive feeds and drops.",
  },
];

const featuredCommunities = [
  { tag: "NFL", name: "Fourth Down Society", note: "Game-day film & live threads" },
  { tag: "NBA", name: "Hardwood Hub", note: "Nightly hoops talk & hot takes" },
  { tag: "MMA", name: "Octagon Insiders", note: "Fight-night breakdowns & picks" },
  { tag: "SOC", name: "Stoppage Time", note: "Matchday threads for every club" },
];

const livePredictions = [
  { league: "NFL", matchup: "Chiefs vs Bills", left: "KC", right: "BUF", leftPct: 68 },
  { league: "NBA", matchup: "Lakers vs Celtics", left: "LAL", right: "BOS", leftPct: 43 },
  { league: "NHL", matchup: "Rangers vs Bruins", left: "NYR", right: "BOS", leftPct: 56 },
];

const sampleLeaderboard = [
  { rank: 1, label: "Season Leader", note: "Top of the standings" },
  { rank: 2, label: "Rising Predictor", note: "Climbing the ranks" },
  { rank: 3, label: "Streak Holder", note: "On a hot streak" },
  { rank: 4, label: "Community Voice", note: "Active all week" },
  { rank: 5, label: "New Challenger", note: "Just getting started" },
];

const featuredCreators = [
  { initials: "CD", name: "Coach D", sport: "NFL Film & Picks", tier: "Premium" },
  { initials: "AM", name: "Across the Mat", sport: "MMA Breakdown", tier: "Premium" },
  { initials: "HQ", name: "Hoops IQ", sport: "NBA Analytics", tier: "Free + Paid" },
];

const foundingPerks = [
  {
    Icon: AtSign,
    title: "Claim your identity",
    body: "Reserve the username you want before anyone else can.",
  },
  {
    Icon: Star,
    title: "Founding member status",
    body: "A permanent badge that only early members can earn.",
  },
  {
    Icon: Users,
    title: "Early community access",
    body: "Step into rooms before they open to the public.",
  },
  {
    Icon: Rocket,
    title: "Shape the platform",
    body: "Your feedback decides what we ship first.",
  },
  {
    Icon: ShieldCheck,
    title: "Creator priority",
    body: "Front-of-line review when creator tools open.",
  },
];

const commitments = [
  {
    Icon: Eye,
    title: "Built in public",
    body: "We share what we're building and ship in the open with early members.",
  },
  {
    Icon: MessageCircle,
    title: "Community-first",
    body: "Features come from real fan feedback — not growth-hacking playbooks.",
  },
  {
    Icon: Heart,
    title: "Made by sports fans",
    body: "We're building the home we always wished existed for following the game.",
  },
];

const notList = [
  {
    Icon: ShieldOff,
    label: "Not a sportsbook",
    body: "Skill-based picks only — no betting, odds, or wagers.",
  },
  {
    Icon: ShieldOff,
    label: "Not Discord or Reddit",
    body: "Built for sports — not a chat server or forum thread.",
  },
  {
    Icon: ShieldOff,
    label: "Not Patreon",
    body: "Creators run communities with fans — not a one-way feed.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: Readonly<{
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  center?: boolean;
}>) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-7 text-zinc-400">{copy}</p>
      ) : null}
    </div>
  );
}

function PreviewPill({ children = "Product preview" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-zinc-400">
      <Sparkles className="size-3 text-[#b9ff22]" />
      {children}
    </span>
  );
}

function HeroEcosystem() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="motion-glow pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_46%,rgba(185,255,34,0.2),transparent_62%)] blur-2xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b9ff22]/[0.08]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b9ff22]/[0.06]" />

      <div className="relative aspect-[1/1.06]">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <g stroke="#b9ff22" strokeOpacity="0.28" strokeWidth="0.35">
            <line x1="50" y1="50" x2="26" y2="16" />
            <line x1="50" y1="50" x2="74" y2="16" />
            <line x1="50" y1="50" x2="26" y2="84" />
            <line x1="50" y1="50" x2="74" y2="84" />
          </g>
          <g fill="#b9ff22">
            <circle cx="26" cy="16" r="0.7" />
            <circle cx="74" cy="16" r="0.7" />
            <circle cx="26" cy="84" r="0.7" />
            <circle cx="74" cy="84" r="0.7" />
          </g>
        </svg>

        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="relative grid size-[88px] place-items-center rounded-2xl border border-[#b9ff22]/45 bg-[#0b1104]/95 shadow-[0_0_55px_rgba(185,255,34,0.3)] backdrop-blur-md">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b9ff22] to-transparent" />
            <span
              aria-label="Sideline"
              className="block h-8 w-9 bg-[url('/assets/sideline-logo-transparent.png')] bg-no-repeat"
              role="img"
              style={{ backgroundPosition: "left center", backgroundSize: "210px 34px" }}
            />
          </div>
          <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#b9ff22]/25 bg-[#070a0b]/85 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#b9ff22]">
            One home
          </span>
        </div>

        <article className="absolute left-0 top-0 z-10 w-[47%] rounded-xl border border-white/10 bg-[#0b0f12]/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] font-black text-white">
              <span className="grid size-6 place-items-center rounded-md border border-[#b9ff22]/30 bg-[#b9ff22]/10 text-[#b9ff22]">
                <Users className="size-3.5" />
              </span>
              Communities
            </span>
            <Radio className="size-3 text-[#b9ff22]" />
          </div>
          <p className="mt-2.5 text-[11px] font-bold text-zinc-100">Chiefs vs Bills</p>
          <p className="text-[9px] text-zinc-500">Live game-day room</p>
        </article>

        <article className="absolute right-0 top-0 z-10 w-[47%] rounded-xl border border-white/10 bg-[#0b0f12]/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] font-black text-white">
              <span className="grid size-6 place-items-center rounded-md border border-[#b9ff22]/30 bg-[#b9ff22]/10 text-[#b9ff22]">
                <TrendingUp className="size-3.5" />
              </span>
              Predictions
            </span>
            <Zap className="size-3 fill-[#b9ff22] text-[#b9ff22]" />
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-7 text-[9px] font-bold text-zinc-400">KC</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <span className="block h-full w-[68%] rounded-full bg-[#b9ff22]" />
              </span>
              <span className="text-[9px] font-black text-[#b9ff22]">68%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-7 text-[9px] font-bold text-zinc-400">BUF</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <span className="block h-full w-[32%] rounded-full bg-zinc-600" />
              </span>
              <span className="text-[9px] font-black text-zinc-400">32%</span>
            </div>
          </div>
        </article>

        <article className="absolute bottom-0 left-0 z-10 w-[47%] rounded-xl border border-white/10 bg-[#0b0f12]/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-[11px] font-black text-white">
            <span className="grid size-6 place-items-center rounded-md border border-[#b9ff22]/30 bg-[#b9ff22]/10 text-[#b9ff22]">
              <Sparkles className="size-3.5" />
            </span>
            Creators
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#b9ff22]/40 bg-[radial-gradient(circle_at_35%_25%,#344b10,#101703_70%)] text-[9px] font-black text-[#b9ff22]">
              CD
            </span>
            <div className="min-w-0">
              <p className="flex items-center gap-1 text-[10px] font-black text-white">
                Coach D
                <ShieldCheck className="size-2.5 text-[#b9ff22]" />
              </p>
              <p className="text-[8px] uppercase tracking-wide text-zinc-500">Premium feed</p>
            </div>
          </div>
        </article>

        <article className="absolute bottom-0 right-0 z-10 w-[47%] rounded-xl border border-white/10 bg-[#0b0f12]/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-[11px] font-black text-white">
            <span className="grid size-6 place-items-center rounded-md border border-[#b9ff22]/30 bg-[#b9ff22]/10 text-[#b9ff22]">
              <Trophy className="size-3.5" />
            </span>
            Competition
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#b9ff22] text-[9px] font-black text-black">
              1
            </span>
            <span className="flex-1 truncate text-[10px] font-bold text-zinc-100">Season Leader</span>
            <Crown className="size-3.5 text-[#b9ff22]" />
          </div>
        </article>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(117,255,95,0.16),transparent_32%),radial-gradient(circle_at_16%_48%,rgba(185,255,34,0.07),transparent_26%)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader active="Home" />

        <section
          id="home"
          className="grid min-h-0 items-center gap-12 py-12 sm:py-14 lg:min-h-[700px] lg:grid-cols-[1.02fr_0.98fr] lg:py-0"
        >
          <div className="motion-enter max-w-2xl self-center lg:pt-8">
            <HeroBadge icon={House}>Communities · Creators · Predictions · Competition</HeroBadge>
            <h1 className="mt-2 text-5xl font-black uppercase leading-[0.96] tracking-normal text-white sm:text-7xl lg:text-[5.4rem] xl:text-[6rem]">
              One place for
              <br />
              the{" "}
              <span className="relative inline-block text-[#b9ff22]">
                whole game
                <span className="absolute -bottom-4 left-0 h-3 w-full rounded-full bg-[#b9ff22] opacity-95 blur-[1px]" />
              </span>
              .
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300 sm:mt-11 sm:text-xl">
              Sideline puts{" "}
              <strong className="font-bold text-white">communities</strong>,{" "}
              <strong className="font-bold text-white">creators</strong>,{" "}
              <strong className="font-bold text-white">predictions</strong>, and{" "}
              <strong className="font-bold text-white">competition</strong> in one
              app — so you stop splitting game day across Discord, Reddit, and
              prediction apps.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {pillars.map(({ Icon, title }) => (
                <span
                  key={title}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-bold text-zinc-200"
                >
                  <Icon className="size-4 text-[#b9ff22]" />
                  {title}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/waitlist"
                className="motion-action group inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#b9ff22] px-8 text-base font-black text-black shadow-[0_0_35px_rgba(185,255,34,0.28)] transition hover:-translate-y-0.5 hover:bg-[#d0ff53]"
              >
                Join the Waitlist
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
              <Link
                href="#how-it-works"
                className="motion-action motion-action-dark group inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[0.03] px-8 text-base font-bold text-white transition hover:border-[#b9ff22]/70 hover:bg-[#b9ff22]/5"
              >
                Learn More
                <ArrowRight className="size-5 text-[#b9ff22] transition-transform group-hover:translate-y-1 group-hover:rotate-90" strokeWidth={3} />
              </Link>
            </div>
          </div>

          <div className="motion-enter-late hidden self-center lg:block">
            <HeroEcosystem />
          </div>
        </section>

        <section className="relative z-10 -mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.42)] lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-[#0b0f12]/90 p-5 backdrop-blur-xl sm:p-6">
              <strong className="block text-2xl font-black text-[#b9ff22] sm:text-3xl">{value}</strong>
              <span className="mt-2 block text-xs font-semibold leading-5 text-zinc-400">{label}</span>
            </div>
          ))}
        </section>

        <section className="py-12 sm:py-16">
          <div className="relative overflow-hidden rounded-2xl border border-[#b9ff22]/25 bg-[radial-gradient(circle_at_12%_0%,rgba(185,255,34,0.12),rgba(11,15,18,0.96)_46%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.4)] sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#b9ff22]/5 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
                  <Crown className="size-4" />
                  Founding member program
                </span>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Why join before launch
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Reserve your username, lock in founding-member status, and help
                  decide what ships first — perks that won&apos;t exist once
                  Sideline opens to everyone.
                </p>
              </div>
              <Link
                href="/waitlist"
                className="motion-action group inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#b9ff22] px-7 text-sm font-black text-black shadow-[0_0_32px_rgba(185,255,34,0.26)] transition hover:-translate-y-0.5 hover:bg-[#d0ff53]"
              >
                Become a founding member
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            </div>
            <div className="relative mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
              {foundingPerks.map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-[#070a0b]/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <span className="grid size-10 place-items-center rounded-lg border border-[#b9ff22]/30 bg-[#b9ff22]/10 text-[#b9ff22]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-3.5 text-sm font-black text-white">{title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-zinc-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 py-12 sm:py-16">
          <SectionHeading
            center
            eyebrow="How it works"
            title="Get in the game in four steps"
            copy="Sideline brings the whole sports experience into one home — so you can go from fan to competitor in minutes."
          />
          <div className="relative mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-px bg-gradient-to-r from-[#b9ff22]/15 via-[#b9ff22]/60 to-[#b9ff22]/15 lg:block" />
            {howItWorks.map(({ step, Icon, title, body }) => (
              <article
                key={step}
                className="relative rounded-2xl border border-white/10 bg-[#0b0f12]/85 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-6"
              >
                <div className="relative z-10 mb-4 flex items-center justify-between sm:mb-5">
                  <span className="grid size-11 place-items-center rounded-full border border-[#b9ff22]/40 bg-[#080b0c] text-[#b9ff22] shadow-[0_0_24px_rgba(185,255,34,0.14)] sm:size-[52px]">
                    <Icon className="size-5 sm:size-6" />
                  </span>
                  <span className="text-2xl font-black text-white/10 sm:text-3xl">{step}</span>
                </div>
                <h3 className="text-base font-black text-white sm:text-lg">{title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-zinc-400 sm:mt-2 sm:text-sm sm:leading-6">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-9 sm:py-10">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f12]/85 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-[#b9ff22]/5 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
                  Why we built Sideline
                </span>
                <h2 className="mt-3 text-2xl font-black leading-snug text-white sm:text-3xl">
                  One game shouldn&apos;t take six apps to follow.
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-zinc-300">
                  Sports fans bounce between Discord, Reddit, podcasts, prediction
                  apps, and creator feeds just to follow one game. Sideline is a
                  sports platform that brings communities, creators, predictions,
                  and competition together — not another chat app, forum, or
                  sportsbook.
                </p>
                <div className="mt-6 flex items-center gap-2.5 text-sm font-bold text-[#b9ff22]">
                  <Heart className="size-4" />
                  The Sideline Team
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
                    Our commitments
                  </span>
                  <div className="mt-4 space-y-3.5">
                    {commitments.map(({ Icon, title, body }) => (
                      <div key={title} className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-[#b9ff22]/30 bg-[#b9ff22]/8 text-[#b9ff22]">
                          <Icon className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-black text-white">{title}</p>
                          <p className="text-xs leading-5 text-zinc-500">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-[radial-gradient(circle_at_85%_0%,rgba(185,255,34,0.06),rgba(7,10,11,0.95)_55%)] p-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    What Sideline is not
                  </span>
                  <div className="mt-4 space-y-3.5">
                    {notList.map(({ Icon, label, body }) => (
                      <div key={label} className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400">
                          <Icon className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-black text-white">{label}</p>
                          <p className="text-xs leading-5 text-zinc-500">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="communities" className="scroll-mt-24 py-9 sm:py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Communities"
              title="Find your people"
              copy="From NFL film rooms to fight-night threads — a home for every team, league, and creator."
            />
            <Link
              href="/communities"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#b9ff22] transition hover:text-[#d0ff53]"
            >
              Explore all
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={3} />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {featuredCommunities.map((community) => (
              <article
                key={community.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f12]/85 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-12 size-28 rounded-full bg-[#b9ff22]/5 blur-2xl transition group-hover:bg-[#b9ff22]/10" />
                <div className="relative flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl border border-[#b9ff22]/35 bg-[#b9ff22]/10 text-xs font-black text-[#b9ff22]">
                    {community.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-500">
                    <span className="motion-live size-1.5 rounded-full bg-[#b9ff22] shadow-[0_0_8px_#b9ff22]" />
                    Live room
                  </span>
                </div>
                <h3 className="mt-5 text-base font-black text-white">{community.name}</h3>
                <p className="mt-1 text-xs text-zinc-500">{community.note}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-300">
                    <Users className="size-3.5 text-[#b9ff22]" />
                    Game-day room
                  </span>
                  <ChevronRight className="size-4 text-[#b9ff22]" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 py-9 sm:py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f12]/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b9ff22]/60 to-transparent" />
            <div className="flex items-start justify-between gap-3">
              <SectionHeading
                eyebrow="Predictions"
                title="Put your takes on record"
                copy="Lock in your pick before kickoff and see how the community is leaning. Here's how a prediction looks."
              />
              <PreviewPill>Example</PreviewPill>
            </div>
            <div className="mt-7 space-y-3">
              {livePredictions.map((pick) => (
                <div
                  key={pick.matchup}
                  className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                >
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                    <span className="text-[#b9ff22]">{pick.league}</span>
                    <span>Community split</span>
                  </div>
                  <p className="mt-1.5 text-sm font-black text-white">{pick.matchup}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs font-black">
                    <span
                      className={`rounded-md py-2 ${
                        pick.leftPct >= 50
                          ? "bg-[#b9ff22] text-black"
                          : "border border-white/10 bg-white/[0.04] text-zinc-300"
                      }`}
                    >
                      {pick.left} {pick.leftPct}%
                    </span>
                    <span
                      className={`rounded-md py-2 ${
                        pick.leftPct < 50
                          ? "bg-[#b9ff22] text-black"
                          : "border border-white/10 bg-white/[0.04] text-zinc-300"
                      }`}
                    >
                      {pick.right} {100 - pick.leftPct}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(17,20,21,.96),rgba(6,8,9,.96))] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b9ff22] to-transparent" />
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                  Weekly rankings
                </span>
                <h3 className="mt-1 text-xl font-black text-white">How Rankings Work</h3>
              </div>
              <PreviewPill>Sample</PreviewPill>
            </div>
            <div className="flex-1 p-3">
              {sampleLeaderboard.map((leader) => (
                <div
                  key={leader.label}
                  className={`grid grid-cols-[34px_minmax(0,1fr)_auto] items-center gap-3 rounded-lg px-3 py-3 ${
                    leader.rank === 1 ? "bg-[#b9ff22]/[0.07]" : ""
                  }`}
                >
                  <span
                    className={`grid place-items-center text-sm font-black ${
                      leader.rank === 1
                        ? "size-7 rounded-full bg-[#b9ff22] text-black"
                        : "text-zinc-500"
                    }`}
                  >
                    {leader.rank}
                  </span>
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#b9ff22]/40 bg-[radial-gradient(circle_at_35%_25%,#344b10,#101703_70%)] text-[#b9ff22]">
                      <Users className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-zinc-100">{leader.label}</p>
                      <p className="text-[10px] text-zinc-500">{leader.note}</p>
                    </div>
                  </div>
                  {leader.rank === 1 ? (
                    <Crown className="size-5 text-[#b9ff22]" />
                  ) : (
                    <ChevronRight className="size-4 text-zinc-600" />
                  )}
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 px-6 py-4">
              <Link
                href="/compete"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#b9ff22] transition hover:text-[#d0ff53]"
              >
                See how competition works
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            </div>
          </div>
        </section>

        <section id="creators" className="scroll-mt-24 py-9 sm:py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Creators"
              title="Follow the voices you trust"
              copy="Analysts and creators run their own communities — talk ball daily and unlock premium feeds."
            />
            <Link
              href="/creators"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#b9ff22] transition hover:text-[#d0ff53]"
            >
              For creators
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={3} />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCreators.map((creator) => (
              <article
                key={creator.name}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f12]/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-12 size-28 rounded-full bg-[#b9ff22]/5 blur-2xl" />
                <div className="relative flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full border border-[#b9ff22]/40 bg-[radial-gradient(circle_at_35%_25%,#344b10,#101703_70%)] text-base font-black text-[#b9ff22] shadow-[0_0_18px_rgba(185,255,34,0.12)]">
                    {creator.initials}
                  </span>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-1.5 text-base font-black text-white">
                      {creator.name}
                      <ShieldCheck className="size-4 text-[#b9ff22]" />
                    </h3>
                    <p className="truncate text-xs text-zinc-500">{creator.sport}</p>
                  </div>
                </div>
                <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-300">
                    <Users className="size-3.5 text-[#b9ff22]" />
                    Creator community
                  </span>
                  <span className="rounded-full border border-[#b9ff22]/25 bg-[#b9ff22]/8 px-3 py-1 text-[10px] font-black text-[#b9ff22]">
                    {creator.tier}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <StadiumCta
          body="Reserve your username and join as a founding member — early access to communities, creators, picks, and leaderboards before launch."
          buttonLabel="Join the Waitlist"
          eyebrow="Before we launch"
          title="Get in before everyone else."
        />
      </div>
    </main>
  );
}
