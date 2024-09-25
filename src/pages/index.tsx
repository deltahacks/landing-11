import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import JoinGrowingCommunity from "~/sections/JoinGrowingCommunity";

export default function Home() {
  return (
    <div className="relative">
      <main className="flex h-full w-full flex-col gap-24 overflow-hidden">
        <div className="my-32" />
        <JoinGrowingCommunity />
        <Sponsors />
        <FAQ />
        <Footer />
      </main>

      {/* 
        positioning & negative index:
        so that we can easily add background images that are on top of the background, but below any other elements like text
      */}
      <div className="absolute top-0 -z-20 h-full w-full bg-[#EFDDFE]" />
    </div>
  );
}
