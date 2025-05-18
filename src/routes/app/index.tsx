import { component$ } from "@builder.io/qwik";
import { LeftSidebar } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";
import { BottomBar } from "./bottom-bar";
import { TopBar } from "./top-bar";

export default component$(() => {
  return (
    <div class="flex-start flex h-[100dvh]">
      {/* left sidebar */}
      <LeftSidebar />

      {/* main app */}
      <section class="relative w-3/5 bg-[url('/plant-with-land.png')] bg-cover bg-top bg-no-repeat">
        {/* top bar  */}
        <TopBar />
        {/* bottom bar */}
        <BottomBar />
      </section>

      {/* right sidebar */}
      <RightSidebar />
    </div>
  );
});
