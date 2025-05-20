import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { LuArrowLeft } from "@qwikest/icons/lucide";
import { Button } from "~/components/button/button";

export const FocusRoomSidebar = component$(() => {
  const location = useLocation();
  const code = location.params.code;
  const roomName = location.params.roomName;

  return (
    <div class="h-full w-[25%] space-y-3 bg-[#297F01] p-[2rem]">
      <Link
        href="/app"
        class="flex w-fit items-center gap-2 border-b hover:opacity-50"
      >
        <LuArrowLeft />
        Go back to your plant
      </Link>

      <section class="flex w-full flex-col  justify-center space-y-3 rounded-xl border border-[#2d720d] bg-[#287D01] p-6 text-white shadow-lg">
        <p class="text-xl font-bold">Invite others</p>
        <p class="font-bold text-white">Room Code: {code}</p>
        <p class="text-white">Room Name: {roomName}</p>
      </section>

      <section class="flex w-full flex-col  justify-center space-y-3 rounded-xl border border-[#2d720d] bg-[#287D01] p-6 text-white shadow-lg">
        <p class="text-xl font-bold">Your group is exceptional! Reduced screen time by 30%</p>
        <div class='bg-green-500 rounded-xl p-2'>
        <p class='text-sm'> Top contributor: Manuel Batac </p>
        </div>
      </section>

           <section class="flex w-full flex-col  justify-center space-y-3 rounded-xl border border-[#2d720d] bg-[#287D01] p-6 text-white shadow-lg">
        <p class="text-xl font-bold">Settings</p>
        <Button variant="dark">
            Delete room
        </Button>
      </section>
    </div>
  );
});
