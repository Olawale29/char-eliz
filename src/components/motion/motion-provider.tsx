"use client";

import { MotionConfig } from "framer-motion";

/**
 * Globally honours prefers-reduced-motion: Framer Motion swaps transforms
 * for instant/opacity-only transitions for users who request it.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}
