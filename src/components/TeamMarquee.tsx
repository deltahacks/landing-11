import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

const placeholderImage = "https://placehold.co/80";

type Profile = {
  name: string;
  image: string | StaticImport;
  quote: string;
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
          className="rounded-full"
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
          {profile.quote}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

const TeamMarquee = () => {
  // make pfp array 40 placeholder pfps
  const profileArray = Array.from({ length: 40 }, (_, index) => ({
    name: `PFP ${index + 1}`,
    image: placeholderImage + `?text=${index + 1}`,
    quote: "This is a quote from team member " + (index + 1),
  }));

  const [playing, setPlaying] = useState(true);

  return (
    <Marquee className="py-8" play={playing} pauseOnHover>
      {profileArray.map((profile, index) => (
        <TeamPFP key={index} profile={profile} setPlaying={setPlaying} />
      ))}
    </Marquee>
  );
};

export default TeamMarquee;
