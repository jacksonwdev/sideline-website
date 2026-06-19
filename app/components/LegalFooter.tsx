import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerColumns = [
  {
    heading: "Product",
    links: [
      ["Communities", "/communities"],
      ["Creators", "/creators"],
      ["Competition", "/compete"],
    ],
  },
  {
    heading: "Company",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
    ],
  },
  {
    heading: "Legal",
    links: [
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
    ],
  },
];

export function LegalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070a0b]">
      <div className="mx-auto max-w-[1480px] px-5 py-10 sm:px-8 sm:py-14 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Sideline home"
              className="inline-block transition duration-300 hover:drop-shadow-[0_0_14px_rgba(185,255,34,0.28)]"
            >
              <Image
                alt="Sideline"
                className="h-auto w-[150px]"
                height={255}
                src="/assets/sideline-logo-transparent.png"
                width={1571}
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              The sports platform for communities, creators, predictions, and
              competition — not a sportsbook, chat app, or creator subscription
              page.
            </p>
            <Link
              href="/waitlist"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-black text-[#b9ff22] transition hover:text-[#d0ff53]"
            >
              Join the Waitlist
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                strokeWidth={3}
              />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-5 sm:gap-6 lg:contents">
          {footerColumns.map(({ heading, links }) => (
            <nav key={heading} aria-label={heading}>
              <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-zinc-300">
                <span className="size-1.5 rounded-full bg-[#b9ff22] shadow-[0_0_8px_rgba(185,255,34,0.7)]" />
                {heading}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="inline-block transition-colors duration-200 hover:text-[#b9ff22]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs leading-5 text-zinc-500 lg:flex-row lg:items-start lg:justify-between">
          <p className="shrink-0">© {year} Sideline. All rights reserved.</p>
          <p className="max-w-2xl lg:text-right">
            Sideline is not affiliated with, endorsed by, or sponsored by any
            professional league, team, player, or players association. Sideline is
            not a sportsbook and does not accept wagers.
          </p>
        </div>
      </div>
    </footer>
  );
}
