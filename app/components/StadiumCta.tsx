import Image from "next/image";
import Link from "next/link";

type StadiumCtaProps = {
  title: string;
  body: string;
  buttonLabel: string;
  href?: string;
  eyebrow?: string;
};

export function StadiumCta({
  title,
  body,
  buttonLabel,
  href = "/waitlist",
  eyebrow,
}: StadiumCtaProps) {
  return (
    <section className="relative my-8 min-h-[360px] overflow-hidden rounded-lg border border-[#b9ff22]/65 bg-black px-6 py-9 shadow-[0_0_48px_rgba(185,255,34,.14)] sm:px-10 sm:py-12">
      <Image
        alt=""
        className="pointer-events-none object-cover object-[62%_center] opacity-70 sm:object-center sm:opacity-85"
        fill
        sizes="(max-width: 1480px) 100vw, 1480px"
        src="/assets/creators-cta-crowd-v1.png"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#020305_0%,rgba(2,3,5,.92)_42%,rgba(2,3,5,.36)_100%)] sm:bg-[linear-gradient(90deg,#020305_0%,rgba(2,3,5,.82)_48%,rgba(2,3,5,.14)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020305] to-transparent" />
      <div className="relative z-10 flex min-h-[288px] flex-col justify-center">
        {eyebrow ? (
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="max-w-4xl text-4xl font-black leading-[1.03] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
          {body}
        </p>
        <Link
          className="motion-action mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-[#b9ff22] px-8 text-center text-sm font-black text-black shadow-[0_0_28px_rgba(185,255,34,.2)] transition hover:bg-[#d0ff53]"
          href={href}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
