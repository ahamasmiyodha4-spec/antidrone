"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type AnimatedCounterProps = {
  /** Target numeric value to count toward */
  target: number;
  /** Decimal places for display (fixed precision while animating) */
  decimals?: number;
  className?: string;
  /** Approximate duration of the count-up (seconds) */
  duration?: number;
  /** Easing curve — default linear for telemetry feel */
  ease?: readonly [number, number, number, number] | "linear";
};

function formatValue(n: number, decimals: number) {
  return n.toFixed(decimals);
}

export function AnimatedCounter({
  target,
  decimals = 0,
  className,
  duration = 0.95,
  ease = "linear",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35, margin: "0px 0px -12% 0px" });
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) {
      return;
    }
    started.current = true;
    const controls = animate(0, target, {
      duration,
      ease,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, target, duration, ease]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {formatValue(value, decimals)}
    </span>
  );
}
