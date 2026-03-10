"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photos } from "@/lib/photos";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useRef(false);

  // Take up to 10 photos for the hover interaction
  const interactionPhotos = photos.slice(0, 10);
  
  // Track cursor position with framer-motion values
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Apply spring physics for delayed/smooth following
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothHoverX = useSpring(cursorX, springConfig);
  const smoothHoverY = useSpring(cursorY, springConfig);
  
  type DetachedTrail = {
    id: string;
    photoIndex: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
  const [detachedTrails, setDetachedTrails] = useState<DetachedTrail[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const lastActiveIndex = useRef<number | null>(null);

  useEffect(() => {
    // Check if the device primarily uses touch (mobile fallback)
    isTouchDevice.current = typeof window !== 'undefined' && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Slow Ken Burns effect (Zoom)
    gsap.to(zoomRef.current, {
      scale: 1.15,
      duration: 30,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Parallax on scroll
    gsap.to(imageRef.current, {
      y: "20%",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  // Handle mouse move over the entire hero section
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouchDevice.current) return;
    
    setIsHovering(true);
    
    if (container.current) {
      const rect = container.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      cursorX.set(x);
      cursorY.set(y);
      
      // Determine which photo to show based on horizontal position
      const segmentWidth = rect.width / interactionPhotos.length;
      const newIndex = Math.floor(x / segmentWidth);
      
      const clampedIndex = Math.max(0, Math.min(newIndex, interactionPhotos.length - 1));
      
      if (clampedIndex !== lastActiveIndex.current) {
        if (lastActiveIndex.current !== null) {
          const currentX = smoothHoverX.get();
          const currentY = smoothHoverY.get();
          const velX = smoothHoverX.getVelocity() || 0;
          const velY = smoothHoverY.getVelocity() || 0;
          
          const newId = `detached-${Date.now()}-${Math.random()}`;
          const photoIdxToFreeze = lastActiveIndex.current;
          
          setDetachedTrails(prev => {
            return [...prev.slice(-15), {
              id: newId,
              photoIndex: photoIdxToFreeze,
              startX: currentX,
              startY: currentY,
              endX: currentX + velX * 0.4,
              endY: currentY + velY * 0.4
            }];
          });
          
          setTimeout(() => {
            setDetachedTrails(prev => prev.filter(t => t.id !== newId));
          }, 1200);
        }
        
        lastActiveIndex.current = clampedIndex;
        setActiveIndex(clampedIndex);
      }
    }
  }, [cursorX, cursorY, interactionPhotos.length, smoothHoverX, smoothHoverY]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    if (lastActiveIndex.current !== null) {
      const currentX = smoothHoverX.get();
      const currentY = smoothHoverY.get();
      const velX = smoothHoverX.getVelocity() || 0;
      const velY = smoothHoverY.getVelocity() || 0;
      
      const newId = `final-${Date.now()}`;
      const photoIdxToFreeze = lastActiveIndex.current;
      
      setDetachedTrails(prev => [...prev.slice(-15), {
        id: newId,
        photoIndex: photoIdxToFreeze,
        startX: currentX,
        startY: currentY,
        endX: currentX + velX * 0.4,
        endY: currentY + velY * 0.4
      }]);
      
      setTimeout(() => {
        setDetachedTrails(prev => prev.filter(t => t.id !== newId));
      }, 1200);
    }
    
    setActiveIndex(null);
    lastActiveIndex.current = null;
  }, [smoothHoverX, smoothHoverY]);

  const name = "Asmit Lakra".split("");

  return (
    <section 
      ref={container} 
      className={`relative h-screen w-full overflow-hidden flex items-end md:items-center justify-center pb-32 md:pb-0 ${isHovering ? "cursor-none" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Base Background Image Wrapper */}
      <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        
        <div ref={zoomRef} className="relative w-full h-full origin-center">
          <Image
            src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1920"
            alt="Atmospheric street portrait by Asmit Lakra"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-stone-950/60 transition-opacity duration-700" style={{ opacity: isHovering && !isTouchDevice.current ? 0.8 : 1 }} />
      </div>

      {/* Detached Inertia Trails */}
      {!isTouchDevice.current && detachedTrails.map((trail, idx) => {
        const photo = interactionPhotos[trail.photoIndex];
        return (
          <motion.div
            key={trail.id}
            style={{
               position: "absolute",
               left: 0,
               top: 0,
               translateX: "-50%",
               translateY: "-50%",
               zIndex: 10 + idx, 
               pointerEvents: "none"
            }}
            initial={{ opacity: 1, scale: 1, x: trail.startX, y: trail.startY }}
            animate={{ opacity: 0, scale: 0.85, x: trail.endX, y: trail.endY }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-48 md:w-64 lg:w-72 aspect-[3/4] overflow-hidden shadow-2xl relative bg-stone-900 border border-stone-800/50"
          >
            <Image
               src={photo.image}
               alt={photo.title}
               fill
               className="object-cover"
               sizes="400px"
             />
             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-stone-950/80 to-transparent z-10" style={{ opacity: 0 }}>
               <span className="font-serif text-sm text-stone-50 drop-shadow-md">{photo.title}</span>
             </div>
          </motion.div>
        );
      })}

      {/* Active Cursor Photo */}
      <AnimatePresence>
        {isHovering && activeIndex !== null && !isTouchDevice.current && (
           <motion.div
             key={`active-${activeIndex}`}
             style={{
               position: "absolute",
               left: 0,
               top: 0,
               x: smoothHoverX,
               y: smoothHoverY,
               translateX: "-50%",
               translateY: "-50%",
               zIndex: 25,
               pointerEvents: "none"
             }}
             initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
             animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
             transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
             className="w-48 md:w-64 lg:w-72 aspect-[3/4] overflow-hidden shadow-2xl relative bg-stone-900 border border-stone-800/50"
           >
             <Image
               src={interactionPhotos[activeIndex].image}
               alt={interactionPhotos[activeIndex].title}
               fill
               className="object-cover"
               sizes="400px"
             />
             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-stone-950/80 to-transparent z-10 transition-opacity duration-300">
               <span className="font-serif text-sm text-stone-50 drop-shadow-md">{interactionPhotos[activeIndex].title}</span>
             </div>
           </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Vertical Gradient for better text readability at the bottom */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30 opacity-80 z-30" />

      {/* Film Grain Texture Overlay */}
      <svg className="pointer-events-none absolute inset-0 z-30 h-full w-full opacity-[0.25] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <div className="z-40 px-6 md:px-12 w-full max-w-7xl relative flex flex-col items-start gap-4 pointer-events-none">
        
        {/* Subheading */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-stone-400 mix-blend-screen">
            Student Photographer
          </span>
        </motion.div>

        {/* Large Heading with Staggered Characters */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-none text-stone-50 flex flex-wrap -ml-1 md:-ml-2 mix-blend-screen drop-shadow-md">
          {name.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.4 + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={char === " " ? "w-4 md:w-8" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        
        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base md:text-xl text-stone-300 font-light max-w-xl md:mt-4 leading-relaxed mix-blend-screen"
        >
          Exploring street life and quiet moments through natural light photography.
        </motion.p>
      </div>
      
      {/* Scroll Cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-12 md:bottom-16 left-6 md:left-[3.25rem] flex flex-col items-center gap-4 z-40 pointer-events-none"
      >
        <div className="w-[1px] h-16 md:h-24 bg-stone-800 overflow-hidden relative">
          <motion.div 
             animate={{ y: ["-100%", "100%"] }}
             transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
             className="w-full h-full bg-stone-300 inline-block absolute top-0"
          />
        </div>
      </motion.div>

      {/* Custom Filter Cursor */}
      <AnimatePresence>
        {isHovering && !isTouchDevice.current && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
              zIndex: 50,
              pointerEvents: "none"
            }}
            className="w-12 h-12 rounded-full border border-stone-50 mix-blend-difference bg-stone-300/20 backdrop-invert"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
