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
    <section className="my-16 flex flex-col items-center gap-16 text-center">
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
      <div className="flex h-[1600px] w-full max-w-[1000px] flex-col justify-around text-8xl font-normal text-white">
        <div className="w-1/2 self-end">
          <div className="relative flex flex-col items-center">
            <div className="w-fit">
              {stats[0]!.number}
              <br />
              {stats[0]!.text}
            </div>
            <div className="relative">
              <div className="absolute -left-64 top-8">
                <Image
                  src="/join_growing_community/blue_dino_trail.png"
                  alt="Blue dino trail"
                  className="absolute bottom-[180px] right-[280px] -z-10 aspect-[1381/1152] max-h-none w-[1600px] max-w-none"
                  width={1381}
                  height={1152}
                />
                <Image
                  src="/join_growing_community/blue_dino_snowboard.png"
                  alt="Blue dino snowboarding"
                  className="relative z-10 aspect-square w-[350px] max-w-none"
                  width={350}
                  height={350}
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
              <div className="absolute -left-48 top-48">
                <Image
                  src="/join_growing_community/yellow_dino_trail.png"
                  alt="Yellow dino trail"
                  className="absolute bottom-[130px] left-[220px] -z-10 aspect-[1015/496] max-h-none w-[1600px] max-w-none"
                  width={1015}
                  height={496}
                />
                <Image
                  src="/join_growing_community/yellow_dino_sled.png"
                  alt="Yellow dino sledding"
                  className="relative z-10 aspect-square w-[350px] max-w-none"
                  width={350}
                  height={350}
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
                  className="relative z-10 aspect-square w-[350px] max-w-none"
                  width={350}
                  height={350}
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
