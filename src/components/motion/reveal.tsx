"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /** For non-scroll-triggered entrances (e.g. hero content on load). */
  immediate?: boolean;
  as?: "div" | "li";
};

const makeVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  once = true,
  immediate = false,
  as = "div",
}: Props) {
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      className={className}
      variants={makeVariants(y)}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once, margin: "-80px" } })}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
