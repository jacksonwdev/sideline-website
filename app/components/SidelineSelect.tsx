"use client";

import { Check, ChevronDown } from "lucide-react";
import {
  KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SidelineSelectProps = {
  id: string;
  name: string;
  options: SelectOption[];
  placeholder: string;
  required?: boolean;
  className?: string;
};

export function SidelineSelect({
  id,
  name,
  options,
  placeholder,
  required = false,
  className = "",
}: SidelineSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxId = useId();
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const root = rootRef.current;
    const form = root?.closest("form");

    function handlePointerDown(event: PointerEvent) {
      if (!root?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleReset() {
      setValue("");
      setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    form?.addEventListener("reset", handleReset);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      form?.removeEventListener("reset", handleReset);
    };
  }, []);

  function choose(option: SelectOption) {
    setValue(option.value);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((current) => !current);
      return;
    }

    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
      return;
    }

    event.preventDefault();
    const selectedIndex = options.findIndex((option) => option.value === value);
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex =
      selectedIndex === -1
        ? direction === 1
          ? 0
          : options.length - 1
        : (selectedIndex + direction + options.length) % options.length;

    setValue(options[nextIndex].value);
    setOpen(true);
  }

  return (
    <div className={`relative ${className}`} ref={rootRef}>
      <select
        aria-hidden="true"
        className="pointer-events-none absolute size-px opacity-0"
        name={name}
        onChange={() => undefined}
        required={required}
        tabIndex={-1}
        value={value}
      >
        <option value="" />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`flex h-14 w-full items-center justify-between rounded-md border bg-[#090b0c] px-4 text-left outline-none transition ${
          open
            ? "border-[#b9ff22]/70 ring-2 ring-[#b9ff22]/10"
            : "border-white/15 hover:border-white/30 focus:border-[#b9ff22]/70 focus:ring-2 focus:ring-[#b9ff22]/10"
        }`}
        id={id}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        ref={triggerRef}
        type="button"
      >
        <span className={selectedOption ? "text-white" : "text-zinc-400"}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`size-5 text-[#b9ff22] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute inset-x-0 top-[calc(100%+8px)] z-50 origin-top overflow-hidden rounded-md border border-[#b9ff22]/25 bg-[#090c0b] p-1.5 shadow-[0_22px_55px_rgba(0,0,0,.7),0_0_28px_rgba(185,255,34,.08)] transition duration-150 ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-1 scale-[.98] opacity-0"
        }`}
        id={listboxId}
        role="listbox"
      >
        {options.map((option) => {
          const selected = option.value === value;

          return (
            <button
              aria-selected={selected}
              className={`flex min-h-11 w-full items-center justify-between rounded px-3.5 text-left text-sm font-semibold transition ${
                selected
                  ? "bg-[#b9ff22]/15 text-[#b9ff22]"
                  : "text-zinc-300 hover:bg-[#b9ff22]/10 hover:text-[#b9ff22] focus:bg-[#b9ff22]/10 focus:text-[#b9ff22] focus:outline-none"
              }`}
              key={option.value}
              onClick={() => choose(option)}
              role="option"
              type="button"
            >
              {option.label}
              <Check
                className={`size-4 transition-opacity ${
                  selected ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
