import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AtSign,
  Award,
  BarChart3,
  ChevronRight,
  Crown,
  Eye,
  Heart,
  House,
  Lock,
  MessageCircle,
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
import { FoundingValueStrip } from "./components/FoundingValueStrip";
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
    body: "Climb leaderboards and build a skill-based reputation.",
  },
];

const stats = [
  ["4-in-1", "Communities, creators, picks, competition"],
  ["24/7", "Always-on game-day rooms"],
  ["Free", "To join and start competing"],
  ["Founding", "Your name. Your status. Before launch."],
];

const howItWorks = [
  {
    step: "1",
    Icon: Users,
    title: "Join a Community",
    body: "Find fans, creators, or teams you care about.",
  },
  {
    step: "2",
    Icon: TrendingUp,
    title: "Make Predictions",
    body: "Share picks and reactions before games.",
  },
  {
    step: "3",
    Icon: Trophy,
    title: "Build Reputation",
    body: "Earn streaks, rankings, badges, and credibility.",
  },
  {
    step: "4",
    Icon: Lock,
    title: "Unlock More",
    body: "Gain access to creator rooms, premium spaces, and special community features.",
  },
];

const builtInPublic = [
  {
    title: "HONEST POSITIONING",
    body: "Not a sportsbook. No wagers. Community-driven competition.",
  },
  {
    title: "EARLY ACCESS",
    body: "Founding members help shape what gets built.",
  },
  {
    title: "COMMUNITY FIRST",
    body: "Fans, creators, communities, and competition together.",
  },
  {
    title: "LAUNCH STATUS",
    body: "Website complete. Platform in development.",
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
    body: "Lock in the username that becomes your reputation on Sideline.",
  },
  {
    Icon: Star,
    title: "Founding member status",
    body: "A permanent badge — proof you were here before launch day.",
  },
  {
    Icon: Users,
    title: "Early community access",
    body: "Walk into rooms before the crowd arrives and help set the tone.",
  },
  {
    Icon: Rocket,
    title: "Shape the platform",
    body: "Your voice influences what we build before the public gets in.",
  },
  {
    Icon: ShieldCheck,
    title: "Creator priority",
    body: "Creators who join early get reviewed first when tools open.",
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
  eyebrow?: string;
  title: React.ReactNode;
  copy?: string;
  center?: boolean;
}>) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`${eyebrow ? "mt-3" : ""} text-3xl font-black leading-tight text-white sm:text-4xl`}>
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

function HeroProductComposite() {
  const chatMessages = [
    { user: "MG", text: "Mahomes on 3rd down — who else is nervous?", time: "7:42 PM" },
    { user: "SK", text: "Bills D is showing up. This is a war.", time: "7:43 PM" },
    { user: "JP", text: "Locked KC -3 before kickoff. Let's go.", time: "7:44 PM" },
  ];

  return (
    <>
      <div className="relative hidden w-full lg:block">
        <div className="motion-glow pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_50%_50%,rgba(185,255,34,0.16),transparent_62%)] blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(155deg,rgba(11,15,18,0.98),rgba(4,6,7,0.98))] shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b9ff22]/70 to-transparent" />
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#b9ff22]">
              <span className="motion-live size-1.5 rounded-full bg-[#b9ff22] shadow-[0_0_8px_#b9ff22]" />
              Sideline preview
            </span>
            <PreviewPill>Product preview</PreviewPill>
          </div>
          <div className="grid grid-cols-12 gap-3 p-4">
            <article className="col-span-7 row-span-2 flex min-h-[320px] flex-col rounded-xl border border-white/10 bg-[#070a0b]/90">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="flex items-center gap-2 text-xs font-black text-white">
                  <MessageCircle className="size-4 text-[#b9ff22]" />
                  Community chat
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wide text-zinc-500">Chiefs vs Bills · Live</span>
              </div>
              <div className="flex-1 space-y-3 overflow-hidden px-4 py-3">
                {chatMessages.map((msg) => (
                  <div key={msg.text} className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black text-[#b9ff22]">{msg.user}</span>
                      <span className="text-[9px] text-zinc-600">{msg.time}</span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-zinc-300">{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 px-4 py-2.5">
                <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[10px] text-zinc-500">
                  Join the conversation…
                </div>
              </div>
            </article>

            <article className="col-span-5 rounded-xl border border-white/10 bg-[#070a0b]/90 p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-black text-white">
                  <TrendingUp className="size-4 text-[#b9ff22]" />
                  Prediction feed
                </span>
                <span className="text-[8px] font-black uppercase text-zinc-600">Example</span>
              </div>
              <p className="mt-2 text-[11px] font-bold text-zinc-200">KC vs BUF — Who wins?</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-8 text-[10px] font-bold text-zinc-400">KC</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <span className="block h-full w-[68%] rounded-full bg-[#b9ff22]" />
                  </span>
                  <span className="text-[10px] font-black text-[#b9ff22]">68%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 text-[10px] font-bold text-zinc-400">BUF</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <span className="block h-full w-[32%] rounded-full bg-zinc-600" />
                  </span>
                  <span className="text-[10px] font-black text-zinc-400">32%</span>
                </div>
              </div>
              <div className="mt-3 rounded-lg border border-[#b9ff22]/20 bg-[#b9ff22]/5 px-3 py-2 text-[10px] font-bold text-[#b9ff22]">
                Your pick: KC — locked pregame
              </div>
            </article>

            <article className="col-span-5 rounded-xl border border-white/10 bg-[#070a0b]/90 p-4">
              <div className="flex items-center gap-2 text-xs font-black text-white">
                <Sparkles className="size-4 text-[#b9ff22]" />
                Creator room
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#b9ff22]/40 bg-[radial-gradient(circle_at_35%_25%,#344b10,#101703_70%)] text-xs font-black text-[#b9ff22]">
                  CD
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-1 text-sm font-black text-white">
                    Coach D
                    <ShieldCheck className="size-3.5 text-[#b9ff22]" />
                  </p>
                  <p className="text-[10px] text-zinc-500">Film breakdown · Members only</p>
                </div>
              </div>
              <p className="mt-3 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-[11px] leading-5 text-zinc-400">
                &ldquo;Watch the red-zone look on 3rd &amp; 2 — that&apos;s the whole game.&rdquo;
              </p>
            </article>

            <article className="col-span-5 rounded-xl border border-white/10 bg-[#070a0b]/90 p-3">
              <div className="flex items-center justify-between px-1">
                <span className="flex items-center gap-2 text-xs font-black text-white">
                  <BarChart3 className="size-4 text-[#b9ff22]" />
                  Leaderboard
                </span>
                <PreviewPill>Sample</PreviewPill>
              </div>
              <div className="mt-2 space-y-1.5">
                {sampleLeaderboard.slice(0, 3).map((leader) => (
                  <div
                    key={leader.label}
                    className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                      leader.rank === 1 ? "bg-[#b9ff22]/[0.08]" : ""
                    }`}
                  >
                    <span
                      className={`grid size-6 place-items-center text-[10px] font-black ${
                        leader.rank === 1
                          ? "rounded-full bg-[#b9ff22] text-black"
                          : "text-zinc-500"
                      }`}
                    >
                      {leader.rank}
                    </span>
                    <span className="flex-1 truncate text-[11px] font-bold text-zinc-200">{leader.label}</span>
                    {leader.rank === 1 ? <Crown className="size-3.5 text-[#b9ff22]" /> : null}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
        <div className="absolute -right-3 top-8 z-20 flex items-center gap-2.5 rounded-xl border border-[#b9ff22]/35 bg-[#0b1104]/95 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <span className="grid size-10 place-items-center rounded-lg border border-[#b9ff22]/30 bg-[#b9ff22]/10 text-[#b9ff22]">
            <Award className="size-5" />
          </span>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-zinc-500">Reputation badge</p>
            <p className="text-sm font-black text-white">Founding Analyst</p>
          </div>
        </div>
      </div>

      <div className="relative space-y-3 lg:hidden">
        <article className="rounded-xl border border-white/10 bg-[#0b0f12]/95 p-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-black text-white">
              <MessageCircle className="size-4 text-[#b9ff22]" />
              Community chat
            </span>
            <span className="text-[9px] font-bold uppercase text-zinc-500">Live</span>
          </div>
          <p className="mt-3 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300">
            &ldquo;Locked KC -3 before kickoff. Let&apos;s go.&rdquo;
          </p>
        </article>
        <div className="grid grid-cols-2 gap-3">
          <article className="rounded-xl border border-white/10 bg-[#0b0f12]/95 p-3">
            <span className="flex items-center gap-1.5 text-[11px] font-black text-white">
              <TrendingUp className="size-3.5 text-[#b9ff22]" />
              Predictions
            </span>
            <p className="mt-2 text-[10px] font-bold text-zinc-300">KC 68% · BUF 32%</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-[#0b0f12]/95 p-3">
            <span className="flex items-center gap-1.5 text-[11px] font-black text-white">
              <Sparkles className="size-3.5 text-[#b9ff22]" />
              Creator room
            </span>
            <p className="mt-2 text-[10px] font-bold text-zinc-300">Coach D · Film breakdown</p>
          </article>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <article className="rounded-xl border border-[#b9ff22]/25 bg-[#b9ff22]/5 p-3">
            <span className="flex items-center gap-1.5 text-[11px] font-black text-[#b9ff22]">
              <Award className="size-3.5" />
              Reputation
            </span>
            <p className="mt-1 text-xs font-black text-white">Founding Analyst</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-[#0b0f12]/95 p-3">
            <span className="flex items-center gap-1.5 text-[11px] font-black text-white">
              <BarChart3 className="size-3.5 text-[#b9ff22]" />
              Leaderboard
            </span>
            <p className="mt-1 text-xs font-bold text-zinc-300">#1 Season Leader</p>
          </article>
        </div>
      </div>
    </>
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
          className="grid min-h-0 items-center gap-10 py-10 sm:gap-12 sm:py-12 lg:min-h-[700px] lg:grid-cols-[1fr_1fr] lg:gap-14 lg:py-0"
        >
          <div className="motion-enter max-w-2xl self-center lg:pt-8">
            <HeroBadge icon={House}>Founding access open</HeroBadge>
            <h1 className="mt-2 break-words text-5xl font-black uppercase leading-[0.96] tracking-normal text-white sm:text-7xl lg:text-[5.4rem] xl:text-[6rem]">
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
              Game day is scattered — group chats, creator feeds, prediction apps,
              and leaderboards that never connect. Sideline brings{" "}
              <strong className="font-bold text-white">communities</strong>,{" "}
              <strong className="font-bold text-white">creators</strong>,{" "}
              <strong className="font-bold text-white">predictions</strong>, and{" "}
              <strong className="font-bold text-white">competition</strong> into
              one home.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
              Not a sportsbook. Not another chat app. Join as a founding member
              while we&apos;re building — and get in before launch.
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
                Join as a Founding Member
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
            <p className="mt-4 text-sm font-semibold text-zinc-500">
              Reserve your spot before launch. No spam — just early access when
              we&apos;re ready.
            </p>
          </div>

          <div className="motion-enter-late self-center lg:max-w-none">
            <HeroProductComposite />
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 py-10 lg:py-12">
          <SectionHeading center title="HOW SIDELINE WORKS" />
          <div className="relative mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-px bg-gradient-to-r from-[#b9ff22]/15 via-[#b9ff22]/60 to-[#b9ff22]/15 lg:block" />
            {howItWorks.map(({ step, Icon, title, body }) => (
              <article
                key={step}
                className="relative rounded-2xl border border-white/10 bg-[#0b0f12]/85 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] lg:p-6"
              >
                <div className="relative z-10 mb-3 flex items-center justify-between lg:mb-5">
                  <span className="grid size-10 place-items-center rounded-full border border-[#b9ff22]/40 bg-[#080b0c] text-[#b9ff22] shadow-[0_0_24px_rgba(185,255,34,0.14)] lg:size-[52px]">
                    <Icon className="size-5 lg:size-6" />
                  </span>
                  <span className="text-xl font-black text-white/10 lg:text-3xl">{step}</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#b9ff22]">
                  Step {step}
                </p>
                <h3 className="mt-1 text-base font-black text-white lg:text-lg">{title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-zinc-400 lg:mt-2 lg:text-sm lg:leading-6">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="py-4 lg:py-6">
          <FoundingValueStrip />
        </div>

        <section className="relative z-10 -mt-1 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.42)] lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-[#0b0f12]/90 p-5 backdrop-blur-xl sm:p-6">
              <strong className="block text-2xl font-black text-[#b9ff22] sm:text-3xl">{value}</strong>
              <span className="mt-2 block text-xs font-semibold leading-5 text-zinc-400">{label}</span>
            </div>
          ))}
        </section>

        <section className="py-10 lg:py-12">
          <div className="relative overflow-hidden rounded-2xl border border-[#b9ff22]/25 bg-[radial-gradient(circle_at_12%_0%,rgba(185,255,34,0.12),rgba(11,15,18,0.96)_46%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.4)] sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#b9ff22]/5 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
                  <Crown className="size-4" />
                  Founding member program
                </span>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Be there before the crowd arrives
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Founding members aren&apos;t waiting for launch — they&apos;re
                  helping build it. Claim your identity, earn permanent status,
                  and influence the communities that open first.
                </p>
              </div>
              <Link
                href="/waitlist"
                className="motion-action group inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#b9ff22] px-7 text-sm font-black text-black shadow-[0_0_32px_rgba(185,255,34,0.26)] transition hover:-translate-y-0.5 hover:bg-[#d0ff53]"
              >
                Join as a Founding Member
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

        <section className="py-8 lg:py-10">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f12]/85 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] lg:p-10">
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

        <section id="communities" className="scroll-mt-24 py-8 lg:py-10">
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

        <section className="grid gap-4 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f12]/85 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] lg:p-8">
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

        <section id="creators" className="scroll-mt-24 py-8 lg:py-10">
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

        <section className="py-8 lg:py-10">
          <SectionHeading center title="BUILT IN PUBLIC" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-4">
            {builtInPublic.map(({ title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-[#0b0f12]/85 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] lg:p-6"
              >
                <h3 className="text-[11px] font-black uppercase tracking-[0.14em] text-[#b9ff22]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="pb-6 lg:pb-8">
          <FoundingValueStrip />
        </div>

        <StadiumCta
          body="Founding members claim their username, earn permanent status, and walk in before the doors open. Help us build the home sports fans have always wanted."
          buttonLabel="Join as a Founding Member"
          eyebrow="Before we launch"
          title="This is where it starts."
        />
      </div>
    </main>
  );
}
