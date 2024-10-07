import React from "react";
import Header from "~/components/Header";
import Sponsor, { type SponsorData } from "~/components/Sponsor";

// Tier 1
// import mes from "../assets/sponsor_logos/mes.svg";
// import mcMaster from "../assets/sponsor_logos/mcmaster.svg";

const sponsors: SponsorData[] = [
  // TODO: FIX TYPES AND ADD SPONSORS
  // // Tier 1
  // {
  //   src: Mes
  //   alt: "McMaster Engineering Society",
  //   link: "https://www.macengsociety.ca/",
  //   size: "large",
  // },
  // {
  //   src: mcMaster!.src as string,
  //   alt: "McMaster University",
  //   link: "https://www.mcmaster.ca/",
  //   size: "large",
  // },
];

// Sponsors
const Sponsors = () => {
  return (
    <div
      id="Sponsors"
      className="container mx-auto flex flex-col items-center justify-center p-6 text-[#2D9AEA]"
    >
      <Header className="mb-8">MEET OUR SPONSORS</Header>

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
