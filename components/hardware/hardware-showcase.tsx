"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HardwareDeepAccordion } from "@/components/hardware/hardware-deep-accordion";
import { HardwareImagePanel } from "@/components/hardware/hardware-image-panel";
import { HardwareSpecGrid } from "@/components/hardware/hardware-spec-grid";
import type { HardwareShowcaseProps } from "@/components/hardware/hardware-showcase-types";
import { cn } from "@/lib/utils";

export function HardwareShowcase({
  items,
  className,
  heading = "Hardware line",
  defaultTab,
}: HardwareShowcaseProps) {
  const initial = defaultTab ?? items[0]?.id ?? "";

  if (!items.length) {
    return null;
  }

  return (
    <motion.section
      id="hardware"
      className={cn(
        "mx-auto w-full min-w-0 max-w-7xl border border-zinc-800 bg-zinc-950/60 py-8 sm:py-10",
        className,
      )}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.3, ease: [0.2, 0, 1, 1] }}
    >
      <div className="mb-6 flex flex-col gap-1 border-b border-zinc-800 px-3 pb-4 sm:px-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
          Systems
        </p>
        <h2 className="font-heading text-xl font-semibold tracking-tight text-zinc-50 md:text-2xl">
          {heading}
        </h2>
      </div>

      <Tabs defaultValue={initial} className="flex w-full flex-col gap-0">
        <TabsList
          variant="line"
          className="mb-0 h-auto w-full min-w-0 flex-wrap gap-0 rounded-none border border-b-0 border-zinc-800 bg-zinc-900/30 p-0"
        >
          {items.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="h-9 min-w-0 flex-1 rounded-none border-r border-zinc-800 px-2 font-mono text-[9px] uppercase tracking-wider text-zinc-500 last:border-r-0 data-active:border-b-transparent data-active:bg-zinc-950 data-active:text-radar sm:h-10 sm:flex-none sm:px-5 sm:text-[11px]"
            >
              {item.tabLabel}
            </TabsTrigger>
          ))}
        </TabsList>

        {items.map((item) => (
          <TabsContent
            key={item.id}
            value={item.id}
            className="mt-0 border border-t-0 border-zinc-800 bg-zinc-950/40 p-0 outline-none"
          >
            <div className="grid lg:grid-cols-2 lg:items-stretch">
              <div className="border-b border-zinc-800 lg:border-b-0 lg:border-r">
                <HardwareImagePanel
                  label={item.assetLabel}
                  className="aspect-[4/3] min-h-[260px] lg:aspect-auto lg:min-h-full lg:rounded-none"
                />
              </div>
              <div className="flex min-w-0 flex-col p-4 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                  Field specifications
                </p>
                <div className="mt-4 min-w-0 overflow-x-auto">
                  <HardwareSpecGrid specs={item.specs} />
                </div>
                <div className="mt-8 min-w-0 overflow-x-auto">
                  <HardwareDeepAccordion product={item} />
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.section>
  );
}
