"use client";

import { motion } from "framer-motion";

const pieces = [
  "Blackwork",
  "Fine Line",
  "Traditional",
  "Neo-Traditional",
  "Blackwork",
  "Fine Line",
  "Traditional",
  "Neo-Traditional",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C41E3A]">
            Portfolio
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl italic leading-tight md:text-5xl">
            The Work
          </h2>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {pieces.map((label, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: (idx: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: idx * 0.08,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  },
                }),
              }}
              className="group relative aspect-[3/4] overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #111 0%, #1a1a1a 100%)",
              }}
            >
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#F5F0E8]/15">
                  {label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#C41E3A]/0 transition-all duration-500 group-hover:bg-[#C41E3A]/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
