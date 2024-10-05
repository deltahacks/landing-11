import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import Hero from "~/sections/Hero";
import WhoAreWe from "~/sections/WhoAreWe";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Sponsors />
      <FAQ />
      <Footer />
      <WhoAreWe />
    </main>
  );
}
