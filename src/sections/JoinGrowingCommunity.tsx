import Image from "next/image";
import React from "react";
import Header from "~/components/Header";

const JoinGrowingCommunity = () => {
  return (
    <section className="relative flex flex-col items-center text-center">
      <div className="flex flex-col gap-2">
        <p className="text-md font-bold text-[rgba(83,54,136,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:text-5xl">
          Come to DeltaHacks 11 to
        </p>
        <Header
          title={
            <>
              JOIN A GROWING
              <br />
              COMMUNITY
            </>
          }
        />
      </div>
      {/* dinos & text; lots of absolute of relative positioning to get things right */}
      <div className="flex h-[700px] w-full max-w-[600px] flex-col justify-around px-8 text-3xl font-normal text-white lg:h-[1300px] lg:max-w-[700px] lg:px-0 lg:text-7xl xl:max-w-[1200px]">
        <div className="w-1/2 self-end">
          <div className="relative flex flex-col items-center">
            <div className="">
              800
              <br />
              HACKERS
            </div>
            <div className="relative">
              {/* blue dino */}
              <div className="absolute -left-48 -top-20 -z-20 scale-[0.5] lg:-left-60 lg:top-0 lg:scale-100 xl:-left-96">
                <Image
                  src="/join_growing_community/blue_dino_trail.svg"
                  alt="Blue dino trail"
                  className="absolute bottom-[180px] right-[290px] aspect-[1734/1715] max-h-none w-[1734px] max-w-none"
                  width={1734}
                  height={1715}
                />
                <Image
                  src="/join_growing_community/blue_dino_snowboard.png"
                  alt="Blue dino snowboarding"
                  className="relative z-10 aspect-square w-[350px] max-w-none -rotate-[17deg]"
                  width={411}
                  height={411}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 self-start">
          <div className="relative flex flex-col items-center">
            <div className="">
              300
              <br />
              COMMITS
            </div>
            <div className="relative">
              {/* yellow dino */}
              <div className="absolute -left-44 -top-8 -z-30 scale-[0.4] lg:-left-60 lg:top-32 lg:scale-100 xl:-left-40">
                <Image
                  src="/join_growing_community/yellow_dino_trail.svg"
                  alt="Yellow dino trail"
                  className="absolute bottom-[130px] left-[220px] aspect-[1907/1199] max-h-none w-[1907px] max-w-none"
                  width={1907}
                  height={1199}
                />
                <Image
                  src="/join_growing_community/yellow_dino_sled.png"
                  alt="Yellow dino sledding"
                  className="relative z-10 aspect-square w-[350px] max-w-none"
                  width={1372}
                  height={1372}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 self-end">
          <div className="relative flex flex-col items-center">
            <div className="">
              200
              <br />
              PROJECTS
            </div>
            <div className="relative">
              {/* red dino */}
              <div className="absolute -left-40 -top-12 scale-[0.4] lg:-left-32 lg:top-16 lg:scale-100">
                <Image
                  src="/join_growing_community/red_dino_ski.png"
                  alt="Red dino skiing"
                  className="relative z-10 aspect-[1456/1513] w-[350px] max-w-none"
                  width={1456}
                  height={1513}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 self-start">
          <div className="relative flex flex-col items-center">
            <div className="">
              55
              <br />
              MENTORS
            </div>
          </div>
        </div>
      </div>
      {/* tree to the right of "800 HACKERS" */}
      <div className="absolute -right-6 top-16 -z-10 lg:-right-36 lg:top-52">
        <Image
          src="/trees/tree_mid.svg"
          alt="Snowy tree"
          className="relative aspect-[329/428] w-[87px] max-w-none lg:h-[724px] lg:w-[400px]"
          width={329}
          height={428}
        />
      </div>
      {/* snowy tree to the left of "300 COMMITS" */}
      <div className="absolute -left-12 top-32 -z-10 lg:-left-56 lg:top-52">
        <Image
          src="/trees/snow_tree_light.svg"
          alt="Snowy tree"
          className="relative h-[230px] w-[157px] max-w-none lg:h-[640px] lg:w-[489px]"
          width={489}
          height={630}
        />
      </div>
      {/* other tree to the left of "300 COMMITS" */}
      <div className="absolute -left-12 top-72 -z-10 lg:-left-8 lg:top-[600px]">
        <Image
          src="/trees/tree_dark.svg"
          alt="Snowy tree"
          className="relative h-[192px] w-[110px] max-w-none lg:h-[428px] lg:w-[329px]"
          width={418}
          height={724}
        />
      </div>
    </section>
  );
};

export default JoinGrowingCommunity;
