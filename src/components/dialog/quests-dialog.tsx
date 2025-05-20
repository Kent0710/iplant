import { component$, useSignal } from "@builder.io/qwik";

import { DialogWrapper, DialogItem } from "./dialog-wrapper";
import QuestsDialogImage from "../../../public/quests-dialog.png";
import { Button } from "../button/button";

const questsData = [
  {
    name: "First Steps",
    description: "Complete the tutorial to get started.",
    imageUrl: QuestsDialogImage,
    claimed : false,
  },
  {
    name: "Daily Challenge",
    description: "Finish today's quest to earn rewards.",
    imageUrl: QuestsDialogImage,
    claimed : false,
  },
  {
    name: "Explorer",
    description: "Discover 3 new areas on the map.",
    imageUrl: QuestsDialogImage,
    claimed : false,
  },
  {
    name: "Collector",
    description: "Gather 50 resources from the environment.",
    imageUrl: QuestsDialogImage,
    claimed : false,
  },
  {
    name: "Master",
    description: "Reach level 10 in any skill.",
    imageUrl: QuestsDialogImage,
    claimed : false,
  },
];

interface QuestsDialogProps {
  activeDialog: any;
}

export const QuestsDialog = component$(
  ({ activeDialog }: QuestsDialogProps) => {
    return (
      <DialogWrapper activeDialog={activeDialog}>
        <ul class="my-9 h-[50dvh] w-full space-y-3 overflow-y-auto">
          {questsData.map((quest, index) => (
            <QuestsDialogItem
              key={quest.name}
              name={quest.name}
              description={quest.description}
              claimed={quest.claimed}
              index={index}
            />
          ))}
        </ul>
      </DialogWrapper>
    );
  },
);

interface QuestsDialogItemProps {
  name : string;
  description : string;
  claimed : boolean;
  index : number;
}
const QuestsDialogItem = component$(({name, description, claimed, index} : QuestsDialogItemProps)=>{
  const claimedState = useSignal(false);

  return (
    <li class="mr-5 flex items-center gap-2 rounded-xl border border-green-500 p-2">
        <img
          src={QuestsDialogImage}
          alt="reward-dialog"
          width={300}
          height={300}
          class="h-[5rem] w-auto drop-shadow-md"
        />
        <div>
          <p class="font-bold"> {name} </p>
          <p class="text-sm"> {description} </p>

          {claimed === false && claimedState.value === false ? (
                <Button
                           variant="secondary"
                            onClick$={() => {
                              questsData[index].claimed = true
                              claimedState.value = true
                            }}
                        >
                            Start quest
                        </Button>
          ) : (
            <p class='font-bold text-lg'> Quest started </p>

          )}
        </div>
      </li>
  )
})
