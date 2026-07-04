import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Images,
} from "lucide-react";

interface Props {
  images: string[];
}

export default function TourGallery({
  images,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) =>
        prev === 0
          ? images.length - 1
          : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (!isOpen) return;

      if (e.key === "ArrowRight")
        nextImage();

      if (e.key === "ArrowLeft")
        prevImage();

      if (e.key === "Escape")
        setIsOpen(false);
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [isOpen]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-1">

        {/* <div className="flex justify-between items-center mb-1">

          <h2 className="text-3xl font-bold">
            Tour Gallery
          </h2>

          <button
            onClick={() => openGallery(0)}
            className="flex items-center gap-2 px-5 py-2 rounded-full border"
          >
            <Images size={18} />
            View All Photos
          </button>

        </div> */}

        <div className="grid md:grid-cols-4 gap-2">

          {/* Main Image */}
          <div
            className="md:col-span-2 md:row-span-2 h-[500px] overflow-hidden rounded-3xl cursor-pointer"
            onClick={() => openGallery(0)}
          >
            <img
              loading="lazy"
              src={images[0]}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {images
            .slice(1, 5)
            .map((img, index) => (
              <div
                key={img}
                onClick={() =>
                  openGallery(index + 1)
                }
                className="h-[242px] overflow-hidden rounded-3xl cursor-pointer"
              >
                <img
                  loading="lazy"
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
        </div>
      </section>      
    </>
  );
}