import React, { ImgHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

//Tier 1
import mes from "../assets/sponsor_logos/mes.svg";
import mcMaster from "../assets/sponsor_logos/mcmaster.svg";
import berachain from "../assets/sponsor_logos/berachain.svg";

//Tier 2
import fdm from "../assets/sponsor_logos/fdm.svg";
import logsnag from "../assets/sponsor_logos/logsnag.svg";
import bell from "../assets/sponsor_logos/bell.svg";
import scotiabank from "../assets/sponsor_logos/scotiabank.svg";
import cse from "../assets/sponsor_logos/cse.svg";
import onezo from "../assets/sponsor_logos/onezo.svg";

//Tier 3
import voiceFlowLogo from "../assets/sponsor_logos/voiceflow.svg";
import verbwireLogo from "../assets/sponsor_logos/verbwire.svg";
import wolfram from "../assets/sponsor_logos/wolfram.svg";
import stickeryou from "../assets/sponsor_logos/stickeryou.svg";
import cohere from "../assets/sponsor_logos/cohere.svg";
import echo3d from "../assets/sponsor_logos/echo3d.svg";
import nordvpn from "../assets/sponsor_logos/nordvpn.svg";
import nordpass from "../assets/sponsor_logos/nordpass.svg";
import incogni from "../assets/sponsor_logos/incogni.svg";

const sponsorVariants = cva(
  "flex max-h-32 items-center justify-center bg-white bg-opacity-20 p-2 [&>img]:text-white",
  {
    variants: {
      size: {
        large: "col-span-12 md:col-span-6",
        medium: "col-span-6 sm:col-span-4",
        small: "col-span-4 sm:col-span-3",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

type SponsorVarientSizes = "large" | "medium" | "small";

// Sponsor Component
interface SponsorData {
  src: string;
  alt: string;
  link: string;
  size?: SponsorVarientSizes;
}

const sponsors: SponsorData[] = [
  // Tier 1
  {
    src: mes.src,
    alt: "McMaster Engineering Society",
    link: "https://www.macengsociety.ca/",
    size: "large",
  },
  {
    src: mcMaster.src,
    alt: "McMaster University",
    link: "https://www.mcmaster.ca/",
    size: "large",
  },
];

const ResponsiveImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (
  props,
) => (
  <img
    {...props}
    className={clsx("mx-auto h-20 max-h-full object-contain", props.className)}
  />
);

// Sponsor Component
const Sponsor: React.FC<SponsorData> = ({
  src,
  alt,
  link,
  size = "medium",
}) => {
  return (
    <a
      href={link ?? "javascript:;"} // if no link then do nothing
      className={sponsorVariants({ size })}
      target={link ? "_blank" : undefined} // open in new tab
      rel="noopener noreferrer"
    >
      <ResponsiveImage src={src} alt={alt} />
    </a>
  );
};

// Sponsors
const Sponsors = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-6 text-[#2D9AEA]">
      <h2 className="mb-8 text-center text-[52px] font-bold leading-none lg:text-[80px]">
        <span className="text-fill-transparent text-stroke-white text-stroke-2">
          MEET OUR
        </span>{" "}
        SPONSORS
      </h2>

      <div className="grid grid-cols-12 gap-5">
        {sponsors.map((sponsor, index) => (
          <Sponsor
            key={index}
            src={sponsor.src}
            alt={sponsor.alt}
            link={sponsor.link}
            size={sponsor.size}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
