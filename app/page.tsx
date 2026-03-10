import Hero from "@/components/Hero";
import FeaturedGallery from "@/components/FeaturedGallery";
import MasonryGallery from "@/components/MasonryGallery";
import ProjectGrid from "@/components/ProjectGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

import { photos } from "@/lib/photos";
import { projects } from "@/lib/projects";

// The homepage acts as a server component to feed data to client components
export default function Home() {
  const featuredPhotos = [...photos].slice(0, 7);
  const masonryPhotos = [...photos].sort(() => Math.random() - 0.5); // Random sort for demo

  return (
    <main className="min-h-screen bg-stone-950">
      <Hero />
      
      <div className="relative z-10">
        <FeaturedGallery photos={featuredPhotos} />
        
        <section className="px-4 py-32 md:py-48 max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-32 max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl mb-6 text-stone-50">Selected Series.</h2>
            <p className="font-sans text-stone-400 font-light text-lg">Curated collections exploring human connection and urban landscapes around the globe.</p>
          </div>
          <ProjectGrid projects={projects} />
        </section>
        
        <section className="px-4 pb-32 md:pb-48 max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-32 max-w-2xl">
             <h2 className="font-serif text-5xl md:text-7xl mb-6 text-stone-50">Gallery.</h2>
             <p className="font-sans text-stone-400 font-light text-lg">Recent captures and fleeting moments.</p>
          </div>
          <MasonryGallery photos={masonryPhotos} columnsCount={3} />
        </section>
        
        <AboutSection />
        
        <ContactSection />
      </div>
    </main>
  );
}
