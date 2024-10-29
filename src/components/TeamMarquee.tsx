import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

import members from "~/assets/footer/members.json";

type Profile = {
  name: string;
  image: string;
  hoverText: React.ReactNode;
};

const TeamPFP = ({
  key,
  profile,
  setPlaying,
}: {
  key: number;
  profile: Profile;
  setPlaying: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setPlaying(!isShowing);
  }, [isShowing, setPlaying]);

  return (
    <Popover key={key}>
      {/* We need a popover button to control the open state for some reason */}
      <PopoverButton
        disabled
        as="div"
        className="mx-4 focus:outline-none"
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        <Image
          src={profile.image}
          alt={profile.name}
          width={80}
          height={80}
          className="rounded-lg"
        />
      </PopoverButton>
      <Transition show={isShowing}>
        <PopoverPanel
          static
          className="absolute z-10 rounded bg-white p-2 shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 data-[closed]:delay-100"
          portal
          transition
          anchor={{
            to: "bottom",
            gap: 4,
          }}
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
        >
          {profile.hoverText}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

const TeamMarquee = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <Marquee className="py-8" play={playing} pauseOnHover>
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

        const profile: Profile = {
          name: member.full_name,
          image: member.filename
            ? `/memberPictures/${member.filename}`
            : "/memberPictures/placeholder.png",
          hoverText: (
            <div className="flex flex-col items-center">
              <div>{member.full_name}</div>
              <div className="text-3xl">{emoji}</div>
            </div>
          ),
        };
        return (
          <TeamPFP key={index} profile={profile} setPlaying={setPlaying} />
        );
      })}
    </Marquee>
  );
};

export default TeamMarquee;
