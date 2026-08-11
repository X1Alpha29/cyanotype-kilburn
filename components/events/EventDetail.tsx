"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import type { EventData } from "@/lib/events";
import type { LightboxImage } from "@/lib/gallery";

import Lightbox from "@/components/gallery/Lightbox";

type Props = {
  event: EventData;
};

export default function EventDetail({
  event,
}: Props) {
  const [activeImage, setActiveImage] =
    useState<LightboxImage | null>(null);

  const eventImages: LightboxImage[] =
    event.images.map((image, index) => ({
      id: `event-${event.id}-${index}`,
      src: image,
      title: `${event.title} — ${event.subtitle}`,
      description:
        `Photograph from Event ${event.number} at ${event.location}.`,
      location: event.location,
    }));

  const openImage = useCallback(
    (image: LightboxImage) => {
      setActiveImage(image);
    },
    []
  );

  const closeImage = useCallback(() => {
    setActiveImage(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveImage((current) => {
      if (
        !current ||
        eventImages.length === 0
      ) {
        return null;
      }

      const currentIndex =
        eventImages.findIndex(
          (image) => image.id === current.id
        );

      const nextIndex =
        (currentIndex + 1) %
        eventImages.length;

      return eventImages[nextIndex];
    });
  }, [eventImages]);

  const showPrevious = useCallback(() => {
    setActiveImage((current) => {
      if (
        !current ||
        eventImages.length === 0
      ) {
        return null;
      }

      const currentIndex =
        eventImages.findIndex(
          (image) => image.id === current.id
        );

      const previousIndex =
        (currentIndex -
          1 +
          eventImages.length) %
        eventImages.length;

      return eventImages[previousIndex];
    });
  }, [eventImages]);

  return (
    <>
      <main className="event-detail">
        {/* HERO */}
        <section className="event-detail-hero">
          <div className="event-detail-hero-top">
            <Link
              href="/events"
              className="event-back-link"
            >
              <span aria-hidden="true">←</span>
              <span>All events</span>
            </Link>

            <span className="event-detail-number">
              EVENT {event.number}
            </span>
          </div>

          <div className="event-detail-heading">

            <h1>
              {event.title}
              <span>{event.subtitle}</span>
            </h1>

            <p className="event-detail-date">
              {event.date}
            </p>
          </div>

          <button
            type="button"
            className="event-detail-hero-image"
            onClick={() =>
              openImage(eventImages[0])
            }
            aria-label="Open event hero image"
          >
            <Image
              src={event.heroImage}
              alt={`${event.title} ${event.subtitle}`}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 90vw"
              className="event-detail-hero-image-element"
            />

            <span className="event-detail-image-label">
              View photograph
              <span aria-hidden="true">↗</span>
            </span>
          </button>
        </section>

        {/* INTRODUCTION */}
        <section className="event-detail-introduction">
          <p className="section-eyebrow">
            THE EXPERIENCE
          </p>

          <div>
            <p className="event-detail-lead">
              {event.description}
            </p>

            <p className="event-detail-body">
              A day spent outside, working with
              sunlight, plants and photographic
              chemistry. Each print develops its
              own character as light and material
              interact.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="event-detail-process">
          <div className="event-detail-process-heading">
            <p className="section-eyebrow">
              THE PROCESS
            </p>

            <h2>
              Made by
              <span>light.</span>
            </h2>
          </div>

          <div className="event-detail-process-grid">
            <article>
              <span>01</span>

              <h3>
                Gather
              </h3>

              <p>
                Natural materials and found
                objects become the subjects of
                each cyanotype.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>
                Expose
              </h3>

              <p>
                Sunlight passes through the
                composition and begins the
                photographic process.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>
                Reveal
              </h3>

              <p>
                Washing the print reveals the
                characteristic deep blue image.
              </p>
            </article>
          </div>
        </section>

        {/* PHOTOGRAPHS */}
        <section className="event-detail-gallery">
          <div className="event-detail-gallery-heading">
            <div>
              <p className="section-eyebrow">
                FROM THE DAY
              </p>

              <h2>
                In the
                <span>park.</span>
              </h2>
            </div>

            <p>
              {eventImages.length} photographs
            </p>
          </div>

          <div className="event-detail-gallery-grid">
            {eventImages.map(
              (image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`event-detail-gallery-item event-detail-gallery-item--${
                    index + 1
                  }`}
                  onClick={() =>
                    openImage(image)
                  }
                  aria-label={`Open photograph ${
                    index + 1
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`${event.title} photograph ${
                      index + 1
                    }`}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className="event-detail-gallery-image"
                  />

                  <span className="event-detail-gallery-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </button>
              )
            )}
          </div>
        </section>

        {/* END */}
        <section className="event-detail-end">
          <p className="section-eyebrow">
            EVENT {event.number}
          </p>

          <h2>
            Until the
            <span>next one.</span>
          </h2>

          <Link
            href="/events"
            className="event-detail-end-link"
          >
            <span>Explore all events</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <Lightbox
        items={eventImages}
        activeItem={activeImage}
        onClose={closeImage}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </>
  );
}