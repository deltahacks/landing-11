import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import Hero from "~/sections/Hero";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
