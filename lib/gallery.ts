export type GalleryItemData = {
  id: number;
  src: string;
  title: string;
  description: string;
  location: string;
  featured?: boolean;
  orientation: "portrait" | "landscape";
};

export type LightboxImage = {
  id: string | number;
  src: string;
  title: string;
  description: string;
  location: string;
};

export const galleryItems: GalleryItemData[] = [
  {
    id: 1,
    src: "/images/placeholder-hero.jpg",
    title: "Sunlight & Nature",
    description: "A cyanotype created during an outdoor workshop.",
    location: "Kilburn Park",
    featured: true,
    orientation: "landscape",
  },
  {
    id: 2,
    src: "/images/placeholder-hero.jpg",
    title: "Botanical Study",
    description: "Natural forms transformed through cyanotype.",
    location: "Kilburn, London",
    orientation: "portrait",
  },
  {
    id: 3,
    src: "/images/placeholder-hero.jpg",
    title: "Workshop",
    description: "Exploring the cyanotype process outdoors.",
    location: "Kilburn Park",
    orientation: "portrait",
  },
  {
    id: 4,
    src: "/images/placeholder-hero.jpg",
    title: "Blue Impressions",
    description: "Experimenting with shape, texture and sunlight.",
    location: "Kilburn Park",
    orientation: "landscape",
  },
  {
    id: 5,
    src: "/images/placeholder-hero.jpg",
    title: "The Process",
    description: "Making images with light and natural materials.",
    location: "Kilburn, London",
    featured: true,
    orientation: "landscape",
  },
  {
    id: 6,
    src: "/images/placeholder-hero.jpg",
    title: "Finished Work",
    description: "A finished cyanotype print.",
    location: "Kilburn Park",
    orientation: "portrait",
  },
];