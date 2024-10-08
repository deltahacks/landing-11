import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import JoinGrowingCommunity from "~/sections/JoinGrowingCommunity";
import Hero from "~/sections/Hero";
import Navbar from "~/components/Navbar";
import Newsletter from "~/sections/Newsletter";

export default function Home() {
  return (
    <div className="relative">
      <main className="flex h-full w-full flex-col gap-24 overflow-hidden">
        <div className="fixed z-50 box-content w-full">
          <Navbar />
        </div>
        <Hero />
        <JoinGrowingCommunity />
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
