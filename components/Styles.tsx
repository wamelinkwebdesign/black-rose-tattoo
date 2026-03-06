"use client";

import { motion } from "framer-motion";

const styles = [
  {
    name: "Blackwork",
    description:
      "Bold, graphic compositions using solid black ink. From geometric patterns to illustrative pieces with maximum contrast.",
  },
  {
    name: "Fine Line",
    description:
      "Delicate, precise linework with intricate detail. Subtle, elegant designs that age with grace and sophistication.",
  },
  {
    name: "Traditional",
    description:
      "Time-honored techniques with bold outlines and a rich color palette. Classic motifs reimagined for the modern collector.",
  },
  {
    name: "Neo-Traditional",
    description:
      "The depth of traditional craft with contemporary illustration. Expanded color palettes and flowing compositions.",
  },
];

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Styles() {
  return (
    <section id="styles" className="px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C41E3A]">
            Specialties
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl italic leading-tight md:text-5xl">
            The Art of Ink
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {styles.map((style, i) => (
            <motion.div
              key={style.name}
              custom={i}
              variants={card}
              className="group border border-[#C41E3A]/20 bg-[#111] p-8 transition-all duration-500 hover:border-[#C41E3A]/60 hover:shadow-[0_0_30px_rgba(196,30,58,0.1)]"
              style={{ transform: "scale(1)", transition: "transform 0.4s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#F5F0E8]">
                {style.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#F5F0E8]/50">
                {style.description}
              </p>
              <div className="mt-6 h-[1px] w-8 bg-[#C41E3A]/40 transition-all duration-500 group-hover:w-full group-hover:bg-[#C41E3A]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
