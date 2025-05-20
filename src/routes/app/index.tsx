import {
  component$,
  useContext,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { LeftSidebar } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";
import { BottomBar } from "./bottom-bar";
import { TopBar } from "./top-bar";

import { TimePassedContext } from "~/context/time-passed.context";

const availableImages = [
  "/plant-sad.png",
  "/plant-happy2.png",
  "/plant-night.png",
  "/plant-noon.png",
];

export default component$(() => {
  const timePassedState = useContext(TimePassedContext);
  const bgImage = useSignal('');

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => timePassedState.timePassed); 
    const timePassedValue = timePassedState.timePassed;

    if (timePassedValue > 5) {
      bgImage.value = availableImages[2];
    } else if (timePassedValue > 10) {
      bgImage.value = availableImages[1];
    } else if (timePassedValue > 15) {
      bgImage.value = availableImages[2];
    } else {
      bgImage.value = '/plant-happy2.png';
    }
  });

  return (
    <div class="flex-start flex h-[100dvh]">
      <LeftSidebar />
      <section
        class={`relative w-3/5 bg-[url('${bgImage.value}')] cursor-pointer bg-cover bg-top bg-no-repeat`}
        onClick$={() => {
          const audio = new Audio("/plantsfx.mp3");
          audio.play();
        }}
      >
        <TopBar />
        <BottomBar />
      </section>
      <RightSidebar />
    </div>
  );
});
