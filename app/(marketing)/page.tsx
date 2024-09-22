import Image from "next/image";
import WhyNeurios from "./_components/Streamlining";
import FAQ from "./_components/faq";
import Footer from "./_components/footer";
import { ExampleNav } from "@/components/NavBar";
import UseCasess from "./_components/UseCasess";
import ComponentHed from "./_components/TheHero";
import OurToolss from "./_components/OurTools";
import { FlickeringGridDemo } from "./_components/flickk";

export default function MarketingPage() {
  return (
    <>
      <ExampleNav />
      <ComponentHed />
      <WhyNeurios />
      <UseCasess />
      <OurToolss />
      <FAQ />
      <Footer />
      {/*it should have 8 sections*/}
    </>
  );
}
