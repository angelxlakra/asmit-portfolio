import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/lib/projects";
import { getPhotosByProject } from "@/lib/photos";
import MasonryGallery from "@/components/MasonryGallery";
import ContactSection from "@/components/ContactSection";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find photos for this project using its title
  // In a real CMS, projects and photos would be linked by ID
  const projectPhotos = getPhotosByProject(project.title);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-50">
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="font-serif text-xl hover:opacity-70 transition-opacity">
          &uarr; Back to Portfolio
        </Link>
        <span className="font-sans text-xs uppercase tracking-widest text-stone-300">
          {project.date}
        </span>
      </nav>

      <section className="relative h-[70vh] w-full flex items-end p-8 md:p-16 lg:p-24 pb-16">
        <div className="absolute inset-0 -z-10 bg-stone-900">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-stone-950/20" />
        </div>
        
        <div className="max-w-4xl">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 truncate">{project.title}</h1>
          <p className="font-sans text-xl md:text-3xl font-light text-stone-300 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      <section className="px-4 py-24 md:py-32 max-w-[1400px] mx-auto">
        <div className="mb-24 flex items-center justify-between border-b border-stone-800 pb-12">
          <div className="flex flex-col gap-2 font-sans">
             <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Project Details</span>
             <span className="text-lg md:text-xl font-light">{projectPhotos.length} Photographs</span>
          </div>
          <div className="flex flex-col gap-2 font-sans text-right">
             <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Location</span>
             <span className="text-lg md:text-xl font-light">Worldwide</span>
          </div>
        </div>

        {projectPhotos.length > 0 ? (
          <MasonryGallery photos={projectPhotos} columnsCount={2} />
        ) : (
           <p className="text-stone-500 font-serif italic text-2xl text-center py-24">
             More photographs coming soon...
           </p>
        )}
      </section>

      <ContactSection />
    </main>
  );
}
