import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import Hero from "~/sections/Hero";

export default function Home() {
  return (
    <main className="bg-[#EFDDFE] bg-[url('/DH11_Header.svg')] bg-contain bg-no-repeat">
      <Hero />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
