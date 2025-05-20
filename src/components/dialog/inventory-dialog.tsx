import { component$, useContext } from "@builder.io/qwik";

import PowerDialogImage from "../../../public/power-dialog.png";

import { DialogWrapper } from "./dialog-wrapper";
import type  { InventoryState } from "~/context/inventory-context";
import {InventoryContext} from "~/context/inventory-context"
import { powers } from "./power-dialog";
import { Button } from "../button/button";

interface InventoryDialogProps {
  activeDialog: any;
}

export const InventoryDialog = component$(
  ({ activeDialog }: InventoryDialogProps) => {
    const inventoryState = useContext(InventoryContext);

    // Filter powers to only show purchased ones
    const purchasedPowerDetails = powers.filter((power) =>
      inventoryState.purchasedPowers.some((item) => item.name === power.name),
    );

    return (
      <DialogWrapper activeDialog={activeDialog}>
        <ul class="my-9 h-[50dvh] w-full space-y-3 overflow-y-auto">
          {purchasedPowerDetails.length > 0 ? (
            purchasedPowerDetails.map((power, index) => {
              const purchasedItem = inventoryState.purchasedPowers.find(
                (item) => item.name === power.name,
              );
              return (
                <InventoryDialogItem
                  key={power.name}
                  name={power.name}
                  description={power.description}
                  used={purchasedItem?.used || false}
                  index={index}
                  inventoryState={inventoryState}
                />
              );
            })
          ) : (
            <li class="text-center text-lg">No powers purchased yet.</li>
          )}
        </ul>
      </DialogWrapper>
    );
  },
);

interface InventoryDialogItemProps {
  name: string;
  description: string;
  used: boolean;
  index: number;
  inventoryState: InventoryState;
}

const InventoryDialogItem = component$(
  ({
    name,
    description,
    used,
    index,
    inventoryState,
  }: InventoryDialogItemProps) => {
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
          <Button
            variant="secondary"
            onClick$={() => {
              inventoryState.purchasedPowers[index].used = true;
            }}
          >
            {used ? "Activated" : "Active"}
          </Button>
        </div>
      </li>
    );
  },
);
