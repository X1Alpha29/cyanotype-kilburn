import Image from "next/image";
import Link from "next/link";

import { events } from "@/lib/events";

export default function EventsPage() {
  return (
    <main className="events-page">
      <section className="events-page-header">
        <p className="section-eyebrow">
          THE ARCHIVE
        </p>

        <h1>
          Events
          <span>&amp; workshops.</span>
        </h1>

        <p className="events-page-introduction">
          Cyanotype workshops, outdoor experiments
          and gatherings built around sunlight,
          natural materials and handmade images.
        </p>
      </section>

      <section className="events-list">
        {events.map((event) => (
          <article
            key={event.id}
            className="event-card"
          >
            <div className="event-card-number">
              <span>EVENT</span>
              <strong>{event.number}</strong>
            </div>

            <div className="event-card-content">
              <div className="event-card-heading">
                <h2>
                  {event.title}
                  <span>{event.subtitle}</span>
                </h2>
              </div>

              <div className="event-card-image">
                <Image
                  src={event.heroImage}
                  alt={`${event.title} ${event.subtitle}`}
                  fill
                  sizes="(max-width: 700px) 100vw, 70vw"
                  className="event-card-image-element"
                />
              </div>

              <div className="event-card-footer">
                <p>{event.date}</p>

                <p className="event-card-description">
                  {event.description}
                </p>

                <Link
                  href={`/events/${event.id}`}
                  className="event-card-link"
                >
                  <span>View event</span>
                  <span aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}