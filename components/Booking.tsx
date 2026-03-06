"use client";

import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section id="booking" className="px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-playfair)] text-4xl italic leading-tight md:text-6xl lg:text-7xl">
            Ready to wear your story?
          </h2>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:info@blackrosetattoo.nl"
              className="magnetic-btn bg-[#C41E3A] px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-[#F5F0E8] transition-all hover:bg-[#a01830]"
            >
              Book a Session
            </a>
            <a
              href="#styles"
              className="magnetic-btn border border-[#F5F0E8]/20 px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-[#F5F0E8]/80 transition-all hover:border-[#F5F0E8]/50 hover:text-[#F5F0E8]"
            >
              See All Artists
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 text-[11px] uppercase tracking-[0.3em] text-[#F5F0E8]/40"
          >
            Dirk van Hasseltssteeg 56, 1012 NE Amsterdam
          </motion.p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16 overflow-hidden"
        >
          <iframe
            title="Black Rose Tattoo & Gallery location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.9!2d4.893!3d52.374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzI2LjQiTiA0wrA1Myc0MC44IkU!5e0!3m2!1sen!2snl!4v1700000000000"
            width="100%"
            height="300"
            style={{
              border: 0,
              filter:
                "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.5)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
