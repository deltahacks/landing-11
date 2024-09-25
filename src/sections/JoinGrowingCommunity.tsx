import Image from "next/image";
import React from "react";
import Header from "~/components/Header";

const stats = [
  {
    number: 800,
    text: "HACKERS",
  },
  {
    number: 300,
    text: "COMMITS",
  },
  {
    number: 200,
    text: "PROJECTS",
  },
  {
    number: 55,
    text: "MENTORS",
  },
];

const JoinGrowingCommunity = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="flex flex-col gap-2">
        <p className="text-5xl font-bold text-[rgba(83,54,136,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
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
      <div className="flex h-[1300px] w-full max-w-[900px] flex-col justify-around text-7xl font-normal text-white">
        <div className="w-1/2 self-end">
          <div className="relative flex flex-col items-center">
            <div className="">
              {stats[0]!.number}
              <br />
              {stats[0]!.text}
            </div>
            <div className="relative">
              <div className="absolute -left-60 top-0">
                <Image
                  src="/join_growing_community/blue_dino_trail.png"
                  alt="Blue dino trail"
                  className="absolute bottom-[180px] right-[280px] -z-10 aspect-[1390/1161] max-h-none w-[1390px] max-w-none"
                  width={1390}
                  height={1161}
                />
                <Image
                  src="/join_growing_community/blue_dino_snowboard.png"
                  alt="Blue dino snowboarding"
                  className="relative z-10 aspect-square w-[350px] max-w-none"
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
              {stats[1]!.number}
              <br />
              {stats[1]!.text}
            </div>
            <div className="relative">
              <div className="absolute -left-48 top-32">
                <Image
                  src="/join_growing_community/yellow_dino_trail.png"
                  alt="Yellow dino trail"
                  className="absolute bottom-[130px] left-[220px] -z-10 aspect-[1023/504] max-h-none w-[1023px] max-w-none"
                  width={1023}
                  height={504}
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
              {stats[2]!.number}
              <br />
              {stats[2]!.text}
            </div>
            <div className="relative">
              <div className="absolute -left-32 top-16">
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
              {stats[3]!.number}
              <br />
              {stats[3]!.text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinGrowingCommunity;
