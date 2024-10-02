import React from "react";
import Image from "next/image";
import Newsletter from "~/components/Newsletter";

const Footer = () => {
  return (
    <footer className="grid min-h-screen grid-cols-1 grid-rows-1 bg-red-500">
      <div className="grid-col relative col-start-1 row-start-1 overflow-clip object-cover p-16">
        <div className="mt-32">
          <Newsletter />
        </div>
        <Image
          src={"/footer_low.png"}
          alt={"Footer Blob Image"}
          objectFit="cover"
          width={1920}
          height={1080}
        />
      </div>
      {/* <div className="z-10 col-start-1 row-start-1">
        <p>HELLO</p>
      </div> */}
    </footer>
  );
};

export default Footer;
