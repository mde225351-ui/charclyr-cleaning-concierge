import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface ImageFanCarouselProps {
  images: GalleryImage[];
  label?: string;
}

export function ImageFanCarousel({ images, label = "Home gallery" }: ImageFanCarouselProps) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) return null;

  const goTo = (offset: number) => {
    setSelected((current) => (current + offset + images.length) % images.length);
  };

  return (
    <div aria-label={label} className="gallery-carousel">
      <div className="fan-carousel" aria-roledescription="carousel">
        {images.map((image, index) => {
          const offset = (index - selected + images.length) % images.length;
          const position = offset > Math.floor(images.length / 2) ? offset - images.length : offset;
          const isActive = position === 0;

          return (
            <button
              key={image.title}
              aria-label={`${image.title}${isActive ? ", selected" : ", view image"}`}
              aria-current={isActive ? "true" : undefined}
              className="fan-card"
              data-position={position}
              onClick={() => {
                if (!isActive) setSelected(index);
              }}
              tabIndex={Math.abs(position) <= 2 ? 0 : -1}
              type="button"
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span className="fan-caption">{image.title}</span>
            </button>
          );
        })}
      </div>

      <div className="fan-controls">
        <Button
          className="fan-control-button"
          variant="outline"
          size="icon"
          type="button"
          aria-label="Previous gallery image"
          onClick={() => goTo(-1)}
        >
          <ArrowLeft aria-hidden="true" />
        </Button>
        <span className="fan-position" aria-live="polite" aria-atomic="true">
          {String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <Button
          className="fan-control-button"
          variant="outline"
          size="icon"
          type="button"
          aria-label="Next gallery image"
          onClick={() => goTo(1)}
        >
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}