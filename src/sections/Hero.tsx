import React from "react";
import Image from "next/image";
import Script from "next/script";

const Hero = () => {
  return (
    <>
      <div className="relative -z-10 w-full overflow-x-clip">
        <Image
          src={"/Desktop Hero Design.svg"}
          alt={"Header Background Image"}
          width={1980}
          height={1080}
          className="relative hidden w-full md:block"
        />
        <Image
          src={"/Mobile Hero Design.svg"}
          alt={"Header Background Image"}
          width={375}
          height={821}
          className="relative block w-full md:hidden"
        />
        <div id="fire" className="absolute">
          <Image
            unoptimized
            src={"/Fire animation.gif"}
            alt={"Fire Animation"}
            width={2000}
            height={2000}
            className="relative w-48"
          />
        </div>
        <div id="tree-1" className="absolute">
          <Image
            src={"/Tree (dark).svg"}
            alt={"Tree Image"}
            width={157}
            height={207}
            className="relative w-[176px] md:w-[463px]"
          />
        </div>
        <div id="tree-2" className="absolute">
          <Image
            src={"/Snow Tree (light).svg"}
            alt={"Tree Image"}
            width={168}
            height={242}
            className="relative w-[206px] md:w-[508px]"
          />
        </div>
        <Script src="heroAnimation.js" />
      </div>
      <div className="absolute left-0 right-0 top-0 mx-auto flex h-screen max-w-7xl flex-col items-center gap-y-1 px-12 py-28 text-center leading-none text-white sm:gap-y-4 sm:px-16 md:items-start md:px-24 md:py-36 md:text-left">
        <div className="drop-shadow-md">
          <div className="text-xs sm:text-base md:text-2xl">
            Jan 13 - 14, 2024 <span className="font-extralight">•</span>{" "}
            <Image
              src={"/MLH Logo.svg"}
              alt={"MLH Logo"}
              width={60}
              height={20}
              className="inline w-8 sm:w-10 md:w-fit"
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
