import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Detection | Aegis Defense",
  description: "RF, radar, and optical detection pipelines.",
};

export default function DetectionPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-12 sm:px-6">
      <h1 className="font-heading text-2xl font-semibold tracking-tight text-zinc-50">
        Detection
      </h1>
      <p className="font-technical text-sm leading-relaxed text-zinc-500">
        Multi-sensor ingest, track formation, and emitter geolocation. Content
        scaffold — replace with product narrative.
      </p>
      <Card className="rounded-none border-zinc-800 bg-zinc-950/80 ring-0">
        <CardHeader className="rounded-none">
          <CardTitle className="font-heading text-base">
            Sensor fusion bus
          </CardTitle>
          <CardDescription className="font-technical text-xs text-zinc-500">
            STATUS: ROUTE_ACTIVE · CHANNEL_07
          </CardDescription>
        </CardHeader>
        <CardContent className="font-technical text-xs text-zinc-400">
          Configure passive RF mesh, ADS-B correlation, and EO/IR cueing from
          this module.
        </CardContent>
      </Card>
    </div>
  );
}
