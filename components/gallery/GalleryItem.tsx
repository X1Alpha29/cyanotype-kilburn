import Image from "next/image";
import type { GalleryItemData } from "@/lib/gallery";

type Props = {
  item: GalleryItemData;
  onOpen: (item: GalleryItemData) => void;
};

export default function GalleryItem({
  item,
  onOpen,
}: Props) {
  return (
    <article
      className={`gallery-item ${
        item.featured ? "gallery-item--featured" : ""
      }`}
    >
      <button
        type="button"
        className="gallery-image-button"
        onClick={() => onOpen(item)}
        aria-label={`Open ${item.title}`}
      >
        <div className="gallery-image-wrapper">
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 70vw"
            className="gallery-image"
          />

          <div className="gallery-overlay">
            <div className="gallery-info">
              <h3>{item.title}</h3>

              <p className="gallery-description">
                {item.description}
              </p>
            </div>

            <span
              className="gallery-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}