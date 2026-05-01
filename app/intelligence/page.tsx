import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Intelligence | Aegis Defense",
  description: "Threat libraries, fusion analytics, and reporting.",
};

export default function IntelligencePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 py-12 sm:px-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-zinc-50">
          Intelligence
        </h1>
        <p className="mt-2 font-technical text-sm text-zinc-500">
          shadcn <span className="text-zinc-400">Card</span>,{" "}
          <span className="text-zinc-400">Badge</span>, and{" "}
          <span className="text-zinc-400">Button</span> reference layout.
        </p>
      </div>

      <Card className="rounded-none border-zinc-800 bg-zinc-950/90 ring-0">
        <CardHeader className="rounded-none border-b border-zinc-800/90 pb-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <CardTitle className="font-heading text-lg">
              Threat signature pack
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge className="rounded-none border border-radar/40 bg-radar/10 font-technical text-[10px] uppercase tracking-wide text-radar">
                STABLE
              </Badge>
              <Badge
                variant="outline"
                className="rounded-none border-zinc-600 font-technical text-[10px] uppercase text-zinc-400"
              >
                v4.2.0
              </Badge>
            </div>
          </div>
          <CardDescription className="font-technical text-xs text-zinc-500">
            Library hash · sync with command nodes nightly
          </CardDescription>
        </CardHeader>
        <CardContent className="font-technical text-xs leading-relaxed text-zinc-400">
          RF fingerprints, flight envelopes, and vendor-specific waveform
          markers. Use this card as the baseline for dense technical panels.
        </CardContent>
        <CardFooter className="rounded-none border-t border-zinc-800/90 bg-zinc-900/40">
          <Button
            variant="outline"
            size="sm"
            className="rounded-none border-zinc-600 font-technical text-[11px] uppercase tracking-wide text-zinc-300 hover:border-cyan hover:text-cyan"
          >
            Export STANAG
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
