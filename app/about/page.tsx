import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  MessageCircle,
  Mic2,
  Rocket,
  ShieldCheck,
  Star,
  Target,
  Trophy,
  TrendingUp,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import { HeroBadge } from "../components/HeroBadge";
import { SiteHeader } from "../components/SiteHeader";
import { StadiumCta } from "../components/StadiumCta";

export const metadata: Metadata = {
  title: "About | Sideline",
  description:
    "Learn why Sideline is building a dedicated home for sports communities, creators, competition, and connection.",
};

const missionItems = [
  {
    title: "Connect Fans",
    copy: "Build meaningful communities around shared passions.",
    Icon: Users,
  },
  {
    title: "Empower Creators",
    copy: "Help creators build stronger relationships with their audiences.",
    Icon: UserPlus,
  },
  {
    title: "Reward Engagement",
    copy: "Create new ways for fans to participate instead of only watching.",
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
    copy: "Competition should reward knowledge, participation, and engagement.",
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
  { label: "Communities", Icon: Users, position: "left-1/2 top-0 -translate-x-1/2" },
  { label: "Predictions", Icon: TrendingUp, position: "right-[7%] top-[20%]" },
  { label: "Competition", Icon: Trophy, position: "right-[8%] bottom-[8%]" },
  { label: "Events", Icon: CalendarDays, position: "left-1/2 bottom-[8%] -translate-x-1/2" },
  { label: "Discussions", Icon: MessageCircle, position: "left-[7%] bottom-[8%]" },
  { label: "Creators", Icon: Mic2, position: "left-[8%] top-[20%]" },
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
      <div className="absolute inset-[24%] rounded-full border border-[#b9ff22]/15" />
      <div className="absolute left-1/2 top-1/2 size-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b9ff22]/8 blur-3xl" />

      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 600 600">
        <g stroke="#b9ff22" strokeOpacity=".45" strokeWidth="1.5">
          <line x1="300" y1="300" x2="300" y2="72" />
          <line x1="300" y1="300" x2="505" y2="168" />
          <line x1="300" y1="300" x2="510" y2="445" />
          <line x1="300" y1="300" x2="300" y2="445" />
          <line x1="300" y1="300" x2="92" y2="440" />
          <line x1="300" y1="300" x2="96" y2="166" />
        </g>
        <g fill="#b9ff22">
          <circle cx="300" cy="188" r="4" />
          <circle cx="402" cy="234" r="4" />
          <circle cx="402" cy="370" r="4" />
          <circle cx="300" cy="370" r="4" />
          <circle cx="198" cy="370" r="4" />
          <circle cx="198" cy="234" r="4" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#b9ff22]/60 bg-[#0b1104] shadow-[0_0_50px_rgba(185,255,34,.28)]">
        <LogoSymbol className="h-10 w-12" />
      </div>

      {ecosystem.map(({ label, Icon, position }) => (
        <div className={`absolute ${position} text-center`} key={label}>
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

        <section className="relative left-1/2 min-h-0 w-screen -translate-x-1/2 overflow-hidden border-b border-white/10 bg-[#040607] lg:min-h-[720px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(185,255,34,.12),transparent_34%),radial-gradient(circle_at_12%_72%,rgba(185,255,34,.05),transparent_28%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(185,255,34,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(185,255,34,.035)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:linear-gradient(to_right,transparent,black_55%,black)]" />
          <div className="relative mx-auto grid min-h-0 max-w-[1480px] items-center gap-12 px-5 py-14 sm:px-8 lg:min-h-[720px] lg:grid-cols-[0.88fr_1.12fr] lg:px-14 lg:py-0">
            <div className="motion-enter max-w-[610px] self-start lg:pt-16">
              <HeroBadge icon={Star}>
                About Sideline
              </HeroBadge>
              <h1 className="text-5xl font-black leading-[0.98] sm:text-7xl">
                Sports were always
                <span className="block text-[#b9ff22]">meant to be shared.</span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-zinc-300">
                The debates, predictions, personalities, rivalries, and moments
                between games are what turn sports into culture.
              </p>
              <p className="mt-4 max-w-lg text-lg leading-8 text-zinc-300">
                Sideline is building the place where all of it belongs.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  className="motion-action group inline-flex items-center gap-3 rounded-md bg-[#b9ff22] px-7 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-[#d0ff53]"
                  href="/waitlist"
                >
                  Join the Waitlist
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                </Link>
                <Link
                  className="motion-action motion-action-dark group inline-flex items-center gap-3 rounded-md border border-white/25 bg-black/35 px-7 py-3.5 text-sm font-bold transition hover:border-[#b9ff22]/60 hover:bg-[#b9ff22]/5"
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

        <section className="relative my-7 overflow-hidden rounded-lg border border-white/10 bg-[#060809]/95 px-6 py-10 text-center sm:px-10">
          <Image
            alt=""
            className="object-cover opacity-18"
            fill
            sizes="(max-width: 1480px) 100vw, 1480px"
            src="/assets/about-sports-culture-hero-v1.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/62 to-black/85" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-3xl font-black sm:text-4xl">
              Sports Bring People Together. Platforms Don&apos;t.
            </h2>
            <p className="mt-4 text-zinc-300">
              Today&apos;s fans are scattered across social media, group chats,
              creator platforms, forums, and prediction apps.
            </p>
            <p className="mt-3 text-zinc-300">
              We believe sports communities deserve a home built specifically for them.
            </p>
            <p className="mt-5 font-black text-[#b9ff22]">
              Sideline brings fans, creators, predictions, competition, and community into one experience.
            </p>
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-[#060809]/95 p-6 sm:p-8">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
            Our Mission
          </span>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {missionItems.map(({ title, copy, Icon }) => (
              <article
                className="grid grid-cols-[60px_1fr] items-center gap-4 rounded-lg border border-[#b9ff22]/20 bg-[radial-gradient(circle_at_0%_50%,rgba(185,255,34,.1),transparent_38%),rgba(255,255,255,.02)] p-5"
                key={title}
              >
                <span className="grid size-14 place-items-center rounded-full border border-[#b9ff22]/45 bg-[#b9ff22]/8 text-[#b9ff22]">
                  <Icon className="size-7" />
                </span>
                <div>
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7 grid overflow-hidden rounded-lg border border-white/10 bg-[#060809]/95 lg:grid-cols-[0.56fr_1.44fr]">
          <div className="relative flex flex-col justify-center border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
              The Sideline Ecosystem
            </span>
            <h2 className="mt-3 text-4xl font-black">Everything Connected.</h2>
            <p className="mt-5 max-w-sm leading-7 text-zinc-400">
              Sideline is designed to bring every part of the sports experience together
              in one seamless ecosystem.
            </p>
          </div>
          <div className="relative min-h-[430px] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(185,255,34,.1),transparent_55%)] p-5">
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#b9ff22]/10" />
            <HeroNetwork />
          </div>
        </section>

        <section className="mt-7 rounded-lg border border-white/10 bg-[#060809]/95 p-6 sm:p-8">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
            What We&apos;re Building
          </span>
          <div className="relative mt-7 grid gap-4 md:grid-cols-3">
            <div className="absolute left-[12%] right-[12%] top-0 hidden h-px bg-[#b9ff22]/50 md:block" />
            {[
              {
                title: "Today",
                Icon: Target,
                items: ["Communities", "Creator tools", "Predictions", "Rankings"],
              },
              {
                title: "Tomorrow",
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
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
            Our Core Values
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
          body="Join the waitlist and help shape a platform built to bring sports fans, creators, and communities together."
          buttonLabel="Join the Sideline"
          eyebrow="Be part of the beginning"
          title="Ready to help build the future of sports communities?"
        />
      </div>
    </main>
  );
}
