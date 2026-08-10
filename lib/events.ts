export type EventData = {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description: string;
  heroImage: string;
  images: string[];
};

export const events: EventData[] = [
  {
    id: 3,
    number: "03",
    title: "Cyanotype",
    subtitle: "In the Park",
    location: "Kilburn Park, London",
    date: "Summer 2026",

    description:
      "An outdoor cyanotype workshop exploring sunlight, natural materials and the beautiful unpredictability of handmade photographic prints.",

    heroImage: "/images/placeholder-hero.jpg",

    images: [
      "/images/placeholder-hero.jpg",
      "/images/placeholder-hero.jpg",
      "/images/placeholder-hero.jpg",
    ],
  },
];

export function getEventById(
  id: number
): EventData | undefined {
  return events.find((event) => event.id === id);
}