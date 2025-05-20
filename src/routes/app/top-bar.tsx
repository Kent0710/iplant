import { component$, useSignal, useContext } from "@builder.io/qwik";

import SettingsImage from "../../../public/settings.png";
import AudioBg from "../../../public/audio.mp4";

import { useVisibleTask$ } from "@builder.io/qwik";

import { PlantNameInput } from "~/components/input/input";
import CoinImage from "../../../public/money-dialog.png";

import { CoinContext } from "~/context/coin-context";

interface TopBarProps {
  username? : string;
}
export const TopBar = component$(({username}: TopBarProps) => {
  const coinState = useContext(CoinContext);

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
    <div class="flex items-center justify-between px-[5rem] pt-[2rem]">
      <section class="flex items-center gap-3">
        <img
          src={CoinImage}
          alt="img"
          width={300}
          height={300}
          class="h-[5rem] w-auto"
        />
        <p class="text-3xl font-bold"> {coinState.coin} </p>
      </section>
      <h4 class="text-2xl font-bold text-black"> {username ? username : 'Your Plant'} </h4>
      <section class="flex items-center gap-3">
        <PlantNameInput />
        <img
          src={SettingsImage}
          alt="settings"
          width={300}
          height={300}
          class="h-10 w-auto cursor-pointer"
          onClick$={() => (isPopupOpen.value = !isPopupOpen.value)}
        />

        {isPopupOpen.value && (
          <div class="absolute top-28 right-0 w-48 rounded-lg bg-white p-4 shadow-lg">
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
