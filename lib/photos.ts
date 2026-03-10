export interface Photo {
  id: string;
  title: string;
  image: string;
  caption?: string;
  project: string;
  camera: string;
  lens: string;
  aperture: string;
  shutter: string;
  iso: string;
  location: string;
  date: string;
  tags: string[];
  width?: number;
  height?: number;
}

export const photos: Photo[] = [
  {
    "id": "photo-1",
    "title": "Photo 1 - Street Portraits",
    "image": "https://picsum.photos/id/100/1920/1280",
    "caption": "Captured during the Street Portraits series exploring natural light and form.",
    "project": "Street Portraits",
    "camera": "Sony A7III",
    "lens": "35mm f1.4",
    "aperture": "f/1.4",
    "shutter": "1/60",
    "iso": "100",
    "location": "Tokyo",
    "date": "2025-01-01",
    "tags": [
      "street",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-2",
    "title": "Photo 2 - Street Portraits",
    "image": "https://picsum.photos/id/108/1920/1280",
    "caption": "Captured during the Street Portraits series exploring natural light and form.",
    "project": "Street Portraits",
    "camera": "Canon R5",
    "lens": "35mm f1.4",
    "aperture": "f/2.8",
    "shutter": "1/500",
    "iso": "800",
    "location": "Paris",
    "date": "2025-09-09",
    "tags": [
      "street",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-3",
    "title": "Photo 3 - Highlands",
    "image": "https://picsum.photos/id/102/1920/1280",
    "caption": "Captured during the Highlands series exploring natural light and form.",
    "project": "Highlands",
    "camera": "Leica M6",
    "lens": "24-70mm f2.8",
    "aperture": "f/2.8",
    "shutter": "1/250",
    "iso": "400",
    "location": "London",
    "date": "2025-03-03",
    "tags": [
      "highlands",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-4",
    "title": "Photo 4 - Analog Memories",
    "image": "https://picsum.photos/id/103/1280/1920",
    "caption": "Captured during the Analog Memories series exploring natural light and form.",
    "project": "Analog Memories",
    "camera": "Canon R5",
    "lens": "85mm f1.4",
    "aperture": "f/4",
    "shutter": "1/500",
    "iso": "800",
    "location": "Paris",
    "date": "2025-04-04",
    "tags": [
      "analog",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-5",
    "title": "Photo 5 - Street Portraits",
    "image": "https://picsum.photos/id/104/1920/1280",
    "caption": "Captured during the Street Portraits series exploring natural light and form.",
    "project": "Street Portraits",
    "camera": "Nikon Z8",
    "lens": "35mm f1.4",
    "aperture": "f/8",
    "shutter": "1/1000",
    "iso": "1600",
    "location": "Berlin",
    "date": "2025-05-05",
    "tags": [
      "street",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-6",
    "title": "Photo 6 - Highlands",
    "image": "https://picsum.photos/id/106/1920/1280",
    "caption": "Captured during the Highlands series exploring natural light and form.",
    "project": "Highlands",
    "camera": "Fujifilm X-T4",
    "lens": "24-70mm f2.8",
    "aperture": "f/1.4",
    "shutter": "1/125",
    "iso": "200",
    "location": "New York",
    "date": "2025-07-07",
    "tags": [
      "highlands",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-7",
    "title": "Photo 7 - Urban Geometry",
    "image": "https://picsum.photos/id/106/1280/1920",
    "caption": "Captured during the Urban Geometry series exploring natural light and form.",
    "project": "Urban Geometry",
    "camera": "Sony A7III",
    "lens": "50mm f1.8",
    "aperture": "f/11",
    "shutter": "1/60",
    "iso": "100",
    "location": "Tokyo",
    "date": "2025-06-06",
    "tags": [
      "urban",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-8",
    "title": "Photo 8 - Analog Memories",
    "image": "https://picsum.photos/id/107/1280/1920",
    "caption": "Captured during the Analog Memories series exploring natural light and form.",
    "project": "Analog Memories",
    "camera": "Leica M6",
    "lens": "85mm f1.4",
    "aperture": "f/1.8",
    "shutter": "1/250",
    "iso": "400",
    "location": "London",
    "date": "2025-08-08",
    "tags": [
      "analog",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-9",
    "title": "Photo 9 - Urban Geometry",
    "image": "https://picsum.photos/id/101/1280/1920",
    "caption": "Captured during the Urban Geometry series exploring natural light and form.",
    "project": "Urban Geometry",
    "camera": "Fujifilm X-T4",
    "lens": "50mm f1.8",
    "aperture": "f/1.8",
    "shutter": "1/125",
    "iso": "200",
    "location": "New York",
    "date": "2025-02-02",
    "tags": [
      "urban",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-10",
    "title": "Photo 10 - Urban Geometry",
    "image": "https://picsum.photos/id/109/1280/1920",
    "caption": "Captured during the Urban Geometry series exploring natural light and form.",
    "project": "Urban Geometry",
    "camera": "Nikon Z8",
    "lens": "50mm f1.8",
    "aperture": "f/4",
    "shutter": "1/1000",
    "iso": "1600",
    "location": "Berlin",
    "date": "2025-10-10",
    "tags": [
      "urban",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-11",
    "title": "Photo 11 - Highlands",
    "image": "https://picsum.photos/id/110/1920/1280",
    "caption": "Captured during the Highlands series exploring natural light and form.",
    "project": "Highlands",
    "camera": "Sony A7III",
    "lens": "24-70mm f2.8",
    "aperture": "f/8",
    "shutter": "1/60",
    "iso": "100",
    "location": "Tokyo",
    "date": "2025-11-11",
    "tags": [
      "highlands",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-12",
    "title": "Photo 12 - Analog Memories",
    "image": "https://picsum.photos/id/111/1280/1920",
    "caption": "Captured during the Analog Memories series exploring natural light and form.",
    "project": "Analog Memories",
    "camera": "Fujifilm X-T4",
    "lens": "85mm f1.4",
    "aperture": "f/11",
    "shutter": "1/125",
    "iso": "200",
    "location": "New York",
    "date": "2025-12-12",
    "tags": [
      "analog",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-13",
    "title": "Photo 13 - Street Portraits",
    "image": "https://picsum.photos/id/112/1920/1280",
    "caption": "Captured during the Street Portraits series exploring natural light and form.",
    "project": "Street Portraits",
    "camera": "Leica M6",
    "lens": "35mm f1.4",
    "aperture": "f/1.4",
    "shutter": "1/250",
    "iso": "400",
    "location": "London",
    "date": "2025-01-13",
    "tags": [
      "street",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-14",
    "title": "Photo 14 - Urban Geometry",
    "image": "https://picsum.photos/id/113/1280/1920",
    "caption": "Captured during the Urban Geometry series exploring natural light and form.",
    "project": "Urban Geometry",
    "camera": "Canon R5",
    "lens": "50mm f1.8",
    "aperture": "f/1.8",
    "shutter": "1/500",
    "iso": "800",
    "location": "Paris",
    "date": "2025-02-14",
    "tags": [
      "urban",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-15",
    "title": "Photo 15 - Highlands",
    "image": "https://picsum.photos/id/114/1920/1280",
    "caption": "Captured during the Highlands series exploring natural light and form.",
    "project": "Highlands",
    "camera": "Nikon Z8",
    "lens": "24-70mm f2.8",
    "aperture": "f/2.8",
    "shutter": "1/1000",
    "iso": "1600",
    "location": "Berlin",
    "date": "2025-03-15",
    "tags": [
      "highlands",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-16",
    "title": "Photo 16 - Analog Memories",
    "image": "https://picsum.photos/id/115/1280/1920",
    "caption": "Captured during the Analog Memories series exploring natural light and form.",
    "project": "Analog Memories",
    "camera": "Sony A7III",
    "lens": "85mm f1.4",
    "aperture": "f/4",
    "shutter": "1/60",
    "iso": "100",
    "location": "Tokyo",
    "date": "2025-04-16",
    "tags": [
      "analog",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-17",
    "title": "Photo 17 - Street Portraits",
    "image": "https://picsum.photos/id/116/1920/1280",
    "caption": "Captured during the Street Portraits series exploring natural light and form.",
    "project": "Street Portraits",
    "camera": "Fujifilm X-T4",
    "lens": "35mm f1.4",
    "aperture": "f/8",
    "shutter": "1/125",
    "iso": "200",
    "location": "New York",
    "date": "2025-05-17",
    "tags": [
      "street",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-18",
    "title": "Photo 18 - Urban Geometry",
    "image": "https://picsum.photos/id/117/1280/1920",
    "caption": "Captured during the Urban Geometry series exploring natural light and form.",
    "project": "Urban Geometry",
    "camera": "Leica M6",
    "lens": "50mm f1.8",
    "aperture": "f/11",
    "shutter": "1/250",
    "iso": "400",
    "location": "London",
    "date": "2025-06-18",
    "tags": [
      "urban",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-19",
    "title": "Photo 19 - Highlands",
    "image": "https://picsum.photos/id/118/1920/1280",
    "caption": "Captured during the Highlands series exploring natural light and form.",
    "project": "Highlands",
    "camera": "Canon R5",
    "lens": "24-70mm f2.8",
    "aperture": "f/1.4",
    "shutter": "1/500",
    "iso": "800",
    "location": "Paris",
    "date": "2025-07-19",
    "tags": [
      "highlands",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-20",
    "title": "Photo 20 - Analog Memories",
    "image": "https://picsum.photos/id/119/1280/1920",
    "caption": "Captured during the Analog Memories series exploring natural light and form.",
    "project": "Analog Memories",
    "camera": "Nikon Z8",
    "lens": "85mm f1.4",
    "aperture": "f/1.8",
    "shutter": "1/1000",
    "iso": "1600",
    "location": "Berlin",
    "date": "2025-08-20",
    "tags": [
      "analog",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-21",
    "title": "Photo 21 - Street Portraits",
    "image": "https://picsum.photos/id/120/1920/1280",
    "caption": "Captured during the Street Portraits series exploring natural light and form.",
    "project": "Street Portraits",
    "camera": "Sony A7III",
    "lens": "35mm f1.4",
    "aperture": "f/2.8",
    "shutter": "1/60",
    "iso": "100",
    "location": "Tokyo",
    "date": "2025-09-21",
    "tags": [
      "street",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-22",
    "title": "Photo 22 - Urban Geometry",
    "image": "https://picsum.photos/id/121/1280/1920",
    "caption": "Captured during the Urban Geometry series exploring natural light and form.",
    "project": "Urban Geometry",
    "camera": "Fujifilm X-T4",
    "lens": "50mm f1.8",
    "aperture": "f/4",
    "shutter": "1/125",
    "iso": "200",
    "location": "New York",
    "date": "2025-10-22",
    "tags": [
      "urban",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-23",
    "title": "Photo 23 - Highlands",
    "image": "https://picsum.photos/id/122/1920/1280",
    "caption": "Captured during the Highlands series exploring natural light and form.",
    "project": "Highlands",
    "camera": "Leica M6",
    "lens": "24-70mm f2.8",
    "aperture": "f/8",
    "shutter": "1/250",
    "iso": "400",
    "location": "London",
    "date": "2025-11-23",
    "tags": [
      "highlands",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-24",
    "title": "Photo 24 - Analog Memories",
    "image": "https://picsum.photos/id/123/1280/1920",
    "caption": "Captured during the Analog Memories series exploring natural light and form.",
    "project": "Analog Memories",
    "camera": "Canon R5",
    "lens": "85mm f1.4",
    "aperture": "f/11",
    "shutter": "1/500",
    "iso": "800",
    "location": "Paris",
    "date": "2025-12-24",
    "tags": [
      "analog",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-25",
    "title": "Photo 25 - Street Portraits",
    "image": "https://picsum.photos/id/124/1920/1280",
    "caption": "Captured during the Street Portraits series exploring natural light and form.",
    "project": "Street Portraits",
    "camera": "Nikon Z8",
    "lens": "35mm f1.4",
    "aperture": "f/1.4",
    "shutter": "1/1000",
    "iso": "1600",
    "location": "Berlin",
    "date": "2025-01-25",
    "tags": [
      "street",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-26",
    "title": "Photo 26 - Urban Geometry",
    "image": "https://picsum.photos/id/125/1280/1920",
    "caption": "Captured during the Urban Geometry series exploring natural light and form.",
    "project": "Urban Geometry",
    "camera": "Sony A7III",
    "lens": "50mm f1.8",
    "aperture": "f/1.8",
    "shutter": "1/60",
    "iso": "100",
    "location": "Tokyo",
    "date": "2025-02-26",
    "tags": [
      "urban",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-27",
    "title": "Photo 27 - Highlands",
    "image": "https://picsum.photos/id/126/1920/1280",
    "caption": "Captured during the Highlands series exploring natural light and form.",
    "project": "Highlands",
    "camera": "Fujifilm X-T4",
    "lens": "24-70mm f2.8",
    "aperture": "f/2.8",
    "shutter": "1/125",
    "iso": "200",
    "location": "New York",
    "date": "2025-03-27",
    "tags": [
      "highlands",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-28",
    "title": "Photo 28 - Analog Memories",
    "image": "https://picsum.photos/id/127/1280/1920",
    "caption": "Captured during the Analog Memories series exploring natural light and form.",
    "project": "Analog Memories",
    "camera": "Leica M6",
    "lens": "85mm f1.4",
    "aperture": "f/4",
    "shutter": "1/250",
    "iso": "400",
    "location": "London",
    "date": "2025-04-28",
    "tags": [
      "analog",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  },
  {
    "id": "photo-29",
    "title": "Photo 29 - Street Portraits",
    "image": "https://picsum.photos/id/128/1920/1280",
    "caption": "Captured during the Street Portraits series exploring natural light and form.",
    "project": "Street Portraits",
    "camera": "Canon R5",
    "lens": "35mm f1.4",
    "aperture": "f/8",
    "shutter": "1/500",
    "iso": "800",
    "location": "Paris",
    "date": "2025-05-01",
    "tags": [
      "street",
      "photography",
      "portfolio"
    ],
    "width": 1920,
    "height": 1280
  },
  {
    "id": "photo-30",
    "title": "Photo 30 - Urban Geometry",
    "image": "https://picsum.photos/id/129/1280/1920",
    "caption": "Captured during the Urban Geometry series exploring natural light and form.",
    "project": "Urban Geometry",
    "camera": "Nikon Z8",
    "lens": "50mm f1.8",
    "aperture": "f/11",
    "shutter": "1/1000",
    "iso": "1600",
    "location": "Berlin",
    "date": "2025-06-02",
    "tags": [
      "urban",
      "photography",
      "portfolio"
    ],
    "width": 1280,
    "height": 1920
  }
];

export function getPhotosByProject(project: string): Photo[] {
  return photos.filter((p) => p.project === project);
}

export function getAllProjects(): string[] {
  return Array.from(new Set(photos.map((p) => p.project)));
}
