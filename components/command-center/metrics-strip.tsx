"use client";

import { AnimatedCounter } from "@/components/motion/animated-counter";

const metrics = [
  {
    k: "Threats neutralized",
    target: 12407,
    decimals: 0,
    u: "" as const,
  },
  {
    k: "Uptime",
    target: 99.94,
    decimals: 2,
    u: "%" as const,
  },
  {
    k: "Mean time to classify",
    target: 0.8,
    decimals: 1,
    u: "s" as const,
  },
  {
    k: "Effector channels",
    target: 16,
    decimals: 0,
    u: " parallel" as const,
  },
] as const;

export function MetricsStrip() {
  return (
    <div className="mx-auto grid w-full max-w-7xl border-y border-zinc-800/90 bg-zinc-900/30 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => (
        <div
          key={m.k}
          className="min-w-0 border-b border-zinc-800/80 px-4 py-4 transition-colors duration-150 ease-linear last:border-b-0 sm:px-5 sm:py-5 sm:border-r sm:border-zinc-800/80 sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-600 sm:text-[10px] sm:tracking-[0.25em]">
            {m.k}
          </p>
          <p className="mt-2 font-mono text-xl tabular-nums text-zinc-100 sm:text-2xl">
            <AnimatedCounter
              target={m.target}
              decimals={m.decimals}
              duration={0.9}
              ease={[0.2, 0, 1, 1]}
            />
            <span className="text-sm font-normal text-cyan sm:text-base">
              {m.u}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
