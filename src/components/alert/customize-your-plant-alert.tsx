import { component$, useContext, useStore } from "@builder.io/qwik";
import { AlertWrapper, AlertWrapperTitle } from "./alert-wrapper";
import type { AlertWrapperProps } from "./alert-wrapper";

import Customize1 from "../../../public/customize1.png";
import Customize2 from "../../../public/customize2.png";
import { Button } from "../button/button";

import MoneyImageAlert from "../../../public/money-dialog.png";

import { CoinContext } from "~/context/coin-context";

const customizeItems = [
  {
    imageUrl: Customize1,
    text: "Customize 1",
    price: 40,
    bought: false,
  },
  {
    imageUrl: Customize2,
    text: "Customize 2",
    price: 40,
    bought: false,
  },
];

export const CustomizeYourPlantAlert = component$(
  ({ activeAlert }: AlertWrapperProps) => {
    const bought = useStore({ text: "", imageUrl: "" });
    const coinState = useContext(CoinContext);

    return (
      <AlertWrapper activeAlert={activeAlert} alertAdditionalClass="w-fit">
        <AlertWrapperTitle> Customize Your Plant </AlertWrapperTitle>
        <p> Collect coins to purchase customization. </p>

        {bought.text === "" && bought.imageUrl === "" ? (
          <ul class="mt-3 flex gap-3">
            {customizeItems.map((item, index) => (
              <CustomizeYourPlantAlertItem
                imageUrl={item.imageUrl}
                key={item.text}
                text={item.text}
                bought={bought}
                coinState={coinState}
                price={item.price}
                index={index}
              />
            ))}
          </ul>
        ) : (
          <section class="mt-3 flex flex-col items-center justify-center">
            <img
              src={bought.imageUrl}
              alt="image"
              width={100}
              height={100}
              class="h-auto w-[15rem] rounded-xl object-contain"
            />
            <p class="text-center font-bold"> {bought.text} </p>
            <p class="mt-3 text-3xl font-bold text-white">You Purchased!</p>
          </section>
        )}
      </AlertWrapper>
    );
  },
);

interface CustomizeYourPlantAlertItemProps {
  imageUrl: string;
  text: string;
  bought: {
    text: string;
    imageUrl: string;
  };
  coinState: {
    coin: number;
  };
  price: number;
  index: number;
}

const CustomizeYourPlantAlertItem = component$(
  ({
    imageUrl,
    text,
    bought,
    coinState,
    price,
    index,
  }: CustomizeYourPlantAlertItemProps) => {
    return (
      <li class="flex w-[16rem] flex-col items-center justify-center gap-3">
        <img
          src={imageUrl}
          alt="image"
          width={100}
          height={100}
          class="h-auto w-[15rem] rounded-xl object-contain"
        />
        <p class="font-bold"> {text} </p>
        <div class="flex items-center gap-[2rem]">
          <span class="flex items-center gap-2">
            <img
              src={MoneyImageAlert}
              alt="moneyimage"
              width={100}
              height={100}
              class="h-auto w-[3rem] object-contain"
            />
            <p class="text-lg font-bold text-white"> {price} </p>
          </span>

          {coinState.coin < price && customizeItems[index].bought === false ? (
            <p> Not enough coins </p>
          ) : customizeItems[index].bought === false ? (
            <Button
              onClick$={() => {
                bought.text = text;
                bought.imageUrl = imageUrl;
                if (coinState.coin >= price) {
                  coinState.coin -= price;
                  customizeItems[index].bought = true;
                }
              }}
            >
              Purchase
            </Button>
          ) : (
            <div>Already purchased</div>
          )}

          {/* {coinState.coin < price && <p> Not enough coins </p>}

          {customizeItems[index].bought === false ? (
            <Button
              onClick$={() => {
                bought.text = text;
                bought.imageUrl = imageUrl;
                if (coinState.coin >= price) {
                  coinState.coin -= price;
                  customizeItems[index].bought = true;
                }
              }}
            >
              Purchase
            </Button>
          ) : (
            <div>Already purchased</div>
          )} */}
        </div>
      </li>
    );
  },
);
