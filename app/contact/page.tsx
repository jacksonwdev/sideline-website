import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  CircleHelp,
  Handshake,
  Headphones,
  Mail,
  Newspaper,
  Rocket,
  UserRound,
} from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Sideline",
  description:
    "Contact Sideline about creator partnerships, business opportunities, press, investment, support, or general questions.",
  alternates: {
    canonical: "/contact",
  },
};

const categories = [
  {
    title: "General Questions",
    copy: "Questions about Sideline, the waitlist, or what we're building.",
    Icon: CircleHelp,
  },
  {
    title: "Creator Partnerships",
    copy: "Build a sports community and grow alongside the platform.",
    Icon: UserRound,
  },
  {
    title: "Business Partnerships",
    copy: "Explore strategic, technology, or community opportunities.",
    Icon: Handshake,
  },
  {
    title: "Press & Media",
    copy: "Company information, interviews, and media requests.",
    Icon: Newspaper,
  },
  {
    title: "Investor Inquiries",
    copy: "Learn more about Sideline's vision and future.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Technical Support",
    copy: "Report a problem or get help using the website.",
    Icon: Headphones,
  },
];

const faqs = [
  {
    question: "When should I expect a response?",
    answer:
      "We aim to respond within 48-72 hours. Partnership, press, and investor inquiries may take a little longer when additional review is needed.",
  },
  {
    question: "Can creators contact Sideline before launch?",
    answer:
      "Yes. We welcome early conversations with sports creators interested in building communities, testing tools, or shaping the creator experience.",
  },
  {
    question: "Where can I review Sideline's policies?",
    answer:
      "Our Privacy Policy explains how we handle information, and our Terms of Service outline the rules for using Sideline.",
  },
];

export default function ContactPage() {
  return (
    <main className="no-card-hover min-h-screen overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_76%_8%,rgba(185,255,34,.1),transparent_27%),radial-gradient(circle_at_10%_54%,rgba(185,255,34,.04),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader />

        <header className="relative grid min-h-[470px] items-center gap-10 overflow-hidden border-b border-white/10 py-16 lg:grid-cols-[1fr_.75fr]">
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-lg border border-[#b9ff22]/30 bg-[#b9ff22]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#b9ff22]">
              <Mail className="size-4" />
              Contact Sideline
            </div>
            <h1 className="mt-7 text-5xl font-black leading-none sm:text-7xl">
              Get In Touch
            </h1>
            <p className="mt-6 text-xl leading-8 text-zinc-300 sm:text-2xl">
              We&apos;d love to hear from you.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-zinc-400 sm:max-w-2xl">
              Whether you&apos;re a fan, creator, partner, member of the press,
              or potential investor, send us a note and we&apos;ll route it to
              the right person.
            </p>
          </div>

          <div className="relative hidden min-h-72 lg:block">
            <div className="absolute inset-8 rounded-full border border-[#b9ff22]/10" />
            <div className="absolute inset-20 rounded-full border border-[#b9ff22]/20" />
            <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#b9ff22]/40 bg-[#b9ff22]/10 text-[#b9ff22] shadow-[0_0_50px_rgba(185,255,34,.14)]">
              <Rocket className="size-10" />
            </div>
            {[
              "left-[10%] top-[12%]",
              "right-[8%] top-[20%]",
              "left-[18%] bottom-[8%]",
              "right-[12%] bottom-[12%]",
            ].map((position) => (
              <span
                className={`absolute ${position} size-2 rounded-full bg-[#b9ff22] shadow-[0_0_12px_#b9ff22]`}
                key={position}
              />
            ))}
          </div>
        </header>

        <section className="py-14 sm:py-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              Start the conversation
            </span>
            <h2 className="mt-3 text-2xl font-black sm:text-4xl">
              What can we help with?
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ title, copy, Icon }) => (
              <article
                className="rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(185,255,34,.045),rgba(255,255,255,.018))] p-6"
                key={title}
              >
                <span className="grid size-11 place-items-center rounded-md border border-[#b9ff22]/25 bg-[#b9ff22]/8 text-[#b9ff22]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-white/10 py-14 sm:py-16 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              Send a message
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Tell us what&apos;s on your mind.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-zinc-400">
              Choose the category that best fits your message. We&apos;ll make
              sure it reaches the right part of the Sideline team.
            </p>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.025] p-5">
              <p className="text-sm font-black text-white">Response time</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Most messages receive a response within{" "}
                <strong className="text-[#b9ff22]">48-72 hours</strong>.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link
                className="flex items-center justify-between rounded-md border border-white/10 px-4 py-3 font-bold text-zinc-300 transition hover:border-[#b9ff22]/35 hover:text-white"
                href="/privacy"
              >
                Privacy Policy
                <ArrowUpRight className="size-4 text-[#b9ff22]" />
              </Link>
              <Link
                className="flex items-center justify-between rounded-md border border-white/10 px-4 py-3 font-bold text-zinc-300 transition hover:border-[#b9ff22]/35 hover:text-white"
                href="/terms"
              >
                Terms of Service
                <ArrowUpRight className="size-4 text-[#b9ff22]" />
              </Link>
            </div>
          </div>

          <ContactForm />
        </section>

        <section className="border-t border-white/10 py-14 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
                Quick answers
              </span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-8 space-y-3">
              {faqs.map(({ question, answer }) => (
                <article
                  className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-[32px_minmax(0,1fr)]"
                  key={question}
                >
                  <span className="grid size-8 place-items-center rounded-md bg-[#b9ff22]/10 text-[#b9ff22]">
                    <ChevronRight className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-black text-white">{question}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {answer}
                    </p>
                    {question === "Where can I review Sideline's policies?" ? (
                      <div className="mt-3 flex gap-4 text-sm font-bold">
                        <Link className="text-[#b9ff22]" href="/privacy">
                          Privacy Policy
                        </Link>
                        <Link className="text-[#b9ff22]" href="/terms">
                          Terms of Service
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
