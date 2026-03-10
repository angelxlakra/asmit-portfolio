"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Photo } from "@/lib/photos";

interface PhotoLightboxProps {
  open: boolean;
  close: () => void;
  index: number;
  photos: Photo[];
}

export default function PhotoLightbox({ open, close, index, photos }: PhotoLightboxProps) {
  // Map our Photo objects into the format expected by the lightbox
  const slides = photos.map((p) => ({
    src: p.image,
    alt: p.title,
    width: p.width,
    height: p.height,
    ...p
  }));

  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      render={{
        slide: ({ slide }) => {
          // Cast the slide back to our extended type to access metadata
          const p = slide as typeof slides[0];
          return (
            <div className="flex h-full w-full relative items-center justify-center p-4 md:p-12">
              <div className="relative h-full w-full flex items-center justify-center group">
                <img
                  src={p.src}
                  alt={p.alt}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.5)",
                  }}
                  className="transition-transform duration-500 ease-out"
                />
                
                {/* Overlay Metadata */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-stone-950/80 backdrop-blur-md p-6 border border-stone-800/50 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-left max-w-sm">
                  <h3 className="font-serif text-2xl text-stone-100 mb-1">{p.title}</h3>
                  {p.caption && (
                    <p className="font-sans text-sm text-stone-400 mb-4 font-light leading-relaxed">{p.caption}</p>
                  )}
                  
                  <div className="font-sans text-xs tracking-wider text-stone-500 space-y-1.5 uppercase">
                    <p className="text-stone-300 font-medium">{p.camera}</p>
                    <p>{p.lens}</p>
                    <p>{p.aperture} &bull; {p.shutter} &bull; ISO {p.iso}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        },
      }}
      styles={{
        root: { "--yarl__color_backdrop": "rgba(10, 10, 10, 0.95)" },
      }}
    />
  );
}
