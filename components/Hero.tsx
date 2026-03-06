"use client";

import { motion } from "framer-motion";
import RoseSeal from "./RoseSeal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* ── Background photo (plain img) ── */}
      <img
        src="/demos/black-rose/images/gallery-1.jpg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* ── Dark overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(8,8,8,0.85))",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-0 px-6 lg:grid-cols-2 lg:px-12">
        {/* ── LEFT: heading + tagline + buttons (desktop) ── */}
        <div>
          <motion.h1
            className="font-[family-name:var(--font-playfair)]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.9 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block text-[#F5F0E8]">Where Art</span>
            <span className="block text-[#F5F0E8]">Meets</span>
            <span className="block text-[#C41E3A]">Skin.</span>
          </motion.h1>

          {/* ── Tagline ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40"
          >
            Amsterdam Centrum &middot; Est. 2015 &middot; By Appointment
          </motion.p>

          {/* ── Buttons (desktop only, below tagline) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8 hidden gap-4 lg:flex"
          >
            <a
              href="#booking"
              className="bg-[#C41E3A] px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-all hover:bg-[#C41E3A]/80"
            >
              Book a Session
            </a>
            <a
              href="#gallery"
              className="border border-white/30 px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-all hover:border-white"
            >
              View Gallery
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Rose Seal ── */}
        <motion.div
          className="mt-12 flex items-center justify-center lg:mt-0 lg:justify-end"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-[320px] w-[320px] lg:h-[420px] lg:w-[420px]"
            style={{ boxShadow: "0 0 60px rgba(196,30,58,0.15)" }}
          >
            <RoseSeal className="h-full w-full" />
          </div>
        </motion.div>

        {/* ── Buttons (mobile only, below seal) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-8 flex gap-4 lg:hidden"
        >
          <a
            href="#booking"
            className="bg-[#C41E3A] px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-all hover:bg-[#C41E3A]/80"
          >
            Book a Session
          </a>
          <a
            href="#gallery"
            className="border border-white/30 px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-all hover:border-white"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
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
