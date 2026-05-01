import { CapabilitiesSection } from "@/components/command-center/capabilities-section";
import { CtaSection } from "@/components/command-center/cta-section";
import { HeroSection } from "@/components/command-center/hero-section";
import { MetricsStrip } from "@/components/command-center/metrics-strip";
import { SensorStackSection } from "@/components/command-center/sensor-stack-section";
import { defaultHardwareProducts } from "@/components/hardware/hardware-showcase-data";
import { HardwareShowcase } from "@/components/hardware/hardware-showcase";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-12 pb-16 pt-0">
      <HeroSection />
      <MetricsStrip />
      <HardwareShowcase
        items={defaultHardwareProducts}
        heading="Deployed hardware"
        className="w-full max-w-7xl"
      />
      <CapabilitiesSection />
      <SensorStackSection />
      <CtaSection />
    </div>
  );
}
