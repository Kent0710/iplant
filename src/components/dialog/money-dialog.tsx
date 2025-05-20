import { component$ } from "@builder.io/qwik";
import { DialogWrapper } from "./dialog-wrapper";
import RewardsDialogImage from "../../../public/rewards-dialog.png";

interface MoneyDialogProps {
  activeDialog: any;
}

interface AdItemProps {
  index: number;
}

const AdItem = component$(({ index }: AdItemProps) => {
  return (
    <li class="mr-5 flex items-center gap-2 rounded-xl border border-green-500 p-2">
      <div class="flex items-center gap-4">
        <img
          src={RewardsDialogImage}
          width={100}
          height={100}
          alt="Ad"
          class="h-12 w-auto shrink-0 rounded"
        />
        <div class="flex-1">
          <p class="font-medium">Watch Ad #{index + 1}</p>
          <p class="text-sm text-gray-500">Earn rewards by watching this ad.</p>
        </div>
        <button class="rounded bg-green-600 px-4 py-1 text-white hover:bg-green-700">
          Watch Ad
        </button>
      </div>
    </li>
  );
});

export const MoneyDialog = component$(({ activeDialog }: MoneyDialogProps) => {
  return (
    <DialogWrapper activeDialog={activeDialog}>
      <ul class="my-9 h-[50dvh] w-full space-y-3 overflow-y-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <AdItem key={index} index={index} />
        ))}
      </ul>
    </DialogWrapper>
  );
});
