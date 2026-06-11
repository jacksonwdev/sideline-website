import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  CircleHelp,
  Crown,
  Flame,
  Medal,
  Shield,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { HeroBadge } from "../components/HeroBadge";
import { SiteHeader } from "../components/SiteHeader";
import { StadiumCta } from "../components/StadiumCta";

export const metadata: Metadata = {
  title: "Competition | Sideline",
  description:
    "Make sports predictions, climb the rankings, and challenge the Sideline community.",
};

const leaders = [
  { rank: 1, name: "SportsGuru", accuracy: "87%", streak: 12, points: "2,450" },
  { rank: 2, name: "JacksonNFL", accuracy: "84%", streak: 9, points: "2,150" },
  { rank: 3, name: "CoachD", accuracy: "82%", streak: 7, points: "1,980" },
  { rank: 4, name: "MikeMMA", accuracy: "80%", streak: 6, points: "1,760" },
];

const picks = [
  { league: "NFL", matchup: "Chiefs vs Bills", left: "KC", right: "BUF", total: "12.4K" },
  { league: "NBA", matchup: "Lakers vs Celtics", left: "LAL", right: "BOS", total: "8.7K" },
  { league: "NHL", matchup: "Rangers vs Bruins", left: "NYR", right: "BOS", total: "5.3K" },
];

const tiers = [
  { name: "Rookie", range: "0 - 499 pts", color: "#f08b4d", Icon: Shield },
  { name: "Analyst", range: "500 - 1,499 pts", color: "#bfc4ca", Icon: Medal },
  { name: "Expert", range: "1,500 - 2,999 pts", color: "#ffd21c", Icon: Trophy },
  { name: "Elite", range: "3,000 - 4,999 pts", color: "#46b9ff", Icon: Sparkles },
  { name: "Legend", range: "5,000+ pts", color: "#d95dff", Icon: Crown },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-zinc-300">
      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#a8ff00] text-black">
        <Check className="size-3.5 stroke-[3]" />
      </span>
      {children}
    </li>
  );
}

function RankingTable({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(17,20,21,.98),rgba(4,5,6,.98))] shadow-2xl shadow-black/50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a8ff00]/80 to-transparent" />
      {!compact && (
        <>
          <div className="grid grid-cols-3 border-b border-white/8 bg-[#a8ff00]/[0.035]">
            <div className="border-r border-white/8 px-4 py-3">
              <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#a8ff00]">
                <span className="size-1.5 rounded-full bg-[#a8ff00] shadow-[0_0_8px_#a8ff00]" />
                Live board
              </span>
              <strong className="mt-1 block text-sm">Week 12</strong>
            </div>
            <div className="border-r border-white/8 px-4 py-3">
              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">Your streak</span>
              <strong className="mt-1 flex items-center gap-1.5 text-sm">
                <Flame className="size-3.5 fill-[#a8ff00] text-[#a8ff00]" />
                12 wins
              </strong>
            </div>
            <div className="px-4 py-3">
              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">Today</span>
              <strong className="mt-1 flex items-center gap-1.5 text-sm text-[#a8ff00]">
                <Zap className="size-3.5 fill-[#a8ff00]" />
                +640 pts
              </strong>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                Global competition
              </span>
              <p className="mt-1 text-lg font-black">Top Ranked</p>
            </div>
            <span className="rounded-md border border-[#a8ff00]/20 bg-[#a8ff00]/5 px-3 py-1 text-xs font-bold text-[#a8ff00]">
              Live
            </span>
          </div>
        </>
      )}
      <div className={compact ? "p-2" : "p-3"}>
        {leaders.map((leader) => (
          <div
            className={`grid min-w-0 cursor-default items-center gap-2 border-b border-white/7 last:border-0 sm:gap-3 ${
              compact
                ? "grid-cols-[28px_1fr_auto] px-2 py-2 text-xs"
                : `grid-cols-[28px_minmax(0,1fr)_64px] px-2 py-3 sm:grid-cols-[34px_minmax(110px,1fr)_60px_50px_70px] sm:px-3 ${
                    leader.rank === 1 ? "bg-[#a8ff00]/[0.065]" : ""
                  }`
            }`}
            key={leader.name}
          >
            <span
              className={`grid place-items-center font-black ${
                leader.rank === 1
                  ? "size-7 rounded-full bg-[#a8ff00] text-black"
                  : "text-zinc-500"
              }`}
            >
              #{leader.rank}
            </span>
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#a8ff00]/40 bg-[radial-gradient(circle_at_35%_25%,#344b10,#101703_70%)] text-[11px] font-black text-[#a8ff00] shadow-[0_0_16px_rgba(168,255,0,.1)]">
                {leader.name.slice(0, 2).toUpperCase()}
              </span>
              <span className="truncate font-bold text-zinc-100">{leader.name}</span>
            </div>
            {compact ? (
              <span className="font-black text-[#a8ff00]">{leader.points}</span>
            ) : (
              <>
                <div className="hidden text-center sm:block">
                  <strong className="block text-sm">{leader.accuracy}</strong>
                  <span className="text-[9px] uppercase text-zinc-500">Accuracy</span>
                </div>
                <div className="hidden text-center sm:block">
                  <strong className="block text-sm">{leader.streak}</strong>
                  <span className="text-[9px] uppercase text-zinc-500">Streak</span>
                </div>
                <div className="text-right">
                  <strong className="block text-sm">{leader.points}</strong>
                  <span className="text-[9px] uppercase text-zinc-500">Points</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {!compact && (
        <div className="grid grid-cols-[1fr_auto] items-center border-t border-white/8 bg-white/[0.025]">
          <div className="px-5 py-4">
            <span className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">Your position</span>
            <p className="mt-0.5 text-sm font-black">
              <span className="mr-2 text-[#a8ff00]">#18</span>
              82% accuracy
            </p>
          </div>
          <div
            aria-disabled="true"
            className="flex h-full cursor-default select-none items-center gap-2 border-l border-white/8 px-5 text-sm font-bold text-[#a8ff00]"
          >
            Full board
            <ArrowRight className="size-4" />
          </div>
        </div>
      )}
    </div>
  );
}

function PickCard() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0b0d0e] p-3 shadow-xl shadow-black/30">
      <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase">
        <span>Today&apos;s picks</span>
        <span className="text-[#a8ff00]">3 picks</span>
      </div>
      <div className="space-y-2">
        {picks.map((pick) => (
          <div className="rounded-md border border-white/8 bg-white/[0.025] p-2" key={pick.matchup}>
            <div className="mb-2 flex justify-between text-[8px] uppercase text-zinc-500">
              <span>{pick.league}</span>
              <span>Who wins?</span>
            </div>
            <p className="mb-2 text-[10px] font-bold">{pick.matchup}</p>
            <div className="grid grid-cols-2 gap-1.5">
              <button className="cursor-default rounded bg-white/5 py-1 text-center text-[10px] font-bold" disabled type="button">
                {pick.left}
              </button>
              <button className="cursor-default rounded bg-white/5 py-1 text-center text-[10px] font-bold" disabled type="button">
                {pick.right}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-3 w-full cursor-default rounded-md bg-[#a8ff00] py-2 text-center text-[10px] font-black text-black disabled:opacity-100"
        disabled
        type="button"
      >
        Make picks
      </button>
    </div>
  );
}

export default function CompetitionPage() {
  return (
    <main className="no-card-hover min-h-screen overflow-hidden bg-[#060907] text-white">
      <div className="relative z-20 mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader active="Compete" />
      </div>

      <section className="relative left-1/2 min-h-0 w-screen -translate-x-1/2 overflow-hidden border-b border-white/8 lg:min-h-[720px]">
        <Image
          alt=""
          className="hidden scale-110 object-cover object-center opacity-45 mix-blend-screen lg:block"
          fill
          priority
          sizes="100vw"
          src="/assets/communities-sports-overlay-v4.png"
        />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#020304_3%,rgba(2,3,4,.88)_38%,rgba(2,3,4,.56)_100%)] lg:block" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(0deg,rgba(6,9,7,.28)_0%,transparent_42%,#020304_100%)] lg:block" />
        <div className="absolute right-[7%] top-20 hidden size-56 rounded-full border border-[#a8ff00]/10 lg:block" />
        <div className="absolute right-[4%] top-8 hidden size-80 rounded-full border border-[#a8ff00]/5 lg:block" />
        <div className="relative mx-auto grid min-h-0 min-w-0 max-w-[1480px] items-center gap-16 px-5 py-14 sm:px-8 lg:min-h-[720px] lg:grid-cols-[0.76fr_1.24fr] lg:px-14 lg:py-0">
          <div className="motion-enter min-w-0 max-w-[620px] self-start lg:pt-16">
            <HeroBadge icon={Trophy}>
              Compete
            </HeroBadge>
            <h1 className="text-5xl font-black leading-[0.98] sm:text-7xl lg:text-[5.15rem]">
              Put your knowledge
              <span className="mt-1 block text-[#a8ff00]">to the test.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
              Make predictions, challenge friends, climb leaderboards, and prove you know sports better
              than everyone else.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                className="motion-action group inline-flex items-center gap-3 rounded-md bg-[#a8ff00] px-6 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-[#b9ff36]"
                href="/waitlist"
              >
                Start competing
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
              <Link
                className="motion-action motion-action-dark group inline-flex items-center gap-3 rounded-md border border-white/25 bg-black/40 px-6 py-3.5 text-sm font-bold transition hover:border-[#a8ff00]/70 hover:bg-[#a8ff00]/5"
                href="/communities"
              >
                Find a Community
                <ArrowRight className="size-5 text-[#a8ff00] transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            </div>
            <div className="mt-11 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
              {[
                ["Daily", "Fresh picks"],
                ["Live", "Rankings"],
                ["1v1", "Challenges"],
              ].map(([value, label]) => (
                <div className="border-r border-white/10 px-4 first:pl-0 last:border-0" key={label}>
                  <strong className="block text-xl font-black text-[#a8ff00]">{value}</strong>
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="motion-enter-late relative hidden min-w-0 w-full max-w-[800px] justify-self-end lg:block lg:pl-4">
            <div className="absolute -inset-16 bg-[#a8ff00]/10 blur-3xl" />
            <div className="relative">
              <RankingTable />
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto mt-8 max-w-[1480px] space-y-7 px-5 py-10 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute -left-32 top-[15%] size-80 bg-[#a8ff00]/5 blur-[110px]" />
        <div className="pointer-events-none absolute -right-40 top-[55%] size-96 bg-cyan-500/5 blur-[130px]" />
        <section
          className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.035),rgba(168,255,0,.025))] p-6 sm:p-8"
          id="ways-to-compete"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a8ff00]/70 to-transparent" />
          <div className="text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#a8ff00]">Choose your arena</span>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Three Ways to Compete</h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="relative grid min-w-0 gap-6 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(168,255,0,.055),rgba(255,255,255,.018)_48%,transparent)] p-5 sm:grid-cols-[0.8fr_1.2fr]">
              <span className="pointer-events-none absolute -right-2 -top-8 text-[110px] font-black leading-none text-white/[0.025]">01</span>
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-md border border-[#a8ff00]/30 bg-[#a8ff00]/10">
                  <CalendarDays className="size-7 text-[#a8ff00]" />
                </span>
                <span className="mt-5 block text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">Prediction arena</span>
                <h3 className="mt-4 text-xl font-black text-[#a8ff00]">Daily Picks</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">New opportunities to prove your instincts every day.</p>
                <ul className="mt-5 space-y-3">
                  <CheckItem>Pick winners</CheckItem>
                  <CheckItem>Build streaks</CheckItem>
                  <CheckItem>Track your record</CheckItem>
                </ul>
              </div>
              <div className="relative self-center">
                <div className="absolute -inset-3 bg-[#a8ff00]/5 blur-xl" />
                <PickCard />
              </div>
            </article>

            <article className="relative grid min-w-0 gap-6 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(93,209,255,.045),rgba(255,255,255,.018)_48%,transparent)] p-5 sm:grid-cols-[0.8fr_1.2fr]">
              <span className="pointer-events-none absolute -right-2 -top-8 text-[110px] font-black leading-none text-white/[0.025]">02</span>
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-md border border-[#a8ff00]/30 bg-[#a8ff00]/10">
                  <BarChart3 className="size-7 text-[#a8ff00]" />
                </span>
                <span className="mt-5 block text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">Ranked circuit</span>
                <h3 className="mt-4 text-xl font-black text-[#a8ff00]">Leaderboards</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Compete against the entire community.</p>
                <ul className="mt-5 space-y-3">
                  <CheckItem>Track accuracy</CheckItem>
                  <CheckItem>Climb the ranks</CheckItem>
                  <CheckItem>Earn rewards</CheckItem>
                </ul>
              </div>
              <div className="relative self-center">
                <div className="absolute -inset-3 bg-cyan-400/5 blur-xl" />
                <RankingTable compact />
              </div>
            </article>

            <article className="relative grid min-w-0 gap-6 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(217,93,255,.04),rgba(255,255,255,.018)_48%,transparent)] p-5 sm:grid-cols-[0.8fr_1.2fr]">
              <span className="pointer-events-none absolute -right-2 -top-8 text-[110px] font-black leading-none text-white/[0.025]">03</span>
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-md border border-[#a8ff00]/30 bg-[#a8ff00]/10">
                  <Swords className="size-7 text-[#a8ff00]" />
                </span>
                <span className="mt-5 block text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">Rival mode</span>
                <h3 className="mt-4 text-xl font-black text-[#a8ff00]">Challenges</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Challenge friends or community members.</p>
                <ul className="mt-5 space-y-3">
                  <CheckItem>Head-to-head picks</CheckItem>
                  <CheckItem>Custom matchups</CheckItem>
                  <CheckItem>Bragging rights</CheckItem>
                </ul>
              </div>
              <div className="relative self-center overflow-hidden rounded-lg border border-white/10 bg-[#0b0d0e] p-4">
                <div className="absolute left-1/2 top-0 h-full w-px -skew-x-12 bg-gradient-to-b from-transparent via-[#a8ff00]/25 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <span className="mx-auto grid size-12 place-items-center rounded-full border border-[#a8ff00]/50 bg-[#182305] text-xs font-black text-[#a8ff00]">YOU</span>
                    <p className="mt-2 text-xs font-bold">You</p>
                  </div>
                  <strong className="text-3xl font-black italic text-[#a8ff00]">VS</strong>
                  <div className="text-center">
                    <span className="mx-auto grid size-12 place-items-center rounded-full border border-cyan-300/50 bg-cyan-950/30 text-xs font-black text-cyan-200">RF</span>
                    <p className="mt-2 text-xs font-bold">RivalFan</p>
                  </div>
                </div>
                <div className="mt-5 rounded-md border border-white/8 bg-white/[0.025] p-3 text-center">
                  <p className="text-[10px] uppercase text-zinc-500">Chiefs vs Bills</p>
                  <p className="mt-1 text-sm font-bold">Who wins?</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-black">
                    <button className="cursor-default rounded bg-[#a8ff00] py-2 text-black disabled:opacity-100" disabled type="button">KC</button>
                    <button className="cursor-default rounded bg-white/7 py-2 disabled:opacity-100" disabled type="button">BUF</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_50%_115%,rgba(168,255,0,.11),transparent_48%),#060809] px-6 py-10 sm:px-10">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#a8ff00] to-transparent opacity-70" />
          <p className="text-center text-[11px] font-black uppercase tracking-[0.22em] text-[#a8ff00]">Build your status</p>
          <h2 className="mt-2 text-center text-3xl font-black sm:text-4xl">Reputation is Earned</h2>
          <p className="mt-2 text-center text-zinc-400">The more accurate your predictions, the higher you climb.</p>
          <div className="relative mt-10 grid grid-cols-2 gap-8 sm:grid-cols-5">
            <div className="absolute left-[8%] right-[8%] top-9 hidden h-px bg-gradient-to-r from-orange-400 via-[#a8ff00] to-fuchsia-500 sm:block" />
            {tiers.map(({ name, range, color, Icon }) => (
              <div className="relative text-center" key={name}>
                <span
                  className="relative z-10 mx-auto grid size-[72px] place-items-center rounded-full border-2 bg-[#0b0d0e] shadow-[0_0_22px_var(--tier-color)]"
                  style={{ borderColor: color, "--tier-color": `${color}55` } as React.CSSProperties}
                >
                  <Icon className="size-8" style={{ color }} />
                </span>
                <h3 className="mt-4 text-lg font-black">{name}</h3>
                <p className="mt-1 text-xs text-zinc-500">{range}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative grid overflow-hidden rounded-lg border border-white/10 bg-[#060809] lg:grid-cols-[0.65fr_1.35fr]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#a8ff00] via-[#a8ff00]/30 to-transparent" />
          <div className="relative p-7 sm:p-9">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#a8ff00]">
              <Swords className="size-4" />
              Head-to-head
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Challenge Anyone</h2>
            <p className="mt-4 max-w-sm leading-7 text-zinc-400">
              Create private prediction battles with friends or other fans.
            </p>
            <ul className="mt-7 space-y-3">
              <CheckItem>Bragging rights</CheckItem>
              <CheckItem>Rankings and streaks</CheckItem>
              <CheckItem>Community recognition</CheckItem>
            </ul>
          </div>
          <div className="grid gap-4 border-t border-white/8 bg-[radial-gradient(circle_at_center,rgba(168,255,0,.14),transparent_62%)] p-6 sm:grid-cols-[1fr_220px] lg:border-l lg:border-t-0">
            <div className="relative flex items-center justify-around overflow-hidden rounded-lg border border-[#a8ff00]/25 bg-black/55 p-6">
              <div className="absolute left-1/2 top-0 h-full w-px -skew-x-12 bg-gradient-to-b from-transparent via-[#a8ff00]/35 to-transparent" />
              <div className="text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-full border-2 border-[#a8ff00] bg-[#172205] text-lg font-black">YOU</span>
                <strong className="mt-3 block">You</strong>
                <span className="text-xs text-zinc-500">85% accuracy</span>
              </div>
              <strong className="relative text-5xl font-black italic text-[#a8ff00] drop-shadow-[0_0_16px_rgba(168,255,0,.45)]">VS</strong>
              <div className="text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-full border-2 border-cyan-300 bg-cyan-950/40 text-lg font-black">RF</span>
                <strong className="mt-3 block">RivalFan</strong>
                <span className="text-xs text-zinc-500">81% accuracy</span>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#0b0d0e] p-5">
              <span className="text-[10px] font-bold uppercase text-zinc-500">NBA / Tonight</span>
              <h3 className="mt-2 font-black">Lakers vs Celtics</h3>
              <p className="mt-1 text-xs text-zinc-500">Who wins?</p>
              <div className="mt-5 grid grid-cols-2 gap-2 text-center text-sm font-black">
                <button className="cursor-default rounded bg-white/6 py-3 disabled:opacity-100" disabled type="button">LAL</button>
                <button className="cursor-default rounded bg-[#a8ff00] py-3 text-black disabled:opacity-100" disabled type="button">BOS</button>
              </div>
              <div className="mt-5 flex justify-between border-t border-white/8 pt-4 text-xs">
                <span className="text-zinc-500">Entry <strong className="block text-white">Free</strong></span>
                <span className="text-right text-zinc-500">Ends in <strong className="block text-white">2h 12m</strong></span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2" id="daily-picks">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,#080a0b,#040506)] p-6 sm:p-8">
            <div className="absolute left-0 top-0 h-1 w-28 bg-[#a8ff00]" />
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a8ff00]">Today&apos;s slate</span>
                <h2 className="mt-1 text-2xl font-black">Daily Pick Feed</h2>
              </div>
              <span aria-disabled="true" className="cursor-default select-none text-xs font-bold text-zinc-500">View all</span>
            </div>
            <div className="mt-6 space-y-3">
              {picks.map((pick) => (
                <div className="grid cursor-default grid-cols-[1fr_auto_auto] items-center gap-4 rounded-lg border border-white/8 bg-white/[0.025] p-4" key={pick.matchup}>
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#a8ff00]">{pick.league}</span>
                    <h3 className="mt-1 font-bold">{pick.matchup}</h3>
                    <p className="text-xs text-zinc-500">Who wins?</p>
                  </div>
                  <div className="flex gap-2 text-xs font-black">
                    <button className="cursor-default rounded border border-white/8 bg-white/7 px-3 py-2 disabled:opacity-100" disabled type="button">{pick.left}</button>
                    <button className="cursor-default rounded border border-white/8 bg-white/7 px-3 py-2 disabled:opacity-100" disabled type="button">{pick.right}</button>
                  </div>
                  <span className="text-right text-sm font-black">{pick.total}<small className="block text-[9px] font-normal uppercase text-zinc-500">Picks</small></span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,#080a0b,#040506)] sm:grid-cols-[0.9fr_1.1fr]">
            <div className="absolute right-0 top-0 h-1 w-28 bg-[#a8ff00]" />
            <div className="p-6 sm:p-8">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a8ff00]">Compete together</span>
              <h2 className="mt-1 text-2xl font-black">Community Competition</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Communities take competition to the next level.</p>
              <div className="mt-6 space-y-5">
                {[
                  [Target, "Prediction Contests", "Compete for the best record."],
                  [Users, "Seasonal Rankings", "Climb community leaderboards."],
                  [Trophy, "Tournaments", "Compete in brackets and events."],
                  [CalendarDays, "Weekly Challenges", "New challenges every week."],
                ].map(([Icon, title, copy]) => {
                  const ItemIcon = Icon as typeof Target;
                  return (
                    <div className="flex gap-3" key={title as string}>
                      <ItemIcon className="mt-0.5 size-6 shrink-0 text-[#a8ff00]" />
                      <div>
                        <h3 className="text-sm font-bold">{title as string}</h3>
                        <p className="mt-0.5 text-xs text-zinc-500">{copy as string}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border-t border-white/8 bg-[linear-gradient(135deg,rgba(168,255,0,.08),transparent)] p-5 sm:border-l sm:border-t-0">
              <div className="rounded-[28px] border-4 border-zinc-800 bg-black p-3 shadow-2xl">
                <div className="rounded-[18px] border border-white/8 bg-[#0a0c0d] p-4">
                  <div className="flex items-center gap-3 border-b border-white/8 pb-4">
                    <span className="grid size-10 place-items-center rounded-full bg-[#a8ff00] font-black text-black">NF</span>
                    <div>
                      <p className="text-xs font-black">NFL Community</p>
                      <span className="text-[9px] text-zinc-500">24.5K members</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <RankingTable compact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative grid items-center gap-8 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(105deg,#060809_0%,#080c05_100%)] p-7 sm:p-9 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="absolute -left-14 -top-24 size-56 rounded-full border border-[#a8ff00]/8" />
          <div className="absolute -left-6 -top-16 size-40 rounded-full border border-[#a8ff00]/10" />
          <div className="relative">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a8ff00]">What comes next</span>
            <h2 className="mt-2 text-3xl font-black">The Future of Competition</h2>
            <p className="mt-4 max-w-lg leading-7 text-zinc-400">
              Today, Sideline competition is built around predictions, rankings, and community challenges.
              Tomorrow brings entirely new ways for sports fans to compete together.
            </p>
          </div>
          <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-[#a8ff00]/50 sm:block" />
            {[
              [Target, "Predictions", "Today"],
              [BarChart3, "Rankings", "Today"],
              [Swords, "Challenges", "Today"],
              [CircleHelp, "What's Next", "Coming soon"],
            ].map(([Icon, title, status], index) => {
              const StepIcon = Icon as typeof Target;
              return (
                <div className="relative text-center" key={title as string}>
                  <span className={`relative z-10 mx-auto grid size-14 place-items-center rounded-full border bg-[#101408] ${index === 3 ? "border-[#a8ff00] shadow-[0_0_24px_rgba(168,255,0,.35)]" : "border-[#a8ff00]/40"}`}>
                    <StepIcon className="size-6 text-[#a8ff00]" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold">{title as string}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{status as string}</p>
                </div>
              );
            })}
          </div>
        </section>

        <StadiumCta
          body="Join the waitlist and be among the first fans to make picks, challenge rivals, and climb the Sideline rankings."
          buttonLabel="Start Competing"
          eyebrow="Your run starts here"
          title="Ready to put your knowledge to the test?"
        />
      </div>
    </main>
  );
}
