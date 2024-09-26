import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from "vaul";
//import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [container, setContainer] = React.useState(null);

  const hideSidebar = () => {
    setOpen(false);
  };

  return (
    <div className="sticky top-0 z-30 flex h-full w-full items-center justify-between gap-4 px-6 py-5 backdrop-blur-md md:px-8">
      {/* backdrop-blur-md */}
      <div className="flex h-full w-full lg:gap-6 lg:px-4 xl:gap-14">
        {/* {!open && ( */}
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
        {/* )} */}
        <div className="hidden w-fit items-center justify-between gap-6 px-12 text-white md:flex md:text-xl lg:px-0 lg:text-2xl xl:gap-12">
          <Link href="#WhoAreWe">About</Link>
          <Link href="#Community">Statistics</Link>
          <Link className="min-w-fit" href="#Carousel">
            Past Events
          </Link>
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
        <Link href="https://www.instagram.com/deltahacks">
          <Image
            className=""
            width="36"
            height="36"
            src="/nav_devpost.svg"
            alt="Devpost"
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
        {/* <div className="z-40">
          <div ref={setContainer} />
        </div> */}
        <Drawer.Root
          direction="right"
          open={open}
          onOpenChange={setOpen}
          noBodyStyles={true}
          // container={container}
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
              <div className="drawer-side h-[calc(100dvh)] w-screen overscroll-none bg-[#644A93]">
                <div className="z-50 flex h-full flex-col justify-between px-16">
                  <div className="z-50 flex w-fit flex-col gap-8 pt-28 text-xl text-white">
                    <Link href="/" onClick={hideSidebar}>
                      About
                    </Link>
                    <Link href="#Community" onClick={hideSidebar}>
                      Statistics
                    </Link>
                    <Link href="#Carousel" onClick={hideSidebar}>
                      Past Events
                    </Link>
                    <Link href="#Sponsers" onClick={hideSidebar}>
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
                    <Link href="https://www.instagram.com/deltahacks">
                      <Image
                        className=""
                        width="36"
                        height="36"
                        src="/nav_devpost.svg"
                        alt="Devpost"
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

//  <div className="drawer drawer-end">
//           <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//           <div className="drawer-content">
//             {/* Page content here */}
//             <label htmlFor="my-drawer-4" className="drawer-button">
//               <Image width="24" height="24" src="/nav_sizing.svg" alt="NAV" />
//             </label>
//           </div>
//           <div className="drawer-side h-[calc(100dvh)] w-screen overscroll-none">
//             <ul className="menu text-base-content h-[calc(100dvh)] min-h-full w-screen gap-4 bg-[#19333A] p-4 px-6 text-xl">
//               <label
//                 htmlFor="my-drawer-4"
//                 aria-label="close sidebar"
//                 className="align-center drawer-overlay flex w-full justify-end pb-16"
//               >
//                 <Image width="24" height="24" src="/nav_close.svg" alt="NAV" />
//               </label>
//               {/* <!-- <input id="my-drawer-4" type="checkbox" className="drawer-toggle" /> --> */}
//               <div className="flex flex-col justify-between">
//                 <div className="text-white">
//                   <li>
//                     <Link href="#" onClick={hideSidebar}>
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#WhoAreWe" onClick={hideSidebar}>
//                       About
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#Community" onClick={hideSidebar}>
//                       Statistics
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#Carousel" onClick={hideSidebar}>
//                       Past Events
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#Sponsers" onClick={hideSidebar}>
//                       Sponsors
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#FAQ" onClick={hideSidebar}>
//                       FAQ
//                     </Link>
//                   </li>
//                 </div>
//                 <div className="align-center flex w-full items-center justify-center gap-4 pt-24 md:gap-4">
//                   <Link href="https://www.linkedin.com/company/deltahacks/mycompany/">
//                     <Image
//                       className=""
//                       width="72"
//                       height="72"
//                       src="/nav_linkedin.svg"
//                       alt="logo"
//                     />
//                   </Link>
//                   <Link href="https://www.instagram.com/deltahacks">
//                     <Image
//                       className=""
//                       width="72"
//                       height="72"
//                       src="/nav_insta.svg"
//                       alt="Instagram"
//                     />
//                   </Link>
//                   <Link href="https://twitter.com/deltaHacks">
//                     <Image
//                       className=""
//                       width="72"
//                       height="72"
//                       src="/nav_twitter.svg"
//                       alt="Twitter"
//                     />
//                   </Link>
