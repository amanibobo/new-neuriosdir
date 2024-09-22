import NavWidthWrapper from "@/components/NavWidthWrapper";
import ReusableCard from "./testing";
import Placeholder from "@/public/exampleimgfr.svg";
import Image from "next/image";


const OurToolss = () => {
  return (
    <>
    <div className="py-28">
       
      </div>
      <NavWidthWrapper>
        <div className="text-center mb-16">
          <h1 className="text-[2.488rem] font-semibold ">
            Our tools are made to <span className="text-[#2B67F5]">tailor</span>{" "}
            your needs
          </h1>
        </div>

        <div className="md:grid-cols-2 grid gap-6">
          <ReusableCard title="AI Resume Review" description="Stay ahead of the curve by tracking critical events impacting your deals in real-time. Our system ensures you never miss a purchasing signal and helps you spot trends and pain points before your competitors." imageSrc={Placeholder} imageAlt="bruh"/>
          <ReusableCard title="Resume Tips & Templates" description="Stay ahead of the curve by tracking critical events impacting your deals in real-time. Our system ensures you never miss a purchasing signal and helps you spot trends and pain points before your competitors." imageSrc={Placeholder} imageAlt="bruh"/>
          <ReusableCard title="Acceptance Stories" description="Stay ahead of the curve by tracking critical events impacting your deals in real-time. Our system ensures you never miss a purchasing signal and helps you spot trends and pain points before your competitors." imageSrc={Placeholder} imageAlt="bruh"/>
          <ReusableCard title="Cold Outreach Tips & Templates" description="Stay ahead of the curve by tracking critical events impacting your deals in real-time. Our system ensures you never miss a purchasing signal and helps you spot trends and pain points before your competitors." imageSrc={Placeholder} imageAlt="bruh"/>
        </div>
        {/*<div className="mt-16 relative grid grid-cols-1 md:grid-cols-2 gap-y-8">
        <div className="">
            <div className="items-center justify-self-center p-3 bg-[#F4F4F4] rounded-[1.125rem] w-[500px] h-[280px]"></div>
            <h1 className="font-semibold text-base pt-5">AI Resume Review</h1> 
            <p className="font-medium">We use the newest Llama 3.1 model to review your resumes and grade it based on the pathway you want to take your career.</p>
        </div>
        <div className="">
            <div className="items-center justify-self-center p-3 bg-[#F4F4F4] rounded-[1.125rem] w-[500px] h-[280px]"></div>
            <h1 className="font-semibold text-base pt-5">Resume Tips & Templates</h1>
            <p className="font-medium">Neurios provides users with a comprehensive list of tips, tricks and other resumes that have been shown to work in different industries.</p>
        </div>
        <div className="">
            <div className="items-center justify-self-center p-3 bg-[#F4F4F4] rounded-[1.125rem] w-[500px] h-[280px]"></div>
            <h1 className="font-semibold text-base pt-5">Acceptance Stories</h1>
            <p className="font-medium">View other students college applications - from stats, to classes, to ecs and even essay topics and understand what it takes to get in.</p>
        </div>
        <div className="">
            <div className="items-center justify-self-center p-3 bg-[#F4F4F4] rounded-[1.125rem] w-[500px] h-[280px]"></div>
            <h1 className="font-semibold text-base pt-5">Cold Outreach Tips & Templates</h1>
            <p className="font-medium">Use our list of tips to maximize your chances of getting a research posititons and templates of past successful templates.</p>
        </div>
         
  </div>*/}
      </NavWidthWrapper>

      <div className="px-2.5 md:px-[5.5rem] py-28">
        <div className="border border-b"></div>
      </div>
    </>
  )
};

export default OurToolss;
