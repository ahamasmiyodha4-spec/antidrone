"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { RefObject } from "react";
import { cn } from "@/lib/utils";

export type FeedMessage = {
  id: string;
  role: "system" | "user";
  text: string;
};

const easeSharp = [0.2, 0, 1, 1] as const;

type SecureCommsFeedProps = {
  messages: FeedMessage[];
  processing: boolean;
  listRef: RefObject<HTMLDivElement | null>;
};

export function SecureCommsFeed({
  messages,
  processing,
  listRef,
}: SecureCommsFeedProps) {
  return (
    <div
      ref={listRef}
      className="max-h-[min(52vh,400px)] min-h-[220px] space-y-3 overflow-y-auto border-b border-zinc-800 px-3 py-4"
    >
      <AnimatePresence initial={false}>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            layout
            initial={msg.id === "sys-0" ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: easeSharp }}
            className={cn(
              "max-w-[95%] text-[13px] leading-relaxed sm:text-sm",
              msg.role === "system"
                ? "text-radar"
                : "ml-auto text-right text-zinc-300",
            )}
          >
            <span className="text-[9px] uppercase tracking-wider text-zinc-600">
              {msg.role === "system" ? "SYS" : "YOU"}
            </span>
            <p className="mt-1 whitespace-pre-wrap">{msg.text}</p>
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {processing ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: easeSharp }}
            className="flex items-center gap-2 text-[12px] text-radar"
          >
            <span>Processing threat data</span>
            <span className="inline-flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="inline-block size-1 rounded-full bg-radar"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: "linear",
                  }}
                />
              ))}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
