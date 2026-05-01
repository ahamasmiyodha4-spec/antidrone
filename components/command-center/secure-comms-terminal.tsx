"use client";

import { Send } from "lucide-react";
import { useCallback, useId, useRef, useState } from "react";
import {
  SecureCommsFeed,
  type FeedMessage,
} from "@/components/command-center/secure-comms-feed";
import { cn } from "@/lib/utils";

const INITIAL_SYSTEM =
  "Aegis Intelligence Agent online. Please state your facility type and threat vector to begin clearance.";

const EMAIL_PROMPT =
  "Credentials pending. Provide your corporate or government email address for verification and routing.";

const ACK_TEXT =
  "Transmission secured (TLS 1.3). Reference queued. An officer will respond within two business days.";

function isPlausibleEmail(s: string) {
  const t = s.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
}

export function SecureCommsTerminal() {
  const formId = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<FeedMessage[]>([
    { id: "sys-0", role: "system", text: INITIAL_SYSTEM },
  ]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<"clearance" | "email" | "complete">(
    "clearance",
  );
  const [processing, setProcessing] = useState(false);

  const scrollEnd = useCallback(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  const appendUser = useCallback(
    (text: string) => {
      setMessages((m) => [
        ...m,
        { id: `usr-${crypto.randomUUID().slice(0, 8)}`, role: "user", text },
      ]);
      setInput("");
      requestAnimationFrame(scrollEnd);
    },
    [scrollEnd],
  );

  const appendSystem = useCallback(
    (text: string) => {
      setMessages((m) => [
        ...m,
        { id: `sys-${crypto.randomUUID().slice(0, 8)}`, role: "system", text },
      ]);
      requestAnimationFrame(scrollEnd);
    },
    [scrollEnd],
  );

  const runProcessing = useCallback(
    (after: () => void) => {
      setProcessing(true);
      requestAnimationFrame(scrollEnd);
      window.setTimeout(() => {
        setProcessing(false);
        after();
        requestAnimationFrame(scrollEnd);
      }, 1850);
    },
    [scrollEnd],
  );

  const transmit = useCallback(() => {
    const raw = input.trim();
    if (!raw || processing || phase === "complete") {
      return;
    }

    if (phase === "clearance") {
      appendUser(raw);
      runProcessing(() => {
        appendSystem(EMAIL_PROMPT);
        setPhase("email");
        inputRef.current?.focus();
      });
      return;
    }

    if (phase === "email") {
      if (!isPlausibleEmail(raw)) {
        appendSystem(
          "Invalid format. Re-enter a valid corporate or government email.",
        );
        return;
      }
      appendUser(raw);
      runProcessing(() => {
        appendSystem(ACK_TEXT);
        setPhase("complete");
      });
    }
  }, [input, processing, phase, appendUser, appendSystem, runProcessing]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      transmit();
    }
  };

  const placeholder =
    phase === "clearance"
      ? "Facility type · threat vector…"
      : phase === "email"
        ? "Official email address…"
        : "Channel closed";

  return (
    <div className="mx-auto w-full min-w-0 max-w-4xl border border-zinc-800 bg-zinc-950 font-mono shadow-[0_0_48px_-20px_rgba(0,255,65,0.12)]">
      <header className="border-b border-zinc-800 px-3 py-2.5">
        <p className="text-[10px] leading-relaxed tracking-[0.12em] text-radar sm:text-[11px]">
          SECURE_CHANNEL_ESTABLISHED // ENCRYPTION: AES-256
        </p>
        <p className="mt-1 text-[9px] uppercase tracking-widest text-zinc-600">
          Pre-qualification · outbound only
        </p>
      </header>

      <SecureCommsFeed
        messages={messages}
        processing={processing}
        listRef={listRef}
      />

      <div className="flex items-stretch gap-0 border-t border-zinc-800 bg-zinc-950/80">
        <div className="relative min-w-0 flex-1">
          <input
            ref={inputRef}
            id={formId}
            type="text"
            autoComplete="off"
            spellCheck={false}
            disabled={processing || phase === "complete"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={cn(
              "h-12 w-full min-w-0 bg-transparent py-3 pl-3 pr-[4.75rem] text-[12px] text-zinc-200 caret-radar outline-none sm:pr-20 sm:text-[13px]",
              "placeholder:text-zinc-600 disabled:cursor-not-allowed disabled:opacity-45",
            )}
          />
          <span
            className={cn(
              "pointer-events-none absolute right-[4.25rem] top-1/2 h-4 w-2 -translate-y-1/2 bg-radar sm:right-16",
              "animate-terminal-caret",
              processing || phase === "complete" ? "hidden" : "",
            )}
            aria-hidden
          />
        </div>
        <button
          type="button"
          disabled={processing || phase === "complete" || !input.trim()}
          onClick={transmit}
          className={cn(
            "flex w-14 shrink-0 items-center justify-center border-l border-zinc-800 text-zinc-500 outline-none",
            "transition-colors duration-100 ease-linear",
            "hover:bg-radar/10 hover:text-radar disabled:pointer-events-none disabled:opacity-35",
          )}
          aria-label="Transmit"
        >
          <Send className="size-4" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
