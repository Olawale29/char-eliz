"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="CharEliz home">
          <Image
            src="/images/brand/chareliz-logo.png"
            alt="CharEliz Nominees Consolidated Services Limited"
            width={220}
            height={81}
            priority
            className={`h-10 w-auto transition-[filter] duration-300 ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-sm font-medium tracking-wide transition-colors ${
                  solid
                    ? active
                      ? "text-brand-blue"
                      : "text-text-primary hover:text-brand-blue"
                    : active
                      ? "text-white"
                      : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant={solid ? "primary" : "ghost-on-dark"}>
            Discuss a Project
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${
            solid ? "text-brand-navy" : "text-white"
          }`}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-6 bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-6 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1.5px] w-6 bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <nav className="container-site flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`block rounded-sm px-2 py-3 text-base font-medium ${
                        active ? "text-brand-blue" : "text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.04 }}
              >
                <Button href="/contact" variant="primary" className="mt-3 w-full">
                  Discuss a Project
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
