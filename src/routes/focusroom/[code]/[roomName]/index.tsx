import { component$, useSignal } from "@builder.io/qwik";
import PlantHappySquare from "../../../../../public/plant-happy-square.png";
import { FocusRoomSidebar } from "./focus-room-sidebar";

import { FocusRoomBottomBar } from "./focus-room-bottom-bar";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const dummyPlants = useSignal(
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      name: `Plant ${i + 1}`,
      username: `user${i + 1}`,
      img: PlantHappySquare,
    })),
  );

  return (
    <div
      class="flex h-[100dvh]"
      style={{
        backgroundImage: "url('/landscape.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <FocusRoomSidebar />

      <section class="flex h-[100%] w-full flex-col items-center justify-around">
        <p class="text-3xl font-bold"> Group Plants </p>
        <ul class="mx-auto grid max-w-[50rem] grid-flow-row auto-rows-auto grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-8">
          {dummyPlants.value.map((plant) => (
            <Link key={plant.id} href={`/plant/${plant.name}`}>
            <li  class="w-full">
              <p class="text-center text-xl font-bold">{plant.name}</p>
              <p class="text-center text-sm text-gray-500">@{plant.username}</p>
              <img
                src={plant.img}
                alt={`plant-${plant.id}`}
                width={100}
                height={100}
                class="h-auto w-full rounded-xl object-contain"
              />
            </li>
                </Link>
          ))}
        </ul>

        <FocusRoomBottomBar />
      </section>
    </div>
  );
});
