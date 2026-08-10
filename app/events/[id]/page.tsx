import { notFound } from "next/navigation";

import EventDetail from "@/components/events/EventDetail";
import { getEventById } from "@/lib/events";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({
  params,
}: Props) {
  const { id } = await params;

  const eventId = Number(id);

  if (Number.isNaN(eventId)) {
    notFound();
  }

  const event = getEventById(eventId);

  if (!event) {
    notFound();
  }

  return <EventDetail event={event} />;
}