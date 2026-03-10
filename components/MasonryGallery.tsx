"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { Photo } from "@/lib/photos";
import PhotoLightbox from "./PhotoLightbox";
import PhotoCard from "./PhotoCard";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MasonryGalleryProps {
  photos: Photo[];
  className?: string;
  columnsCount?: 1 | 2 | 3;
}

export default function MasonryGallery({ photos, className, columnsCount = 3 }: MasonryGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Basic masonry column distribution
  const columns = useMemo(() => {
    // initialize array of arrays for the columns
    const cols: Photo[][] = Array.from({ length: columnsCount }, () => []);
    
    // distribute photos
    photos.forEach((photo, index) => {
      cols[index % columnsCount].push(photo);
    });
    return cols;
  }, [photos, columnsCount]);

  const handleOpen = (id: string) => {
    const index = photos.findIndex((p) => p.id === id);
    setCurrentIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      const colElements = gsap.utils.toArray<HTMLElement>('.gallery-column');
      
      const mm = gsap.matchMedia();
      
      // Only apply parallax on desktop/tablet where there are multiple columns side by side
      mm.add("(min-width: 768px)", () => {
        colElements.forEach((col, index) => {
          // Middle column (index 1) scrolls slower -> goes from top to bottom
          // Outer columns (index 0, 2) scroll slightly faster -> go from bottom to top
          const isMiddle = index % 2 !== 0;
          const yStart = isMiddle ? -200 : 60;
          const yEnd = isMiddle ? 200 : -60;
          
          gsap.fromTo(col, 
            { y: yStart },
            {
              y: yEnd,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // add 1 second smoothing
              }
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className={clsx(
          "grid gap-4 md:gap-8 lg:gap-12 items-start",
          columnsCount === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          columnsCount === 2 && "grid-cols-1 md:grid-cols-2",
          columnsCount === 1 && "grid-cols-1",
          className
        )}
      >
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="gallery-column flex flex-col gap-4 md:gap-8 lg:gap-12">
            {col.map((photo) => (
              <PhotoCard 
                key={photo.id}
                photo={photo}
                onClick={() => handleOpen(photo.id)}
              />
            ))}
          </div>
        ))}
      </div>

      <PhotoLightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        photos={photos}
      />
    </>
  );
}
