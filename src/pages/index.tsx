import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#EFDDFE]">
      <Navbar />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
