"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/detection", label: "Detection" },
  { href: "/mitigation", label: "Mitigation" },
  { href: "/command-center", label: "Command Center" },
  { href: "/intelligence", label: "Intelligence" },
] as const;

export function GlobalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-sm">
      <div className="mx-auto grid h-[52px] w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0 px-4 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-4 md:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3 md:max-w-[220px] lg:max-w-none"
        >
          <span
            className="size-6 shrink-0 border border-zinc-600 bg-zinc-900 sm:size-7"
            aria-hidden
          />
          <span className="truncate font-heading text-xs font-semibold tracking-tight text-zinc-100 sm:text-sm">
            Aegis Defense
          </span>
        </Link>

        <div className="hidden min-w-0 items-center justify-center justify-self-center px-2 md:flex">
          <span
            className={cn(
              "inline-flex min-w-[10.5rem] shrink-0 items-center gap-2 whitespace-nowrap rounded-none border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500",
            )}
          >
            <span className="shrink-0 text-radar" aria-hidden>
              ●
            </span>
            <span className="shrink-0">COMM</span>
            <span className="shrink-0 text-zinc-600">· STBY</span>
          </span>
        </div>

        <div className="flex min-w-0 items-center justify-end gap-2 justify-self-end sm:gap-3">
          <nav
            className="hidden items-center gap-5 lg:flex lg:gap-6"
            aria-label="Primary navigation"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500 transition-colors duration-100 ease-linear hover:text-zinc-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="flex size-9 shrink-0 items-center justify-center border border-zinc-700 bg-zinc-900 text-zinc-400 lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="size-4" strokeWidth={1.5} />
            ) : (
              <Menu className="size-4" strokeWidth={1.5} />
            )}
          </button>

          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "shrink-0 rounded-none border border-zinc-500 bg-zinc-950 px-2.5 py-2 font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-300 sm:px-4 sm:text-[11px]",
              "shadow-none transition-colors duration-100 ease-linear",
              "hover:border-radar hover:bg-radar/10 hover:text-radar",
              "focus-visible:border-radar focus-visible:ring-1 focus-visible:ring-radar",
            )}
          >
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Request Demo</span>
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-b border-zinc-800 bg-zinc-950 py-3 lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 md:px-8"
            aria-label="Mobile navigation"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400 transition-colors duration-100 ease-linear hover:bg-zinc-900 hover:text-radar"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
