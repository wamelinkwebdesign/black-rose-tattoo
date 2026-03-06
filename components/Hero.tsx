"use client";

import { motion } from "framer-motion";

const line = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(196,30,58,0.15) 0%, rgba(8,8,8,1) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="font-[family-name:var(--font-playfair)] leading-[0.95]"
          initial="hidden"
          animate="visible"
        >
          <motion.span
            custom={0}
            variants={line}
            className="block italic text-[clamp(3.5rem,10vw,12rem)]"
          >
            Where Art
          </motion.span>
          <motion.span
            custom={1}
            variants={line}
            className="block text-[clamp(3.5rem,10vw,12rem)] text-[#C9A96E] md:translate-x-16"
          >
            Meets
          </motion.span>
          <motion.span
            custom={2}
            variants={line}
            className="block text-[clamp(3.5rem,10vw,12rem)] text-[#C41E3A]"
          >
            Skin.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 text-[11px] uppercase tracking-[0.4em] text-[#F5F0E8]/50"
        >
          Black Rose Tattoo & Gallery — Amsterdam Centrum
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#booking"
            className="magnetic-btn bg-[#C41E3A] px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-[#F5F0E8] transition-all hover:bg-[#a01830]"
          >
            Book a Session
          </a>
          <a
            href="#gallery"
            className="magnetic-btn border border-[#F5F0E8]/20 px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-[#F5F0E8]/80 transition-all hover:border-[#F5F0E8]/50 hover:text-[#F5F0E8]"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#F5F0E8]/30">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-[#F5F0E8]/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
