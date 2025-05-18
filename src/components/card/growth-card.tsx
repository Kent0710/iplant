import { component$ } from "@builder.io/qwik";

interface GrowthCardProps {
  title: string;
  imageUrl: string;
}

export const GrowthCard = component$(({ title, imageUrl }: GrowthCardProps) => {
  return (
    <div
      class="relative h-[25rem] w-[20rem] overflow-hidden rounded-[2.5rem] bg-cover bg-center pt-12 text-white"
      style={{
        backgroundImage: `url(${imageUrl})`,
        boxShadow: "0px 0px 10px rgba(40, 125, 1, 0.3)",
      }}
    >
      <div class="absolute bottom-4 left-1/2 flex h-[4rem] w-[90%] -translate-x-1/2 transform items-center justify-center rounded-full bg-[#287D01]/50">
        <h4 class="font-semibold">{title}</h4>
      </div>
    </div>
  );
});
