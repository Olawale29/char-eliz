"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost-on-dark" | "outline-on-dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-navy",
  secondary:
    "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
  "ghost-on-dark":
    "bg-white text-brand-navy hover:bg-brand-off-white",
  "outline-on-dark":
    "border border-white/60 text-white hover:border-white hover:bg-white/10",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
} & Omit<
  ComponentPropsWithoutRef<"button">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;

const tap = { scale: 0.97 };

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileTap={tap} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileTap={tap} className={classes} {...props}>
      {children}
    </motion.button>
  );
}
