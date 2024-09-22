import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mb-56 flex h-screen flex-col gap-y-4 px-14 py-32 text-white sm:px-24 sm:py-36">
      <div>
        <div className="text-xs sm:text-2xl">
          Jan 13 - 14, 2024 <span className="font-extralight">•</span>{" "}
          <Image
            src={"/MLH Logo.svg"}
            alt={"MLH Logo"}
            width={60}
            height={20}
            className="inline w-8 sm:w-fit"
          />{" "}
          Official Event @ McMaster University
        </div>
        <h1 className="text-5xl font-bold sm:text-9xl">
          Delta
          <wbr />
          <span className="font-normal">Hacks</span> XI
        </h1>
        <div className="text-xs sm:text-2xl">
          The annual hackathon for change.
        </div>
      </div>
      {/* disable apply button for now
       <a
        href="/"
        className="w-fit rounded-lg bg-[#FD5274] px-10 py-3 text-center text-xs font-bold sm:px-20 sm:py-5 sm:text-2xl"
      >
        Apply Now!
      </a> */}
    </div>
  );
};

export default Hero;
