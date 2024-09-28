import React from "react";
import Image from "next/image";
import snowman from "~/assets/footer/snowman.png";
import Link from "next/link";
import dynamic from "next/dynamic";

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
      <div className="mt-32 flex w-full max-w-screen-lg flex-col gap-3 py-12 text-center text-xl lg:flex-row lg:gap-8 lg:border-t lg:border-black">
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
