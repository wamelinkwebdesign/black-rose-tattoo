"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "344", label: "Reviews" },
  { value: "5.0", label: "Stars" },
  { value: "10+", label: "Artists" },
  { value: "Centrum", label: "Amsterdam" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Studio() {
  return (
    <section id="studio" className="px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-[11px] uppercase tracking-[0.4em] text-[#C41E3A]"
            >
              Est. Amsterdam
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="mt-4 font-[family-name:var(--font-playfair)] text-4xl italic leading-tight md:text-5xl lg:text-6xl"
            >
              Our Studio
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-[#F5F0E8]/60"
            >
              An intimate tattoo studio and art gallery in the heart of Amsterdam.
              Founded by artists, for art lovers. Every piece we create is a
              collaboration — a conversation between your vision and our craft.
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="mt-4 max-w-lg text-base leading-relaxed text-[#F5F0E8]/60"
            >
              Located at Dirk van Hasseltssteeg 56, our space merges the raw energy
              of tattoo culture with the refined atmosphere of a contemporary gallery.
            </motion.p>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-[family-name:var(--font-playfair)] text-3xl text-[#F5F0E8]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#F5F0E8]/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Studio photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative min-h-[400px] overflow-hidden lg:min-h-[500px]"
          >
            <Image
              src="/images/gallery-3.jpg"
              alt="Black Rose Tattoo studio interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
