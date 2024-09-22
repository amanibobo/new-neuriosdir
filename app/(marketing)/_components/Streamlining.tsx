import NavWidthWrapper from "@/components/NavWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/public/image 21.png";

const WhyNeurios = () => {
  return (
    <>
      <div className="pb-28">
        <NavWidthWrapper>
          <div className="grid gap-8">
          <p className="text-[#666666] text-sm max-w-lg">Connections</p>
            <h1 className="text-[2.488rem] font-semibold max-w-4xl">
              Streamlining Your Path to Success
            </h1>
            <p className="text-lg">
              Neurios simplifies the search for Extracurriculars & Internships
              with our comprehensive database of over 300+ opportunities, you
              can get personalized guidance every step of the way, from
              application to acceptance.{" "}
            </p>
            <div className="not-prose flex items-center gap-2">
             
            </div>
            <div className='items-center justify-self-center  p-3 bg-[#ECECEC] rounded-[1.125rem]'>
            <Image src={Placeholder} width={1200} height={400} alt="wow" />
            </div>
          </div>
          
        </NavWidthWrapper>
       
      </div>
    </>
  );
};

export default WhyNeurios;
