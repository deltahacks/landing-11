import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Drawer } from "vaul";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [container, setContainer] = useState(null);

  const [blur, setBlur] = useState(false);

  const hideSidebar = () => {
    setOpen(false);
  };

  useEffect(() => {
    const callback = () => {
      setBlur(window.scrollY > 70);
    };

    window.addEventListener("scroll", callback, false);
    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, []);

  return (
    <div
      className={clsx(
        "sticky top-0 z-30 flex h-full w-full items-center justify-between gap-4 px-6 py-5 font-display transition-all md:px-8",
        {
          "backdrop-blur-md": blur,
          "backdrop-blur-none": !blur,
        },
      )}
    >
      <div className="flex h-full w-full lg:gap-6 lg:px-4 xl:gap-14">
        <div className="z-0 flex md:flex md:items-center md:gap-4">
          <Link href="/">
            <Image
              width="68"
              height="68"
              className="md:h-18 z-0 flex w-1/2 md:w-full"
              src="/nav_logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden w-fit items-center justify-between gap-6 px-12 font-display text-white md:flex md:text-xl lg:px-0 lg:text-2xl xl:gap-12">
          <Link href="#Community">Community</Link>
          <Link href="#Sponsors">Sponsors</Link>
          <Link href="#FAQ">FAQ</Link>
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:gap-4">
        <Link href="https://www.linkedin.com/company/deltahacks/mycompany/">
          <Image
            className=""
            width="36"
            height="36"
            src="/nav_linkedin.svg"
            alt="logo"
          />
        </Link>
        <Link href="https://www.instagram.com/deltahacks">
          <Image
            className=""
            width="36"
            height="36"
            src="/nav_insta.svg"
            alt="Instagram"
          />
        </Link>
        <Link href="https://www.tiktok.com/@deltahacks">
          <Image
            className=""
            width="36"
            height="36"
            src="/nav_tiktak.svg"
            alt="TikTok"
          />
        </Link>
      </div>
      <div className="inset-0 z-40 md:invisible md:hidden">
        <Drawer.Root
          direction="right"
          open={open}
          onOpenChange={setOpen}
          noBodyStyles={true}
        >
          <Drawer.Trigger asChild>
            <button className="">
              {!open && (
                <Image
                  width="24"
                  height="24"
                  src="/nav_sizing.svg"
                  className="w-full"
                  alt="NAV"
                />
              )}
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="fixed bottom-0 right-0 z-50 mt-24 flex h-full w-full flex-col rounded-t-[10px]">
              <div className="absolute right-0 top-0 z-50 px-8 pt-6">
                {open && (
                  <Image
                    width="20"
                    height="20"
                    src="/nav_close.svg"
                    alt="CLOSE"
                    className="z-50"
                    onClick={hideSidebar}
                  />
                )}
              </div>
              <div className="drawer-side h-[calc(100dvh)] w-screen overscroll-none bg-[#644A93] font-display">
                <div className="z-50 flex h-full flex-col justify-between px-16">
                  <div className="z-50 flex w-fit flex-col gap-8 pt-28 text-xl text-white">
                    <Link href="#Community" onClick={hideSidebar}>
                      Community
                    </Link>
                    <Link href="#Sponsors" onClick={hideSidebar}>
                      Sponsors
                    </Link>
                    <Link href="#FAQ" onClick={hideSidebar}>
                      FAQ
                    </Link>
                  </div>
                  <div className="align-center flex w-full items-center justify-center gap-4 py-16 md:gap-4">
                    <Link href="https://www.linkedin.com/company/deltahacks/mycompany/">
                      <Image
                        className=""
                        width="36"
                        height="36"
                        src="/nav_linkedin.svg"
                        alt="logo"
                      />
                    </Link>
                    <Link href="https://www.instagram.com/deltahacks">
                      <Image
                        className=""
                        width="36"
                        height="36"
                        src="/nav_insta.svg"
                        alt="Instagram"
                      />
                    </Link>
                    <Link href="https://www.tiktok.com/@deltahacks">
                      <Image
                        className=""
                        width="36"
                        height="36"
                        src="/nav_tiktak.svg"
                        alt="TikTok"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
};

export default Navbar;
