import { Button } from "@/components/ui/button";
import { Linkedin, Slack, Twitter, X } from "lucide-react";
import { FlickeringGridDemo } from "./flickk";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-grow">
        <div className="overflow-hidden">
          <FlickeringGridDemo />
          <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center pb-9 z-10 relative">
              <div className="bg-gray-800 p-3 rounded-lg inline-block mb-6">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-sm font-medium text-gray-400 mb-4">See data differently</div>
              <h1 className="text-xl font-semibold text-white md:text-[2.488rem] mb-4">
                Ready to discover your next opportunity?
              </h1>
              <p className="text-base md:text-xl text-gray-400 mb-8">
                The best database of ec&apos;s and internship opportunities.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <Input placeholder='name@gmail.com' className='rounded-xl w-full md:w-[31.25rem]'/>
                <Button size="lg" className="bg-gray-800 text-white px-6 py-3 text-sm rounded-xl w-full md:w-auto">Join our Waitlist</Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex gap-3">
                <svg
                  className="w-8 h-8 text-white mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H21V21H3V3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 9H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 21V9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h1 className="mt-1 font-semibold text-white">neurios</h1>
              </div>

              <p className="text-sm text-gray-300">Crafted by students — For students.</p>
              <div className="flex space-x-4 mt-4">
                <Twitter className="w-5 h-5 text-gray-300" />
                <Linkedin className="w-5 h-5 text-gray-300" />
                <Slack className="w-5 h-5 text-gray-300" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-4">
                Features
              </h3>
              <ul className="space-y-2">
                {[
                  "EC Database",
                  "AI Resume Review",
                  "Accepted Students Apps",
                  "Cold Outreach",
                  "Templates",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-300 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-300 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;