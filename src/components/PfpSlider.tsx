import Image from "next/image";
import Marquee from "react-fast-marquee";

const placeholderImage = "https://placehold.co/80";

const Slider = () => {
  // make pfp array 40 placeholder pfps
  const pfpArray = Array.from({ length: 40 }, (_, index) => ({
    name: `PFP ${index + 1}`,
    image: placeholderImage + `?text=${index + 1}`,
  }));

  return (
    <Marquee>
      {pfpArray.map((pfp, index) => (
        <Image
          key={index}
          src={pfp.image}
          alt={pfp.name}
          width={80}
          height={80}
          className="mx-1 rounded-full"
        />
      ))}
    </Marquee>
  );
};

export default Slider;
