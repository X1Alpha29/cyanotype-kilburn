"use client";

import { useCallback } from "react";

import { galleryItems } from "@/lib/gallery";
import type { GalleryItemData } from "@/lib/gallery";

import GalleryItem from "./GalleryItem";

type Props = {
  onOpen: (
    item: GalleryItemData,
    collection: GalleryItemData[]
  ) => void;
};

export default function GalleryGrid({
  onOpen,
}: Props) {
    const handleOpen = useCallback(
    (item: GalleryItemData) => {
        onOpen(item, galleryItems);
    },
    [onOpen]
    );

  return (
    <div className="gallery-grid">
      {galleryItems.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          onOpen={handleOpen}
        />
      ))}
    </div>
  );
}