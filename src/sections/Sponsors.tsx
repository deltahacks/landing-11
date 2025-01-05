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
// "/sponsor_logos/microsoft.svg"
// "/sponsor_logos/nokia.svg"
// "/sponsor_logos/digitalocean.svg"
// "/sponsor_logos/manulife.svg"
// "/sponsor_logos/deloitte.svg"
// "/sponsor_logos/rbc.svg"

const sponsors: SponsorData[] = [
  // Tier 1
  {
    src: "/sponsor_logos/mcmaster.svg",
    alt: "McMaster University",
    link: "https://www.mcmaster.ca/",
    size: "large",
  },
  {
    src: "/sponsor_logos/mes.svg",
    alt: "McMaster Engineering Society",
    link: "https://www.macengsociety.ca/",
    size: "large",
  },
  {
    src: "/sponsor_logos/reservepower.svg",
    alt: "Reserve Power",
    link: "https://www.reservepower.ca/",
    size: "large",
  },

  // Tier 2

  {
    src: "/sponsor_logos/pg.svg",
    alt: "Procter & Gamble",
    link: "https://us.pg.com/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/cohere.svg",
    alt: "Cohere",
    link: "https://cohere.ai/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/manulife.svg",
    alt: "Manulife",
    link: "https://www.manulife.ca/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/amd.svg",
    alt: "AMD",
    link: "https://www.amd.com/en.html",
    size: "medium",
  },
  {
    src: "/sponsor_logos/jamesdyson.svg",
    alt: "James Dyson Foundation",
    link: "https://www.jamesdysonaward.org/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/accenture.svg",
    alt: "Accenture",
    link: "https://www.accenture.com/",
    size: "medium",
  },
  {
    src: "/sponsor_logos/cibc.svg",
    alt: "CIBC",
    link: "https://www.cibc.com",
    size: "medium",
  },
  {
    src: "/sponsor_logos/dorahacks.svg",
    alt: "DoraHacks",
    link: "https://dorahacks.io/",
    size: "medium",
  },

  // Tier 3
  {
    src: "/sponsor_logos/swift.svg",
    alt: "Swift",
    link: "https://developer.apple.com/swift/",
    size: "small",
  },
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
    src: "/sponsor_logos/1password.svg",
    alt: "1Password",
    link: "https://www.1password.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/nordvpn.svg",
    alt: "NordVPN",
    link: "https://nordvpn.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/nordpass.svg",
    alt: "Nordpass",
    link: "https://nordpass.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/incogni.svg",
    alt: "Incogni",
    link: "https://incogni.com/",
    size: "small",
  },

  {
    src: "/sponsor_logos/saily.svg",
    alt: "Saily",
    link: "https://saily.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/taskade.svg",
    alt: "Taskade",
    link: "https://taskade.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/logsnag.svg",
    alt: "LogSnag",
    link: "https://www.logsnag.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/balsamiq.svg",
    alt: "Balsamiq",
    link: "https://balsamiq.com/",
    size: "small",
  },

  {
    src: "/sponsor_logos/wolfram.svg",
    alt: "Wolfram",
    link: "https://wolfram.com/",
    size: "small",
  },
  {
    src: "/sponsor_logos/perplexity.svg",
    alt: "Perplexity",
    link: "https://www.perplexity.ai/",
    size: "small",
  },
  {
    src: "/sponsor_logos/warp.svg",
    alt: "Warp",
    link: "https://warp.dev/",
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
      <Header className="mb-8">OUR SPONSORS</Header>
      <div className="mb-8 grid grid-cols-12 gap-5">
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
