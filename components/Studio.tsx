"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Studio() {
  return (
    <section id="studio" className="bg-dark py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-gold/70 block mb-4">
            De Studio
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,5vw,3.5rem)] font-light text-cream leading-[1.15]">
            Waar vakmanschap<br className="hidden md:block" /> en creativiteit samenkomen
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left column — photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="md:col-span-5 relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="/images/photo1.jpg"
              alt="Black Rose Tattoo studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
          </motion.div>

          {/* Right column — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="md:col-span-7 md:pt-12"
          >
            <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-cream/70 mb-8">
              Black Rose Tattoo And Gallery staat al jaren bekend als een van de meest gewaardeerde
              tattoo studios van Amsterdam. Verscholen in de Dirk van Hasseltssteeg, midden in het
              centrum, vind je een plek waar artiesten met passie en precisie werken aan elk stuk.
            </p>

            <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-cream/70 mb-12">
              Van fijnlijnig blackwork tot grootschalige realistische portretten: het team beheerst
              een breed scala aan stijlen. Dat zie je terug in de meer dan 344 perfecte vijf-sterren
              reviews op Google. Geen toeval, maar het resultaat van vakmanschap en persoonlijke aandacht.
            </p>

            {/* Stats row */}
            <div className="flex gap-12 md:gap-16">
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-[2.5rem] md:text-[3rem] font-light text-gold block leading-[1]">
                  344
                </span>
                <span className="text-[0.7rem] tracking-[0.15em] uppercase text-cream/40 mt-1 block">
                  5-sterren reviews
                </span>
              </div>
              <div className="w-px bg-cream/10" />
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-[2.5rem] md:text-[3rem] font-light text-gold block leading-[1]">
                  5.0
                </span>
                <span className="text-[0.7rem] tracking-[0.15em] uppercase text-cream/40 mt-1 block">
                  Google rating
                </span>
              </div>
            </div>

            {/* Address line */}
            <div className="mt-12 pt-8 border-t border-cream/8">
              <p className="text-[0.8rem] tracking-[0.05em] text-cream/40">
                Dirk van Hasseltssteeg 56, 1012 NE Amsterdam
              </p>
            </div>
          </motion.div>
        </div>

        {/* Second row — branded merch photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="mt-16 md:mt-24 relative aspect-[16/7] overflow-hidden"
        >
          <Image
            src="/images/photo3.jpg"
            alt="Black Rose Tattoo merchandise"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
