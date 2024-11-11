import Image from "next/image";
import React, { useRef } from "react";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import useWindowDimensions from "~/hooks/useWindowDimensions";

const WhoAreWe = () => {
  const { width } = useWindowDimensions();

  const scrollRef = useRef(null);

  let startPosX;
  let startPosY;
  let endPosX;
  let endPosY;
  // Manually type offsets because Framer doesnt export these literals?
  // There might be a better way to do this, but we only use 4 valid offsets
  type Offset = "start center" | "end end" | "start end" | "end start";
  let scrollOffset: Offset[] = ["start center", "end end"];

  if (width) {
    if (width >= 1280) {
      startPosX = -350;
      startPosY = -490;
      endPosX = 940;
      endPosY = 40;
    } else if (width >= 1140) {
      startPosX = -350;
      startPosY = -500;
      endPosX = 850;
      endPosY = -10;
    } else if (width >= 1024) {
      startPosX = -350;
      startPosY = -500;
      endPosX = 740;
      endPosY = -60;
    } else {
      scrollOffset = ["start end", "end start"];
      startPosX = -248;
      startPosY = -240 + 40 * (width / 375);
      endPosX = 355;
      endPosY = 12 + 40 * (width / 375);
    }
  }

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: scrollOffset,
  });

  const skiLiftPosX = useTransform(
    scrollYProgress,
    [0, 1],
    [startPosX, endPosX],
  );
  const skiLiftPosY = useTransform(
    scrollYProgress,
    [0, 1],
    [startPosY, endPosY],
  );

  return (
    <section className="relative mt-0 flex h-fit min-h-screen flex-col justify-start p-8 lg:-mt-[400px]">
      {/* Ski Lift Image  */}
      <div
        ref={scrollRef}
        className="absolute -top-[150px] left-0 -z-30 w-full lg:-top-[400px]"
      >
        <Image
          src="/who_are_we/ski_lift_line.svg"
          alt="Ski Lift Line"
          className="relative hidden w-full pb-[400px] lg:block"
          width={1440}
          height={636}
        />
        <Image
          src="/who_are_we/ski_lift_line_mobile.svg"
          alt="Ski Lift Line"
          className="relative w-full pb-[200px] lg:hidden"
          width={1440}
          height={636}
        />
      </div>
      <motion.div
        className="absolute -z-30 w-[260px] lg:w-[320px] xl:w-[388px]"
        style={{ left: skiLiftPosX, top: skiLiftPosY }}
      >
        <Image
          src="/who_are_we/ski_lift.svg"
          alt="Ski Lift"
          className="hidden w-full lg:block"
          width={388}
          height={426}
        />
        <Image
          src="/who_are_we/ski_lift_mobile.svg"
          alt="Ski Lift"
          className="w-full lg:hidden"
          width={388}
          height={437}
        />
      </motion.div>

      {/* Tree Section */}
      <div className="absolute left-0 w-full lg:mt-[400px]">
        {/* Left light tree */}
        <div className="absolute -left-16 -top-32 -z-10 min-[700px]:bottom-[150px] min-[700px]:left-[-80px] lg:-left-[210px] lg:top-[-150px]">
          <Image
            src="/trees/tree_light.svg"
            alt="Snowy tree"
            className="relative w-[157px] max-w-none lg:h-[640px] lg:w-[489px]"
            width={489}
            height={630}
          />
        </div>
        {/* Left snowy dark tree */}
        <div className="absolute -left-[10px] top-[-50px] -z-20 min-[700px]:left-[-30px] min-[700px]:top-[760px] lg:-left-[-10px] lg:top-[-280px]">
          <Image
            src="/trees/snow_tree_dark.svg"
            alt="Snowy tree"
            className="relative w-[110px] max-w-none lg:h-[328px] lg:w-[229px]"
            width={418}
            height={724}
          />
        </div>
        {/* Right dark tree */}
        <div className="absolute -right-[50px] top-[-130px] -z-20 min-[700px]:right-[-30px] min-[700px]:top-[860px] lg:-right-[100px] lg:top-[100px]">
          <Image
            src="/trees/tree_dark.svg"
            alt="Snowy tree"
            className="relative w-[110px] max-w-none lg:h-[428px] lg:w-[259px]"
            width={418}
            height={724}
          />
        </div>
        {/* Right snowy dark tree */}
        <div className="absolute -right-[5px] top-[-90px] -z-20 min-[700px]:right-[20px] min-[700px]:top-[900px] lg:-right-[20px] lg:top-[220px]">
          <Image
            src="/trees/snow_tree_mid.svg"
            alt="Snowy tree"
            className="relative w-[110px] max-w-none lg:h-[428px] lg:w-[259px]"
            width={418}
            height={724}
          />
        </div>
      </div>

      <div className="lg:ml-50 relative -z-30 mb-[150px]">
        {/* Title Section */}
        <h2 className="relative -z-30 mb-0 mt-60 text-center font-display text-[48px] font-black leading-none text-white drop-shadow-md md:text-left md:text-[96px] lg:mt-0 lg:pl-[190px] lg:text-left lg:text-[96px]">
          <span className="text-stroke-white drop-shadow-lg">WHO ARE WE?</span>
        </h2>

        {/* Paragraph Section */}
        <div
          className="relative -z-30 p-7 text-center font-display text-[14px] text-lg font-bold leading-normal text-white md:max-w-xl md:text-center lg:max-w-3xl lg:pl-[220px] lg:text-left lg:text-[18px]"
          style={{ color: "#533688" }}
        >
          <p>
            DeltaHacks is the annual hackathon for change. Each year, we enable
            over 500 students from across North America, working hard over 36
            hours, to bring their ideas to life and make a positive change in
            any field.
          </p>
          <p className="mt-4">
            We work with McMaster University to bring in hackers of all levels,
            from the novice to the most experienced. Our team works diligently
            year round to provide a welcoming atmosphere to all of our
            participants.
          </p>
          <p className="mt-4">
            We supply the food, venue, and workshops, making sure even the most
            seasoned veterans get the chance to have new experiences. Whether
            with a team or on your own, you&apos;ll get the platform to make
            your visions a reality.
          </p>
          <p className="mt-4">
            Now in our 10th year running, DeltaHacks X is our biggest and best
            event yet. Unleash your creativity and make something
            great—we&apos;ll handle the rest!
          </p>
        </div>
      </div>

      <div className="relative flex">
        <div>
          {/* Divider Trail */}
          <Image
            src="/who_are_we/trail_divider.svg"
            width={1080}
            height={938}
            alt="Snow trail"
            className="absolute z-[-30] w-[2400px] scale-[1.8] md:top-[-100px] lg:top-[200px] lg:-translate-y-1/4"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
