import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Mitigation | Aegis Defense",
  description: "Effector control and rules of engagement.",
};

export default function MitigationPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-zinc-50">
          Mitigation
        </h1>
        <Badge
          variant="outline"
          className="rounded-none border-zinc-600 font-technical text-[10px] uppercase tracking-wider text-warning"
        >
          ROE gated
        </Badge>
      </div>
      <Card className="rounded-none border-zinc-800 bg-zinc-950/80 ring-0">
        <CardHeader className="rounded-none">
          <CardTitle className="font-heading text-base">
            Effector interfaces
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 font-technical text-xs text-zinc-400">
          <p>Kinetic, HPM, and protocol-based soft-kill handoff APIs.</p>
          <p className="text-zinc-600">Scaffold page — extend with diagrams.</p>
        </CardContent>
      </Card>
    </div>
  );
}
