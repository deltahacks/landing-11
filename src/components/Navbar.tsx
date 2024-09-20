import React from "react";
import Image from "next/image";
import Link from "next/link";

//import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-between gap-4 bg-[#19333A] bg-opacity-40 px-6 py-5 backdrop-blur-xl md:px-8">
      <div className="flex h-full w-full lg:gap-6 lg:px-4 xl:gap-14">
        <div className="md:flex md:items-center md:gap-4">
          <Link href="/" className="">
            <Image
              width="68"
              height="68"
              className="h-18"
              src="/nav_logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden w-fit items-center justify-between gap-6 px-12 text-white md:flex md:text-xl lg:px-0 lg:text-2xl xl:gap-12">
          <Link href="#WhoAreWe">About</Link>
          <Link href="#Community">Statistics</Link>
          <Link className="min-w-fit" href="#Carousel">
            Past Events
          </Link>
          <Link href="#Sponsors">Sponsors</Link>
          <Link href="#">FAQ</Link>
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
      <div className="inset-0 md:hidden">
        <Image width="24" height="24" src="/nav_sizing.svg" alt="NAV" />
        <div className="drawer-side h-[calc(100dvh)] w-screen overscroll-none">
          <div className="flex flex-col justify-between">
            <div className="text-white">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#WhoAreWe">About</Link>
              </li>
              <li>
                <Link href="#Community">Statistics</Link>
              </li>
              <li>
                <Link href="#Carousel">Past Events</Link>
              </li>
              <li>
                <Link href="#Sponsers">Sponsors</Link>
              </li>
              <li>
                <Link href="#FAQ">FAQ</Link>
              </li>
            </div>
            <div className="align-center flex w-full items-center justify-center gap-4 pt-24 md:gap-4">
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
