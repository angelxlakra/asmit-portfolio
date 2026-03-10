export interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
}

export const projects: Project[] = [
  {
    slug: "street-portraits",
    title: "Street Portraits",
    description: "Capturing the raw emotion and stories of everyday people.",
    coverImage: "https://picsum.photos/id/200/1920/1280",
    date: "2025"
  },
  {
    slug: "urban-geometry",
    title: "Urban Geometry",
    description: "Exploring the shapes and light of modern cityscapes.",
    coverImage: "https://picsum.photos/id/201/1920/1280",
    date: "2025"
  },
  {
    slug: "highlands",
    title: "Highlands",
    description: "A journey through the misty mountains and valleys.",
    coverImage: "https://picsum.photos/id/202/1920/1280",
    date: "2024"
  },
  {
    slug: "analog-memories",
    title: "Analog Memories",
    description: "Film photography focused on nostalgia and texture.",
    coverImage: "https://picsum.photos/id/203/1920/1280",
    date: "2023"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
