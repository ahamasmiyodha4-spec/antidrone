"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function TacticalParallaxBg() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1600], [0, 36]);
  const x = useTransform(scrollY, [0, 1200], [0, -14]);

  return (
    <motion.div
      aria-hidden
      className="tactical-bg pointer-events-none fixed inset-0 z-0 will-change-transform"
      style={{ y, x }}
    />
  );
}
