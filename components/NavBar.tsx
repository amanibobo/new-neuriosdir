import React from 'react'
import { Dropdown, Tabs, Tab, TriggerWrapper, Trigger } from './ui/drop-lukacho'
import { Button } from './ui/button'
import NavWidthWrapper from './NavWidthWrapper'

export const ExampleNav = () => {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-ful bg-white/75 backdrop-blur-lg transition-all">
    <NavWidthWrapper>
    <div className="flex w-full py-4  text-neutral-200 justify-between">
    <h1 className='py-2 text-black font-bold text-2xl'>neurios</h1>
    <div className='flex gap-5'>
      <div className=''>
      <Button variant={"link"} className='font-semibold text-sm'>
        About
      </Button>
      </div>

      <div>
        <Button size={"bobo"} className='mt-1 text-[0.875rem] leading-[1.05rem] rounded-lg bg-[#2B67F5] hover:bg-[#204baf] font-medium'> 
        Get Early Access
      </Button>
      </div>
      
      </div>
    </div>
    </NavWidthWrapper>
    </nav>
  )
}

