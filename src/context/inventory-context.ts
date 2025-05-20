import { createContextId } from '@builder.io/qwik';

export interface PowerItem {
  name: string;
  description: string;
  used: boolean;
}

export interface InventoryState {
  purchasedPowers: PowerItem[]; // Store objects with name, description, and used status
}

export const InventoryContext = createContextId<InventoryState>('global.inventory.context');