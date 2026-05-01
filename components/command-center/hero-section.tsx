"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { HeroHud } from "@/components/command-center/hero-hud";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headline = [
  "Secure the Airspace.",
  "Neutralize the Threat.",
] as const;

const subhead =
  "Military-grade Counter-UAS detection and mitigation architectures for critical infrastructure.";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.1,
    },
  },
};

const line = (reduce: boolean | null) => ({
  hidden: {
    opacity: reduce ? 1 : 0,
    x: reduce ? 0 : -18,
    filter: reduce ? "blur(0px)" : "blur(6px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: reduce ? 0 : 0.14,
      ease: [0.22, 0.61, 0.36, 1] as const,
    },
  },
});

function AssetIngestionPlaceholder({ reduce }: { reduce: boolean | null }) {
  return (
    <motion.div
      className={cn(
        "mx-auto flex aspect-square w-full max-w-sm items-center justify-center border border-dashed border-zinc-800 bg-zinc-950/60 px-4 text-center font-mono text-xs leading-snug text-zinc-700 sm:text-sm lg:max-w-md",
      )}
      initial={false}
      animate={
        reduce
          ? { opacity: 1 }
          : {
              opacity: [0.72, 1, 0.72],
              boxShadow: [
                "0 0 0 0 rgba(0,255,65,0)",
                "0 0 40px -8px rgba(0,255,65,0.22)",
                "0 0 0 0 rgba(0,255,65,0)",
              ],
            }
      }
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
      }
    >
      AWAITING 3D ASSET INGESTION
    </motion.div>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative -mx-4 w-[calc(100%+2rem)] max-w-[100vw] overflow-x-clip self-center md:-mx-8 md:w-[calc(100%+4rem)]">
      <div className="relative min-h-[min(92vh,920px)] w-full">
        <div className="absolute inset-0 z-0 bg-zinc-950" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_18%,rgba(0,255,65,0.09),transparent_58%),linear-gradient(165deg,rgb(24_24_27)_0%,rgb(9_9_11)_45%,rgb(9_9_11)_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.12) 2px, rgba(0,255,255,0.12) 3px)",
            }}
            aria-hidden
          />
        </div>
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-b from-zinc-950/50 via-zinc-950/82 to-zinc-950"
          aria-hidden
        />
        <HeroHud />
        <div className="relative z-10 mx-auto grid min-h-[min(92vh,920px)] w-full max-w-7xl grid-cols-1 gap-8 px-4 pb-20 pt-24 md:px-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            className="max-w-3xl lg:min-w-0"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={line(reduce)}
              className="font-mono text-[10px] uppercase tracking-[0.32em] text-warning"
            >
              Tactical overlay · Live
            </motion.p>
            <h1 className="mt-3 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
              {headline.map((text, i) => (
                <motion.span
                  key={text}
                  variants={line(reduce)}
                  className={cn("block", i === 1 && "text-radar")}
                >
                  {text}
                </motion.span>
              ))}
            </h1>
            <motion.p
              variants={line(reduce)}
              className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-zinc-400 sm:text-sm md:text-[15px]"
            >
              {subhead}
            </motion.p>
            <motion.div
              variants={line(reduce)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-none border-0 bg-radar px-8 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-zinc-950 shadow-[0_0_24px_-4px_rgba(0,255,65,0.55)] transition-[background-color,box-shadow] duration-100 ease-linear hover:bg-radar/90 hover:shadow-[0_0_32px_-2px_rgba(0,255,65,0.65)]",
                )}
              >
                Deploy Systems
              </Link>
              <Link
                href="/intelligence"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-none border border-zinc-500 bg-transparent font-mono text-xs uppercase tracking-[0.12em] text-zinc-200 transition-colors duration-100 ease-linear hover:border-cyan hover:bg-cyan/5 hover:text-cyan",
                )}
              >
                View Telemetry
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex min-w-0 items-center justify-center lg:justify-end">
            <AssetIngestionPlaceholder reduce={reduce} />
          </div>
        </div>
      </div>
    </section>
  );
}
