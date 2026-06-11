"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Home", "/"],
  ["Communities", "/communities"],
  ["Creators", "/creators"],
  ["Compete", "/compete"],
  ["About", "/about"],
];

export function SiteHeader({
  active,
}: Readonly<{
  active?: "Home" | "Communities" | "Creators" | "Compete" | "About";
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative left-1/2 z-20 w-screen -translate-x-1/2 border-y border-white/10 border-t-[#b9ff22]/70 bg-black/45 shadow-[0_0_34px_rgba(185,255,34,0.08)] backdrop-blur-xl">
      <div className="relative mx-auto grid max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-4 sm:gap-3 sm:px-8 sm:py-5 lg:grid-cols-[260px_minmax(0,1fr)_340px] lg:gap-0 lg:px-14">
        <Link
          href="/"
          className="group relative flex w-fit min-w-0 items-center"
          aria-label="Sideline home"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(185,255,34,0.24)_0%,rgba(185,255,34,0.11)_30%,rgba(185,255,34,0.04)_52%,transparent_86%)] opacity-0 blur-xl transition-[opacity,transform] duration-700 ease-out group-hover:scale-110 group-hover:opacity-90 sm:-inset-x-8 sm:-inset-y-6 sm:blur-2xl"
          />
          <Image
            src="/assets/sideline-logo-transparent.png"
            alt="Sideline"
            width={1571}
            height={255}
            priority
            className="relative h-auto w-[132px] object-contain object-left transition duration-300 group-hover:scale-[1.025] group-hover:drop-shadow-[0_0_14px_rgba(185,255,34,.32)] sm:h-12 sm:w-auto sm:max-w-full"
          />
        </Link>
        <nav className="hidden items-center justify-center gap-10 text-sm font-medium text-zinc-200 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={`relative transition hover:text-[#b9ff22] ${
                label === active ? "text-[#b9ff22]" : ""
              }`}
            >
              {label}
              {label === active ? (
                <span className="absolute -bottom-4 left-0 h-0.5 w-full rounded-full bg-[#b9ff22]" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3 lg:border-l lg:border-white/10 lg:pl-8">
          <Link
            href="/waitlist"
            className="motion-action inline-flex min-w-[54px] items-center justify-center whitespace-nowrap rounded-md bg-[#b9ff22] px-3 py-3 text-xs font-black text-black shadow-[0_0_30px_rgba(185,255,34,0.24)] transition hover:-translate-y-0.5 hover:bg-[#d0ff53] hover:shadow-[0_0_38px_rgba(185,255,34,0.35)] sm:min-w-[176px] sm:rounded-lg sm:px-7 sm:text-sm lg:min-w-[198px]"
          >
            <span className="sm:hidden">Join</span>
            <span className="hidden sm:inline">Join the Waitlist</span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`relative inline-flex size-10 shrink-0 items-center justify-center rounded-md border bg-[#0a0d0d] transition duration-300 lg:hidden ${
              menuOpen
                ? "border-[#b9ff22]/70 text-[#b9ff22] shadow-[0_0_20px_rgba(185,255,34,.12)]"
                : "border-white/15 text-zinc-100 hover:border-[#b9ff22]/70 hover:text-[#b9ff22]"
            }`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`absolute left-0 right-0 top-full z-30 h-[260px] overflow-hidden sm:left-8 sm:right-8 lg:hidden ${
            menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className={`rounded-b-lg border-x border-b border-white/10 bg-[#070909]/98 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {navItems.map(([label, href]) => {
              const isActive = label === active;

              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`flex items-center justify-between rounded-md px-4 py-3 text-sm font-bold transition-colors duration-200 ${
                    isActive
                      ? "bg-[#b9ff22]/10 text-[#b9ff22]"
                      : "text-zinc-200 hover:bg-white/[0.05] hover:text-[#b9ff22]"
                  }`}
                >
                  <span>{label}</span>
                  {isActive ? (
                    <span className="size-1.5 rounded-full bg-[#b9ff22] shadow-[0_0_10px_rgba(185,255,34,0.8)]" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
