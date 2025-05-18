import { component$ } from "@builder.io/qwik";

import RewardsDialogImage from "../../../public/rewards-dialog.png";
import { DialogItem, DialogWrapper } from "./dialog-wrapper";

interface RewardsDialogProps {
  activeDialog: any;
}
export const RewardsDialog = component$(
  ({ activeDialog }: RewardsDialogProps) => {
    return (
      <DialogWrapper activeDialog={activeDialog}>
        <ul class="my-9 h-[50dvh] w-full space-y-3 overflow-y-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <DialogItem
              key={index}
              taskName="Task Name"
              imageUrl={RewardsDialogImage}
              taskDescription="This is the task description."
            />
          ))}
        </ul>
      </DialogWrapper>
    );
  },
);