import NavWidthWrapper from "@/components/NavWidthWrapper"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Plus } from "lucide-react"
  
  export default function FAQ() {
    return (
        <>
        <NavWidthWrapper>
    <div className="text-center mb-16">
            <h1 className="text-[2.488rem] font-semibold md:max-w-8xl">
            Some Frequently Asked Questions
            </h1>
    </div> 
      <Accordion type="single" collapsible className="md:px-28 px-7">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-between text-left items-center">
          What is Neurios?            
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="flex justify-between text-left items-center">
          How does the app work? Is it a search engine, a database, or something else?            
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="flex justify-between text-left items-center">
          Can I use the app to find opportunities that align with my interests, skills, and career goals?            
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="flex justify-between text-left items-center">
          Is the app free, or are there any costs or fees associated with using it?
        </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </NavWidthWrapper>

      <div className='pb-56'>
    </div>

      </>
    )
  }