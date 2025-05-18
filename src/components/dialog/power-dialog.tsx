import { component$ } from "@builder.io/qwik";

import PowerDialogImage from "../../../public/power-dialog.png";
import { DialogWrapper, DialogItem } from "./dialog-wrapper";

const powers = [
  {
    name: "Time Freeze",
    description:
      "Pause time for a few seconds to make strategic moves without pressure.",
  },
  {
    name: "Energy Surge",
    description:
      "Boost your resource generation speed by 2x for a short duration.",
  },
  {
    name: "Lucky Boost",
    description: "Temporarily increase your chances of getting rare rewards.",
  },
  {
    name: "Focus Mode",
    description:
      "Eliminate distractions and double your progress for the next task.",
  },
  {
    name: "Shield Aura",
    description:
      "Protect your current progress from being lost during unexpected failures.",
  },
  {
    name: "Mega Quest Multiplier",
    description: "Complete one quest and get triple the rewards instantly.",
  },
  {
    name: "Hydration Burst",
    description: "Instantly refill your water meter to full.",
  },
  {
    name: "Calendar Warp",
    description:
      "Skip waiting time and instantly mark the next event as complete.",
  },
  {
    name: "XP Overload",
    description: "Gain a huge burst of experience points to level up faster.",
  },
  {
    name: "Power Sync",
    description:
      "Align all your bars (coins, water, quests, etc.) to optimal levels in one click.",
  },
];

interface PowerDialogProps {
  activeDialog: any;
}

export const PowerDialog = component$(({ activeDialog }: PowerDialogProps) => {
  return (
    <DialogWrapper activeDialog={activeDialog}>
      <ul class="my-9 h-[50dvh] w-full space-y-3 overflow-y-auto">
        {powers.map((power) => (
          <DialogItem
            key={power.name}
            taskName={power.name}
            imageUrl={PowerDialogImage}
            taskDescription={power.description}
          />
        ))}
      </ul>
    </DialogWrapper>
  );
});
