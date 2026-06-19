import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Hash,
  Heart,
  MessageCircle,
  Mic2,
  Rocket,
  ShieldCheck,
  Star,
  Target,
  Trophy,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { HeroBadge } from "../components/HeroBadge";
import { SiteHeader } from "../components/SiteHeader";
import { StadiumCta } from "../components/StadiumCta";

export const metadata: Metadata = {
  title: "About | Sideline",
  description:
    "Sports conversations are scattered across a dozen apps. Sideline brings communities, creators, predictions, and competition into one home for fans.",
  alternates: {
    canonical: "/about",
  },
};

const fragmentedSources = [
  { label: "Discord servers", Icon: MessageCircle },
  { label: "Reddit threads", Icon: Users },
  { label: "X / timelines", Icon: Hash },
  { label: "Podcasts", Icon: Mic2 },
  { label: "Creator channels", Icon: Star },
  { label: "Prediction apps", Icon: TrendingUp },
];

const solutionPillars = [
  {
    title: "Communities",
    copy: "Rooms for every team, league, and creator — live before, during, and after the game.",
    Icon: Users,
  },
  {
    title: "Creators",
    copy: "Follow the voices you trust and unlock premium feeds from analysts and creators.",
    Icon: Mic2,
  },
  {
    title: "Predictions",
    copy: "Make free, skill-based picks, track your record, and build a real reputation.",
    Icon: TrendingUp,
  },
  {
    title: "Competition",
    copy: "Climb transparent leaderboards, build streaks, and earn recognition.",
    Icon: Trophy,
  },
];

const missionItems = [
  {
    title: "Connect fans",
    copy: "Build real communities around the teams, sports, and creators people already love.",
    Icon: Users,
  },
  {
    title: "Empower creators",
    copy: "Give creators better tools and a stronger relationship with their audience.",
    Icon: Mic2,
  },
  {
    title: "Reward participation",
    copy: "Turn watching into playing — predictions, competition, and recognition for fans.",
    Icon: Trophy,
  },
];

const values = [
  {
    title: "Community First",
    copy: "The community comes before everything else.",
    Icon: Users,
  },
  {
    title: "Authentic Competition",
    copy: "Competition rewards knowledge and participation — never wagering.",
    Icon: ShieldCheck,
  },
  {
    title: "Creator Empowerment",
    copy: "Creators deserve better tools and stronger communities.",
    Icon: Star,
  },
  {
    title: "Constant Innovation",
    copy: "We are building for where sports fandom is going next.",
    Icon: Zap,
  },
];

const ecosystem = [
  { label: "Communities", Icon: Users, x: 50, y: 10 },
  { label: "Predictions", Icon: TrendingUp, x: 84.64, y: 30 },
  { label: "Competition", Icon: Trophy, x: 84.64, y: 70 },
  { label: "Events", Icon: Zap, x: 50, y: 90 },
  { label: "Discussions", Icon: MessageCircle, x: 15.36, y: 70 },
  { label: "Creators", Icon: Mic2, x: 15.36, y: 30 },
];

function LogoSymbol({ className = "" }: { className?: string }) {
  return (
    <span
      aria-label="Sideline"
      className={`block bg-[url('/assets/sideline-logo-transparent.png')] bg-no-repeat ${className}`}
      role="img"
      style={{
        backgroundPosition: "left center",
        backgroundSize: "246px 40px",
      }}
    />
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-zinc-300">
      <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#b9ff22] text-black">
        <Check className="size-3 stroke-[3]" />
      </span>
      {children}
    </li>
  );
}

function HeroNetwork() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]">
      <div className="absolute inset-[10%] rounded-full border border-[#b9ff22]/10" />
      <div className="absolute inset-[30%] rounded-full border border-[#b9ff22]/20" />
      <div className="absolute left-1/2 top-1/2 size-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b9ff22]/8 blur-3xl" />

      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 600 600">
        <g stroke="#b9ff22" strokeOpacity=".45" strokeWidth="1.5">
          <line x1="300" y1="300" x2="300" y2="60" />
          <line x1="300" y1="300" x2="508" y2="180" />
          <line x1="300" y1="300" x2="508" y2="420" />
          <line x1="300" y1="300" x2="300" y2="540" />
          <line x1="300" y1="300" x2="92" y2="420" />
          <line x1="300" y1="300" x2="92" y2="180" />
        </g>
        <g fill="#b9ff22">
          <circle cx="300" cy="180" r="4" />
          <circle cx="404" cy="240" r="4" />
          <circle cx="404" cy="360" r="4" />
          <circle cx="300" cy="420" r="4" />
          <circle cx="196" cy="360" r="4" />
          <circle cx="196" cy="240" r="4" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#b9ff22]/60 bg-[#0b1104] shadow-[0_0_50px_rgba(185,255,34,.28)]">
        <LogoSymbol className="h-10 w-12" />
      </div>

      {ecosystem.map(({ label, Icon, x, y }) => (
        <div
          className="absolute text-center"
          key={label}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: "translate(-50%, -28px)",
          }}
        >
          <span className="mx-auto grid size-14 place-items-center rounded-full border border-[#b9ff22]/45 bg-[#101607] text-[#b9ff22] shadow-[0_0_24px_rgba(185,255,34,.12)]">
            <Icon className="size-6" />
          </span>
          <span className="mt-2 block text-[10px] font-black uppercase tracking-[0.08em] text-zinc-200">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function AboutCultureVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[680px] lg:ml-auto">
      <div className="absolute -inset-10 bg-[radial-gradient(circle_at_52%_50%,rgba(185,255,34,.14),transparent_64%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#b9ff22]/25 bg-[#080b0b]/96 p-5 shadow-[0_35px_90px_rgba(0,0,0,.55),0_0_50px_rgba(185,255,34,.08)] sm:p-7">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(185,255,34,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(185,255,34,.04)_1px,transparent_1px)] [background-size:38px_38px]" />

        <div className="relative flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              Why Sideline
            </span>
            <h2 className="mt-2 text-xl font-black sm:text-2xl">
              Sports culture is scattered.
            </h2>
            <p className="mt-2 max-w-md text-xs leading-5 text-zinc-400 sm:text-sm">
              The moments fans care about live across disconnected platforms.
              Sideline brings them home.
            </p>
          </div>
          <span className="hidden size-12 shrink-0 place-items-center rounded-full border border-[#b9ff22]/35 bg-[#b9ff22]/8 text-[#b9ff22] sm:grid">
            <Target className="size-6" />
          </span>
        </div>

        <div className="relative mt-6 grid items-center gap-5 sm:grid-cols-[1fr_64px_1fr]">
          <div className="space-y-2.5">
            <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-zinc-500">
              Before
            </span>
            {[
              { label: "Group chats", Icon: MessageCircle },
              { label: "Creator platforms", Icon: Mic2 },
              { label: "Prediction apps", Icon: TrendingUp },
              { label: "Competition tools", Icon: Trophy },
            ].map(({ label, Icon }) => (
              <div
                className="flex items-center gap-3 rounded-md border border-white/8 bg-white/[0.025] px-3 py-2.5"
                key={label}
              >
                <span className="grid size-8 place-items-center rounded-md bg-white/[0.04] text-zinc-500">
                  <Icon className="size-4" />
                </span>
                <span className="text-xs font-bold text-zinc-300">{label}</span>
              </div>
            ))}
          </div>

          <div className="relative flex h-16 items-center justify-center sm:h-full">
            <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#b9ff22]/55 to-transparent sm:h-full sm:w-px sm:bg-gradient-to-b" />
            <span className="relative grid size-11 place-items-center rounded-full border border-[#b9ff22]/45 bg-[#111807] text-[#b9ff22] shadow-[0_0_24px_rgba(185,255,34,.18)]">
              <ArrowRight className="size-5 rotate-90 sm:rotate-0" strokeWidth={2.5} />
            </span>
          </div>

          <div>
            <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
              One home
            </span>
            <div className="mt-2.5 overflow-hidden rounded-lg border border-[#b9ff22]/35 bg-[radial-gradient(circle_at_50%_25%,rgba(185,255,34,.13),transparent_50%),#0b0f0a]">
              <div className="flex items-center gap-3 border-b border-white/10 p-4">
                <span className="grid size-12 place-items-center rounded-full border border-[#b9ff22]/45 bg-[#b9ff22]/8 shadow-[0_0_24px_rgba(185,255,34,.18)]">
                  <LogoSymbol className="h-8 w-10" />
                </span>
                <div>
                  <span className="block text-base font-black">Sideline</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#b9ff22]">
                    Built for sports communities
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-white/10">
                {[
                  { label: "Fans", Icon: Users },
                  { label: "Creators", Icon: Mic2 },
                  { label: "Predictions", Icon: TrendingUp },
                  { label: "Competition", Icon: Trophy },
                ].map(({ label, Icon }) => (
                  <div className="bg-[#090c0b] p-3" key={label}>
                    <Icon className="size-4 text-[#b9ff22]" />
                    <span className="mt-2 block text-[10px] font-black text-zinc-200">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 flex items-center gap-3 rounded-md border border-[#b9ff22]/20 bg-[#b9ff22]/6 px-4 py-3">
          <span className="size-2 shrink-0 rounded-full bg-[#b9ff22] shadow-[0_0_12px_#b9ff22]" />
          <p className="text-[10px] font-black uppercase tracking-[0.1em] text-zinc-300">
            One identity. One community. One shared sideline.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(185,255,34,.09),transparent_30%),radial-gradient(circle_at_22%_58%,rgba(185,255,34,.045),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader active="About" />

        <section className="relative left-1/2 min-h-0 w-screen -translate-x-1/2 overflow-hidden border-b border-white/10 bg-[#040607] lg:min-h-[680px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(185,255,34,.12),transparent_34%),radial-gradient(circle_at_12%_72%,rgba(185,255,34,.05),transparent_28%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(185,255,34,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(185,255,34,.035)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:linear-gradient(to_right,transparent,black_55%,black)]" />
          <div className="relative mx-auto grid min-h-0 max-w-[1480px] items-center gap-12 px-5 py-14 sm:px-8 lg:min-h-[680px] lg:grid-cols-[0.88fr_1.12fr] lg:px-14 lg:py-0">
            <div className="motion-enter max-w-[610px] self-center lg:py-16">
              <HeroBadge icon={Star}>About Sideline</HeroBadge>
              <h1 className="text-[2.75rem] font-black leading-[1.0] sm:text-6xl lg:text-7xl">
                One home for
                <span className="block text-[#b9ff22]">sports fans.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-300">
                Sideline is a sports platform — not a sportsbook, Discord
                server, or Patreon page. It brings communities, creators,
                predictions, and competition into one place for fans who are
                tired of splitting game day across a dozen apps.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="motion-action group inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#b9ff22] px-7 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-[#d0ff53]"
                  href="/waitlist"
                >
                  Join the Waitlist
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                </Link>
                <Link
                  className="motion-action motion-action-dark group inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/25 bg-black/35 px-7 text-sm font-bold text-white transition hover:border-[#b9ff22]/60 hover:bg-[#b9ff22]/5"
                  href="/communities"
                >
                  Explore Communities
                  <ArrowRight className="size-5 text-[#b9ff22] transition-transform group-hover:translate-x-1" strokeWidth={3} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <AboutCultureVisual />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              The Problem
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Your sports life is spread across a dozen tabs.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              The debates, predictions, creators, and rivalries that make sports
              fun live on platforms that were never built to work together —
              Discord for chat, Reddit for threads, Patreon for creators, and
              separate apps for picks.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fragmentedSources.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-white/[0.04] text-zinc-500">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-bold text-zinc-300">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-zinc-500">
            Six apps to follow one game. None of them talk to each other.
          </p>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[radial-gradient(circle_at_50%_120%,rgba(185,255,34,.12),transparent_55%),#040607]">
          <div className="mx-auto max-w-[1480px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14">
            <div className="mx-auto max-w-3xl">
              <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
                <Heart className="size-4" />
                Why we built Sideline
              </span>
              <div className="mt-6 space-y-5 border-l-2 border-[#b9ff22]/50 pl-5 sm:pl-7">
                <p className="text-xl font-black leading-snug text-white sm:text-3xl sm:leading-tight">
                  Sports are supposed to bring people together.
                </p>
                <p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                  But following a single game often means bouncing between Discord,
                  Reddit, podcasts, creator feeds, prediction apps, and social
                  media. We built Sideline because sports fans deserve one home
                  where communities, creators, picks, and competition actually
                  connect — not six apps that ignore each other.
                </p>
                <p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                  Sideline brings those pieces together so the people you watch
                  with, the creators you follow, and the picks you make all live
                  in the same place.
                </p>
                <p className="text-lg font-black leading-snug text-[#b9ff22] sm:text-2xl">
                  The goal isn&apos;t to replace sports culture. The goal is to
                  connect it.
                </p>
              </div>
              <div className="mt-7 flex items-center gap-2.5 pl-5 text-sm font-bold text-zinc-300 sm:pl-7">
                <span className="grid size-8 place-items-center rounded-full border border-[#b9ff22]/40 bg-[#b9ff22]/10 text-[#b9ff22]">
                  <Heart className="size-4" />
                </span>
                The Sideline Team
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              The Solution
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Four things fans love, finally connected.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Sideline combines communities, creators, predictions, and
              competition in one sports platform — so everything about your
              team lives in the same place, not across Discord servers and
              separate apps.
            </p>
          </div>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {solutionPillars.map(({ title, copy, Icon }) => (
                <article
                  key={title}
                  className="rounded-lg border border-white/10 bg-[#0b0f12]/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                >
                  <span className="grid size-12 place-items-center rounded-xl border border-[#b9ff22]/35 bg-[#b9ff22]/10 text-[#b9ff22]">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
                </article>
              ))}
            </div>
            <div className="relative hidden min-h-[420px] items-center justify-center rounded-lg border border-white/10 bg-[radial-gradient(circle_at_center,rgba(185,255,34,.1),transparent_55%)] p-5 lg:flex">
              <HeroNetwork />
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-white/10 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              Our mission
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              What we&apos;re building toward.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-300">
              We&apos;re building Sideline for fans who live for game day and
              creators who bring them together — in one place, not scattered
              across Discord, Reddit, and Patreon.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {missionItems.map(({ title, copy, Icon }) => (
              <article
                key={title}
                className="rounded-lg border border-[#b9ff22]/20 bg-[radial-gradient(circle_at_50%_0%,rgba(185,255,34,.1),rgba(255,255,255,.02)_52%)] p-6"
              >
                <span className="grid size-12 place-items-center rounded-full border border-[#b9ff22]/45 bg-[#b9ff22]/8 text-[#b9ff22]">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-[#060809]/95 p-6 sm:p-8">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
            Where We Are
          </span>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            Transparent about what&apos;s built and what&apos;s next.
          </h2>
          <div className="relative mt-8 grid gap-4 md:grid-cols-3">
            <div className="absolute left-[12%] right-[12%] top-0 hidden h-px bg-[#b9ff22]/50 md:block" />
            {[
              {
                title: "Today",
                Icon: Target,
                items: ["Communities", "Creator tools", "Predictions", "Rankings"],
              },
              {
                title: "Next",
                Icon: Rocket,
                items: ["Expanded community features", "Creator monetization", "Community challenges", "New ways to compete"],
              },
              {
                title: "The Future",
                Icon: Trophy,
                items: ["The leading destination for sports communities"],
              },
            ].map(({ title, Icon, items }) => (
              <article
                className="relative rounded-lg border border-white/10 bg-black/25 p-5"
                key={title}
              >
                <span className="absolute -top-2 left-1/2 size-3 -translate-x-1/2 rounded-full border-2 border-[#b9ff22] bg-[#060809] shadow-[0_0_10px_#b9ff22]" />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black">{title}</h3>
                  <Icon className="size-8 text-[#b9ff22]/20" />
                </div>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7 rounded-lg border border-white/10 bg-[#060809]/95 p-6 sm:p-8">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
            What We Believe
          </span>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, copy, Icon }) => (
              <article
                className="rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(185,255,34,.045),rgba(255,255,255,.018))] p-5"
                key={title}
              >
                <span className="grid size-11 place-items-center rounded-full bg-[#b9ff22]/8 text-[#b9ff22]">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-sm font-black">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-400">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <StadiumCta
          body="Reserve your username and join as a founding member. Early access to communities, creators, picks, and leaderboards — plus a direct say in what we build first."
          buttonLabel="Join the Waitlist"
          eyebrow="Before we launch"
          title="Help us build the home sports fans need."
        />
      </div>
    </main>
  );
}
