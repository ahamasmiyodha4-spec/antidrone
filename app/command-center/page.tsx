import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Command Center | Aegis Defense",
  description: "Unified airspace custody and operator workflows.",
};

export default function CommandCenterPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-12 sm:px-6">
      <h1 className="font-heading text-2xl font-semibold tracking-tight text-zinc-50">
        Command Center
      </h1>
      <p className="font-technical text-sm text-zinc-500">
        Operator consoles, custody logs, and incident reconstruction. Scaffold.
      </p>
      <Card className="rounded-none border-zinc-800 bg-zinc-950/80 ring-0">
        <CardHeader className="rounded-none">
          <CardTitle className="font-heading text-base">Custody timeline</CardTitle>
        </CardHeader>
        <CardContent className="font-mono text-[11px] leading-relaxed text-cyan/80">
          T+00:00 · sector armed
          <br />
          T+00:04 · track classified UAS
          <br />
          T+00:09 · effector standby
        </CardContent>
      </Card>
    </div>
  );
}
