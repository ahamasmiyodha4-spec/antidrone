import { PanelFrame } from "@/components/command-center/panel-frame";

const layers = [
  { id: "L5", name: "Effector bus", state: "HOLD" },
  { id: "L4", name: "Track fusion", state: "RUN" },
  { id: "L3", name: "Classifier ensemble", state: "RUN" },
  { id: "L2", name: "Sensor ingest", state: "RUN" },
  { id: "L1", name: "Time sync (PTP)", state: "LOCK" },
] as const;

export function SensorStackSection() {
  return (
    <PanelFrame
      id="stack"
      className="mx-auto w-full min-w-0 max-w-7xl"
      label="Software stack"
    >
      <div className="grid gap-0 md:grid-cols-[1fr_220px]">
        <div className="min-w-0 space-y-0 overflow-x-auto border-zinc-800/80 md:border-r">
          {layers.map((layer) => (
            <div
              key={layer.id}
              className="flex min-w-0 flex-col gap-2 border-b border-zinc-800/80 px-4 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8"
            >
              <div className="flex min-w-0 flex-wrap items-baseline gap-2 sm:gap-4">
                <span className="shrink-0 font-mono text-[9px] text-zinc-600 sm:text-[10px]">
                  {layer.id}
                </span>
                <span className="min-w-0 font-heading text-xs text-zinc-200 sm:text-sm">
                  {layer.name}
                </span>
              </div>
              <span
                className={
                  layer.state === "RUN" || layer.state === "LOCK"
                    ? "shrink-0 font-mono text-[10px] text-radar sm:text-[11px]"
                    : "shrink-0 font-mono text-[10px] text-warning sm:text-[11px]"
                }
              >
                {layer.state}
              </span>
            </div>
          ))}
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-4 border-t border-zinc-800/80 bg-zinc-900/25 p-4 sm:p-6 md:border-t-0">
          <p className="font-mono text-[9px] uppercase leading-relaxed tracking-widest text-zinc-600 sm:text-[10px]">
            Deployment
          </p>
          <p className="font-mono text-[11px] leading-relaxed text-zinc-400 sm:text-xs">
            Kubernetes-native services. Bare-metal RTOS shim for PTP and GPIO
            triggers. Export northbound as REST, Kafka, or DIS / HLA gateways.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
          <p className="font-mono text-[9px] text-zinc-600 sm:text-[10px]">
            Rev <span className="text-cyan">7.3.1</span> · build{" "}
            <span className="tabular-nums text-zinc-400">20260501</span>
          </p>
        </div>
      </div>
    </PanelFrame>
  );
}
