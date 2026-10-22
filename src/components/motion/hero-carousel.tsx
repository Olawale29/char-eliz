"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export type CarouselSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

type Cta = { label: string; href: string };

type Props = {
  slides: CarouselSlide[];
  interval?: number;
  primaryCta: Cta;
  secondaryCta: Cta;
};

export function HeroCarousel({ slides, interval = 6500, primaryCta, secondaryCta }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || paused || slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [reducedMotion, paused, interval, slides.length]);

  const slide = slides[index];

  return (
    <section
      className="relative overflow-hidden bg-brand-navy pt-40 pb-28 text-white sm:pt-48 sm:pb-36"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image layers */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <motion.div
              key={s.src}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              aria-hidden={!active}
            >
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{ scale: reducedMotion ? 1 : active ? 1.08 : 1 }}
                transition={{ duration: interval / 1000 + 1.2, ease: "linear" }}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          );
        })}

        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/75 to-brand-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-transparent" />
      </div>

      {/* Text content, synced to the active slide */}
      <div className="container-site relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-pale-blue">
              {slide.eyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[1.05] sm:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={primaryCta.href} variant="ghost-on-dark">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="outline-on-dark">
            {secondaryCta.label}
          </Button>
        </div>
      </div>

      {slides.length > 1 ? (
        <div className="absolute bottom-7 left-6 z-10 flex gap-2 sm:left-12">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1} of ${slides.length}: ${s.title}`}
              aria-current={i === index}
              className={`h-1 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                i === index ? "w-8 bg-white" : "w-4 bg-white/35 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
