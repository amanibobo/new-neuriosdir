import FlickeringGrid from "@/components/magicui/grid-flicker";

export function FlickeringGridDemo() {
  return (
    <div className="relative h-[100px] rounded-lg w-full ">
      <FlickeringGrid
        className="z-0 absolute inset-0 w-full rounded-lg"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={4000}
      />
    </div>
  );
}
