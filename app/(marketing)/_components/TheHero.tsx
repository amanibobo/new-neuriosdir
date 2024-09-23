import Image from 'next/image'
import { Button } from "@/components/ui/button"
import NavWidthWrapper from '@/components/NavWidthWrapper'
import Placeholder from "@/public/O1zTTlGI4foOfSbGkHZAiAWI.png";
import Placeholder2 from "@/public/image28.svg";
import Placeholder3 from "@/public/image29.svg";
import { Input } from '@/components/ui/input';
import { GridBeam } from '@/components/ui/grid-beam';
import { AvatarCirclesDemo } from './aver';


export default function ComponentHed() {
  return (
    <>
    <div className="min-h-screen bg-white pt-14 pb-28 ">
      <NavWidthWrapper>
        <div className=''>
          <div className="inline-flex items-center bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full mb-6">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span className='font-semibold'>Get Early Access&nbsp;</span> - Join the Waitlist!
          </div>
          <h1 className="text-[4rem] font-semibold leading-[4rem] tracking-[-1.8px] mb-6">
          Elevate Your High<br/>School Experience.
          </h1>
          <p className="text-lg font-medium mb-8 max-w-2xl">
          Unlock your high school potential with our vast amount of exclusive opportunities and resources.

          </p>
          <div className="flex items-center space-x-4">
            <Button size="lg" className="bg-[#2B67F5] hover:bg-[#234fb6] text-white px-6 py-3 text-sm rounded-xl">Join our Waitlist</Button>
            <Input placeholder='name@gmail.com' className='rounded-xl w-[500px]'/>
          </div>
        </div>

        <div className="mt-12 flex gap-20 items-center">
          <Image src={Placeholder2} alt="buildspace" width={120} height={30} />
          <AvatarCirclesDemo />
        </div>

        <div className="mt-16 relative">
          <div className='items-center justify-self-center  p-3 bg-[#ECECEC] rounded-[1.125rem] border border-[#000000]/10'>
          <Image src={Placeholder} alt="neurios interface" width={1000} height={200} className="w-full rounded-lg " />
          </div>
        </div>
        </NavWidthWrapper>
    </div>

    <div className='px-2.5 md:px-[5.5rem] pb-28'>
    <div className='border border-b'></div>
    </div>

    </>
    
 
  )
}