import { component$, useSignal } from "@builder.io/qwik";

import Coins from "../../../public/coins.png";
import Rewards from "../../../public/rewards.png";
import Water from "../../../public/water.png";
import Quests from "../../../public/quests.png";
import Calendar from "../../../public/calendar.png";
import Power from "../../../public/power.png";

import { RewardsDialog } from "~/components/dialog/rewards-dialog";
import { QuestsDialog } from "~/components/dialog/quests-dialog";
import { PowerDialog } from "~/components/dialog/power-dialog";
import { MoneyDialog } from "~/components/dialog/money-dialog";
import { CalendarDialog } from "~/components/dialog/calendar-dialog";

const items = [
  { text: "Money", imageUrl: Coins },
  { text: "Rewards", imageUrl: Rewards },
  { text: "Water", imageUrl: Water },
  { text: "Quests", imageUrl: Quests },
  { text: "Calendar", imageUrl: Calendar },
  { text: "Power", imageUrl: Power },
];

export const BottomBar = component$(() => {
  const activeDialog = useSignal<string | null>(null);

  return (
    <section class="absolute bottom-0 h-[10rem] w-full">
      <div class="flex h-full items-center justify-around px-[3rem]">
        {items.map((item) => (
          <BottomBarItem
            key={item.text}
            text={item.text}
            imageUrl={item.imageUrl}
            onClick$={() => {
              activeDialog.value =
                activeDialog.value === item.text ? null : item.text;
            }}
          />
        ))}
      </div>
      {activeDialog.value === "Rewards" && (
        <RewardsDialog activeDialog={activeDialog} />
      )}
      {activeDialog.value === "Quests" && (
        <QuestsDialog activeDialog={activeDialog} />
      )}
      {activeDialog.value === "Power" && (
        <PowerDialog activeDialog={activeDialog} />
      )}
      {activeDialog.value === "Money" && (
        <MoneyDialog activeDialog={activeDialog} />
      )}
      {activeDialog.value === "Calendar" && (
        <CalendarDialog activeDialog={activeDialog} />
      )}
    </section>
  );
});

interface BottomBarItemProps {
  text: string;
  imageUrl: string;
  onClick$: () => void;
}

const BottomBarItem = component$(
  ({ text, imageUrl, onClick$ }: BottomBarItemProps) => {
    return (
      <button
        // eslint-disable-next-line qwik/valid-lexical-scope
        onClick$={onClick$}
        class="flex flex-col items-center transition-transform hover:scale-110"
      >
        <img
          src={imageUrl}
          alt={text}
          width={300}
          height={300}
          class="h-20 w-auto drop-shadow-md"
        />
        <p class="font-bold text-white drop-shadow-sm">{text}</p>
      </button>
    );
  },
);

const styles = `
  @keyframes gameFadeIn {
    from { background-color: rgba(0, 0, 0, 0); }
    to { background-color: rgba(0, 0, 0, 0.5); }
  }
  @keyframes gameFadeOut {
    from { background-color: rgba(0, 0, 0, 0.5); }
    to { background-color: rgba(0, 0, 0, 0); }
  }
  @keyframes gamePopIn {
    0% { transform: translate(-50%, -50%) scale(0.5); filter: brightness(0.8); }
    60% { transform: translate(-50%, -50%) scale(1.05); filter: brightness(1.1); }
    100% { transform: translate(-50%, -50%) scale(1); filter: brightness(1); }
  }
  @keyframes gamePopOut {
    0% { transform: translate(-50%, -50%) scale(1); filter: brightness(1); }
    40% { transform: translate(-50%, -50%) scale(1.05); filter: brightness(1.1); }
    100% { transform: translate(-50%, -50%) scale(0.5); filter: brightness(0.8); }
  }
  .animate-gameFadeIn {
    animation: gameFadeIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  }
  .animate-gameFadeOut {
    animation: gameFadeOut 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  }
  .animate-gamePopIn {
    animation: gamePopIn 0.20s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  .animate-gamePopOut {
    animation: gamePopOut 0.20s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
`;

// Inject styles into the document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
