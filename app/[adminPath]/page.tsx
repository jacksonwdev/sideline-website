import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import {
  CalendarDays,
  ContactRound,
  LogOut,
  Mail,
  TrendingUp,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import {
  hasAdminSession,
  isAdminPathSegment,
} from "../lib/admin-auth";
import { getSupabaseAdminClient } from "../lib/supabase-admin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Analytics | Sideline",
  robots: {
    index: false,
    follow: false,
  },
};

function centralTimeBoundary(startOfWeek = false) {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const year = Number(values.year);
  const month = Number(values.month);
  const day = Number(values.day);
  const weekdays: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const weekday = weekdays[values.weekday] ?? 1;
  const daysSinceMonday = weekday === 0 ? 6 : weekday - 1;
  const localDate = new Date(
    Date.UTC(year, month - 1, day - (startOfWeek ? daysSinceMonday : 0)),
  );
  const offsetPart = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    timeZoneName: "longOffset",
  })
    .formatToParts(localDate)
    .find((part) => part.type === "timeZoneName")?.value;
  const offsetMatch = offsetPart?.match(/GMT([+-])(\d{2}):(\d{2})/);
  const offsetMinutes = offsetMatch
    ? (offsetMatch[1] === "+" ? 1 : -1) *
      (Number(offsetMatch[2]) * 60 + Number(offsetMatch[3]))
    : 0;

  return new Date(localDate.getTime() - offsetMinutes * 60_000);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Chicago",
  }).format(new Date(value));
}

function MetricCard({
  title,
  value,
  detail,
  icon: Icon,
}: {
  title: string;
  value: number;
  detail: string;
  icon: typeof UsersRound;
}) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.04),rgba(185,255,34,.025))] p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b9ff22]/55 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-zinc-500">
            {title}
          </p>
          <p className="mt-4 text-4xl font-black text-white">{value}</p>
          <p className="mt-2 text-xs text-zinc-500">{detail}</p>
        </div>
        <span className="grid size-11 place-items-center rounded-md border border-[#b9ff22]/25 bg-[#b9ff22]/8 text-[#b9ff22]">
          <Icon className="size-5" />
        </span>
      </div>
    </article>
  );
}

export default async function AdminDashboardPage({
  params,
}: {
  params: Promise<{ adminPath: string }>;
}) {
  const { adminPath } = await params;

  if (!isAdminPathSegment(adminPath)) {
    notFound();
  }

  if (!(await hasAdminSession())) {
    redirect(`/${adminPath}/login`);
  }

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#070a0b] px-5 text-white">
        <div className="max-w-xl rounded-lg border border-red-400/25 bg-red-400/8 p-7">
          <h1 className="text-2xl font-black">Dashboard data is not configured.</h1>
          <p className="mt-3 leading-7 text-zinc-300">
            Add the server-only Supabase service role key to this deployment,
            then reload the page.
          </p>
        </div>
      </main>
    );
  }

  const today = centralTimeBoundary().toISOString();
  const week = centralTimeBoundary(true).toISOString();

  const [
    totalWaitlistResult,
    todayResult,
    weekResult,
    contactCountResult,
    recentWaitlistResult,
    recentContactsResult,
  ] = await Promise.all([
    supabase.from("waitlist").select("*", { count: "exact", head: true }),
    supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .gte("created_at", today),
    supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .gte("created_at", week),
    supabase
      .from("contact_submissions")
      .select("*", { count: "exact", head: true }),
    supabase
      .from("waitlist")
      .select(
        "id,name,email,user_type,favorite_sport,referral_code,created_at",
      )
      .order("created_at", { ascending: false })
      .limit(10),
    supabase
      .from("contact_submissions")
      .select("id,name,email,category,subject,message,created_at")
      .order("created_at", { ascending: false })
      .limit(10),
  ]);

  const firstError = [
    totalWaitlistResult.error,
    todayResult.error,
    weekResult.error,
    contactCountResult.error,
    recentWaitlistResult.error,
    recentContactsResult.error,
  ].find(Boolean);

  if (firstError) {
    console.error("Admin analytics query failed:", firstError);
  }

  const recentWaitlist = recentWaitlistResult.data ?? [];
  const recentContacts = recentContactsResult.data ?? [];

  return (
    <main className="min-h-screen bg-[#070a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(185,255,34,.09),transparent_28%)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 py-6 sm:px-8 lg:px-14">
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-6">
          <div className="flex items-center gap-5">
            <Image
              alt="Sideline"
              className="h-auto w-36 sm:w-44"
              height={255}
              priority
              src="/assets/sideline-logo-transparent.png"
              width={1571}
            />
            <span className="hidden h-8 w-px bg-white/10 sm:block" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
                Private workspace
              </p>
              <h1 className="mt-1 text-xl font-black sm:text-2xl">
                Analytics Dashboard
              </h1>
            </div>
          </div>
          <form action="/api/admin/logout" method="post">
            <button
              className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 bg-white/[0.025] px-4 text-sm font-bold text-zinc-300 transition hover:border-[#b9ff22]/50 hover:text-[#b9ff22]"
              type="submit"
            >
              <LogOut className="size-4" />
              Sign Out
            </button>
          </form>
        </header>

        <section className="py-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b9ff22]">
                Live overview
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Sideline Growth
              </h2>
            </div>
            <p className="text-sm text-zinc-500">
              Times shown in Central Time
            </p>
          </div>

          {firstError ? (
            <p className="mt-6 rounded-md border border-red-400/25 bg-red-400/8 px-4 py-3 text-sm text-red-200">
              Some analytics could not be loaded. Check the server logs for
              details.
            </p>
          ) : null}

          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              detail="All recorded signups"
              icon={UsersRound}
              title="Total Waitlist"
              value={totalWaitlistResult.count ?? 0}
            />
            <MetricCard
              detail="Since midnight Central"
              icon={UserRoundPlus}
              title="Signups Today"
              value={todayResult.count ?? 0}
            />
            <MetricCard
              detail="Since Monday"
              icon={TrendingUp}
              title="Signups This Week"
              value={weekResult.count ?? 0}
            />
            <MetricCard
              detail="All contact inquiries"
              icon={ContactRound}
              title="Contact Submissions"
              value={contactCountResult.count ?? 0}
            />
          </div>
        </section>

        <section className="grid gap-6 pb-12 xl:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0a0d0e]/90">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <UserRoundPlus className="size-5 text-[#b9ff22]" />
                <h2 className="font-black">Recent Signups</h2>
              </div>
              <span className="text-xs text-zinc-500">
                Latest {recentWaitlist.length}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-white/[0.025] text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                  <tr>
                    <th className="px-5 py-3">Person</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Sports</th>
                    <th className="px-5 py-3">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {recentWaitlist.map((signup) => (
                    <tr
                      className="border-t border-white/7 text-zinc-300"
                      key={signup.id}
                    >
                      <td className="px-5 py-4">
                        <p className="font-bold text-white">{signup.name}</p>
                        <p className="mt-1 text-xs text-zinc-500">
                          {signup.email}
                        </p>
                      </td>
                      <td className="px-4 py-4 capitalize">
                        {signup.user_type.replace("-", " ")}
                      </td>
                      <td className="max-w-48 px-4 py-4 text-zinc-400">
                        {signup.favorite_sport || "Not provided"}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-xs text-zinc-500">
                        {formatDate(signup.created_at)}
                      </td>
                    </tr>
                  ))}
                  {!recentWaitlist.length ? (
                    <tr>
                      <td
                        className="px-5 py-10 text-center text-zinc-500"
                        colSpan={4}
                      >
                        No waitlist signups yet.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0a0d0e]/90">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-[#b9ff22]" />
                <h2 className="font-black">Recent Contact Submissions</h2>
              </div>
              <span className="text-xs text-zinc-500">
                Latest {recentContacts.length}
              </span>
            </div>
            <div className="divide-y divide-white/7">
              {recentContacts.map((contact) => (
                <article className="p-5" key={contact.id}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-bold">{contact.name}</p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {contact.email}
                      </p>
                    </div>
                    <span className="rounded-md border border-[#b9ff22]/20 bg-[#b9ff22]/6 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#b9ff22]">
                      {contact.category}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-bold text-zinc-200">
                    {contact.subject || "No subject"}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
                    {contact.message}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs text-zinc-600">
                    <CalendarDays className="size-3.5" />
                    {formatDate(contact.created_at)}
                  </p>
                </article>
              ))}
              {!recentContacts.length ? (
                <p className="px-5 py-10 text-center text-sm text-zinc-500">
                  No contact submissions yet.
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
