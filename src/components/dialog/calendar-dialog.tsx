import { component$ } from "@builder.io/qwik";

import { DialogWrapper } from "./dialog-wrapper";
import type { DialogWrapperProps } from "./dialog-wrapper";

import Day1 from "../../../public/day 1.png";
import Day2 from "../../../public/day 2.png";
import Day3 from "../../../public/day 3.png";
import Day4 from "../../../public/day 4.png";
import Day5 from "../../../public/day 5.png";
import Day6 from "../../../public/day 6.png";

const calendarDays = [
  {
    imageUrl: Day1,
    text: "Day 1",
  },
  {
    imageUrl: Day2,
    text: "Day 2",
  },
  {
    imageUrl: Day3,
    text: "Day 3",
  },
  {
    imageUrl: Day4,
    text: "Day 4",
  },
  {
    imageUrl: Day5,
    text: "Day 5",
  },
  {
    imageUrl: Day6,
    text: "Day 6",
  },
];

export const CalendarDialog = component$(
  ({ activeDialog }: DialogWrapperProps) => {
    return (
      <DialogWrapper activeDialog={activeDialog}>
        <div class="grid grid-cols-3 gap-4">
          {calendarDays.map((day, index) => (
            <CalendarDialogItem
              key={index}
              imageUrl={day.imageUrl}
              text={day.text}
            />
          ))}
        </div>
      </DialogWrapper>
    );
  },
);

export const CalendarDialogItem = component$(
  ({ imageUrl, text }: { imageUrl: string; text: string }) => {
    return (
      <div class="flex flex-col items-center">
        <img
          src={imageUrl}
          alt={text}
          class="h-24 w-24 object-cover"
          width={100}
          height={100}
        />
        <p class="mt-2 text-sm">{text}</p>
      </div>
    );
  },
);
