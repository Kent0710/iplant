import { LuX } from "@qwikest/icons/lucide";

import { component$, Slot } from "@builder.io/qwik";

export interface AlertWrapperProps {
  activeAlert: any;
  alertAdditionalClass?: string;
}
export const AlertWrapper = component$(
  ({ activeAlert, alertAdditionalClass }: AlertWrapperProps) => {
    return (
      <div
        class="fixed inset-0 z-50 flex items-start justify-center bg-black/20 backdrop-blur-sm"
        onClick$={() => {
          activeAlert.value = null;
        }}
      >
        <div
          class={`animate-slideDown mt-4 ${alertAdditionalClass ? alertAdditionalClass : "w-[30rem] max-w-[30rem]"} rounded-b-lg bg-gradient-to-br from-green-600 to-teal-500 p-6 shadow-2xl`}
          onClick$={(event) => {
            event.stopPropagation(); // Prevent closing when clicking inside the alert
          }}
        >
          <div class="flex w-full justify-end">
            <button
              onClick$={() => (activeAlert.value = null)}
              class="hover:cursor-pointer hover:opacity-40"
            >
              <LuX />
            </button>
          </div>

          <div class="relative">
            <Slot />
          </div>
        </div>
      </div>
    );
  },
);

export const AlertWrapperTitle = component$(() => {
  return (
    <h2 class="text-xl font-bold">
      {" "}
      <Slot />{" "}
    </h2>
  );
});
