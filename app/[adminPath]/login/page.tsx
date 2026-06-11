import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import {
  hasAdminSession,
  isAdminPathSegment,
} from "../../lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin Login | Sideline",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLoginPage({
  params,
  searchParams,
}: {
  params: Promise<{ adminPath: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { adminPath } = await params;

  if (!isAdminPathSegment(adminPath)) {
    notFound();
  }

  if (await hasAdminSession()) {
    redirect(`/${adminPath}`);
  }

  const { error } = await searchParams;

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#070a0b] px-5 py-12 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(185,255,34,.12),transparent_32%)]" />
      <div className="relative w-full max-w-md rounded-lg border border-white/12 bg-[#0a0d0e]/95 p-7 shadow-[0_30px_90px_rgba(0,0,0,.6)] sm:p-9">
        <Image
          alt="Sideline"
          className="h-auto w-44"
          height={255}
          priority
          src="/assets/sideline-logo-transparent.png"
          width={1571}
        />
        <div className="mt-9 flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-md border border-[#b9ff22]/30 bg-[#b9ff22]/8 text-[#b9ff22]">
            <LockKeyhole className="size-5" />
          </span>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b9ff22]">
              Restricted
            </p>
            <h1 className="mt-1 text-2xl font-black">Admin Analytics</h1>
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-zinc-400">
          Enter the administrator password to access private Sideline data.
        </p>

        <form action="/api/admin/login" className="mt-7" method="post">
          <input name="adminPath" type="hidden" value={adminPath} />
          <label className="text-sm font-bold" htmlFor="admin-password">
            Password
          </label>
          <input
            autoComplete="current-password"
            className="mt-3 h-14 w-full rounded-md border border-white/15 bg-black/30 px-4 outline-none transition placeholder:text-zinc-600 focus:border-[#b9ff22]/70 focus:ring-2 focus:ring-[#b9ff22]/10"
            id="admin-password"
            name="password"
            placeholder="Enter admin password"
            required
            type="password"
          />

          {error ? (
            <p
              className="mt-4 rounded-md border border-red-400/25 bg-red-400/8 px-4 py-3 text-sm text-red-200"
              role="alert"
            >
              {error === "config"
                ? "Admin access is not configured on this deployment."
                : "That password is not valid."}
            </p>
          ) : null}

          <button
            className="motion-action mt-6 h-14 w-full rounded-md bg-[#b9ff22] text-sm font-black text-black shadow-[0_0_30px_rgba(185,255,34,.2)] hover:bg-[#d0ff53]"
            type="submit"
          >
            Open Dashboard
          </button>
        </form>
      </div>
    </main>
  );
}
