import React from "react";
import Image from "next/image";
import snowman from "~/assets/footer/snowman.png";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SiInstagram, SiLinkedin, SiDevpost, SiTiktok } from "react-icons/si";

const TeamMarquee = dynamic(() => import("~/components/TeamMarquee"), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer>
      <div className="h-28 bg-gradient-to-b from-transparent to-[#efdeff]" />
      <div className="mx-auto flex flex-col items-center bg-[#efdeff]">
        <Image src={snowman} alt="Snowman footer image" />
        <p className="text-md pb-4 text-center lg:text-2xl">
          Made with ♥ from the DeltaHacks Team
        </p>
        <TeamMarquee />
        <div className="mt-20 flex w-full max-w-screen-lg flex-col items-center gap-3 pb-4 text-lg lg:flex-row lg:gap-8 lg:border-t lg:border-black lg:py-10 lg:text-xl">
          <div className="flex flex-row gap-1 pb-4 text-white lg:hidden">
            <Link href="https://www.instagram.com/deltahacks/">
              <SiInstagram className="size-8" />
            </Link>
            <Link href="https://www.linkedin.com/company/deltahacks/">
              <SiLinkedin className="size-8" />
            </Link>
            <Link href="https://devpost.com/hackathons?order_by=deadline&organization=DeltaHacks">
              <SiDevpost className="size-8" />
            </Link>
            <Link href="https://www.tiktok.com/@deltahacks">
              <SiTiktok className="size-8" />
            </Link>
          </div>
          <Link
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            className="hover:underline"
          >
            Code of Conduct
          </Link>
          <Link href="https://mlh.io/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          {/* <Link
          href="https://github.com/DeltaHacks/deltahacks-website-2024"
          className="hover:underline"
        >
          Travel Guidelines
        </Link> */}
          <p className="flex-1 lg:text-right">@ Copyright 2024 DeltaHacks</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
