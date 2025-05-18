import { component$, useSignal } from "@builder.io/qwik";

import GrowMode from "../../../public/grow-mode.png";
import DecayMode from "../../../public/decay-mode.png";
import PlantOfFriends from "../../../public/plant-of-friends.png";
import CustomizeYourPlant from "../../../public/customize-your-plant.png";
import { GrowModeAlert } from "~/components/alert/grow-mode-alert";
import { DecayModeAlert } from "~/components/alert/decay-mode-alert";
import { PlantOfFriendsAlert } from "~/components/alert/plant-of-friends-alert";

const items = [
  { text: "Grow Mode", imageUrl: GrowMode },
  { text: "Decay Mode", imageUrl: DecayMode },
  { text: "Plant of Friends", imageUrl: PlantOfFriends },
  { text: "Customize Your Plant", imageUrl: CustomizeYourPlant },
];

export const LeftSidebar = component$(() => {
  const activeAlert = useSignal<string | null>(null);
  const triggerAnimation = useSignal(0);

  return (
    <section class="flex w-1/5 justify-center bg-[#297F01]">
      <div class="flex flex-col justify-around py-[3rem]">
        {items.map((item) => (
          <LeftSidebarItem
            key={item.text}
            text={item.text}
            imageUrl={item.imageUrl}
            onClick$={() => {
              if (activeAlert.value === item.text) {
                activeAlert.value = null;
              } else {
                activeAlert.value = item.text;
                triggerAnimation.value += 1;
              }
            }}
          />
        ))}
      </div>
      {activeAlert.value === "Grow Mode" && (
        <GrowModeAlert activeAlert={activeAlert} />
      )}
      {activeAlert.value === "Decay Mode" && (
        <DecayModeAlert activeAlert={activeAlert} />
      )}
        {activeAlert.value === "Plant of Friends" && (
        <PlantOfFriendsAlert activeAlert={activeAlert} />
      )}
    </section>
  );
});

interface LeftSidebarItemProps {
  text: string;
  imageUrl: string;
  onClick$: () => void;
}

const LeftSidebarItem = component$(
  ({ text, imageUrl, onClick$ }: LeftSidebarItemProps) => {
    return (
      <button
        onClick$={onClick$}
        class="flex flex-col items-center text-neutral-800 transition-transform hover:scale-110"
      >
        <img
          src={imageUrl}
          alt={text}
          width={300}
          height={300}
          class="h-[7rem] w-auto drop-shadow-md"
        />
        <p class="font-bold drop-shadow-sm">{text}</p>
      </button>
    );
  },
);

const styles = `
  @keyframes slideDown {
    0% { transform: translateY(-100%); }
    60% { transform: translateY(5%); }
    100% { transform: translateY(0); }
  }
  @keyframes slideUp {
    0% { transform: translateY(0); }
    40% { transform: translateY(5%); }
    100% { transform: translateY(-100%); }
  }
  .animate-slideDown {
    animation: slideDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  .animate-slideUp {
    animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
`;

// Inject styles into the document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
