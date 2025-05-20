import {
  component$,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import type {  InventoryState } from "~/context/inventory-context";
import { InventoryContext } from "~/context/inventory-context";

export const InventoryProvider = component$(() => {
  const inventoryState = useStore<InventoryState>({
    purchasedPowers: [], // Initialize empty array for purchased powers
  });

  useContextProvider(InventoryContext, inventoryState);

  return <Slot />;
});