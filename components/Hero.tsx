"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen h-[100svh] flex items-center justify-center text-center bg-dark overflow-hidden"
    >
      {/* Fullscreen background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo8.jpg"
          alt="Tattoo artwork bij Black Rose"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark" />
        {/* Radial vignette: darkens edges, keeps center readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.15) 50%, rgba(13,13,13,0.7) 100%)",
          }}
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Decorative line top */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="w-px h-16 bg-gold/40 mb-8 origin-top"
        />

        {/* Brand name — spaced out, large */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.5 }}
          className="font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,11vw,7.5rem)] font-light tracking-[0.15em] md:tracking-[0.25em] uppercase text-cream leading-[1] mb-5"
          style={{ textShadow: "0 0 80px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.5)" }}
        >
          Black Rose
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="w-24 h-px bg-gold/50 mb-5 origin-center"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 1.0 }}
          className="text-[0.75rem] md:text-[0.85rem] tracking-[0.2em] uppercase text-cream/60"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.5)" }}
        >
          Tattoo & Gallery · Amsterdam Centrum
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream"
      >
        <span className="text-[0.7rem] tracking-[0.15em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-cream scroll-line" />
      </motion.div>
    </section>
  );
}
