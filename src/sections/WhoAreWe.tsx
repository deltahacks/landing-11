import React from "react";

const WhoAreWe = () => {
    return (
        <div className="container mx-auto flex h-fit min-h-screen flex-col justify-start p-6">
            <h2 className="mb-10 text-left font-montserrat text-[96px] font-black leading-none text-white drop-shadow-md lg:text-[96px]">
                <span className="drop-shadow-lg text-stroke-white">
                    WHO ARE WE?
                </span>
            </h2>


            <div className="max-w-3xl text-left text-lg font-bold leading-relaxed text-white p-6" style={{ color: "#533688" }}>
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
    );
};

export default WhoAreWe;
