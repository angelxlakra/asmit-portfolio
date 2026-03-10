"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-32 md:py-48 px-4 bg-stone-950 text-stone-50 border-t border-stone-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-5xl md:text-8xl mb-8">
            Let&apos;s talk about your<br/>
            <span className="italic text-stone-400 font-light">next project.</span>
          </h2>
          
          <a className="shrink-0 inline-block mt-8 text-2xl font-sans font-light tracking-wide border-b border-stone-500 pb-2 hover:border-stone-50 transition-colors duration-300" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </motion.div>
        
        <div className="w-full mt-32 md:mt-48 flex justify-between items-end font-sans text-xs uppercase tracking-widest text-stone-500 font-medium">
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-300 transition-colors">Instagram</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Twitter</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Behance</a>
          </div>
          
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}
