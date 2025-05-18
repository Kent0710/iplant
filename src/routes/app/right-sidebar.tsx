import { component$ } from "@builder.io/qwik";

import Settings from "../../../public/settings.png";

export const RightSidebar = component$(() => {
  return (
    <section class="w-1/5 bg-[#297F01] p-5 flex flex-col justify-between items-end">
      <TimeTracker />

      <img
        src={Settings}
        alt="img"
        width={300}
        height={300}
        class="h-10 w-auto"
      />
    </section>
  );
});

const TimeTracker = component$(() => {
  return (
    <section class="flex h-[13rem] w-full flex-col items-center justify-center space-y-3 rounded-xl border border-[#2d720d] bg-[#287D01] text-white shadow-lg">
      <small> You have not used the app for </small>
      <p class="text-4xl font-bold text-[#E4F49A]">
        {" "}
        12:00 Hours <br />
        50 minutes{" "}
      </p>
      <p class="text-center text-sm font-semibold">
        You have improved by 30% since last week. Congrats!
      </p>
    </section>
  );
});
