"use client";

import { useCallback, useState } from "react";

import { galleryItems } from "@/lib/gallery";
import type { GalleryItemData } from "@/lib/gallery";

import GalleryItem from "./GalleryItem";
import Lightbox from "./Lightbox";

export default function GalleryGrid() {
  const [activeItem, setActiveItem] =
    useState<GalleryItemData | null>(null);

  const openLightbox = useCallback(
    (item: GalleryItemData) => {
      setActiveItem(item);
    },
    []
  );

  const closeLightbox = useCallback(() => {
    setActiveItem(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveItem((current) => {
      if (!current) {
        return null;
      }

      const currentIndex = galleryItems.findIndex(
        (item) => item.id === current.id
      );

      const nextIndex =
        (currentIndex + 1) % galleryItems.length;

      return galleryItems[nextIndex];
    });
  }, []);

  const showPrevious = useCallback(() => {
    setActiveItem((current) => {
      if (!current) {
        return null;
      }

      const currentIndex = galleryItems.findIndex(
        (item) => item.id === current.id
      );

      const previousIndex =
        (currentIndex - 1 + galleryItems.length) %
        galleryItems.length;

      return galleryItems[previousIndex];
    });
  }, []);

  return (
    <>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <GalleryItem
            key={item.id}
            item={item}
            onOpen={openLightbox}
          />
        ))}
      </div>

      <Lightbox
        items={galleryItems}
        activeItem={activeItem}
        onClose={closeLightbox}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </>
  );
}