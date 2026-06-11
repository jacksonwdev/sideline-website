import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Cookie,
  Database,
  Eye,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Sideline",
  description:
    "Learn how Sideline collects, uses, stores, and protects information submitted through sidelinesocials.com.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  ["introduction", "Introduction"],
  ["information-we-collect", "Information We Collect"],
  ["how-we-use-information", "How We Use Information"],
  ["third-party-services", "Third-Party Services"],
  ["data-security", "Data Security"],
  ["cookies", "Cookies and Tracking"],
  ["your-rights", "Your Rights"],
  ["childrens-privacy", "Children's Privacy"],
  ["changes", "Changes to This Policy"],
  ["contact", "Contact Information"],
];

function PolicySection({
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

function BulletList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li className="flex items-start gap-3" key={item}>
          <span className="mt-1.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#b9ff22] text-black">
            <Check className="size-3 stroke-[3]" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
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
              <ShieldCheck className="size-4" />
              Privacy at Sideline
            </div>
            <h1 className="mt-7 text-4xl font-black leading-none sm:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              This policy explains how Sideline handles information collected
              through{" "}
              <a
                className="font-bold text-white underline decoration-[#b9ff22]/50 underline-offset-4"
                href="https://sidelinesocials.com"
              >
                sidelinesocials.com
              </a>
              , including waitlist signups and website usage data.
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
                In this policy
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
                [Database, "Limited collection", "Only data needed to operate and improve Sideline."],
                [LockKeyhole, "Protected systems", "Information is handled through trusted providers."],
                [UserRoundCheck, "Your choices", "Access, correct, delete, or unsubscribe."],
              ].map(([Icon, title, copy]) => {
                const SummaryIcon = Icon as typeof Database;
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

            <PolicySection id="introduction" number="01" title="Introduction">
              <p>
                Sideline (&quot;Sideline,&quot; &quot;we,&quot; &quot;us,&quot;
                or &quot;our&quot;) respects your privacy. This Privacy Policy
                describes the information we collect, how we use and protect
                it, and the choices available to you when you visit our website
                or join the Sideline waitlist.
              </p>
              <p>
                By using sidelinesocials.com or submitting information through
                the website, you acknowledge the practices described in this
                policy.
              </p>
            </PolicySection>

            <PolicySection
              id="information-we-collect"
              number="02"
              title="Information We Collect"
            >
              <p>We may collect information that you provide directly, including:</p>
              <BulletList
                items={[
                  "Your name and email address.",
                  "Information included in waitlist or other form submissions, such as user type, favorite sports, or referral codes.",
                  "Messages or inquiries you send to Sideline.",
                ]}
              />
              <p>
                We may also collect information automatically when you use the
                website, including analytics data, approximate location derived
                from an IP address, browser type, device type, operating system,
                referring pages, pages viewed, and interaction data.
              </p>
            </PolicySection>

            <PolicySection
              id="how-we-use-information"
              number="03"
              title="How We Use Information"
            >
              <p>Sideline may use collected information to:</p>
              <BulletList
                items={[
                  "Create, maintain, and manage the Sideline waitlist.",
                  "Send product announcements, launch information, and other updates you request.",
                  "Understand website usage and improve the platform, content, and user experience.",
                  "Respond to questions, support requests, or other inquiries.",
                  "Protect the website, prevent misuse, and comply with legal obligations.",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="third-party-services"
              number="04"
              title="Third-Party Services"
            >
              <p>
                We use service providers to operate Sideline. These providers
                may process information on our behalf under their own terms and
                privacy practices.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Supabase", "Stores waitlist submissions and related account data."],
                  ["Kit", "Manages email subscribers and product communications."],
                  ["Analytics providers", "Help us understand traffic and website performance."],
                ].map(([title, copy]) => (
                  <div
                    className="rounded-lg border border-white/10 bg-white/[0.025] p-4"
                    key={title}
                  >
                    <h3 className="font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
                  </div>
                ))}
              </div>
              <p>
                We do not sell your personal information. We may disclose
                information when required by law, to protect our rights, or in
                connection with a business transaction.
              </p>
            </PolicySection>

            <PolicySection id="data-security" number="05" title="Data Security">
              <p>
                We use reasonable administrative, technical, and organizational
                safeguards designed to protect personal information from
                unauthorized access, alteration, disclosure, or destruction.
                Information is stored and processed using third-party platforms,
                including Supabase and Kit.
              </p>
              <p>
                No method of online transmission or storage is completely
                secure. We cannot guarantee absolute security, but we work to
                use appropriate protections for the information we maintain.
              </p>
            </PolicySection>

            <PolicySection
              id="cookies"
              number="06"
              title="Cookies and Tracking Technologies"
            >
              <div className="flex items-start gap-4 rounded-lg border border-[#b9ff22]/20 bg-[#b9ff22]/[0.045] p-5">
                <Cookie className="mt-0.5 size-6 shrink-0 text-[#b9ff22]" />
                <p>
                  Sideline may use cookies, pixels, local storage, and similar
                  technologies to operate the website, remember preferences,
                  measure performance, and understand how visitors use the site.
                </p>
              </div>
              <p>
                You can control cookies through your browser settings. Blocking
                some cookies may affect how portions of the website function.
                Where required, we will request consent before using
                non-essential tracking technologies.
              </p>
            </PolicySection>

            <PolicySection id="your-rights" number="07" title="Your Rights">
              <p>
                Depending on where you live, you may have rights concerning
                your personal information. You may contact Sideline to request:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Access", "A copy of personal information we maintain about you."],
                  ["Correction", "Updates to inaccurate or incomplete information."],
                  ["Deletion", "Deletion of your personal information, subject to applicable exceptions."],
                  ["Unsubscribe", "Removal from marketing emails using the link in any message or by contacting us."],
                ].map(([title, copy]) => (
                  <div
                    className="rounded-lg border border-white/10 bg-white/[0.025] p-5"
                    key={title}
                  >
                    <h3 className="font-black text-[#b9ff22]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
                  </div>
                ))}
              </div>
              <p>
                We may need to verify your identity before completing certain
                requests. You may unsubscribe from Sideline emails at any time.
              </p>
            </PolicySection>

            <PolicySection
              id="childrens-privacy"
              number="08"
              title="Children's Privacy"
            >
              <p>
                Sideline is not intended for children under 13, and we do not
                knowingly collect personal information from children under 13.
                If you believe a child under 13 has provided personal
                information to us, please contact us so we can review and delete
                it as appropriate.
              </p>
            </PolicySection>

            <PolicySection id="changes" number="09" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy as Sideline develops or as
                legal, operational, or technical requirements change. When we
                make changes, we will post the revised policy on this page and
                update the effective date at the top.
              </p>
              <p>
                We encourage you to review this page periodically to stay
                informed about our privacy practices.
              </p>
            </PolicySection>

            <PolicySection id="contact" number="10" title="Contact Information">
              <div className="relative overflow-hidden rounded-lg border border-[#b9ff22]/30 bg-[linear-gradient(135deg,rgba(185,255,34,.09),rgba(255,255,255,.02))] p-6 sm:p-8">
                <div className="absolute -right-12 -top-12 size-40 rounded-full border border-[#b9ff22]/10" />
                <Mail className="size-7 text-[#b9ff22]" />
                <h3 className="mt-5 text-xl font-black text-white">
                  Questions about your privacy?
                </h3>
                <p className="mt-3 max-w-xl text-zinc-300">
                  Contact Sideline with privacy questions or requests concerning
                  access, correction, deletion, or email preferences.
                </p>
                <a
                  className="motion-action motion-action-dark mt-6 inline-flex items-center gap-2 rounded-md border border-[#b9ff22]/40 bg-black/30 px-5 py-3 text-sm font-black text-white"
                  href="mailto:privacy@sidelinesocials.com"
                >
                  privacy@sidelinesocials.com
                  <ArrowUpRight className="size-4 text-[#b9ff22]" />
                </a>
              </div>
            </PolicySection>

            <div className="mt-4 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-2">
                <Eye className="size-4" />
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
