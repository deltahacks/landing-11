import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from "~/hooks/useWindowDimensiosn";

const Hero = () => {
  const { width } = useWindowDimensions();

  const [fireClass, setFireClass] = useState({
    display: "none",
    left: "",
    top: "",
    translate: "",
    scale: "",
  });
  const [tree1Class, setTree1Class] = useState({
    display: "none",
    left: "",
    top: "",
    translate: "",
    scale: "",
  });
  const [tree2Class, setTree2Class] = useState({
    display: "none",
    right: "",
    top: "",
    translate: "",
    scale: "",
  });

  const setFirePos = (width: number) => {
    let firePosX, firePosY;
    let fireScale = width / 1440;
    if (width >= 768) {
      // desktop
      firePosX = (915 / 1440) * width;
      firePosY = (600 / 1617) * ((1617 / 1440) * width);
    } else {
      // mobile
      firePosX = (168 / 375) * width;
      firePosY = (375 / 821) * ((821 / 375) * width);
      fireScale = (width / 375) * 0.5;
    }

    setFireClass({
      display: "block",
      left: `${firePosX}px`,
      top: `${firePosY}px`,
      translate: "-50% -50%",
      scale: `${fireScale}`,
    });
  };

  const setTree1Pos = (width: number) => {
    let tree1PosX, tree1PosY;
    let tree1Scale = width / 1440;

    if (width >= 768) {
      // desktop
      tree1PosX = (0 / 1440) * width;
      tree1PosY = (1050 / 1617) * ((1617 / 1440) * width);
    } else {
      // mobile
      tree1PosX = (12 / 375) * width;
      tree1PosY = (650 / 821) * ((821 / 375) * width);
      tree1Scale = width / 375;
    }

    setTree1Class({
      display: "block",
      left: `${tree1PosX}px`,
      top: `${tree1PosY}px`,
      translate: "-50% -50%",
      scale: `${tree1Scale}`,
    });
  };

  const setTree2Pos = (width: number) => {
    let tree2PosX, tree2PosY;
    let tree2Scale = width / 1440;

    if (width >= 768) {
      // desktop
      tree2PosX = (0 / 1440) * width;
      tree2PosY = (1000 / 1617) * ((1617 / 1440) * width);
    } else {
      // mobile
      tree2PosX = (0 / 375) * width;
      tree2PosY = (560 / 821) * ((821 / 375) * width);
      tree2Scale = width / 375;
    }

    setTree2Class({
      display: "block",
      right: `${tree2PosX}px`,
      top: `${tree2PosY}px`,
      translate: "50% -50%",
      scale: `${tree2Scale}`,
    });
  };

  useEffect(() => {
    if (width) {
      setFirePos(width);
      setTree1Pos(width);
      setTree2Pos(width);
    }
  }, [width]);

  return (
    <>
      <div className="relative -z-10 w-full overflow-x-clip">
        <Image
          priority
          src={"/Desktop Hero Design.svg"}
          alt={"Header Background Image"}
          width={1980}
          height={1080}
          className="relative hidden w-full md:block"
        />
        <Image
          priority
          src={"/Mobile Hero Design.svg"}
          alt={"Header Background Image"}
          width={375}
          height={821}
          className="relative block w-full md:hidden"
        />
        <div id="fire" className="absolute" style={fireClass}>
          <Image
            unoptimized
            src={"/Fire animation.gif"}
            alt={"Fire Animation"}
            width={2000}
            height={2000}
            className="w-48"
          />
        </div>
        <div id="tree-1" className="absolute" style={tree1Class}>
          <Image
            src={"/Tree (dark).svg"}
            alt={"Tree Image"}
            width={157}
            height={207}
            className="relative w-[176px] md:w-[463px]"
          />
        </div>
        <div id="tree-2" className="absolute" style={tree2Class}>
          <Image
            src={"/Snow Tree (light).svg"}
            alt={"Tree Image"}
            width={168}
            height={242}
            className="relative w-[206px] md:w-[508px]"
          />
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 mx-auto flex h-screen max-w-7xl flex-col items-center gap-y-1 px-7 py-28 text-center leading-none text-white sm:gap-y-4 sm:px-16 md:items-start md:px-24 md:py-36 md:text-left">
        <div className="drop-shadow-md">
          <div className="text-xs sm:text-base md:text-2xl">
            Jan 13 - 14, 2024 <span className="font-extralight">•</span>{" "}
            <Image
              src={"/mlh_logo_white.svg"}
              alt={"MLH Logo"}
              width={60}
              height={25}
              className="inline h-[14px] w-[33px] object-contain sm:h-[25px] sm:w-[60px]"
            />{" "}
            Official Event @ McMaster University
          </div>
          <h1 className="py-2 text-[45px] font-bold sm:text-7xl lg:text-9xl">
            Delta
            <wbr />
            <span className="font-normal">Hacks</span> XI
          </h1>
          <div className="text-xs sm:text-base md:text-2xl">
            The annual hackathon for change.
          </div>
        </div>
        <Link
          href="/"
          className="w-fit rounded-lg bg-[#FD5274] px-10 py-3 text-center text-xs font-bold sm:px-20 sm:py-5 sm:text-2xl"
        >
          Apply Now!
        </Link>
      </div>
    </>
  );
};

export default Hero;
