import { component$ } from "@builder.io/qwik";
import { LeftSidebar } from "~/routes/app/left-sidebar";
import { RightSidebar } from "~/routes/app/right-sidebar";
import { BottomBar } from "~/routes/app/bottom-bar";
import { TopBar } from "~/routes/app/top-bar";

import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const username = location.params.plantCode;

  return (
    <div class="flex-start flex h-[100dvh]">
      {/* left sidebar */}
      <LeftSidebar />

      {/* main app */}
      <section class="relative w-3/5 bg-[url('/plant-happy2.png')] bg-cover bg-top bg-no-repeat">
        {/* top bar  */}
        <TopBar username={username} />
        {/* bottom bar */}
        <BottomBar />
      </section>

      {/* right sidebar */}
      <RightSidebar username={username} />
    </div>
  );
});
