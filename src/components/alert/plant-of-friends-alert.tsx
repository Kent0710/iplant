import { component$, useSignal, useComputed$ } from "@builder.io/qwik";

import { AlertWrapper, AlertWrapperTitle } from "./alert-wrapper";
import type { AlertWrapperProps } from "./alert-wrapper";

import { LuSearch } from "@qwikest/icons/lucide";

const dummyUsers = [
  { username: "sunflower_joy" },
  { username: "greenThumb123" },
  { username: "plantParent" },
  { username: "cactusQueen" },
  { username: "fernando_plants" },
  { username: "leafyLove" },
  { username: "growWithMe" },
  { username: "mossBoss" },
  { username: "wateringBuddy" },
  { username: "floraFriend" },
];

export const PlantOfFriendsAlert = component$(
  ({ activeAlert }: AlertWrapperProps) => {
    const searchTerm = useSignal("");
    const filteredUsers = useComputed$(() => {
      return dummyUsers.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.value.toLowerCase()),
      );
    });

    return (
      <AlertWrapper activeAlert={activeAlert} alertAdditionalClass="w-[25rem] max-w-[25rem]">
        <AlertWrapperTitle>Plant of Friends</AlertWrapperTitle>
        <p>Search for your friend's plant.</p>

        <div class="mt-2 flex items-center gap-3">
          <input
            type="text"
            class="h-[2rem] w-full rounded-xl bg-white px-3 py-3 text-sm focus:border-none focus:outline-none"
            placeholder="Friend's username..."
            value={searchTerm.value}
            onInput$={(e) => (searchTerm.value = e.target.value)}
          />
        </div>

        {searchTerm.value && (
          <section class="h-[10rem] w-full overflow-y-auto">
            {filteredUsers.value.length > 0 ? (
              <ul class="mt-2 space-y-1">
                {filteredUsers.value.map((user) => (
                  <li
                    key={user.username}
                    class="rounded-lg bg-gray-100 p-2 text-sm"
                  >
                    {user.username}
                  </li>
                ))}
              </ul>
            ) : (
                <>
                    No users found
                </>
            )}
          </section>
        )}
      </AlertWrapper>
    );
  },
);
