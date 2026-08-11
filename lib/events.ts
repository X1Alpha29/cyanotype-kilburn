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
  hosts?: string;
};

export const events: EventData[] = [
  {
    id: 3,
    number: "03",
    title: "Cyanotype",
    subtitle: "In the Park",
    location: "Kilburn",
    date: "15 August 2026",
    hosts: "By Nidhi & Leah",

    description:
      "A cyanotype workshop exploring sunlight, natural materials and the beautiful unpredictability of handmade photographic prints.",

    heroImage: "/images/about/kilburn-building.png",

    images: [
      "/images/events/event-03/cat1.png",
      "/images/events/event-03/Moon.png",
      "/images/events/event-03/dog.png",
    ],
  },
];

export function getEventById(
  id: number
): EventData | undefined {
  return events.find((event) => event.id === id);
}