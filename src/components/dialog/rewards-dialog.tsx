import { component$, useContext, useSignal } from "@builder.io/qwik";

import MoneyDialogImage from "../../../public/money-dialog.png";
import { DialogWrapper } from "./dialog-wrapper";
import { Button } from "../button/button";

import { CoinContext } from "~/context/coin-context";

const moneyPerks = [
  {
    name: "Daily Stipend",
    description: "Earn a small amount of money each day just for showing up.",
    coin: 10,
    claimed: false,
  },
  {
    name: "Bonus Collector",
    description: "Get extra coins when completing tasks or achievements.",
    coin: 15,
    claimed: false,
  },
  {
    name: "Interest Accrual",
    description:
      "Accumulate passive income based on your current coin balance.",
    coin: 5,
    claimed: false,
  },
  {
    name: "Double Earnings",
    description:
      "Temporarily doubles all coin rewards earned during activities.",
    coin: 20,
    claimed: false,
  },
  {
    name: "Treasure Hunt",
    description: "Chance to discover hidden money during random moments.",
    coin: 25,
    claimed: false,
  },
  {
    name: "Auto-Save",
    description:
      "Automatically sets aside a percentage of your coins for future use.",
    coin: 10,
    claimed: false,
  },
  {
    name: "Mystery Payout",
    description: "Occasionally receive surprise coin drops of varying amounts.",
    coin: 30,
    claimed: false,
  },
  {
    name: "Goal Bonus",
    description: "Earn a large payout for hitting personal milestones.",
    coin: 40,
    claimed: false,
  },
  {
    name: "Trade Exchange",
    description:
      "Convert other resources (like water or power) into money at set rates.",
    coin: 15,
    claimed: false,
  },
  {
    name: "Coin Multiplier",
    description: "Increases all coin gains by a flat percentage permanently.",
    coin: 50,
    claimed: false,
  },
];

interface RewardsDialogProps {
  activeDialog: any;
}

export const RewardsDialog = component$(
  ({ activeDialog }: RewardsDialogProps) => {
    const coinState = useContext(CoinContext);

    return (
      <DialogWrapper activeDialog={activeDialog}>
        <ul class="my-9 h-[50dvh] w-full space-y-3 overflow-y-auto">
          {moneyPerks.map((perk, index) => (
            <RewardsDialogItem
              key={perk.name}
              taskName={perk.name}
              imageUrl={MoneyDialogImage}
              taskDescription={perk.description}
              coin={perk.coin}
              coinState={coinState}
              claimed={perk.claimed}
              index={index}
            />
          ))}
        </ul>
      </DialogWrapper>
    );
  },
);
interface RewardsDialogItemProps {
  imageUrl: string;
  taskName: string;
  taskDescription: string;
  coin: number;
  coinState: {
    coin: number;
  };
  claimed: boolean;
  index: number;
}
const RewardsDialogItem = component$(
  ({
    imageUrl,
    taskName,
    taskDescription,
    coin,
    coinState,
    claimed,
    index,
  }: RewardsDialogItemProps) => {
    const claimedState = useSignal(false);

    return (
      <li class="mr-5 flex items-center gap-2 rounded-xl border border-green-500 p-2">
        <img
          src={imageUrl}
          alt="reward-dialog"
          width={300}
          height={300}
          class="h-[6rem] w-auto drop-shadow-md"
        />
        <div>
          <p class="font-bold"> {taskName} </p>
          <p class="text-sm"> {taskDescription} </p>

          {claimed === false && claimedState.value === false ? (
            <div class="mt-2 flex items-center gap-3">
              <p class="font-bold"> {coin} Coins </p>
              <Button
                variant="secondary"
                onClick$={() => {
                  coinState.coin += coin;
                  moneyPerks[index].claimed = true;
                  claimedState.value = true;
                }}
              >
                Claim
              </Button>
            </div>
          ) : (
            <p class="text-lg font-bold"> Claimed </p>
          )}
        </div>
      </li>
    );
  },
);
