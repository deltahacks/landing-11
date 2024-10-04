import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import Hero from "~/sections/Hero";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <main className="w-full">
      <div className="fixed z-50 box-content w-full">
        <Navbar />
      </div>
      <Hero />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
