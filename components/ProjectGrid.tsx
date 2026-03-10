"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { motion } from "framer-motion";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-32 py-24">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i % 2 !== 0 ? 0.2 : 0 }}
          className={`flex flex-col group ${i % 2 !== 0 ? "md:mt-32" : ""}`}
        >
          <Link href={`/projects/${project.slug}`} className="block relative aspect-[4/5] w-full overflow-hidden mb-8 bg-stone-900">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
            />
          </Link>
          
          <div className="flex justify-between items-end">
            <div>
              <h3 className="font-serif text-3xl text-stone-100 mb-3">{project.title}</h3>
              <p className="font-sans text-sm text-stone-400 font-light max-w-sm">
                {project.description}
              </p>
            </div>
            <span className="font-sans text-xs text-stone-500 uppercase tracking-widest">{project.date}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
