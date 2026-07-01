import { Star } from "lucide-react";

const foundingValueProps = [
  "Reserve your username before launch.",
  "Earn permanent founding member status.",
  "Help shape communities before they open.",
  "Get first access when features launch.",
];

export function FoundingValueStrip() {
  return (
    <div className="rounded-xl border border-[#b9ff22]/20 bg-[#b9ff22]/[0.04] px-4 py-4 sm:px-6">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#b9ff22]">
        Why join before launch
      </p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {foundingValueProps.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs leading-5 text-zinc-300 sm:text-sm">
            <Star className="mt-0.5 size-3.5 shrink-0 text-[#b9ff22]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
