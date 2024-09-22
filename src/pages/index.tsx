import Sponsors from "~/sections/Sponsors";
import FAQ from "~/sections/FAQ";
import Footer from "~/sections/Footer";
import Hero from "~/sections/Hero";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <main className="w-full">
      <div className="absolute -z-10 w-full overflow-clip">
        <Image
          src={"/DH11_Header.svg"}
          alt={"Header Background Image"}
          width={1980}
          height={1080}
          className="relative w-full"
        />
        <div id="fire" className="absolute">
          <Image
            src={"/Fire animation.gif"}
            alt={"Fire Animation"}
            width={2000}
            height={2000}
            className="w-48"
          />
        </div>
      </div>
      <Script src="fireAnimation.js" />
      <Hero />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
