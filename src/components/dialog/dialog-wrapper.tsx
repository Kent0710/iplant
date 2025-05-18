import { component$, Slot } from "@builder.io/qwik";

export interface DialogWrapperProps {
  activeDialog: any;
}
export const DialogWrapper = component$(
  ({ activeDialog }: DialogWrapperProps) => {
    return (
      <div
        class="fixed inset-0 z-50 flex items-start justify-center bg-black/20 backdrop-blur-sm"
        onClick$={() => {
          activeDialog.value = null;
        }}
      >
        <div
          class="animate-gamePopIn fixed top-1/2 left-1/2 z-50 w-[30rem] max-w-[30rem] rounded-lg bg-cover bg-center object-cover p-6 text-green-800 shadow-2xl"
          style={{
            backgroundImage: "url('../../../public/landscape.png')",
          }}
        >
          <h2 class="text-xl font-bold">{activeDialog.value}</h2>
          <p>Complete tasks to earn rewards.</p>

          <Slot />

          <button
            onClick$={() => (activeDialog.value = null)}
            class="mt-4 w-full rounded-lg bg-yellow-400 py-2 font-semibold text-gray-900 transition-colors hover:bg-yellow-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  },
);

interface DialogItemProps {
  taskName: string;
  taskDescription: string;
  imageUrl: string;
}
export const DialogItem = component$(
  ({ taskName, taskDescription, imageUrl }: DialogItemProps) => {
    return (
      <li class="mr-5 flex items-center gap-2 rounded-xl border border-green-500 p-2">
        <img
          src={imageUrl}
          alt="reward-dialog"
          width={300}
          height={300}
          class="h-[5rem] w-auto drop-shadow-md"
        />
        <div>
          <p class="font-bold"> {taskName} </p>
          <p class="text-sm"> {taskDescription} </p>
        </div>
      </li>
    );
  },
);
