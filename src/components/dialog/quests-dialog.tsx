import { component$ } from "@builder.io/qwik";

import { DialogWrapper, DialogItem } from "./dialog-wrapper";
import QuestsDialogImage from "../../../public/quests-dialog.png";

interface QuestsDialogProps {
  activeDialog: any;
}

export const QuestsDialog = component$(
  ({ activeDialog }: QuestsDialogProps) => {
    return (
      <DialogWrapper activeDialog={activeDialog}>
        <ul class="my-9 h-[50dvh] w-full space-y-3 overflow-y-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <DialogItem
              key={index}
              taskName="Task Name"
              imageUrl={QuestsDialogImage}
              taskDescription="This is the task description."
            />
          ))}
        </ul>
      </DialogWrapper>
    );
  },
);
