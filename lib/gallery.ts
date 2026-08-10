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
    src: "/images/events/event-03/event-03-process-cutting.jpg",
    title: "Cyanotype in the Park",
    description:
      "A day of cyanotype making, experimentation and community in Kilburn.",
    location: "Kilburn, London",
    featured: true,
    orientation: "landscape",
  },

  {
    id: 2,
    src: "/images/events/event-03/event-03-artist.jpg",
    title: "Making in the Sun",
    description:
      "Exploring cyanotype techniques outdoors with sunlight, paper and found materials.",
    location: "Kilburn, London",
    featured: true,
    orientation: "portrait",
  },

  {
    id: 3,
    src: "/images/hero.jpg",
    title: "The Process",
    description:
      "Preparing photographic materials by hand before exposing them to sunlight.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 4,
    src: "/images/events/event-03/event-03-workspace.jpg",
    title: "A Working Table",
    description:
      "Cyanotype prints, natural materials and found objects come together on the workshop table.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 5,
    src: "/images/events/event-03/event-03-details.jpg",
    title: "Natural Materials",
    description:
      "Shells, stones, flowers and branches become part of the image-making process.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 6,
    src: "/images/events/event-03/event-03-print-01.jpg",
    title: "Blue Impressions",
    description:
      "A collection of cyanotype experiments created during the workshop.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 7,
    src: "/images/events/event-03/event-03-print-02.jpg",
    title: "Architecture in Blue",
    description:
      "Local architecture transformed through the cyanotype process.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 8,
    src: "/images/events/event-03/event-03-kilburn-print.jpg",
    title: "Kilburn",
    description:
      "A cyanotype interpretation of the architecture and character of Kilburn.",
    location: "Kilburn, London",
    featured: true,
    orientation: "portrait",
  },

  {
    id: 9,
    src: "/images/events/event-03/event-03-kilburn-map.jpg",
    title: "Mapping Kilburn",
    description:
      "The neighbourhood itself becomes source material for the artwork.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 10,
    src: "/images/events/event-03/event-03-print-03.jpg",
    title: "Finished Work",
    description:
      "A finished architectural cyanotype framed by stones collected outdoors.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 11,
    src: "/images/events/event-03/event-03-participant.jpg",
    title: "Made in the Park",
    description:
      "Participants share the cyanotypes they created during the day.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 12,
    src: "/images/events/event-03/event-03-participant-02.jpg",
    title: "Taking It Home",
    description:
      "A finished cyanotype created during the workshop.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 13,
    src: "/images/events/event-03/event-03-materials.jpg",
    title: "Found Materials",
    description:
      "Branches, shells, flowers and stones become tools for making images with light.",
    location: "Kilburn, London",
    orientation: "portrait",
  },

  {
    id: 14,
    src: "/images/events/event-03/event-03-table.jpg",
    title: "The Workshop Table",
    description:
      "Finished prints and materials gathered together during the event.",
    location: "Kilburn, London",
    orientation: "portrait",
  },
];