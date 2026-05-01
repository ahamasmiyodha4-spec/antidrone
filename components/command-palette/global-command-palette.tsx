"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Entry = {
  id: string;
  group: string;
  label: string;
  keywords?: string[];
  href?: string;
  action?: "demo" | "support";
};

const ENTRIES: Entry[] = [
  {
    id: "threat-uas-441",
    group: "Active Threats",
    label: "UAS-TRACK-441 · Class II · corridor 7B",
    keywords: ["drone", "track", "threat", "uas"],
    href: "/detection",
  },
  {
    id: "threat-rf-anom",
    group: "Active Threats",
    label: "RF-ANOM-09 · 5.8 GHz burst · triangulated",
    keywords: ["rf", "anomaly", "ghz"],
    href: "/detection",
  },
  {
    id: "threat-corridor",
    group: "Active Threats",
    label: "PERIM-ALERT-02 · north fence · speed 14 m/s",
    keywords: ["perimeter", "fence", "alert"],
    href: "/detection",
  },
  {
    id: "hw-rf-jammer",
    group: "Hardware Specs",
    label: "RF jammer stack · bands / ERP / cooling",
    keywords: ["jammer", "hardware", "rf", "spec"],
    href: "/#hardware",
  },
  {
    id: "hw-radar",
    group: "Hardware Specs",
    label: "Phased array radar · coverage & track capacity",
    keywords: ["radar", "array", "x-band"],
    href: "/#hardware",
  },
  {
    id: "comp-itar",
    group: "Compliance (ITAR)",
    label: "ITAR / export classification matrix",
    keywords: ["itar", "export", "eccn", "compliance"],
    href: "/intelligence",
  },
  {
    id: "comp-euc",
    group: "Compliance (ITAR)",
    label: "End-user certificate workflow",
    keywords: ["certificate", "euc", "compliance"],
    href: "/intelligence",
  },
  {
    id: "qa-support",
    group: "Quick Actions",
    label: "Contact Support",
    keywords: ["email", "help", "ticket"],
    action: "support",
  },
  {
    id: "qa-demo",
    group: "Quick Actions",
    label: "Initiate Demo",
    keywords: ["request", "brief", "sales"],
    action: "demo",
  },
];

const GROUP_ORDER = [
  "Active Threats",
  "Hardware Specs",
  "Compliance (ITAR)",
  "Quick Actions",
] as const;

export function GlobalCommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const run = useCallback(
    (entry: Entry) => {
      setOpen(false);
      if (entry.href) {
        router.push(entry.href);
        return;
      }
      if (entry.action === "demo" || entry.action === "support") {
        router.push("/#contact");
      }
    },
    [router],
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-[200] bg-black/88 transition-opacity duration-100 ease-linear",
            "data-open:opacity-100 data-closed:opacity-0",
          )}
        />
        <Dialog.Popup
          className={cn(
            "fixed top-[32%] left-1/2 z-[201] w-[min(100%-1.5rem,560px)] -translate-x-1/2 -translate-y-1/2",
            "border border-radar bg-black p-0 font-mono text-[13px] text-radar shadow-[0_0_40px_-8px_rgba(0,255,65,0.35)]",
            "rounded-none outline-none",
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            "duration-100",
          )}
        >
          <Dialog.Title className="sr-only">
            Secure database query
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            Search classified index, hardware records, compliance, and actions.
          </Dialog.Description>

          <div className="border-b border-radar/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-radar/70">
            SECURE_QUERY / RESOLVER · AUTH OK
          </div>

          <Command
            className="flex flex-col bg-black text-radar"
            label="Secure database query"
            shouldFilter
            loop
          >
            <div className="flex items-stretch border-b border-radar/35">
              <span className="flex shrink-0 items-center border-r border-radar/35 bg-black px-2.5 py-2.5 text-[11px] text-radar/55">
                QUERY&gt;
              </span>
              <div className="relative flex min-w-0 flex-1 items-center gap-1 pr-2">
                <Command.Input
                  placeholder="Enter filter tokens…"
                  className={cn(
                    "h-10 w-full min-w-0 bg-black py-2 pr-6 pl-2 text-[13px] text-radar caret-radar",
                    "placeholder:text-radar/35 outline-none",
                  )}
                />
                <span
                  className="pointer-events-none absolute right-2 top-1/2 h-4 w-2 -translate-y-1/2 bg-radar animate-terminal-caret"
                  aria-hidden
                />
              </div>
            </div>

            <Command.List className="max-h-[min(52vh,420px)] overflow-y-auto overflow-x-hidden px-0 py-1">
              <Command.Empty className="px-3 py-6 text-center text-[12px] text-radar/50">
                No matching records in secure index.
              </Command.Empty>
              {GROUP_ORDER.map((group) => (
                <Command.Group
                  key={group}
                  heading={group}
                  className={cn(
                    "px-0 py-1",
                    "[&_[cmdk-group-heading]]:sticky [&_[cmdk-group-heading]]:top-0 [&_[cmdk-group-heading]]:z-10",
                    "[&_[cmdk-group-heading]]:border-b [&_[cmdk-group-heading]]:border-radar/25 [&_[cmdk-group-heading]]:bg-black",
                    "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono",
                    "[&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.18em]",
                    "[&_[cmdk-group-heading]]:text-radar/60",
                  )}
                >
                  {ENTRIES.filter((e) => e.group === group).map((entry) => (
                    <Command.Item
                      key={entry.id}
                      value={`${entry.id} ${entry.group} ${entry.label} ${entry.keywords?.join(" ") ?? ""}`}
                      keywords={entry.keywords}
                      onSelect={() => run(entry)}
                      className={cn(
                        "mx-1 flex cursor-pointer items-center gap-2 border border-transparent px-2 py-2 text-left text-[12px] leading-snug",
                        "text-radar/90 outline-none",
                        "data-selected:border-radar/50 data-selected:bg-radar/10 data-selected:text-radar",
                        "aria-selected:border-radar/50 aria-selected:bg-radar/10 aria-selected:text-radar",
                      )}
                    >
                      <span className="min-w-0 flex-1">{entry.label}</span>
                      <span className="shrink-0 text-[9px] uppercase tracking-wider text-radar/40">
                        RET
                      </span>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))}
            </Command.List>

            <div className="flex items-center justify-between border-t border-radar/30 px-3 py-1.5 text-[9px] uppercase tracking-widest text-radar/45">
              <span>⌘K / Ctrl+K</span>
              <span>ESC · dismiss</span>
            </div>
          </Command>

          <Dialog.Close
            className="sr-only"
            aria-label="Close command palette"
          >
            Close
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
