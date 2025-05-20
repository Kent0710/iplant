import { component$, useContext } from "@builder.io/qwik";

import PowerDialogImage from "../../../public/power-dialog.png";
import MoneyDialogImage from "../../../public/money-dialog.png";

import { DialogWrapper } from "./dialog-wrapper";
import { Button } from "../button/button";

import { CoinContext } from "~/context/coin-context";
import { InventoryContext } from "~/context/inventory-context";

export const powers = [
  {
    name: "Time Freeze",
    description:
      "Pause time for a few seconds to make strategic moves without pressure.",
    price: 40,
  },
  {
    name: "Energy Surge",
    description:
      "Boost your resource generation speed by 2x for a short duration.",
    price: 40,
  },
  {
    name: "Lucky Boost",
    description: "Temporarily increase your chances of getting rare rewards.",
    price: 40,
  },
  {
    name: "Focus Mode",
    description:
      "Eliminate distractions and double your progress for the next task.",
    price: 40,
  },
  {
    name: "Shield Aura",
    description:
      "Protect your current progress from being lost during unexpected failures.",
    price: 40,
  },
  {
    name: "Mega Quest Multiplier",
    description: "Complete one quest and get triple the rewards instantly.",
    price: 40,
  },
  {
    name: "Hydration Burst",
    description: "Instantly refill your water meter to full.",
    price: 40,
  },
  {
    name: "Calendar Warp",
    description:
      "Skip waiting time and instantly mark the next event as complete.",
    price: 40,
  },
  {
    name: "XP Overload",
    description: "Gain a huge burst of experience points to level up faster.",
    price: 40,
  },
  {
    name: "Power Sync",
    description:
      "Align all your bars (coins, water, quests, etc.) to optimal levels in one click.",
    price: 40,
  },
];

interface PowerDialogProps {
  activeDialog: any;
}

export const PowerDialog = component$(({ activeDialog }: PowerDialogProps) => {
  const coinState = useContext(CoinContext);
  const inventoryState = useContext(InventoryContext);

  return (
    <DialogWrapper activeDialog={activeDialog}>
      <ul class="my-9 h-[50dvh] w-full space-y-3 overflow-y-scroll">
        {powers.map((power) => (
          <PowerDialogItem
            key={power.name}
            name={power.name}
            description={power.description}
            coinState={coinState}
            inventoryState={inventoryState}
            price={power.price}
          />
        ))}
      </ul>
    </DialogWrapper>
  );
});

interface PowerDialogItemProps {
  name: string;
  description: string;
  coinState: {
    coin: number;
  };
  inventoryState: {
    purchasedPowers: { name: string; description: string; used: boolean }[];
  };
  price: number;
}

const PowerDialogItem = component$(
  ({ name, description, coinState, inventoryState, price }: PowerDialogItemProps) => {
    const isPurchased = inventoryState.purchasedPowers.some((item) => item.name === name);

    return (
      <li class="mr-5 flex items-center gap-2 rounded-xl border border-green-500 p-2">
        <img
          src={PowerDialogImage}
          alt="reward-dialog"
          width={300}
          height={300}
          class="h-[5rem] w-auto drop-shadow-md"
        />
        <div>
          <p class="font-bold"> {name} </p>
          <p class="text-sm"> {description} </p>

          <div class="flex justify-between items-center">
            <span class="flex items-center gap-2">
              <img
                src={MoneyDialogImage}
                alt="reward-dialog"
                width={300}
                height={300}
                class="h-[3rem] w-auto drop-shadow-md"
              />
              <p> {price} </p>
            </span>

            {!isPurchased ? (
              <Button
                variant="secondary"
                onClick$={() => {
                  if (coinState.coin >= price) {
                    inventoryState.purchasedPowers = [
                      ...inventoryState.purchasedPowers,
                      { name, description, used: false },
                    ];
                    coinState.coin -= price;
                  }
                }}
                disabled={coinState.coin < price}
              >
                {coinState.coin < price ? "Not enough coins" : "Purchase"}
              </Button>
            ) : (
              <p class="text-lg font-bold"> Purchased </p>
            )}
          </div>
        </div>
      </li>
    );
  }
);