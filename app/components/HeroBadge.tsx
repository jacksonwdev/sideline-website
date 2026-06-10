import type { LucideIcon } from "lucide-react";

export function HeroBadge({
  icon: Icon,
  children,
}: Readonly<{
  icon: LucideIcon;
  children: React.ReactNode;
}>) {
  return (
    <span className="motion-badge mb-6 inline-flex items-center gap-3 rounded-lg border border-[#b9ff22]/35 bg-[#b9ff22]/8 px-5 py-2.5 text-sm font-black uppercase text-[#b9ff22] shadow-[0_0_22px_rgba(185,255,34,.08)]">
      <Icon className="size-5" strokeWidth={2.4} />
      {children}
    </span>
  );
}
