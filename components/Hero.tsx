"use client";

import { motion } from "framer-motion";
import RoseSeal from "./RoseSeal";

/* ── Word-by-word mask reveal variant ── */
const wordReveal = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

const wordChild = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ── Headline lines ── */
const lines: { text: string; delay: number; className: string }[] = [
  {
    text: "Where Art",
    delay: 0.3,
    className:
      "italic text-[clamp(3rem,8vw,9rem)] text-[#F5F0E8]",
  },
  {
    text: "Meets",
    delay: 0.45,
    className:
      "text-[clamp(3rem,8vw,9rem)] text-[#F5F0E8] md:translate-x-8",
  },
  {
    text: "Skin.",
    delay: 0.6,
    className:
      "text-[clamp(3.4rem,9vw,10.5rem)] text-[#C41E3A] font-bold",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* ── Background image via CSS ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/demos/black-rose/images/gallery-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 z-[1] bg-black/70" />

      {/* ── Vignette overlay ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* ── Grain overlay ── */}
      <div
        className="fixed inset-0 z-[3] pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Content: split layout ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
        {/* ── Left: Typography ── */}
        <div className="relative">
          {/* ── Mobile-only Seal watermark (behind text) ── */}
          <div className="absolute inset-0 flex items-center justify-center lg:hidden pointer-events-none">
            <RoseSeal className="h-[280px] w-[280px] opacity-[0.15]" />
          </div>

          <motion.h1
            className="relative font-[family-name:var(--font-playfair)] leading-[0.95]"
            initial="hidden"
            animate="visible"
          >
            {lines.map((line) => (
              <motion.span
                key={line.text}
                custom={line.delay}
                variants={wordReveal}
                className={`block overflow-hidden ${line.className}`}
              >
                {line.text.split(" ").map((word, wi) => (
                  <motion.span
                    key={wi}
                    variants={wordChild}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h1>

          {/* ── Tagline ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="relative mt-6 text-[11px] uppercase tracking-[0.4em] text-[#F5F0E8]/50"
          >
            Amsterdam Centrum &middot; Est. 2015 &middot; By appointment
          </motion.p>
        </div>

        {/* ── Right: Rose Seal (desktop only, floating) ── */}
        <motion.div
          className="hidden lg:flex items-center justify-end"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <RoseSeal className="h-[450px] w-[450px]" />
        </motion.div>

        {/* ── CTA buttons (full width row, below seal on desktop) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="relative inline-flex gap-4 lg:col-span-2"
        >
          <a
            href="#booking"
            className="bg-[#C41E3A] px-6 py-3 text-xs tracking-widest uppercase text-white transition-all hover:bg-[#C41E3A]/80"
          >
            Book a Session
          </a>
          <a
            href="#gallery"
            className="border border-white/30 px-6 py-3 text-xs tracking-widest uppercase text-white transition-all hover:border-white"
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
