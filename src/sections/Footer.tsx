import React from "react";
import Image from "next/image";
import snowman from "~/assets/footer/snowman.png";
import Link from "next/link";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("~/components/PfpSlider"), { ssr: false });

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-screen-xl flex-col items-center">
      <Image
        src={snowman}
        alt="Snowman footer image"
        className="flex-grow-0 object-cover"
      />
      <p className="pb-4 text-center text-2xl">
        Made with ♥ from the DeltaHacks Team{" "}
      </p>
      <Slider />
      <div className="mt-12 flex w-full flex-row space-x-8 border-t border-black px-4 py-12 2xl:px-0">
        <Link
          href="https://github.com/DeltaHacks/deltahacks-website-2024"
          className="hover:underline"
        >
          Code of Conduct
        </Link>
        <Link
          href="https://github.com/DeltaHacks/deltahacks-website-2024"
          className="hover:underline"
        >
          Privacy Policy
        </Link>
        <Link
          href="https://github.com/DeltaHacks/deltahacks-website-2024"
          className="hover:underline"
        >
          Travel Guidelines
        </Link>
        <p className="flex-1 text-right">@ Copyright 2024 DeltaHacks</p>
      </div>
    </footer>
  );
};

export default Footer;
