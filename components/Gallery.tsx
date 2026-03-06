"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pieces = [
  { src: "/images/gallery-1.jpg", label: "Blackwork" },
  { src: "/images/gallery-2.jpg", label: "Fine Line" },
  { src: "/images/gallery-3.jpg", label: "Traditional" },
  { src: "/images/gallery-4.jpg", label: "Neo-Traditional" },
  { src: "/images/gallery-5.jpg", label: "Blackwork" },
  { src: "/images/gallery-6.jpg", label: "Fine Line" },
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
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {pieces.map((piece, i) => (
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
            >
              <Image
                src={piece.src}
                alt={piece.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#C41E3A]/0 transition-all duration-500 group-hover:bg-[#C41E3A]/20" />

              {/* Label on hover */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#F5F0E8]">
                  {piece.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
