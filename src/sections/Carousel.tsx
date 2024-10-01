import React from "react";
import ImageGallery, { type ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Images
const images: ReactImageGalleryItem[] = await Promise.all(
  [
    {
      original: "/carousel/DSC01792.jpeg",
      originalAlt: "A1",
      description: "D1",
    },
    {
      original: "/carousel/DSC02061.jpeg",
      originalAlt: "A2",
      description: "D2",
    },
    {
      original: "/carousel/DSCF1862.jpeg",
      originalAlt: "A3",
      description: "D3",
    },
    {
      original: "/carousel/DSCF1873.jpeg",
      originalAlt: "A4",
      description: "D4",
    },
    {
      original: "/carousel/DSCF2187.jpeg",
      originalAlt: "A5",
      description: "D5",
    },
  ].map((image) => {
    return {
      ...image,
      originalHeight: 900,
      originalWidth: 1600,
    };
  }),
);

// Carousel
const Carousel = () => {
  return (
    <div>
      <p className="mb-10 text-center font-display text-8xl font-bold text-white drop-shadow-2xl">
        WHAT&apos;S TO COME...
      </p>
      <div className="relative mx-auto h-[1081px] max-w-[1231px]">
        <div className="absolute inset-0 w-full bg-[url('/carousel/carousel-house.png')] bg-center bg-no-repeat"></div>
        <div className="z-1 absolute inset-0 flex flex-col items-center justify-end">
          <div className="mb-[6%] ml-[2%] w-2/3 overflow-hidden rounded-md shadow-md">
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              autoPlay={true}
              slideInterval={5000}
              lazyLoad={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
