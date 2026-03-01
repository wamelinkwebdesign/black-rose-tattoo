"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream border-t border-cream/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4"
          >
            <span className="font-[family-name:var(--font-cormorant)] text-[1.8rem] font-light tracking-[0.1em] uppercase text-cream/60">
              Black Rose
            </span>
          </motion.div>

          {/* Center */}
          <div className="md:col-span-4 md:text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-[1rem] italic text-cream/20">
              Tattoo & Gallery
            </p>
          </div>

          {/* Right — address */}
          <div className="md:col-span-4 md:text-right">
            <p className="text-[0.75rem] tracking-[0.05em] text-cream/30">
              Dirk van Hasseltssteeg 56, Amsterdam
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="h-px bg-cream/8 mt-12 mb-6" />

        <div className="flex flex-wrap justify-between items-center gap-4">
          <p className="text-[0.7rem] text-cream/15 tracking-[0.05em]">
            &copy; 2025 Black Rose Tattoo And Gallery
          </p>
          <p className="text-[0.7rem] text-cream/15 tracking-[0.05em]">
            Amsterdam Centrum
          </p>
        </div>
      </div>
    </footer>
  );
}
