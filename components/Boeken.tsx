"use client";

import { motion } from "framer-motion";

export default function Boeken() {
  return (
    <section id="boeken" className="bg-dark py-24 md:py-32">
      <div className="max-w-[900px] mx-auto px-8 md:px-12 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-gold/70 block mb-4">
            Boeken
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,5vw,3.5rem)] font-light text-cream leading-[1.15] mb-8">
            Plan je consult
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
        >
          <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-cream/70 mb-6">
            Elk tattoo-project begint met een persoonlijk gesprek. Loop binnen in de studio,
            stuur een bericht via Instagram, of neem telefonisch contact op. Samen bespreken
            we jouw idee, de stijl en de mogelijkheden.
          </p>

          <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-cream/70 mb-12">
            Geen online formulieren, geen wachtlijsten: gewoon direct contact met de artiesten
            die jouw visie tot leven brengen.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
          className="bg-mid border border-cream/8 p-8 md:p-12 max-w-[600px] mx-auto"
        >
          <h3 className="font-[family-name:var(--font-cormorant)] text-[1.5rem] font-light text-cream mb-6">
            Neem contact op
          </h3>

          <div className="space-y-4 text-[0.9rem] text-cream/60">
            <p>
              <span className="text-gold/80 text-[0.7rem] tracking-[0.15em] uppercase block mb-1">Adres</span>
              Dirk van Hasseltssteeg 56<br />
              1012 NE Amsterdam
            </p>

            <div className="h-px bg-cream/8" />

            <p>
              <span className="text-gold/80 text-[0.7rem] tracking-[0.15em] uppercase block mb-1">Openingstijden</span>
              Bekijk Google Maps voor actuele openingstijden
            </p>

            <div className="h-px bg-cream/8" />

            <p>
              <span className="text-gold/80 text-[0.7rem] tracking-[0.15em] uppercase block mb-1">Contact</span>
              Loop binnen of stuur een DM via Instagram
            </p>
          </div>

          {/* CTA button */}
          <a
            href="https://maps.google.com/?q=Black+Rose+Tattoo+And+Gallery+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 border border-gold/40 text-[0.75rem] tracking-[0.15em] uppercase text-gold hover:bg-gold/10 transition-colors duration-300"
          >
            Bekijk op Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
