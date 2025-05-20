import { component$, useSignal } from "@builder.io/qwik";
import { AlertWrapper, AlertWrapperTitle } from "./alert-wrapper";
import type { AlertWrapperProps } from "./alert-wrapper";
import { Button } from "../button/button";

type Entry = {
  text: string;
  date: string;
};

export const TimeCapsuleAlert = component$(({ activeAlert }: AlertWrapperProps) => {
  const entry = useSignal('');
  const pastEntries = useSignal<Entry[]>([]);
  const selectedEntry = useSignal<Entry | null>(null);

  return (
    <AlertWrapper activeAlert={activeAlert}>
      <AlertWrapperTitle> What's on your mind? </AlertWrapperTitle>
      <p> Share your thoughts and look back as your plant grow. </p>

      <textarea
        class="w-full h-[5rem] bg-white rounded-xl mt-3 max-h-[10rem] py-2 px-4"
        placeholder="Start typing here..."
        value={entry.value}
        onInput$={(e) => entry.value = (e.target as HTMLTextAreaElement).value}
      />

      <Button
        additionalClass="w-full mb-3"
        onClick$={() => {
          if (entry.value.trim()) {
            const newEntry = {
              text: entry.value.trim(),
              date: new Date().toLocaleString(),
            };
            pastEntries.value = [newEntry, ...pastEntries.value];
            entry.value = '';
            selectedEntry.value = null;
          }
        }}
      >
        Add new entry
      </Button>

      <section>
        <p class="text-lg font-bold text-center text-white"> Past Entries </p>
        {selectedEntry.value !== null ? (
          <div class="text-center mt-2">
            <li class="bg-green-500 text-white rounded-lg p-3 shadow inline-block w-full text-left">
              <p>{selectedEntry.value.text}</p>
              <p class="text-sm text-white/80 mt-1">{selectedEntry.value.date}</p>
            </li>
            <p 
              class="text-blue-300 underline mt-2 cursor-pointer"
              onClick$={() => selectedEntry.value = null}
            >
              Exit
            </p>
          </div>
        ) : (
          <ul class="space-y-2 mt-2 h-fit max-h-[23rem] overflow-y-auto">
            {pastEntries.value.map((entry, index) => (
              <li
                key={index}
                class="border border-green-800 hover:bg-green-100/50 hover:text-white text-black rounded-lg p-3 shadow cursor-pointer"
                onClick$={() => selectedEntry.value = entry}
              >
                <p>{entry.text}</p>
                <p class="text-sm text-black/50">{entry.date}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </AlertWrapper>
  );
});
