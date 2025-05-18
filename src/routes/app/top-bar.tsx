import { component$ } from "@builder.io/qwik";
import Health from "../../../public/health.png";

export const TopBar = component$(() => {
  return (
    <div class='px-[5rem] flex justify-between items-center'>
      <img
        src={Health}
        alt="img"
        width={300}
        height={300}
        class="h-[10rem] w-auto"
      />
      <input 
        class='w-[13rem] py-2 text-sm bg-white rounded-full text-center'
        placeholder="Your Plant's Name"
      />
    </div>
  );
});
