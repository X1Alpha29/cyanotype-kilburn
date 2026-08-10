import { galleryItems } from "@/lib/gallery";
import GalleryItem from "./GalleryItem";

export default function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {galleryItems.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}