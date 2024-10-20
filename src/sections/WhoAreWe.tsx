import Image from "next/image";
import React from "react";
import Header from "~/components/Header";

const WhoAreWe = () => {
    return (
        <section className="relative mt-0 flex h-fit min-h-screen flex-col justify-start p-8">
            {/* Ski Lift Image 
            <div className="absolute -left-16 -top-30 -z-10 lg:-left-[-50px] lg:top-[45px]">

                <Image
                    src="/who_are_we/ski_lift.svg"
                    alt="Ski Lift"
                    className="relative top-[0px] left-[900px] max-w-none w-[388px] h-[437px]"
                    width={1818.5}
                    height={884}

                />
            </div>
            */}

            {/* Tree Section */}
            {/* Left light tree */}
            <div className="absolute -left-16 -top-30 -z-10 lg:-left-[210px] lg:top-[-150px]">
                <Image
                    src="/trees/tree_light.svg"
                    alt="Snowy tree"
                    className="relative h-[230px] w-[157px] max-w-none lg:h-[640px] lg:w-[489px]"
                    width={489}
                    height={630}
                />
            </div>
            {/* Left snowy dark tree */}
            <div className="absolute -left-[10px] top-[-50px] -z-20 lg:-left-[-10px] lg:top-[-280px]">
                <Image
                    src="/trees/snow_tree_dark.svg"
                    alt="Snowy tree"
                    className="relative h-[192px] w-[110px] max-w-none lg:h-[328px] lg:w-[229px]"
                    width={418}
                    height={724}
                />
            </div>
            {/* Right dark tree */}
            <div className="absolute -right-[50px] top-[-130px] -z-20 lg:-right-[100px] lg:top-[100px]">
                <Image
                    src="/trees/tree_dark.svg"
                    alt="Snowy tree"
                    className="relative h-[192px] w-[110px] max-w-none lg:h-[428px] lg:w-[259px]"
                    width={418}
                    height={724}
                />
            </div>
            {/* Right snowy dark tree */}
            <div className="absolute -right-[5px] top-[-90px] -z-20 lg:-right-[-10px] lg:top-[220px]">
                <Image
                    src="/trees/snow_tree_mid.svg"
                    alt="Snowy tree"
                    className="relative h-[192px] w-[110px] max-w-none lg:h-[428px] lg:w-[259px]"
                    width={418}
                    height={724}
                />
            </div>



            <div className="relative -z-30 pb-[30px] lg:ml-50 lg:mt-[-400px] ">
                {/* Title Section */}
                <h2 className="relative -z-30 mb-0 mt-60 lg:mt-0 lg:pl-[190px] text-center md:text-left lg:text-left font-display text-[48px] md:text-[96px] lg:text-[96px] font-black leading-none text-white drop-shadow-md">
                    <span className="drop-shadow-lg text-stroke-white">
                        WHO ARE WE?
                    </span>
                </h2>

                {/* Paragraph Section */}
                <div className="relative -z-30 max-w-3xl lg:pl-[220px] text-[14px] lg:text-[18px] font-display text-center md:text-left lg:text-left text-lg font-bold  leading-normal text-white p-7 " style={{ color: "#533688" }}>
                    <p>
                        DeltaHacks is the annual hackathon for change. Each year, we enable over 500 students from across North America, working hard over 36 hours, to bring their ideas to life and make a positive change in any field.
                    </p>
                    <p className="mt-4">
                        We work with McMaster University to bring in hackers of all levels, from the novice to the most experienced. Our team works diligently year round to provide a welcoming atmosphere to all of our participants.
                    </p>
                    <p className="mt-4">
                        We supply the food, venue, and workshops, making sure even the most seasoned veterans get the chance to have new experiences. Whether with a team or on your own, you'll get the platform to make your visions a reality.
                    </p>
                    <p className="mt-4">
                        Now in our 10th year running, DeltaHacks X is our biggest and best event yet. Unleash your creativity and make something great—we'll handle the rest!
                    </p>
                </div>
            </div>


            <div className="relative flex lg:pb-[500px]">
                {/* Divider Trail */}
                <div className="absolute -left-[300px] -top-[-300px] -z-30 scale-[0.4] lg:-left-50 lg:top-[900px] md:scale[1.5] lg:scale-[1.5] xl:-left-40">
                    <Image
                        src="/who_are_we/trail_divider.svg"
                        alt="Divider trail"
                        className="absolute bottom-[10px] left-[244px] lg:left-[-500px] lg:bottom-[-200px] aspect-[2207/1199] max-h-none w-[2107px] max-w-none"
                        width={1907}
                        height={1199}
                    />
                </div>
            </div>
        </section>

    );
};

export default WhoAreWe;
