import React from "react";
import Image from "next/image";
import snowman from "~/assets/footer/snowman.png";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SiInstagram, SiLinkedin, SiDevpost, SiTiktok } from "react-icons/si";

const TeamMarquee = dynamic(() => import("~/components/TeamMarquee"), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer>
      <div className="h-28 bg-gradient-to-b from-transparent to-[#efdeff]" />
      <div className="mx-auto flex flex-col items-center bg-[#efdeff]">
        <div className="relative mx-auto mt-10 max-w-2xl">
          <div className="letter absolute bottom-64 left-1/2 right-0 z-0 w-3/4 -translate-x-1/2 transform cursor-pointer md:bottom-48 lg:bottom-56">
            <Image
              src={"/letter.svg"}
              alt={"Newsletter Letter"}
              width={1000}
              height={1000}
            />
          </div>
          <div className="relative z-20 mt-32 bg-white p-4 shadow-md md:mx-auto md:mt-10 md:max-w-2xl md:rounded-lg md:p-6">
            <div id="mc_embed_signup">
              <form
                action="https://deltahacks.us19.list-manage.com/subscribe/post?u=7ac221f02edc4242db4789d8f&amp;id=380c22c749&amp;f_id=00a736e7f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_self"
                noValidate
              >
                <div
                  id="mc_embed_signup_scroll"
                  className="flex flex-col items-center justify-center space-y-4"
                >
                  <h2 className="text-center text-sm text-violet-900 md:text-base">
                    Follow us on social media to stay up to date on latest news
                    about DeltaHacks!
                  </h2>
                  <div className="mt-4 flex justify-center space-x-4">
                    <Link href={"https://www.instagram.com/deltahacks"}>
                      <SiInstagram className="size-8 text-violet-900" />
                    </Link>
                    <Link href={"https://www.linkedin.com/company/deltahacks/"}>
                      <SiLinkedin className="size-8 text-violet-900" />
                    </Link>
                    <Link href={"https://www.tiktok.com/@deltahacks"}>
                      <SiTiktok className="size-8 text-violet-900" />
                    </Link>
                    <Link href={"https://deltahacks-x.devpost.com/"}>
                      <SiDevpost className="size-8 text-violet-900" />
                    </Link>
                  </div>
                  <h3 className="mb-4 text-center text-lg text-violet-900 md:text-xl">
                    Sign up to our newsletter!
                  </h3>

                  <div className="flex w-full flex-col space-y-4 px-4 md:px-20">
                    <div className="flex-grow">
                      <div className="mc-field-group">
                        <label
                          htmlFor="mce-EMAIL"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          className="required email w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                          id="mce-EMAIL"
                          required={true}
                        />
                      </div>
                      <div className="hidden">
                        <input type="hidden" name="tags" value="24287902" />
                      </div>
                      <div id="mce-responses" className="clear">
                        <div
                          className="response hidden"
                          id="mce-error-response"
                        ></div>
                        <div
                          className="response hidden"
                          id="mce-success-response"
                        ></div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute left-[-5000px]"
                      >
                        <input
                          type="text"
                          name="b_7ac221f02edc4242db4789d8f_380c22c749"
                          tabIndex={-1}
                          value=""
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="w-full cursor-pointer rounded-md bg-violet-900 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-violet-600 md:w-auto"
                        value="Sign up!"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Image src={snowman} alt="Snowman footer image" />
        <p className="text-md pb-4 text-center lg:text-2xl">
          Made with ♥ from the DeltaHacks Team
        </p>
        {/* <TeamMarquee /> */}
        <div className="mt-20 flex w-full max-w-screen-lg flex-col items-center gap-3 pb-4 text-lg lg:flex-row lg:gap-8 lg:border-t lg:border-black lg:py-10 lg:text-xl">
          <div className="flex flex-row gap-1 pb-4 text-white lg:hidden">
            <Link href="https://www.instagram.com/deltahacks/">
              <SiInstagram className="size-8" />
            </Link>
            <Link href="https://www.linkedin.com/company/deltahacks/">
              <SiLinkedin className="size-8" />
            </Link>
            <Link href="https://devpost.com/hackathons?order_by=deadline&organization=DeltaHacks">
              <SiDevpost className="size-8" />
            </Link>
            <Link href="https://www.tiktok.com/@deltahacks">
              <SiTiktok className="size-8" />
            </Link>
          </div>
          <Link
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            className="hover:underline"
          >
            Code of Conduct
          </Link>
          <Link href="https://mlh.io/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          {/* <Link
          href="https://github.com/DeltaHacks/deltahacks-website-2024"
          className="hover:underline"
        >
          Travel Guidelines
        </Link> */}
          <p className="flex-1 lg:text-right">@ Copyright 2024 DeltaHacks</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
