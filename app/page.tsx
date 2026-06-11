import Image from "next/image";
import Link from "next/link";
import { ArrowRight, House, Radio, UsersRound } from "lucide-react";
import { HeroBadge } from "./components/HeroBadge";
import { SiteHeader } from "./components/SiteHeader";
import { StadiumCta } from "./components/StadiumCta";

const features = [
  {
    icon: "CM",
    title: "Communities",
    body: "Join or create private rooms for every sport, slate, and betting style.",
  },
  {
    icon: "PK",
    title: "Predictions",
    body: "Post picks, track your record, and build a verified reputation.",
  },
  {
    icon: "LB",
    title: "Leaderboards",
    body: "Compete for the top spot with transparent win rates and streaks.",
  },
  {
    icon: "PR",
    title: "Premium Access",
    body: "Unlock exclusive creator feeds, chats, and early card drops.",
  },
  {
    icon: "$",
    title: "Earn Rewards",
    body: "Creators earn from paid rooms while fans earn from activity.",
  },
];

function PhoneVisual({
  src,
  alt,
  className = "",
}: Readonly<{
  src: string;
  alt: string;
  className?: string;
}>) {
  return (
    <div
      className={`relative aspect-[390/844] overflow-visible rounded-[3rem] shadow-[0_45px_95px_rgba(0,0,0,0.82)] ${className}`}
    >
      <div className="absolute -inset-5 rounded-[4rem] bg-[#b9ff22]/6 blur-2xl" />
      <div className="absolute inset-x-8 bottom-[-36px] h-16 rounded-full bg-black/80 blur-2xl" />
      <div className="relative h-full overflow-hidden rounded-[3rem] border border-white/15 bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_91%,transparent_100%)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="320px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_55%_20%,transparent_0%,rgba(2,3,5,0.06)_52%,rgba(2,3,5,0.46)_100%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-[linear-gradient(110deg,rgba(255,255,255,0.18),transparent_18%,transparent_74%,rgba(255,255,255,0.07))]" />
      </div>
    </div>
  );
}

function AppFeedPhone() {
  return (
    <PhoneVisual
      src="/assets/landing-phone-feed.png"
      alt="Neon Sideline sports feed app screen"
      className="w-[276px] rotate-[7deg] sm:w-[294px] lg:w-[314px]"
    />
  );
}

function LeaderboardPhone() {
  return (
    <PhoneVisual
      src="/assets/landing-phone-leaderboard.png"
      alt="Neon Sideline leaderboard app screen"
      className="w-[260px] rotate-[-15deg] sm:w-[274px] lg:w-[294px]"
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_68%_20%,rgba(117,255,95,0.18),transparent_30%),radial-gradient(circle_at_18%_45%,rgba(185,255,34,0.08),transparent_24%)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader active="Home" />

        <section
          id="home"
          className="grid min-h-0 items-center gap-12 py-14 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr] lg:py-0"
        >
          <div className="motion-enter max-w-3xl self-start lg:pt-16">
            <HeroBadge icon={House}>
              Home
            </HeroBadge>
            <h1 className="text-6xl font-black uppercase leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-[5.7rem] xl:text-[6.25rem]">
              More Than Sports.
              <br />
              It&apos;s Your{" "}
              <span className="relative inline-block text-[#b9ff22]">
                Sideline
                <span className="absolute -bottom-4 left-0 h-3 w-full rounded-full bg-[#b9ff22] opacity-95 blur-[1px]" />
              </span>
              .
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Join the conversations, make predictions, compete on
              leaderboards, and unlock premium communities from your favorite
              creators.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/waitlist"
                className="motion-action group inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#b9ff22] px-8 text-base font-black text-black shadow-[0_0_35px_rgba(185,255,34,0.28)] transition hover:-translate-y-0.5 hover:bg-[#d0ff53]"
              >
                Join the Waitlist
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
              <Link
                href="/communities"
                className="motion-action motion-action-dark group inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[0.03] px-8 text-base font-bold text-white transition hover:border-[#b9ff22]/70 hover:bg-[#b9ff22]/5"
              >
                Explore Communities
                <ArrowRight className="size-5 text-[#b9ff22] transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            </div>
          </div>

          <div className="motion-enter-late relative hidden min-h-[700px] lg:block">
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b9ff22]/6 blur-3xl" />
            <div className="absolute right-[-16%] top-8 h-[580px] w-[760px] rounded-full border border-[#b9ff22]/8 bg-[#b9ff22]/[0.015] blur-xl" />
            <div className="absolute left-[14%] top-8 h-[690px] w-[330px] rotate-[10deg] rounded-[4rem] bg-[#b9ff22]/[0.012] blur-2xl" />
            <div className="relative flex items-center justify-center pt-2 lg:justify-end lg:pr-4 xl:pr-12">
              <div className="relative z-20 translate-x-8 sm:translate-x-16 lg:translate-x-14">
                <AppFeedPhone />
              </div>
              <div className="relative z-10 -ml-20 mt-20 hidden sm:block lg:-ml-14 xl:-ml-8">
                <LeaderboardPhone />
              </div>
            </div>
          </div>
        </section>

        <div id="communities" className="scroll-mt-24" />
        <section
          id="competition"
          className="relative z-30 mt-8 grid scroll-mt-24 gap-3 pb-10 sm:grid-cols-2 lg:grid-cols-5"
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-white/10 bg-[#0b0f12]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#b9ff22] text-lg font-black text-[#b9ff22]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-zinc-400">
                    {feature.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section
          id="for-creators"
          className="grid gap-5 pb-16 pt-2 lg:grid-cols-[1fr_320px]"
        >
          <div className="grid gap-8 rounded-lg border border-white/10 bg-[#0b0f12]/80 p-7 sm:p-9 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-black uppercase tracking-wide text-[#b9ff22]">
                For Creators
              </p>
              <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
                Build. Engage. Earn.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-zinc-300">
                Turn your passion into a thriving community. Monetize your
                sports content, launch paid groups, and get rewarded as your
                audience grows.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
              <div className="mb-7 flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-zinc-400">Revenue</p>
                  <p className="mt-3 text-3xl font-black text-white">$12,540</p>
                  <p className="text-sm text-zinc-500">vs last month</p>
                </div>
                <div className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300">
                  This Month
                </div>
              </div>
              <div className="flex h-44 items-end gap-2 border-b border-l border-white/10 px-2">
                {[23, 39, 36, 40, 31, 55, 49, 70, 64, 82, 55, 67, 79, 94, 84, 76, 77].map(
                  (height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-[#b9ff22]/20 to-[#b9ff22]"
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
              <p className="mt-5 text-sm font-black text-[#75ff5f]">+23%</p>
            </div>
          </div>

          <aside
            className="flex flex-col rounded-lg border border-white/10 bg-[#0b0f12]/80 p-7 sm:p-9"
          >
            <h2 className="text-2xl font-bold leading-tight text-white">
              Ready to grow your community?
            </h2>
            <a
              href="/waitlist"
              className="motion-action mt-8 inline-flex h-14 w-full items-center justify-center rounded-lg bg-[#b9ff22] px-5 text-sm font-black text-black transition hover:bg-[#d0ff53]"
            >
              Start Your Community
            </a>
            <p className="mt-5 text-sm text-zinc-400">It&apos;s free to get started.</p>
            <div className="mt-8 flex flex-1 items-center border-t border-white/10 py-8">
              <div className="w-full rounded-lg border border-[#b9ff22]/20 bg-[#b9ff22]/[0.055] p-5">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#b9ff22]/10 text-[#b9ff22]">
                    <Radio className="size-6" strokeWidth={2.25} />
                  </span>
                  <div>
                    <p className="text-3xl font-black leading-none text-white">24/7</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#b9ff22]">
                      Always-on community
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm leading-5 text-zinc-400">
                  <UsersRound className="size-4 shrink-0 text-zinc-500" />
                  Fans can connect before, during, and after every game.
                </div>
              </div>
            </div>
          </aside>
        </section>

        <StadiumCta
          body="Get early access to the place where sports conversations, predictions, creators, and competition finally come together."
          buttonLabel="Claim Early Access"
          eyebrow="The game continues here"
          title="Your sports world deserves one home."
        />
      </div>
    </main>
  );
}
