import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";

const placeholderImage = "https://placehold.co/80";

const TeamMarquee = () => {
  // make pfp array 40 placeholder pfps
  const pfpArray = Array.from({ length: 40 }, (_, index) => ({
    name: `PFP ${index + 1}`,
    image: placeholderImage + `?text=${index + 1}`,
    quote: "This is a quote from team member " + (index + 1),
  }));

  return (
    <Marquee className="my-4" pauseOnHover={true}>
      {pfpArray.map((pfp, index) => (
        <Popover key={index}>
          {() => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <>
                {/* We need a popover button to control the open state for some reason */}
                <PopoverButton
                  disabled
                  as="div"
                  className="mx-4 focus:outline-none"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={pfp.image}
                    alt={pfp.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </PopoverButton>
                {isHovered && (
                  <PopoverPanel
                    static
                    className="absolute z-10 rounded bg-white p-2 shadow-lg"
                    portal
                    anchor={{
                      to: "bottom",
                      gap: 8,
                    }}
                  >
                    {pfp.quote}
                  </PopoverPanel>
                )}
              </>
            );
          }}
        </Popover>
      ))}
    </Marquee>
  );
};

export default TeamMarquee;
