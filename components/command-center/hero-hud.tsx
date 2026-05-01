"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function formatGps(lat: number, lon: number) {
  return `N ${lat.toFixed(5)}°  W ${Math.abs(lon).toFixed(5)}°`;
}

export function HeroHud() {
  const [coords, setCoords] = useState({ lat: 38.88951, lon: -77.03526 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setCoords((c) => ({
        lat: c.lat + (Math.random() - 0.5) * 0.00004,
        lon: c.lon + (Math.random() - 0.5) * 0.00004,
      }));
    }, 720);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-3 border border-zinc-600/25 sm:inset-5" />
      <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
        <motion.div
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <motion.span
            className="size-1.5 rounded-full bg-red-600"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-red-500">REC</span>
          <span className="text-zinc-600">01</span>
        </motion.div>
      </div>
      <div className="absolute right-4 top-4 text-right font-mono text-[9px] uppercase leading-relaxed text-zinc-600 sm:right-6 sm:top-6">
        <div>CAM / IR-2</div>
        <div className="text-zinc-500">ISO AUTO · 1/250</div>
      </div>
      <motion.div
        className="absolute left-0 right-0 top-[10%] h-px bg-gradient-to-r from-transparent via-radar/45 to-transparent"
        initial={{ top: "10%" }}
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute bottom-5 left-4 font-mono text-[10px] leading-relaxed text-cyan/90 sm:bottom-8 sm:left-6">
        <div className="text-zinc-600">GPS FIX</div>
        <div className="tabular-nums">{formatGps(coords.lat, coords.lon)}</div>
      </div>
      <div className="absolute bottom-5 right-4 text-right font-mono text-[9px] text-zinc-600 sm:bottom-8 sm:right-6">
        <div>GRID · UTM 18S</div>
        <div className="tabular-nums text-zinc-500">RNG 4.2 km</div>
      </div>
      <motion.div
        className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-cyan/25 to-transparent"
        animate={{ opacity: [0.35, 0.95, 0.35] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
