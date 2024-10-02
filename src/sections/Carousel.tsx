import Image from "next/image";
import React from "react";
import ImageGallery, { type ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Images
const images: ReactImageGalleryItem[] = [
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
    originalHeight: 540,
    originalWidth: 780,
  };
});

// Carousel
const Carousel = () => {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden">
      {/* replace with header component once PR #17 is merged */}
      <p className="mb-10 text-center font-display text-3xl font-bold text-white drop-shadow-2xl lg:text-8xl">
        WHAT&apos;S TO COME...
      </p>
      <div className="relative mr-4 w-fit lg:mr-10"> {/* add some right margin since the graphic is not symmetrical */}
        <Image
          src="/carousel/carousel-house.png"
          width={1227}
          height={1080}
          alt="House"
          className="aspect-[1231/1080] w-[448px] min-w-[448px] lg:w-[1231px] lg:min-w-[1231px]"
        />
        <div className="absolute bottom-4 left-1.5 flex w-full justify-center lg:bottom-10 lg:left-6">
          <div className="">
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              autoPlay={true}
              slideInterval={5000}
              lazyLoad={true}
              renderItem={(item: ReactImageGalleryItem) => (
                <Image
                  // getting random type errors for some reason
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                  src={item.original}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                  alt={item.originalAlt || "DeltaHacks Carousel Image"}
                  width={754}
                  height={536}
                  className="aspect-[780/540] w-[280px] object-cover lg:w-[780px]"
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
