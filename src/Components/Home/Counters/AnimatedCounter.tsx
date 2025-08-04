"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  className?: string;
  duration?: number;
}

export const AnimatedCounter = ({
  target,
  className,
  duration = 2,
}: AnimatedCounterProps) => {
  const [current, setCurrent] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      onUpdate(value) {
        setCurrent(Math.round(value));
      },
    });

    return controls.stop; // cleanup on unmount
  }, [target, duration, count]);

  return <motion.span className={className}>{current}+</motion.span>;
};
