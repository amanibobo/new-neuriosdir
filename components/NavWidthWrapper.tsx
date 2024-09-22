import { cn } from "@/lib/utils";

interface NavWidthWrapperProps {
  children: React.ReactNode;
}

export default function NavWidthWrapper({ children }: NavWidthWrapperProps) {
  return (
    <div className={cn("mx-auto w-full max-w-screen px-2.5 md:px-[5.5rem]")}>
      {children}
    </div>
  );
}