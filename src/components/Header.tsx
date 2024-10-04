import React from "react";
import clsx from "clsx";

interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, className, ...props }) => {
  return (
    <h2
      className={clsx(
        "text-display text-center text-4xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:text-8xl",
        className,
      )}
      {...props}
    >
      {title}
    </h2>
  );
};

export default Header;
