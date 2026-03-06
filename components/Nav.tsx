"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Studio", href: "#studio" },
  { label: "Artists", href: "#styles" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#booking" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo */}
        <a href="#" className="group">
          <div className="font-[family-name:var(--font-playfair)] text-lg tracking-[0.3em] font-semibold uppercase text-[#F5F0E8]">
            Black Rose
          </div>
          <div className="text-[9px] tracking-[0.35em] uppercase text-[#C9A96E]">
            Tattoo & Gallery
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.25em] text-[#F5F0E8]/70 transition-colors hover:text-[#F5F0E8]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="magnetic-btn border border-[#C41E3A] px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#C41E3A] transition-all hover:bg-[#C41E3A] hover:text-[#F5F0E8]"
          >
            Book Session
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-[1px] w-6 bg-[#F5F0E8]"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[1px] w-6 bg-[#F5F0E8]"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-[1px] w-6 bg-[#F5F0E8]"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-0 flex min-h-screen flex-col items-center justify-center gap-8 bg-[#080808]/98 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-[#F5F0E8]/80 transition-colors hover:text-[#F5F0E8]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="magnetic-btn border border-[#C41E3A] px-8 py-3 text-sm uppercase tracking-[0.2em] text-[#C41E3A] transition-all hover:bg-[#C41E3A] hover:text-[#F5F0E8]"
            >
              Book Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
