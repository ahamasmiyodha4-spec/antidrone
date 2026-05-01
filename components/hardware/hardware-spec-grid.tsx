import type { HardwareSpecRow } from "@/components/hardware/hardware-showcase-types";

export function HardwareSpecGrid({ specs }: { specs: HardwareSpecRow[] }) {
  return (
    <div
      className="min-w-0 font-mono text-[10px] leading-tight sm:text-[11px]"
      role="table"
      aria-label="Hardware specifications"
    >
      <div
        className="grid min-w-0 border border-zinc-800 sm:min-w-full"
        role="rowgroup"
      >
        {specs.map((row) => (
          <div
            key={row.label}
            role="row"
            className="grid min-w-0 grid-cols-1 border-b border-zinc-800 last:border-b-0 sm:grid-cols-[minmax(120px,38%)_1fr]"
          >
            <div
              role="rowheader"
              className="min-w-0 border-b border-zinc-800 bg-zinc-900/40 px-2.5 py-2 text-zinc-500 sm:border-b-0 sm:border-r sm:px-3 sm:py-2.5"
            >
              <span className="break-words">{row.label}</span>
            </div>
            <div
              role="cell"
              className="min-w-0 break-words px-2.5 py-2 text-right tabular-nums text-zinc-100 sm:px-3 sm:py-2.5 sm:text-left"
            >
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
