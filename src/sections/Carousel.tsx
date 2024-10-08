import Image from "next/image";
import React from "react";
import ImageGallery, { type ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Images
const images: ReactImageGalleryItem[] = [
  {
    original: "/carousel/DSCF3211.JPG",
    originalAlt:
      "A wide view of a packed lecture hall with rows of seated students, eager for DeltaHacks to start.",
  },
  {
    original: "/carousel/IMG_0937.JPG",
    originalAlt:
      "The entire DeltaHacks team smiling in a team photo, commending the end of DeltaHacks.",
  },
  {
    original: "/carousel/DSCF3152.JPG",
    originalAlt: "Students presenting their final project to the judges.",
  },
  {
    original: "/carousel/DSCF2802.JPG",
    originalAlt: "Participants smiling while working on their project.",
  },
  {
    original: "/carousel/DSCF3328.JPG",
    originalAlt: "Participants posing after winning prizes for their category.",
  },
  {
    original: "/carousel/DSC01770.jpeg",
    originalAlt: "Students focused and working hard on their project.",
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
    <div className="flex h-[650px] w-full flex-col items-center overflow-hidden lg:h-[1700px]">
      {/* replace with header component once PR #17 is merged */}
      <p className="mb-10 text-center font-display text-3xl font-bold text-white drop-shadow-2xl lg:text-8xl">
        WHAT&apos;S TO COME...
      </p>
      <div className="h-fill relative flex w-full items-center justify-center">
        {/* Left Trees */}
        {/* Shown on large screens */}
        <Image
          src="/carousel/trees/snow_tree_mid.png"
          width={214}
          height={519}
          alt="Tree with snow and medium darkness"
          className="absolute bottom-[0px] left-[0px] hidden aspect-[214/519] lg:block lg:w-[214px] lg:min-w-[214px]"
        />
        {/* Shown on small screens */}
        <Image
          src="/carousel/trees/tree_dark.png"
          width={58}
          height={120}
          alt="Dark tree"
          className="absolute bottom-[-20px] left-0 z-20 block w-[58px] lg:hidden"
        />

        {/* Center Carousel */}
        <div className="relative left-[-6px] z-10">
          {" "}
          <Image
            src="/carousel/carousel-house.png"
            width={1227}
            height={1080}
            alt="House"
            className="left-[-1.5px] aspect-[1231/1080] w-[448px] min-w-[448px] lg:w-[1231px] lg:min-w-[1231px]"
          />
          <div className="absolute bottom-4 left-2 flex w-full justify-center lg:bottom-10 lg:left-6">
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              autoPlay={true}
              slideInterval={5000}
              lazyLoad={true}
              renderItem={(item: ReactImageGalleryItem) => (
                <div className="flex flex-col items-center">
                  <Image
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                    src={item.original}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                    alt={item.originalAlt ?? "DeltaHacks Carousel Image"}
                    width={754}
                    height={536}
                    className="aspect-[780/540] w-[280px] object-cover lg:w-[780px]"
                  />
                </div>
              )}
            />
          </div>
        </div>

        {/* Right Trees */}
        {/* Shown on large screens */}
        <Image
          src="/carousel/trees/tree_mid.png"
          width={215}
          height={662}
          alt="Tree with snow and medium darkness"
          className="absolute bottom-[0px] right-[0px] hidden aspect-[215/662] lg:block lg:w-[215px] lg:min-w-[215px]"
        />
        {/* Shown on small screens */}
        <Image
          src="/carousel/trees/snow_tree_light.png"
          width={68}
          height={153}
          alt="Tree with snow and medium darkness"
          className="absolute bottom-[-40px] right-[0px] block w-[68px] lg:hidden"
        />

        {/* Footprints */}
        <Image
          src="/carousel/carousel_footprints.png"
          width={951}
          height={1226}
          alt="Snow footprints"
          className="absolute bottom-[-400px] left-[650px] hidden aspect-[951/1226] flex-grow -rotate-11 lg:block lg:w-[951px] lg:min-w-[951px]"
        />
      </div>
    </div>
  );
};

export default Carousel;
