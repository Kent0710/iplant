import {
  component$,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { CoinContext } from "~/context/coin-context";

export const CoinProvider = component$(() => {
  const coinState = useStore({ coin: 0 });

  useContextProvider(CoinContext, coinState);

  return <Slot />;
});
