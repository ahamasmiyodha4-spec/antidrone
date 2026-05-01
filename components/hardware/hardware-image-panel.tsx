"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type HardwareImagePanelProps = {
  label: string;
  className?: string;
};

export function HardwareImagePanel({
  label,
  className,
}: HardwareImagePanelProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={cn(
        "group relative aspect-[4/3] w-full overflow-hidden border border-zinc-700 bg-zinc-950",
        className,
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(0,255,65,0.12),transparent_65%),linear-gradient(145deg,rgb(24_24_27)_0%,rgb(9_9_11)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(63,63,70,0.5) 31px, rgba(63,63,70,0.5) 32px), repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(63,63,70,0.35) 31px, rgba(63,63,70,0.35) 32px)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <p className="text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-zinc-600">
          {label}
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 border border-zinc-600/30" />
      <motion.div
        className="pointer-events-none absolute left-0 right-0 z-10 h-[3px] bg-gradient-to-r from-transparent via-radar to-transparent shadow-[0_0_16px_rgba(0,255,65,0.6)]"
        initial={false}
        animate={
          hover
            ? { top: ["-4%", "104%"], opacity: 1 }
            : { top: "-8%", opacity: 0 }
        }
        transition={
          hover
            ? { duration: 1.35, repeat: Infinity, ease: "linear" }
            : { duration: 0.12, ease: "linear" }
        }
      />
    </div>
  );
}
