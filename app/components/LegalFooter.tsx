import Link from "next/link";

export function LegalFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070a0b]">
      <div className="mx-auto grid max-w-[1480px] gap-4 px-5 py-8 text-xs leading-5 text-zinc-500 sm:px-8 lg:grid-cols-[0.65fr_1.2fr_auto] lg:px-14">
        <p>
          Sideline is a social sports community platform for fans, creators,
          and analysts.
        </p>
        <p>
          Sideline is not affiliated with, endorsed by, or sponsored by any
          professional league, team, player, or players association. Sideline
          is not a sportsbook and does not accept wagers.
        </p>
        <nav className="flex gap-5 font-bold text-zinc-400">
          <Link className="transition hover:text-[#b9ff22]" href="/contact">
            Contact
          </Link>
          <Link className="transition hover:text-[#b9ff22]" href="/privacy">
            Privacy
          </Link>
          <Link className="transition hover:text-[#b9ff22]" href="/terms">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
