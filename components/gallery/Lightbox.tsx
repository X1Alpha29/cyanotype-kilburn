"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { GalleryItemData } from "@/lib/gallery";

type Props = {
  items: GalleryItemData[];
  activeItem: GalleryItemData | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function Lightbox({
  items,
  activeItem,
  onClose,
  onNext,
  onPrevious,
}: Props) {
  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        originalOverflow;
    };
  }, [
    activeItem,
    onClose,
    onNext,
    onPrevious,
  ]);

  if (!activeItem) {
    return null;
  }

  const currentIndex = items.findIndex(
    (item) => item.id === activeItem.id
  );

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        type="button"
        className="lightbox-backdrop"
        onClick={onClose}
        aria-label="Close image viewer"
      />

      <div className="lightbox-content">
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          ×
        </button>

        <button
          type="button"
          className="lightbox-navigation lightbox-navigation--previous"
          onClick={onPrevious}
          aria-label="Previous image"
        >
          ←
        </button>

        <div className="lightbox-image-container">
          <Image
            src={activeItem.src}
            alt={activeItem.title}
            fill
            sizes="90vw"
            className="lightbox-image"
            priority
          />
        </div>

        <button
          type="button"
          className="lightbox-navigation lightbox-navigation--next"
          onClick={onNext}
          aria-label="Next image"
        >
          →
        </button>

        <div className="lightbox-caption">
          <div>
            <p className="lightbox-location">
              {activeItem.location}
            </p>

            <h2>{activeItem.title}</h2>

            <p>{activeItem.description}</p>
          </div>

          <span className="lightbox-counter">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}