import Image from "next/image";
import type { GalleryItem as GalleryItemType } from "@/lib/gallery";

type Props = {
  item: GalleryItemType;
};

export default function GalleryItem({ item }: Props) {
  return (
    <article
      className={`gallery-item ${
        item.featured ? "gallery-item--featured" : ""
      }`}
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
            <p className="gallery-location">
              {item.location}
            </p>

            <h3>{item.title}</h3>

            <p className="gallery-description">
              {item.description}
            </p>
          </div>

          <span className="gallery-arrow">↗</span>
        </div>
      </div>
    </article>
  );
}