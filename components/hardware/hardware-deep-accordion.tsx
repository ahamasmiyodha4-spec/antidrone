"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { HardwareProduct } from "@/components/hardware/hardware-showcase-types";

export function HardwareDeepAccordion({ product }: { product: HardwareProduct }) {
  return (
    <Accordion multiple={false} defaultValue={[]} className="w-full">
      {product.deep.map((section) => (
        <AccordionItem
          key={section.id}
          value={`${product.id}-${section.id}`}
          className="border-b border-zinc-800 last:border-b-0"
        >
          <AccordionTrigger className="rounded-none py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300 hover:no-underline aria-expanded:text-radar sm:py-3 sm:text-[11px]">
            {section.title}
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <div className="grid min-w-0 gap-0 overflow-x-auto border border-zinc-800 border-t-0 font-mono text-[9px] sm:text-[10px]">
              {section.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid min-w-0 grid-cols-1 border-b border-zinc-800 last:border-b-0 sm:grid-cols-[40%_1fr]"
                >
                  <div className="min-w-0 border-b border-zinc-800 bg-zinc-900/30 px-2.5 py-1.5 break-words text-zinc-500 sm:border-b-0 sm:border-r sm:border-zinc-800 sm:px-3 sm:py-2">
                    {row.label}
                  </div>
                  <div className="min-w-0 break-words px-2.5 py-1.5 tabular-nums text-zinc-300 sm:px-3 sm:py-2">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
