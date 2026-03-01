"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  { src: "/images/photo4.jpg", alt: "Kalligrafie lettering tattoo", aspect: "aspect-[3/4]" },
  { src: "/images/photo6.jpg", alt: "Realistische beer tattoo", aspect: "aspect-[1/1]" },
  { src: "/images/photo5.jpg", alt: "Draak en Rolling Stones tattoo", aspect: "aspect-[2/3]" },
  { src: "/images/photo7.jpg", alt: "Full back piece: draak en kasteel", aspect: "aspect-[3/4]" },
  { src: "/images/photo9.jpg", alt: "Vlinder tattoo fijne lijnen", aspect: "aspect-[3/4]" },
  { src: "/images/photo10.jpg", alt: "Zakhorloge en zeilschip tattoo", aspect: "aspect-[1/1]" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-mid py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-gold/70 block mb-4">
            Portfolio
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,5vw,3.5rem)] font-light text-cream leading-[1.15]">
            Recent werk
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="portfolio-grid">
          {works.map((work, i) => (
            <motion.div
              key={work.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.33, 1, 0.68, 1],
              }}
              className={`relative ${work.aspect} overflow-hidden group cursor-pointer`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
