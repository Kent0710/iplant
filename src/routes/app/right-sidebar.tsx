import { component$  } from "@builder.io/qwik";

export const RightSidebar = component$(() => {
  return (
    <section class="relative flex w-1/5 flex-col items-end justify-between bg-[#297F01] p-5">
      <div class="space-y-3">
        <TimeTracker />
        <MilestoneTracker />
        <DailyFocusStreak />
      </div>
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

const MilestoneTracker = component$(() => {
  return (
    <section class="flex h-[13rem] w-full flex-col items-center justify-center space-y-3 rounded-xl border border-[#2d720d] bg-[#287D01] text-white shadow-lg">
      <p class="text-xl font-bold text-[#E4F49A]">Your Milestone</p>
      <p class="mb-3 text-center font-semibold">
        {" "}
        Unlock rare plant species.{" "}
      </p>
      <div class="w-3/4 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-sm">7 Days</span>
          <div class="h-2 w-3/4 rounded-full bg-[#2d720d]">
            <div class="h-2 w-[50%] rounded-full bg-[#E4F49A]"></div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm">14 Days</span>
          <div class="h-2 w-3/4 rounded-full bg-[#2d720d]">
            <div class="h-2 w-[25%] rounded-full bg-[#E4F49A]"></div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm">30 Days</span>
          <div class="h-2 w-3/4 rounded-full bg-[#2d720d]">
            <div class="h-2 w-[10%] rounded-full bg-[#E4F49A]"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

const DailyFocusStreak = component$(() => {
  return (
    <section class="flex w-full flex-col items-center justify-center space-y-3 rounded-xl border border-[#2d720d] bg-[#287D01] p-6 text-white shadow-lg">
      <p class="text-xl font-bold text-[#E4F49A]">Daily Focus Streak</p>
      <p class="mb-3 text-center font-semibold">
        Unlock special evolutions.
      </p>
      <div class="flex w-3/4 flex-col space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-sm">Current Streak: 5 Days</span>
          <div class="h-2 w-3/4 rounded-full bg-[#2d720d]">
            <div class="h-2 w-[50%] rounded-full bg-[#E4F49A]"></div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm">Next Evolution: 10 Days</span>
          <div class="h-2 w-3/4 rounded-full bg-[#2d720d]">
            <div class="h-2 w-[25%] rounded-full bg-[#E4F49A]"></div>
          </div>
        </div>
      </div>
    </section>
  );
});
