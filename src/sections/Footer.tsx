import React from "react";
import Image from "next/image";
import snowman from "~/assets/footer/snowman.png";
import Link from "next/link";
import dynamic from "next/dynamic";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";
import { FaTiktok } from "react-icons/fa6";

const TeamMarquee = dynamic(() => import("~/components/TeamMarquee"), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-screen-2xl flex-col items-center">
      <Image src={snowman} alt="Snowman footer image" />
      <p className="pb-4 text-center text-2xl">
        Made with ♥ from the DeltaHacks Team
      </p>
      <TeamMarquee />
      <div className="mt-20 flex w-full max-w-screen-lg flex-col items-center gap-3 pb-4 text-xl lg:flex-row lg:gap-8 lg:border-t lg:border-black lg:py-10">
        <div className="flex flex-row gap-1 pb-4 text-white lg:hidden">
          <RiInstagramLine className="size-8" />
          {/* There is no Material UI icon set in react-icons, 
          this icon appears to be similar enough */}
          <FaLinkedin className="size-8" />
          <SiDevpost className="size-8" />
          {/* There is no Iconify icon set in react-icons, 
          this icon appears to be similar enough */}
          <FaTiktok className="size-8" />
        </div>
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
        <p className="flex-1 lg:text-right">@ Copyright 2024 DeltaHacks</p>
      </div>
    </footer>
  );
};

export default Footer;
