"use client"
import NavWidthWrapper from '@/components/NavWidthWrapper'
import Image from 'next/image'
import { useState } from 'react'
import Placeholder from "@/public/O1zTTlGI4foOfSbGkHZAiAWI.png";

export default function UseCasess() {
  const [selectedUseCase, setSelectedUseCase] = useState('Real Student Success Stories')

  const useCases = [
    {
      title: 'Real Student Success Stories',
      description: 'Explore college applications from talented students across the world, from top state schools to Ivy leagues.'
    },
    {
      title: 'Unlimited Possibilities',
      description: 'Explore our vast database of over 100+ new opportunities that align with your interests and goals.'
    },
    {
      title: 'Find Your Ideal Program',
      description: 'Search through our database to find the best program that aligns with your interests and goals.'
    }
  ]

  return (
    <NavWidthWrapper>
    <div className="min-h-screen bg-white py-4 md:py-8">
      <main className="mx-auto md:space-y-8">
        <div className=" space-y-6">
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Use cases
          </div>
          <h1 className="text-[2.488rem] font-semibold max-w-4xl">Use Neurios for</h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className={`block w-full p-4 rounded-lg transition ${
                  selectedUseCase === useCase.title
                    ? 'bg-blue-50 text-blue-700'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedUseCase(useCase.title)}
              >
                <h2 className="font-semibold text-xl cursor-pointer">{useCase.title}</h2>
                <p className="mt-2 text-lg text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mt-8 md:mt-0">
          <div className="bg-blue-700 p-8 rounded-lg">
            <Image
              src={Placeholder}
              alt="Neurios Dashboard"
              width={1200}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
    </NavWidthWrapper>
  )
}