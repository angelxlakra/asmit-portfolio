"use client";

import Image from "next/image";
import { Photo } from "@/lib/photos";
import { motion } from "framer-motion";

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export default function PhotoCard({ photo, onClick }: PhotoCardProps) {
  const aspectRatio = (photo.width && photo.height) 
    ? `${photo.width} / ${photo.height}` 
    : "3/4";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative group cursor-pointer w-full overflow-hidden bg-stone-900"
      onClick={onClick}
    >
      <div 
        className="relative w-full block"
        style={{ aspectRatio }}
      >
        <Image
          src={photo.image}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
        />
        
        {/* Dark overlay specifically tailored for typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
        
        {/* Metadata display on hover */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-4 shadow-sm opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 w-full">
          <h3 className="font-serif text-3xl md:text-2xl text-stone-50 mb-2 truncate max-w-full drop-shadow-md">{photo.title}</h3>
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs uppercase tracking-widest text-stone-300 font-medium">Explore</span>
            <div className="h-[1px] w-6 bg-stone-400"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
