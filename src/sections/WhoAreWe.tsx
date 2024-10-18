import Image from "next/image";
import React from "react";
import Header from "~/components/Header";

const WhoAreWe = () => {
    return (
        <section className="relative mt-0 container mx-auto flex h-fit min-h-screen flex-col justify-start p-6">
            {/* Ski Lift Image */}
            <div className="absolute w-full h-[200px]">

                <Image
                    src="/who_are_we/ski_lift.svg"
                    alt="Ski Lift"
                    className="absolute top-[0px] left-[900px] w-[818.5px] h-[534px] lg:order-2 order-1"
                    width={1818.5}
                    height={884}

                />
            </div>
            {/* Title Section */}
            <h2 className="relative z-10 mb-0 text-center lg:text-left font-montserrat text-[48px] md:text-[96px] lg:text-[126px] font-black leading-none text-white drop-shadow-md">
                <span className="drop-shadow-lg text-stroke-white">
                    WHO ARE WE?
                </span>
            </h2>

            {/* Paragraph Section */}
            <div className="relative z-10 max-w-2xl text-center lg:text-left text-lg font-bold leading-relaxed text-white p-6" style={{ color: "#533688" }}>
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
        </section>
    );
};

export default WhoAreWe;
