import { component$, useSignal } from "@builder.io/qwik";

import PlantOfFriends from "../../../public/plantoffriends.png";
import CustomizeYourPlant from "../../../public/customizeyourplant.png";
import TimeCapsule from "../../../public/time-capsule.png";
import FocusRoom from "../../../public/focus-room.png";

import { CustomizeYourPlantAlert } from "~/components/alert/customize-your-plant-alert";

import { PlantOfFriendsAlert } from "~/components/alert/plant-of-friends-alert";
import { TimeCapsuleAlert } from "~/components/alert/time-capsule-alert";
import { FocusRoomAlert } from "~/components/alert/focus-room-alert";
import { Link } from "@builder.io/qwik-city";

const items = [
  { text: "Time Capsule", imageUrl: TimeCapsule },
  { text: "Plant of Friends", imageUrl: PlantOfFriends },
  { text: "Focus Room", imageUrl: FocusRoom },
  { text: "Customize Your Plant", imageUrl: CustomizeYourPlant },
];

export const LeftSidebar = component$(() => {
  const activeAlert = useSignal<string | null>(null);
  const triggerAnimation = useSignal(0);

  return (
    <section class="flex w-1/5 justify-center bg-[#297F01]">
      <div class="flex flex-col justify-around py-[1rem]">
        <Link href="/app">Go back to your plant</Link>
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
      {activeAlert.value === "Time Capsule" && (
        <TimeCapsuleAlert activeAlert={activeAlert} />
      )}
      {activeAlert.value === "Focus Room" && (
        <FocusRoomAlert activeAlert={activeAlert} />
      )}
      {activeAlert.value === "Plant of Friends" && (
        <PlantOfFriendsAlert activeAlert={activeAlert} />
      )}
      {activeAlert.value === "Customize Your Plant" && (
        <CustomizeYourPlantAlert activeAlert={activeAlert} />
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
        // eslint-disable-next-line qwik/valid-lexical-scope
        onClick$={onClick$}
        class="flex flex-col items-center rounded-xl bg-[#A9C353] p-2 text-neutral-800 shadow-xl transition-transform hover:scale-110 hover:shadow-md hover:shadow-[#A9C353]"
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
