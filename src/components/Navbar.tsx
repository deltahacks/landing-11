import React from "react";
import Image from "next/image";

//import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar: React.FC = () => {
  const hideSidebar = (e: any) => {
    // document.getElementById("my-drawer-4").checked = false;
    // // continue the event
    return true;
  };

  return (
    <div className="flex h-full w-full items-center justify-between bg-[#19333A] bg-opacity-40 px-6 py-5 backdrop-blur-xl md:px-8">
      <div className="flex h-full w-full gap-6 px-4 xl:gap-14">
        <a href="#Hero" className="">
          <Image
            width="68"
            height="68"
            className="h-18"
            src="/nav_logo.svg"
            alt="logo"
          />
        </a>
        <div className="hidden w-fit items-center justify-between gap-6 px-12 text-white md:flex md:text-2xl lg:px-0 xl:gap-12">
          <a href="#WhoAreWe">About</a>
          <a href="#Community">Statistics</a>
          <a href="#Carousel">Past Events</a>
          <a href="#Sponsors">Sponsors</a>
          <a href="#FAQ">FAQ</a>
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:gap-4">
        <a href="https://www.linkedin.com/company/deltahacks/mycompany/">
          <Image
            className=""
            width="36"
            height="36"
            src="/nav_linkedin.svg"
            alt="logo"
          />
        </a>
        <a href="https://www.instagram.com/deltahacks">
          <Image
            className=""
            width="36"
            height="36"
            src="/nav_insta.svg"
            alt="Instagram"
          />
        </a>
        <a href="https://www.instagram.com/deltahacks">
          <Image
            className=""
            width="36"
            height="36"
            src="/nav_devpost.svg"
            alt="Devpost"
          />
        </a>
        <a href="https://www.instagram.com/deltahacks">
          <Image
            className=""
            width="36"
            height="36"
            src="/nav_tiktak.svg"
            alt="TikTok"
          />
        </a>
      </div>
      <div className="inset-0 md:hidden">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button">
              <Image width="24" height="24" src="/nav_sizing.svg" alt="NAV" />
            </label>
          </div>
          <div className="drawer-side h-[calc(100dvh)] w-screen overscroll-none">
            <ul className="menu text-base-content h-[calc(100dvh)] min-h-full w-screen gap-4 bg-[#19333A] p-4 px-6 text-xl">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="align-center drawer-overlay flex w-full justify-end pb-16"
              >
                <Image width="24" height="24" src="/nav_close.svg" alt="NAV" />
              </label>
              {/* <!-- <input id="my-drawer-4" type="checkbox" className="drawer-toggle" /> --> */}
              <div className="flex flex-col justify-between">
                <div className="text-white">
                  <li>
                    <a href="#" onClick={hideSidebar}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#WhoAreWe" onClick={hideSidebar}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#Community" onClick={hideSidebar}>
                      Statistics
                    </a>
                  </li>
                  <li>
                    <a href="#Carousel" onClick={hideSidebar}>
                      Past Events
                    </a>
                  </li>
                  <li>
                    <a href="#Sponsers" onClick={hideSidebar}>
                      Sponsors
                    </a>
                  </li>
                  <li>
                    <a href="#FAQ" onClick={hideSidebar}>
                      FAQ
                    </a>
                  </li>
                </div>
                <div className="align-center flex w-full items-center justify-center gap-4 pt-24 md:gap-4">
                  <a href="https://www.linkedin.com/company/deltahacks/mycompany/">
                    <Image
                      className=""
                      width="72"
                      height="72"
                      src="/nav_linkedin.svg"
                      alt="logo"
                    />
                  </a>
                  <a href="https://www.instagram.com/deltahacks">
                    <Image
                      className=""
                      width="72"
                      height="72"
                      src="/nav_insta.svg"
                      alt="Instagram"
                    />
                  </a>
                  <a href="https://twitter.com/deltaHacks">
                    <Image
                      className=""
                      width="72"
                      height="72"
                      src="/nav_twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
