"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-4 w-full bg-stone-50 text-stone-950 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
        <div className="w-full md:w-5/12 aspect-[3/4] relative overflow-hidden bg-stone-200">
           <motion.div style={{ y, height: "120%", marginTop: "-10%" }} className="relative w-full">
            <Image
              src="https://images.unsplash.com/photo-1555580064-9fb283a00fde?auto=format&fit=crop&q=80&w=1920"
              alt="Photographer at work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>
        </div>
        
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
             <h2 className="font-serif text-5xl md:text-7xl mb-8">
               Looking through<br/><span className="text-stone-500 italic">the lens.</span>
             </h2>
             
             <div className="space-y-6 font-sans text-lg text-stone-600 font-light max-w-xl">
               <p>
                 I am a contemporary photographer specializing in cinematic street portraits and urban geometry. My work focuses on capturing fleeting moments of humanity against the brutalist backdrop of modern cities.
               </p>
               <p>
                 Based in Chennai, traveling worldwide. Available for editorial assignments, commercial campaigns, and fine art prints.
               </p>
             </div>
             
             <button className="mt-12 uppercase tracking-[0.2em] font-sans text-xs border border-stone-950 px-8 py-4 hover:bg-stone-950 hover:text-stone-50 transition-colors duration-300">
               Read Full Story
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
