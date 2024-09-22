import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export async function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex pt-56 pb-5 items-center ">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            Use Cases
        </AnimatedShinyText>
      </div>
    </div>
  );
}
