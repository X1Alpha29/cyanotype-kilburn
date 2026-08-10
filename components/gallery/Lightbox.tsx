"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
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
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrevious();
          break;
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

  const handlePointerDown = (
    event: React.PointerEvent
  ) => {
    if (event.pointerType === "mouse") {
      return;
    }

    touchStartX.current = event.clientX;
    touchStartY.current = event.clientY;
  };

  const handlePointerUp = (
    event: React.PointerEvent
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const deltaX =
      event.clientX - touchStartX.current;

    const deltaY =
      event.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    const minimumSwipeDistance = 60;

    const isHorizontalSwipe =
      Math.abs(deltaX) >
      Math.abs(deltaY);

    if (
      isHorizontalSwipe &&
      Math.abs(deltaX) >= minimumSwipeDistance
    ) {
      if (deltaX < 0) {
        onNext();
      } else {
        onPrevious();
      }
    }
  };

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

        <div
          className="lightbox-image-container"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <Image
            key={activeItem.id}
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

            <p>
              {activeItem.description}
            </p>
          </div>

          <span className="lightbox-counter">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}