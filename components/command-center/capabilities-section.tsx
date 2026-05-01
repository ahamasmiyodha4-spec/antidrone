import { PanelFrame } from "@/components/command-center/panel-frame";

const rows = [
  {
    title: "Passive RF geolocation",
    detail: "Wideband DF mesh with TDOA refinement. No active emissions in covert mode.",
    tag: "SIGINT",
  },
  {
    title: "EO / IR corroboration",
    detail: "Gimballed optics with on-edge classifier. Human-on-the-loop or ROE-automated.",
    tag: "VIS",
  },
  {
    title: "Directed energy cueing",
    detail: "High-precision slew-to-cue for HPM / laser subsystems via hardened API.",
    tag: "DE",
  },
  {
    title: "Command & custody log",
    detail: "Immutable chain-of-custody for legal-grade incident reconstruction.",
    tag: "AUDIT",
  },
] as const;

export function CapabilitiesSection() {
  return (
    <PanelFrame
      id="capabilities"
      className="mx-auto w-full min-w-0 max-w-7xl"
      label="Mission modules"
    >
      <div className="divide-y divide-zinc-800/90">
        {rows.map((row) => (
          <div
            key={row.title}
            className="grid gap-3 px-4 py-5 transition-colors duration-150 ease-linear hover:bg-zinc-900/40 sm:gap-4 sm:px-6 sm:py-6 md:grid-cols-[88px_1fr_2fr]"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-warning">
              {row.tag}
            </span>
            <h3 className="font-heading text-lg font-medium text-zinc-100">
              {row.title}
            </h3>
            <p className="min-w-0 font-mono text-[11px] leading-relaxed text-zinc-500 sm:text-xs md:text-right">
              {row.detail}
            </p>
          </div>
        ))}
      </div>
    </PanelFrame>
  );
}
