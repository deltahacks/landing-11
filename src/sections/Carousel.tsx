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
    description:
      "With over 600 attendees last year, DeltaHacks 11 is looking to be the biggest one yet!",
  },
  {
    original: "/carousel/IMG_0937.JPG",
    originalAlt:
      "The entire DeltaHacks team smiling in a team photo, commending the end of DeltaHacks.",
    description: "The amazing DeltaHacks team!",
  },
  {
    original: "/carousel/DSCF3152.JPG",
    originalAlt: "Students presenting their final project to the judges.",
    description: "We can't wait to see what projects you come up with!",
  },
  {
    original: "/carousel/DSCF3007.JPG",
    originalAlt: "Participants smiling and ready for a great hackathon.",
    description: "We encourage you to relax, smile, and have fun!",
  },
  {
    original: "/carousel/DSCF3328.JPG",
    originalAlt: "Participants posing after winning prizes for their category.",
    description: "There are great prizes to be won!",
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
      <div className="relative mr-4 w-fit lg:mr-10">
        {" "}
        {/* add some right margin since the graphic is not symmetrical */}
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
                  alt={item.originalAlt ?? "DeltaHacks Carousel Image"}
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
