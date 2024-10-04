import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import JoinGrowingCommunity from "~/sections/JoinGrowingCommunity";
import Hero from "~/sections/Hero";
import localFont from "next/font/local";

const gochi = localFont({
  src: "../../public/fonts/gochi-hand-latin-400-normal.woff2",
  variable: "--font-gochi",
});

export default function Home() {
  return (
    <div className={`${gochi.variable} relative`}>
      <main className="flex h-full w-full flex-col gap-24 overflow-hidden">
        <Hero />
        <JoinGrowingCommunity />
        <Sponsors />
        <FAQ />
        <Footer />
      </main>

      {/* 
        positioning & negative index:
        so that we can easily add background images that are on top of the background, but below any other elements like text
      */}
      <div className="absolute top-0 -z-50 h-full w-full bg-[#EFDDFE]" />
    </div>
  );
}
