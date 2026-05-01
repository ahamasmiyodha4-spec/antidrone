"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const linear = { duration: 0.16, ease: "linear" as const };

type MotionRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  ...rest
}: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ...linear, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
