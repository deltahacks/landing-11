import React from "react";
import Sponsor, { SponsorData } from "~/components/Sponsor";

// Tier 1
import mes from "../assets/sponsor_logos/mes.svg";
import mcMaster from "../assets/sponsor_logos/mcmaster.svg";

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
