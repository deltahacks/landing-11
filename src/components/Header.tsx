import React from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import type { ClassValue } from "clsx";

interface HeaderProps {
  children: ReactNode;
  className?: ClassValue;
}

const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => {
  return (
    <h2
      className={clsx(
        "text-display text-center text-4xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:text-8xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Header;
