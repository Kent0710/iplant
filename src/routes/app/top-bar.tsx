import { component$, useSignal } from "@builder.io/qwik";
import Health from "../../../public/health.png";

import SettingsImage from "../../../public/settings.png";
import AudioBg from "../../../public/audio.mp4";

import { useVisibleTask$ } from "@builder.io/qwik";

export const TopBar = component$(() => {
  const isPopupOpen = useSignal(false);
  const audioRef = useSignal<HTMLAudioElement | null>(null);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const audio = new Audio(AudioBg);
    audio.volume = 0.5;
    audioRef.value = audio;
    audio.play().catch((err) => {
      console.warn("Autoplay blocked by browser:", err);
    });

    return () => {
      audio.pause();
      audioRef.value = null;
    };
  });

  return (
    <div class="flex items-center justify-between px-[5rem]">
      <img
        src={Health}
        alt="img"
        width={300}
        height={300}
        class="h-[10rem] w-auto"
      />
      <section class='flex items-center gap-3'>
          <input
            class="w-[13rem] rounded-full bg-white py-2 text-center text-sm"
            placeholder="Your Plant's Name"
          />
          <img
            src={SettingsImage}
            alt="settings"
            width={300}
            height={300}
            class="h-10 w-auto cursor-pointer"
            onClick$={() => (isPopupOpen.value = !isPopupOpen.value)}
          />

          {isPopupOpen.value && (
            <div class="absolute right-0 top-28 w-48 rounded-lg bg-white p-4 shadow-lg">
              <h2 class="mb-2 text-lg font-semibold">Settings</h2>
              <p class="text-sm">Adjust your preferences.</p>
              <div class="mt-2 space-y-2">
                <button
                  class="w-full rounded bg-[#297F01] px-3 py-1 text-sm text-white hover:bg-[#1f5c01]"
                  onClick$={() => {
                    if (audioRef.value) {
                      audioRef.value.pause();
                    }
                  }}
                >
                  Stop Music
                </button>
                <button
                  class="w-full rounded bg-[#297F01] px-3 py-1 text-sm text-white hover:bg-[#1f5c01]"
                  onClick$={() => {
                    if (audioRef.value) {
                      audioRef.value.play();
                    }
                  }}
                >
                  Play Music
                </button>
                <button
                  class="w-full rounded bg-[#297F01] px-3 py-1 text-sm text-white hover:bg-[#1f5c01]"
                  onClick$={() => (isPopupOpen.value = false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
      </section>
    </div>
  );
});
