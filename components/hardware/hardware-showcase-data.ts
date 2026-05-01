import type { HardwareProduct } from "@/components/hardware/hardware-showcase-types";

export const defaultHardwareProducts: HardwareProduct[] = [
  {
    id: "rf-jammer",
    tabLabel: "RF Jammer",
    assetLabel: "RF / ECM suite · render slot",
    specs: [
      { label: "Detection Range", value: "15 km" },
      { label: "Frequency Bands", value: "400 MHz – 6 GHz" },
      { label: "Response Time", value: "< 0.4 s" },
      { label: "Effective Isotropic Radiated Power", value: "Configurable to 2 kW" },
      { label: "Simultaneous Bands", value: "8" },
      { label: "Antenna Ports", value: "4 × N-type" },
    ],
    deep: [
      {
        id: "power",
        title: "Power Consumption",
        rows: [
          { label: "Idle (standby)", value: "180 W" },
          { label: "Peak transmit", value: "3.2 kW" },
          { label: "Input voltage", value: "208–480 VAC 3φ" },
        ],
      },
      {
        id: "environment",
        title: "Environmental Tolerances",
        rows: [
          { label: "Operating temp", value: "−40 °C to +55 °C" },
          { label: "IP rating (enclosure)", value: "IP66" },
          { label: "Humidity", value: "0–100 % condensing" },
        ],
      },
      {
        id: "export",
        title: "Export Controls",
        rows: [
          { label: "US ECCN", value: "7A994" },
          { label: "ITAR applicability", value: "Variant-dependent" },
          { label: "End-user certificate", value: "Required for deploy" },
        ],
      },
    ],
  },
  {
    id: "radar-array",
    tabLabel: "Radar Array",
    assetLabel: "X-band phased array · render slot",
    specs: [
      { label: "Detection Range", value: "22 km (RCS 0.01 m²)" },
      { label: "Frequency Bands", value: "9.2–9.5 GHz" },
      { label: "Response Time", value: "< 0.25 s" },
      { label: "Azimuth coverage", value: "360° (4-face)" },
      { label: "Elevation coverage", value: "0–60°" },
      { label: "Track capacity", value: "512 concurrent" },
    ],
    deep: [
      {
        id: "power",
        title: "Power Consumption",
        rows: [
          { label: "Per face (typical)", value: "1.1 kW" },
          { label: "Full array peak", value: "5.8 kW" },
          { label: "UPS bridge", value: "90 s @ rated load" },
        ],
      },
      {
        id: "environment",
        title: "Environmental Tolerances",
        rows: [
          { label: "Operating temp", value: "−35 °C to +60 °C" },
          { label: "Wind load (survival)", value: "210 km/h" },
          { label: "Salt fog", value: "MIL-STD-810H 509.6" },
        ],
      },
      {
        id: "export",
        title: "Export Controls",
        rows: [
          { label: "US ECCN", value: "7A994 / 6A008" },
          { label: "Wassenaar", value: "Category 6" },
          { label: "Re-export", value: "Country matrix on file" },
        ],
      },
    ],
  },
];
