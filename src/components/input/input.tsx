import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const PlantNameInput = component$(() => {
  const name = useSignal<string>('');
  const timeout = useSignal<NodeJS.Timeout | null>(null);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const stored = localStorage.getItem('plantName');
    if (stored) {
      name.value = stored;
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => name.value);
    if (timeout.value) clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
      localStorage.setItem('plantName', name.value);
    }, 500);
  });

  return (
    <input
      class="w-[13rem] rounded-full bg-white py-2 text-center text-sm focus:outline-none focus:border-none"
      placeholder="Your Plant's Name"
      value={name.value}
      onInput$={(e) => (name.value = (e.target as HTMLInputElement).value)}
      onBlur$={() => localStorage.setItem('plantName', name.value)}
    />
  );
});
