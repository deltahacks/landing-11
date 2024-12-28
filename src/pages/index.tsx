import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import Carousel from "~/sections/Carousel";
import JoinGrowingCommunity from "~/sections/JoinGrowingCommunity";
import Hero from "~/sections/Hero";
import Navbar from "~/components/Navbar";
import Newsletter from "~/sections/Newsletter";
import WhoAreWe from "~/sections/WhoAreWe";

const SnowEffect = () => {
  // Create 50 snowflakes
  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {[...Array<number>(50)].map((_, i) => {
        const size = Math.random() * 8 + 4;
        const blurDuration = Math.random() * 5 + 12;
        return (
          <div
            key={i}
            className="snowflake rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${blurDuration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative">
      <SnowEffect />
      <main className="flex h-full w-full flex-col gap-24 overflow-hidden">
        <div className="fixed z-50 box-content w-full">
          <Navbar />
        </div>
        <Hero />
        <WhoAreWe />
        <JoinGrowingCommunity />
        <Carousel />
        <Sponsors />
        <FAQ />
        <Newsletter />
        <Footer />
      </main>

      {/* 
        positioning & negative index:
        so that we can easily add background images that are on top of the background, but below any other elements like text
      */}
      <div className="absolute top-0 -z-50 h-full w-full bg-[#E1D1FC]" />
    </div>
  );
}
