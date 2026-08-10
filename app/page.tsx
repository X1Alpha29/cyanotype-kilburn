"use client";

import { useCallback, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Lightbox from "@/components/gallery/Lightbox";
import EventFeature from "@/components/sections/EventFeature";

import {
  galleryItems,
  type LightboxImage,
} from "@/lib/gallery";

export default function Home() {
  const [activeImage, setActiveImage] =
    useState<LightboxImage | null>(null);

  const [activeCollection, setActiveCollection] =
    useState<LightboxImage[]>([]);

  const openImage = useCallback(
  (
    image: LightboxImage,
    collection: LightboxImage[]
  ) => {
    setActiveImage(image);
    setActiveCollection(collection);
  },
  []
);

  const closeImage = useCallback(() => {
    setActiveImage(null);
    setActiveCollection([]);
  }, []);

  const showNext = useCallback(() => {
  setActiveImage((current) => {
    if (
      !current ||
      activeCollection.length === 0
    ) {
      return null;
    }

    const index =
      activeCollection.findIndex(
        (image) => image.id === current.id
      );

    const nextIndex =
      (index + 1) %
      activeCollection.length;

    return activeCollection[nextIndex];
  });
}, [activeCollection]);

  const showPrevious = useCallback(() => {
  setActiveImage((current) => {
    if (
      !current ||
      activeCollection.length === 0
    ) {
      return null;
    }

    const index =
      activeCollection.findIndex(
        (image) => image.id === current.id
      );

    const previousIndex =
      (index - 1 +
        activeCollection.length) %
      activeCollection.length;

    return activeCollection[previousIndex];
  });
}, [activeCollection]);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="work"
          className="work-section"
        >
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">
                SELECTED WORK
              </p>

              <h2>
                Made with
                <span>sunlight.</span>
              </h2>
            </div>

            <p className="section-introduction">
              Cyanotype prints created through
              sunlight, natural materials and
              experimentation.
            </p>
          </div>

          <GalleryGrid
            onOpen={openImage}
          />
        </section>

        <EventFeature
          onOpenImage={openImage}
        />
      </main>

      <Lightbox
        items={activeCollection}
        activeItem={activeImage}
        onClose={closeImage}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </>
  );
}