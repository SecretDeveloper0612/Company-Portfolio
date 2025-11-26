import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export const CountUp: React.FC<CountUpProps> = ({ value, suffix = '', duration = 2 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Format number with commas if needed, though for small stats usually not strictly required
        // but good for polish. For simplicity, just toFixed(0) or handle decimals if needed.
        // Assuming integer counts for this use case mostly.
        const formatted = Number(latest.toFixed(value % 1 !== 0 ? 1 : 0)).toLocaleString();
        ref.current.textContent = `${formatted}${suffix}`;
      }
    });
  }, [springValue, suffix, value]);

  return <span ref={ref} />;
};
