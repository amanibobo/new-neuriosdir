import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ReusableCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ReusableCard({ title, description, imageSrc, imageAlt }: ReusableCardProps) {
  return (
    <div className="rounded-xl bg-[#F7F7F8]">
      <div className="p-5 pt-5 rounded-xl bg-[#F7F7F8] border border-[#000000]/10">
        <div className="rounded-xl bg-[#FFFFFF] border border-[#000000]/10 overflow-hidden h-[34.375rem] ">
          <Image src={imageSrc} width={464} height={200} alt={imageAlt} className=""/>
        </div>
        <div className="mt-5 pb-4">
          <h1 className="font-semibold text-lg">{title}</h1>
          <p className="font-medium text-base text-[#272C30] mt-2">{description}</p>
        </div>
      </div>
    </div>
  )
}