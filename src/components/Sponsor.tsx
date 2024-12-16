import { cva } from "class-variance-authority";
import clsx from "clsx";

const sponsorVariants = cva(
  "flex max-h-32 items-center justify-center bg-[#533688] p-2 [&>img]:text-white",
  {
    variants: {
      size: {
        large: "col-span-12 md:col-span-6 flex justify-center",
        medium: "col-span-6 sm:col-span-4 flex justify-center",
        small: "col-span-4 sm:col-span-3 flex justify-center",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export type SponsorVarientSizes = "large" | "medium" | "small";

// Sponsor Component
export interface SponsorData {
  src: string;
  alt: string;
  link: string;
  size: SponsorVarientSizes;
}

export const ResponsiveImage: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement>
> = (props) => (
  <img
    {...props}
    alt={props.alt ?? "Sponsor Logo"}
    className={clsx(
      "mx-auto h-20 max-h-full object-contain text-white",
      props.className,
    )}
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

export default Sponsor;
