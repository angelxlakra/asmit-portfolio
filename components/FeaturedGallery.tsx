"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Photo } from "@/lib/photos";

interface FeaturedGalleryProps {
  photos: Photo[];
}

export default function FeaturedGallery({ photos }: FeaturedGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  
  const displayPhotos = photos.slice(0, 7);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !pinRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=6000",
          scrub: 1,
          pin: true,
        }
      });

      const img1 = ".img-1";
      const meta1 = ".meta-1";
      const text1 = ".text-1";
      const stage1Lines = ".stage-1-lines";
      
      const stage2 = ".stage-2";
      const stage3 = ".stage-3";

      // Initial state
      gsap.set(img1, { width: "100%", height: "100%", left: "0%", top: "0%" });
      gsap.set([meta1, text1, stage1Lines], { opacity: 0 });
      gsap.set(".stage-1", { xPercent: 0, transformOrigin: "left center" });
      gsap.set(stage2, { xPercent: -100, scaleX: 0, transformOrigin: "left center"  }); // Start off-screen right
      gsap.set(stage3, { xPercent: -100, scaleX: 0, transformOrigin: "left center" });

      // ACTION 1: Shrink centered image and fade in grid/text/meta
      tl.to(img1, {
        width: "35%",
        height: "70%",
        left: "10%",
        top: "15%",
        duration: 1.5,
        ease: "power3.inOut"
      }, 0);

      tl.to([stage1Lines, text1, meta1], {
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut"
      }, 0.7);

      tl.to({}, { duration: 0.5 }); // Hold

      // ACTION 2: Stage 1 pans left, Stage 2 pans in
      tl.to(".stage-1", {
        xPercent: -100,
        scaleX: 0,
        duration: 0.5,
        ease: "power3.inOut"
      }, "+=0");

      tl.to(stage2, {
        xPercent: 0,
        scaleX: 1,
        duration: 1,
        ease: "power3.inOut"
      }, "<");

      tl.to({}, { duration: 0.5 }); // Hold

      // ACTION 3: Stage 2 pans left, Stage 3 pans in
      tl.to(stage2, {
        xPercent: -100,
        scaleX: 0,
        duration: 1,
        ease: "power3.inOut"
      }, "+=0");

      tl.to(stage3, {
        xPercent: 0,
        scaleX: 1,
        duration: 1,
        ease: "power3.inOut"
      }, "<");

      tl.to({}, { duration: 0.5 }); // End hold

    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (displayPhotos.length < 7) return null;

  const generateMetadata = (p: Photo) => `• ${p.lens} f/${p.aperture.replace('f/', '')} ${p.shutter}s ISO${p.iso}`;

  return (
    <section ref={containerRef} className="bg-[#050505] relative w-full -mt-[1px]">
      <div ref={pinRef} className="w-full h-screen relative overflow-hidden bg-[#050505] text-stone-50">

        {/* STAGE 1 CONTAINER */}
        <div className="stage-1 absolute inset-0 z-20 w-full h-full">
          {/* Stage 1 - Grid Lines */}
          <div className="stage-1-lines absolute inset-0 z-0">
            <div className="absolute top-[15%] w-full h-[1px] bg-stone-800/60" />
            <div className="absolute top-[85%] w-full h-[1px] bg-stone-800/60" />
            <div className="absolute left-[10%] w-[1px] h-full bg-stone-800/60" />
            <div className="absolute left-[45%] w-[1px] h-full bg-stone-800/60" />
          </div>
          
          {/* Stage 1 Image */}
          <div className="img-1 absolute overflow-hidden shadow-2xl z-10 w-full h-full bg-stone-900 border border-stone-800">
            <Image 
              src={displayPhotos[0].image} alt={displayPhotos[0].title} fill
              className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" priority
            />
          </div>

          {/* Stage 1 Text */}
          <div className="text-1 absolute left-[55%] top-[40%] w-[35%] z-20">
            <h2 className="font-sans text-2xl md:text-3xl lg:text-5xl text-stone-200 font-normal leading-tight tracking-tight">
              Curated Gallery.<br/>Quiet stories in<br/>every frame.
            </h2>
          </div>

          {/* Stage 1 Meta */}
          <div className="meta-1 absolute left-[10%] top-[85%] mt-4 z-20">
            <p className="font-mono text-[10px] text-stone-500 tracking-wider uppercase">
              {generateMetadata(displayPhotos[0])}
            </p>
          </div>
        </div>

        {/* STAGE 2 CONTAINER */}
        <div className="stage-2 absolute inset-0 z-20 w-full h-full">
          {/* Stage 2 - Grid Lines */}
          <div className="absolute top-[45%] left-0 w-full h-[1px] bg-stone-800/90 z-0" />
          <div className="absolute top-0 left-[65%] w-[1px] h-full bg-stone-800/90 z-0" />

          {/* Image 2: Top Left */}
          <div className="absolute left-0 top-0 w-[65%] h-[45%]">
             <div className="absolute bottom-0 right-30 w-[100%] h-[100%] bg-transparent z-10">
               <Image src={displayPhotos[1].image} alt={displayPhotos[1].title} fill className="object-contain" sizes="30vw" />
             </div>
             <div className="absolute top-[5%] left-[65%] z-20">
               <p className="font-mono text-[10px] text-stone-500 tracking-wider hidden md:block uppercase">
                 {generateMetadata(displayPhotos[1])}
               </p>
             </div>
          </div>

          {/* Image 3: Bottom Left */}
          <div className="absolute -left-0 top-[45%] w-[45%] h-[55%] bg-transparent z-10 ">
            <Image src={displayPhotos[3].image} alt={displayPhotos[3].title} fill className="object-contain" sizes="45vw" />
            <div className="absolute bottom-4 -right-10 z-20 px-2 py-1">
               <p className="font-mono text-[10px] text-stone-300 tracking-wider uppercase drop-shadow-md">
                 {generateMetadata(displayPhotos[3])}
               </p>
            </div>
          </div>

          {/* Image 4: Bottom Right */}
          <div className="absolute left-[65%] top-[45%] w-[35%] h-[55%] bg-transparent z-10">
            <Image src={displayPhotos[2].image} alt={displayPhotos[2].title} fill className="object-cover" sizes="55vw" />
          </div>

          {/* Empty Cell: Top Right (Contains metadata for Image 4) */}
          <div className="absolute left-[65%] -top-5 w-[55%] h-[50%] p-6 flex flex-col justify-end z-10">
             <p className="font-mono text-[10px] text-stone-500 tracking-wider hidden md:block uppercase">
               {generateMetadata(displayPhotos[2])}
             </p>
          </div>
        </div>

        {/* STAGE 3 CONTAINER */}
        <div className="stage-3 absolute inset-0 z-20 w-full h-full hidden">
          {/* Stage 3 - Grid Lines */}
          <div className="absolute top-[50%] left-0 w-full h-[1px] bg-stone-800/60 z-0" />
          <div className="absolute top-0 left-[55%] w-[1px] h-[50%] bg-stone-800/60 z-0" />
          <div className="absolute top-[50%] left-[65%] w-[1px] h-[50%] bg-stone-800/60 z-0" />
          <div className="absolute top-0 left-[65%] w-[1px] h-[50%] bg-stone-800/30 z-0" />

          {/* Image 5: Top Left */}
          <div className="absolute left-0 top-0 w-[55%] h-[50%]">
             <div className="absolute top-0 right-0 w-[80%] h-[100%] bg-stone-900 z-10 border border-stone-800/50">
               <Image src={displayPhotos[4].image} alt={displayPhotos[4].title} fill className="object-cover" sizes="40vw" />
             </div>
          </div>

          {/* Empty Cell: Top Right (Contains metadata for Image 5 & 7) */}
          <div className="absolute left-[55%] top-0 w-[45%] h-[50%] p-6 z-10">
             <div className="absolute top-6 left-6 hidden md:block">
                <p className="font-mono text-[10px] text-stone-500 tracking-wider uppercase">
                  {generateMetadata(displayPhotos[4])}
                </p>
             </div>
             <div className="absolute bottom-6 left-6 hidden md:block">
                <p className="font-mono text-[10px] text-stone-500 tracking-wider uppercase">
                  {generateMetadata(displayPhotos[6])}
                </p>
             </div>
          </div>

          {/* Image 6: Bottom Left */}
          <div className="absolute left-0 top-[50%] w-[65%] h-[50%] bg-stone-900 z-10">
            <Image src={displayPhotos[5].image} alt={displayPhotos[5].title} fill className="object-cover" sizes="65vw" />
            <div className="absolute bottom-6 right-8 z-20 px-2 py-1">
               <p className="font-mono text-[10px] text-stone-300 tracking-wider uppercase drop-shadow-md">
                 {generateMetadata(displayPhotos[5])}
               </p>
            </div>
          </div>

          {/* Image 7: Bottom Right */}
          <div className="absolute left-[65%] top-[50%] w-[35%] h-[50%] bg-stone-900 z-10">
            <Image src={displayPhotos[6].image} alt={displayPhotos[6].title} fill className="object-cover" sizes="35vw" />
            <div className="absolute bottom-6 left-6 z-20 px-2 py-1 md:hidden">
               <p className="font-mono text-[10px] text-stone-300 tracking-wider uppercase drop-shadow-md">
                 {generateMetadata(displayPhotos[6])}
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
