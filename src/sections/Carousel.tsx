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
    <div className="-mt-24">
      {/* Snow trail and Tree between sections */}
      <div className="relative mt-0">
        {/* Desktop Images */}
        <Image
          src="/carousel/carousel_snow_trail.svg"
          width={1080}
          height={938}
          alt="Snow trail, crossing the screen"
          className="absolute z-[-10] w-full lg:-translate-y-1/4"
        />
        <Image
          src="/carousel/trees/snow_tree_light_desktop.png"
          width={202}
          height={455}
          alt="Light green tree with snow, ontop of a snow path on the right side of the screen"
          className="absolute right-0 hidden lg:block lg:-translate-y-3/4"
        />
        {/* Mobile Images */}
        <Image
          src="/carousel/trees/snow_tree_light_mobile2.svg"
          width={78}
          height={166}
          alt="Light green tree with snow, tucked on the left side of the screen behind another green tree"
          className="absolute left-[0px] block lg:hidden"
        />
        <Image
          src="/carousel/trees/tree_mid_mobile.svg"
          width={83}
          height={113}
          alt="Green tree, tucked on the left side of the screen infront of another light green tree with snow ontop"
          className="absolute left-[0px] block translate-y-3/4 lg:hidden"
        />
        <Image
          src="/carousel/trees/tree_dark_mobile.svg"
          width={73}
          height={192}
          alt="Dark green tree, tucked on the right side of the screen"
          className="absolute right-[0px] block -translate-y-1/4 lg:hidden"
        />
      </div>
      <div className="mt-24 flex h-auto w-full flex-col items-center overflow-hidden pb-6 lg:mt-[250px] lg:h-[1700px]">
        {/* replace with header component once PR #17 is merged */}
        <div className="mb-10 text-center font-display font-bold text-white drop-shadow-2xl">
          <p className="hidden lg:block lg:text-8xl">WHAT&apos;S TO COME...</p>
          <p className="block text-3xl lg:hidden">
            WHAT&apos;S TO
            <br /> COME...
          </p>
        </div>
        <div className="h-fill relative flex w-full items-center justify-center">
          {/* Desktop images */}
          <Image
            src="/carousel/trees/snow_tree_mid_desktop.svg"
            width={214}
            height={519}
            alt="Tree with snow and medium darkness"
            className="absolute bottom-[0px] left-[0px] hidden aspect-[214/519] lg:block lg:w-[214px] lg:min-w-[214px]"
          />
          <Image
            src="/carousel/trees/tree_mid_desktop.svg"
            width={215}
            height={662}
            alt="Tree with snow and medium darkness"
            className="absolute bottom-[0px] right-[0px] hidden aspect-[215/662] lg:block lg:w-[215px] lg:min-w-[215px]"
          />
          <Image
            src="/carousel/carousel_footprints.png"
            width={951}
            height={1226}
            alt="Snow footprints, leading from the carousel to the right side of the screen"
            className="absolute bottom-[-400px] left-[650px] hidden aspect-[951/1226] flex-grow -rotate-11 lg:block lg:w-[951px] lg:min-w-[951px]"
          />
          {/* Mobile Images */}
          <Image
            src="/carousel/trees/tree_dark.svg"
            width={96}
            height={120}
            alt="Dark green tree, tucked on the left side of the screen"
            className="absolute bottom-[-20px] left-[-30px] z-20 block w-[96px] lg:hidden"
          />
          <Image
            src="/carousel/trees/snow_tree_light_mobile.svg"
            width={68}
            height={153}
            alt="Green tree with snow, tucked on the right side of the screen"
            className="absolute bottom-[-20px] right-[0px] z-20 block w-[68px] lg:hidden"
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
        </div>
      </div>
    </div>
  );
};

export default Carousel;
