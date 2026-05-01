import { cn } from "@/lib/utils";

type PanelFrameProps = {
  children: React.ReactNode;
  className?: string;
  label?: string;
  id?: string;
};

export function PanelFrame({
  children,
  className,
  label,
  id,
}: PanelFrameProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative border border-zinc-800/90 bg-zinc-950/80",
        "before:pointer-events-none before:absolute before:inset-0",
        "before:bg-[linear-gradient(to_right,oklch(0.35_0.02_285/0.12)_1px,transparent_1px)]",
        "before:bg-[length:24px_100%] before:content-['']",
        className,
      )}
      aria-label={label}
    >
      <div className="pointer-events-none absolute left-0 top-0 size-2 border-l-2 border-t-2 border-radar" />
      <div className="pointer-events-none absolute right-0 top-0 size-2 border-r-2 border-t-2 border-cyan" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-2 border-b-2 border-l-2 border-cyan" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-2 border-b-2 border-r-2 border-radar" />
      {label ? (
        <div className="absolute -top-2.5 left-4 bg-zinc-950 px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          {label}
        </div>
      ) : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
