import Image from "next/image";
import { events } from "@/lib/events";
import type { LightboxImage } from "@/lib/gallery";

type Props = {
  onOpenImage: (
    image: LightboxImage,
    collection: LightboxImage[]
  ) => void;
};

export default function EventFeature({
  onOpenImage,
}: Props) {
  const event = events[0];
  const eventImages: LightboxImage[] =
  event.images.map((image, index) => ({
    id: `event-${event.id}-${index}`,
    src: image,
    title: `${event.title} — ${event.subtitle}`,
    description:
      `Photograph from Event ${event.number} at ${event.location}.`,
    location: event.location,
  }));

  return (
    <section
      id="events"
      className="event-feature"
    >
      <div className="event-header">
        <div className="event-number">
          <span>EVENT</span>
          <strong>{event.number}</strong>
        </div>

        <div className="event-heading">
          <h2>
            {event.title}
            <span>{event.subtitle}</span>
          </h2>
        </div>

        <div className="event-meta">
          <span>{event.date}</span>

          {event.hosts && (
            <span>{event.hosts}</span>
          )}
        </div>
      </div>

      <div className="event-hero">
        <Image
          src={event.heroImage}
          alt={`${event.title} ${event.subtitle}`}
          fill
          sizes="(max-width: 700px) 100vw, 90vw"
          className="event-hero-image"
        />
      </div>

      <div className="event-introduction">
        <p className="event-introduction-label">
          THE EXPERIENCE
        </p>

        <p className="event-introduction-text">
          {event.description}
        </p>
      </div>

      <div className="event-process">
        <div className="event-process-heading">
          <p className="section-eyebrow">
            THE PROCESS
          </p>

          <h3>
            Made by
            <span>light.</span>
          </h3>
        </div>

        <div className="event-process-text">
          <p>
            Cyanotype is a photographic printing
            process that uses light to create
            rich blue images.
          </p>

          <p>
            Natural forms, plants and objects are
            placed onto treated material and
            exposed to sunlight, creating a
            distinctive Prussian-blue impression.
          </p>
        </div>
      </div>

      <div className="event-gallery">
        {event.images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            className={`event-gallery-item event-gallery-item--${
              index + 1
            }`}
            onClick={() =>
              onOpenImage(
                eventImages[index],
                eventImages
              )
            }
            aria-label={`Open event photograph ${
              index + 1
            }`}
          >
            <Image
              src={image}
              alt={`${event.title} workshop photograph ${
                index + 1
              }`}
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              className="event-gallery-image"
            />
          </button>
        ))}
      </div>

      <div className="event-result">
        <div className="event-result-heading">
          <p className="section-eyebrow">
            THE RESULT
          </p>

          <h3>
            Blue
            <span>impressions.</span>
          </h3>
        </div>

        <div className="event-result-image">
          <Image
            src={event.heroImage}
            alt="Finished cyanotype artwork"
            fill
            sizes="90vw"
            className="event-result-image-element"
          />
        </div>
      </div>
    </section>
  );
}