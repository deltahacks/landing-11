import Image from "next/image";
import Marquee from "react-fast-marquee";

import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

import members from "~/assets/footer/members.json";

const TeamMarquee = () => {
  const [hoveredText, setHoveredText] = useState("");

  return (
    <>
      <p>&nbsp;{hoveredText}</p>
      <Marquee className="flex gap-8 py-8" pauseOnHover>
        {members.map((member, index) => {
          let emoji: React.ReactNode = member.emoji;
          if (member.emoji.startsWith("/emojis/")) {
            emoji = (
              <Image
                src={member.emoji}
                alt={member.full_name}
                width={35}
                height={35}
              />
            );
          }

          const image = member.filename
            ? `/memberPictures/${member.filename}`
            : "/memberPictures/placeholder.png";
          return (
            <Image
              key={member.full_name}
              src={image}
              alt={member.full_name}
              width={120}
              height={120}
              className="mx-4 h-24 w-24 rounded-full border-4 border-[#4C1D95] object-cover hover:border-blue-500 hover:shadow-xl"
              onMouseEnter={() =>
                setHoveredText(
                  `${member.full_name}, ${member.team} ${member.emoji}`,
                )
              }
              onMouseLeave={() => setHoveredText("")}
            />
          );
        })}
      </Marquee>
    </>
  );
};

export default TeamMarquee;
