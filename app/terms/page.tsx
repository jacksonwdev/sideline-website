import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Ban,
  FileText,
  Gavel,
  Mail,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Terms of Service | Sideline",
  description:
    "Review the terms that apply when using Sideline and sidelinesocials.com.",
};

const sections = [
  ["acceptance", "Acceptance of Terms"],
  ["eligibility", "Eligibility"],
  ["accounts", "User Accounts"],
  ["acceptable-use", "Acceptable Use"],
  ["intellectual-property", "Intellectual Property"],
  ["user-content", "User Content"],
  ["availability", "Platform Availability"],
  ["warranties", "Disclaimer of Warranties"],
  ["liability", "Limitation of Liability"],
  ["termination", "Termination"],
  ["changes", "Changes to Terms"],
  ["governing-law", "Governing Law"],
  ["contact", "Contact Information"],
];

function TermsSection({
  id,
  number,
  title,
  children,
}: Readonly<{
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section
      className="scroll-mt-28 border-t border-white/10 py-10 first:border-0 first:pt-0"
      id={id}
    >
      <div className="grid gap-4 sm:grid-cols-[52px_minmax(0,1fr)]">
        <span className="grid size-11 place-items-center rounded-md border border-[#b9ff22]/25 bg-[#b9ff22]/8 text-sm font-black text-[#b9ff22]">
          {number}
        </span>
        <div>
          <h2 className="text-2xl font-black text-white sm:text-3xl">{title}</h2>
          <div className="mt-5 space-y-4 text-[15px] leading-7 text-zinc-300 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="no-card-hover min-h-screen overflow-hidden bg-[#070a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_6%,rgba(185,255,34,.09),transparent_27%),radial-gradient(circle_at_12%_44%,rgba(185,255,34,.035),transparent_22%)]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
        <SiteHeader />

        <header className="relative overflow-hidden border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="absolute right-[4%] top-1/2 hidden size-72 -translate-y-1/2 rounded-full border border-[#b9ff22]/8 lg:block" />
          <div className="absolute right-[10%] top-1/2 hidden size-44 -translate-y-1/2 rounded-full border border-[#b9ff22]/12 lg:block" />
          <div className="relative max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-lg border border-[#b9ff22]/30 bg-[#b9ff22]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#b9ff22]">
              <Scale className="size-4" />
              The Sideline Rules
            </div>
            <h1 className="mt-7 text-4xl font-black leading-none sm:text-7xl">
              Terms of Service
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              These terms explain the rules for accessing Sideline and{" "}
              <a
                className="font-bold text-white underline decoration-[#b9ff22]/50 underline-offset-4"
                href="https://sidelinesocials.com"
              >
                sidelinesocials.com
              </a>
              , including our pre-launch waitlist and future community features.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <span className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-bold text-zinc-300">
                Effective Date: June 9, 2026
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-zinc-400">
                Company: Sideline
              </span>
            </div>
          </div>
        </header>

        <div className="flex gap-12 py-12 lg:py-16">
          <aside className="hidden w-[260px] shrink-0 lg:block">
            <nav className="sticky top-8 rounded-lg border border-white/10 bg-[#0a0d0e]/90 p-5">
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
                In these terms
              </p>
              <ol className="space-y-1">
                {sections.map(([id, label], index) => (
                  <li key={id}>
                    <a
                      className="flex gap-3 rounded-md px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-white/[0.035] hover:text-white"
                      href={`#${id}`}
                    >
                      <span className="text-[11px] font-black text-zinc-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="mx-auto min-w-0 w-full max-w-4xl">
            <div className="mb-10 grid gap-3 sm:grid-cols-3">
              {[
                [FileText, "Pre-launch terms", "These rules cover the website and waitlist today."],
                [Users, "Community standards", "Treat other people honestly and respectfully."],
                [ShieldCheck, "Features may evolve", "Sideline may change as the platform develops."],
              ].map(([Icon, title, copy]) => {
                const SummaryIcon = Icon as typeof FileText;
                return (
                  <div
                    className="rounded-lg border border-white/10 bg-white/[0.025] p-5"
                    key={title as string}
                  >
                    <SummaryIcon className="size-5 text-[#b9ff22]" />
                    <h2 className="mt-4 text-sm font-black text-white">
                      {title as string}
                    </h2>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                      {copy as string}
                    </p>
                  </div>
                );
              })}
            </div>

            <TermsSection id="acceptance" number="01" title="Acceptance of Terms">
              <p>
                These Terms of Service (&quot;Terms&quot;) are an agreement
                between you and Sideline. By visiting sidelinesocials.com,
                joining the waitlist, or using any Sideline service, you agree
                to follow these Terms and our{" "}
                <Link
                  className="font-bold text-white underline decoration-[#b9ff22]/50 underline-offset-4"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                If you do not agree, please do not use the website or submit
                information to Sideline.
              </p>
            </TermsSection>

            <TermsSection id="eligibility" number="02" title="Eligibility">
              <p>
                You may use Sideline only if you can legally agree to these
                Terms and your use is permitted under the laws that apply to
                you. You are responsible for complying with all applicable
                local, state, national, and international laws.
              </p>
              <p>
                Some future features may have additional eligibility
                requirements, including age, location, or identity restrictions.
                We will explain those requirements before you use the relevant
                feature.
              </p>
            </TermsSection>

            <TermsSection id="accounts" number="03" title="User Accounts">
              <p>
                Sideline currently offers waitlist and email signup
                functionality. As the platform develops, certain features may
                require an account. You agree to provide accurate information
                and keep it current.
              </p>
              <p>
                You are responsible for protecting your login credentials and
                for activity under your account. Tell us promptly if you believe
                your account or information has been used without permission.
              </p>
            </TermsSection>

            <TermsSection id="acceptable-use" number="04" title="Acceptable Use">
              <p>
                Sideline should be a place where sports communities can compete
                and connect without abuse. You may not use Sideline to:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Harass or threaten", "Do not bully, intimidate, stalk, or target other people."],
                  ["Promote hate", "Do not post hate speech or attack people based on protected characteristics."],
                  ["Send spam", "Do not distribute repetitive, deceptive, or unauthorized promotions."],
                  ["Impersonate others", "Do not misrepresent who you are or falsely claim an affiliation."],
                  ["Break the law", "Do not use Sideline for fraud, illegal gambling, or other unlawful activity."],
                  ["Disrupt the service", "Do not scrape, probe, overload, bypass, or interfere with the platform."],
                ].map(([title, copy]) => (
                  <div
                    className="rounded-lg border border-white/10 bg-white/[0.025] p-5"
                    key={title}
                  >
                    <Ban className="size-5 text-[#b9ff22]" />
                    <h3 className="mt-4 font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
                  </div>
                ))}
              </div>
              <p>
                We may investigate suspected misuse and take reasonable action
                to protect Sideline, its users, and the public.
              </p>
            </TermsSection>

            <TermsSection
              id="intellectual-property"
              number="05"
              title="Intellectual Property"
            >
              <p>
                Sideline and its website, branding, logos, designs, software,
                text, graphics, and other platform materials are owned by
                Sideline or its licensors and are protected by applicable
                intellectual property laws.
              </p>
              <p>
                These Terms give you a limited, personal, non-exclusive,
                non-transferable right to use Sideline for its intended purpose.
                They do not transfer ownership of Sideline materials to you.
              </p>
            </TermsSection>

            <TermsSection id="user-content" number="06" title="User Content">
              <p>
                Future Sideline features may let you post comments,
                predictions, creator content, profile information, or other
                material (&quot;User Content&quot;). You keep ownership of your
                User Content.
              </p>
              <p>
                By posting User Content, you give Sideline a worldwide,
                non-exclusive, royalty-free license to host, store, reproduce,
                display, distribute, and adapt that content only as reasonably
                necessary to operate, improve, promote, and protect the service.
                This license ends when the content is deleted, except where
                retention is technically or legally required.
              </p>
              <p>
                You are responsible for your User Content and must have the
                rights needed to share it. We may remove content that violates
                these Terms or applicable law.
              </p>
            </TermsSection>

            <TermsSection
              id="availability"
              number="07"
              title="Platform Availability"
            >
              <div className="rounded-lg border border-[#b9ff22]/20 bg-[#b9ff22]/[0.045] p-5">
                <p className="font-bold text-white">
                  Sideline is currently a pre-launch platform.
                </p>
                <p className="mt-2">
                  Features shown on the website may be concepts, previews, or
                  plans rather than currently available services.
                </p>
              </div>
              <p>
                Sideline may modify, test, limit, suspend, replace, or
                discontinue any feature or the entire service at any time. We do
                not promise that a feature will launch, remain available, or
                work in a particular way.
              </p>
              <p>
                Future predictions, rankings, competitions, rewards, betting-
                related tools, or similar features may be subject to additional
                rules, eligibility criteria, geographic restrictions, and legal
                requirements. Participation may require acceptance of separate
                terms.
              </p>
            </TermsSection>

            <TermsSection
              id="warranties"
              number="08"
              title="Disclaimer of Warranties"
            >
              <p>
                To the fullest extent permitted by law, Sideline is provided
                &quot;as is&quot; and &quot;as available.&quot; We do not promise
                that the website or future platform will always be available,
                secure, error-free, accurate, or suitable for a particular
                purpose.
              </p>
              <p>
                Sideline content is for community, entertainment, and
                informational purposes. It is not financial, legal, gambling,
                or professional advice. Nothing on Sideline guarantees the
                outcome of a game, prediction, ranking, or competition.
              </p>
            </TermsSection>

            <TermsSection
              id="liability"
              number="09"
              title="Limitation of Liability"
            >
              <p>
                To the fullest extent permitted by law, Sideline and its
                officers, employees, contractors, and service providers will
                not be liable for indirect, incidental, special, consequential,
                exemplary, or punitive damages, or for lost profits, data,
                goodwill, or opportunities resulting from your use of or
                inability to use the service.
              </p>
              <p>
                Nothing in these Terms excludes liability that cannot legally
                be excluded or limits rights that applicable consumer law gives
                you.
              </p>
            </TermsSection>

            <TermsSection id="termination" number="10" title="Termination">
              <p>
                You may stop using Sideline at any time and may unsubscribe from
                emails using the link included in our messages.
              </p>
              <p>
                We may restrict, suspend, or terminate access to Sideline if we
                reasonably believe you violated these Terms, created risk or
                legal exposure, harmed other users, or misused the service.
                Provisions that logically should continue after termination
                will remain effective.
              </p>
            </TermsSection>

            <TermsSection id="changes" number="11" title="Changes to Terms">
              <p>
                We may update these Terms as Sideline develops or when legal,
                operational, or technical needs change. We will post revised
                Terms on this page and update the effective date.
              </p>
              <p>
                If a change is significant, we may provide additional notice.
                Continuing to use Sideline after updated Terms take effect means
                you accept the revised Terms.
              </p>
            </TermsSection>

            <TermsSection id="governing-law" number="12" title="Governing Law">
              <p>
                These Terms are governed by the laws applicable in the
                jurisdiction where Sideline is legally established, without
                regard to conflict-of-law principles, unless the law where you
                live requires otherwise.
              </p>
              <p>
                Mandatory consumer protections and other rights that cannot be
                waived under applicable law remain unaffected.
              </p>
            </TermsSection>

            <TermsSection id="contact" number="13" title="Contact Information">
              <div className="relative overflow-hidden rounded-lg border border-[#b9ff22]/30 bg-[linear-gradient(135deg,rgba(185,255,34,.09),rgba(255,255,255,.02))] p-6 sm:p-8">
                <div className="absolute -right-12 -top-12 size-40 rounded-full border border-[#b9ff22]/10" />
                <Mail className="size-7 text-[#b9ff22]" />
                <h3 className="mt-5 text-xl font-black text-white">
                  Questions about these Terms?
                </h3>
                <p className="mt-3 max-w-xl text-zinc-300">
                  Contact Sideline if you have a question about these Terms or
                  how they apply to the website or future platform.
                </p>
                <a
                  className="motion-action motion-action-dark mt-6 inline-flex items-center gap-2 rounded-md border border-[#b9ff22]/40 bg-black/30 px-5 py-3 text-sm font-black text-white"
                  href="mailto:legal@sidelinesocials.com"
                >
                  legal@sidelinesocials.com
                  <ArrowUpRight className="size-4 text-[#b9ff22]" />
                </a>
              </div>
            </TermsSection>

            <div className="mt-4 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-2">
                <Gavel className="size-4" />
                Last updated June 9, 2026
              </span>
              <Link className="font-bold text-zinc-300 hover:text-[#b9ff22]" href="/">
                Return to Sideline
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
