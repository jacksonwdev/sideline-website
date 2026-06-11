import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, House } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Page Not Found | Sideline",
  description: "The page you requested could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-117px)] overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(185,255,34,0.12),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(185,255,34,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(185,255,34,.035)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader />

        <section className="flex min-h-[620px] items-center justify-center py-14 text-center sm:min-h-[700px] sm:py-16 lg:py-20">
          <div className="motion-enter relative mx-auto flex max-w-4xl flex-col items-center">
            <div className="relative mb-10">
              <div className="absolute inset-0 scale-125 rounded-full bg-[#b9ff22]/10 blur-3xl" />
              <Image
                src="/assets/sideline-logo-transparent.png"
                alt="Sideline"
                width={1571}
                height={255}
                priority
                className="relative h-auto w-[190px] object-contain sm:w-[250px]"
              />
            </div>

            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b9ff22]">
              Error 404
            </p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-normal sm:text-7xl sm:leading-[0.95] lg:text-[5.5rem]">
              You&apos;re off
              <br />
              <span className="block text-[#b9ff22]">the sideline.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              This page doesn&apos;t exist or has moved. Let&apos;s get you
              back where the action is.
            </p>

            <Link
              href="/"
              className="motion-action group mt-9 inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#b9ff22] px-8 text-base font-black text-black shadow-[0_0_35px_rgba(185,255,34,0.25)] hover:bg-[#d0ff53]"
            >
              <House className="size-5" strokeWidth={2.75} />
              Return Home
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-1"
                strokeWidth={3}
              />
            </Link>

            <div className="mt-14 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#b9ff22]/40" />
              More than sports
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#b9ff22]/40" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
