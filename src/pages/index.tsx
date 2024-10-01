import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import Hero from "~/sections/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
