import React from "react";
import Header from "~/components/Header";
import Sponsor, { type SponsorData } from "~/components/Sponsor";

// "/sponsor_logos/mcmaster.svg"
// "/sponsor_logos/berachain.svg"
// "/sponsor_logos/fdm.svg"
// "/sponsor_logos/logsnag.svg"
// "/sponsor_logos/bell.svg"
// "/sponsor_logos/scotiabank.svg"
// "/sponsor_logos/cse.svg"
// "/sponsor_logos/onezo.svg"
// "/sponsor_logos/voiceflow.svg"
// "/sponsor_logos/verbwire.svg"
// "/sponsor_logos/wolfram.svg"
// "/sponsor_logos/stickeryou.svg"
// "/sponsor_logos/cohere.svg"
// "/sponsor_logos/echo3d.svg"
// "/sponsor_logos/nordvpn.svg"
// "/sponsor_logos/nordpass.svg"
// "/sponsor_logos/incogni.svg"

const sponsors: SponsorData[] = [
  // Tier 1
  {
    src: "/sponsor_logos/mes.svg",
    alt: "McMaster Engineering Society",
    link: "https://www.macengsociety.ca/",
    size: "large",
  },
  {
    src: "/sponsor_logos/mcmaster.svg",
    alt: "McMaster University",
    link: "https://www.mcmaster.ca/",
    size: "large",
  },

  // Tier 2

  {
    src: "/sponsor_logos/fdm.svg",
    alt: "FDM",
    link: "https://www.fdm.ca/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/logsnag.svg",
    alt: "LogSnag",
    link: "https://www.logsnag.com/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/bell.svg",
    alt: "Bell",
    link: "https://bell.ca/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/scotiabank.svg",
    alt: "Scotiabank",
    link: "https://www.scotiabank.com/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/cse.svg",
    alt: "CSE",
    link: "https://cse.ca/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/onezo.svg",
    alt: "Onezo",
    link: "https://onezo.ca/",
    size: "medium",
  },
  // Tier 3
  {
    src: "/sponsor_logos/voiceflow.svg",
    alt: "Voiceflow",
    link: "https://voiceflow.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/verbwire.svg",
    alt: "Verbwire",
    link: "https://verbwire.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/wolfram.svg",
    alt: "Wolfram",
    link: "https://www.wolfram.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/stickeryou.svg",
    alt: "StickerYou",
    link: "https://www.stickeryou.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/cohere.svg",
    alt: "Cohere",
    link: "https://cohere.ai/",
    size: "small",
  },
  {
    src: "/sponsor_logos/echo3d.svg",
    alt: "Echo3D",
    link: "https://echo3d.ai/",
    size: "small",
  },
  {
    src: "/sponsor_logos/nordvpn.svg",
    alt: "NordVPN",
    link: "https://nordvpn.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/incogni.svg",
    alt: "Incogni",
    link: "https://incogni.com/",
    size: "small",
  },
];

// Sponsors
const Sponsors = () => {
  return (
    <div
      id="Sponsors"
      className="container mx-auto flex flex-col items-center justify-center p-6 text-[#2D9AEA]"
    >
      <Header className="mb-8">PAST SPONSORS</Header>

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
