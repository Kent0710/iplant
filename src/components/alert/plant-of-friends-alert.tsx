import { component$, useSignal, useComputed$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { AlertWrapper, AlertWrapperTitle } from "./alert-wrapper";
import type { AlertWrapperProps } from "./alert-wrapper";

const dummyUsers = [
  { username: "kent", plantCode: "PLT001" },
  { username: "greenThumb123", plantCode: "PLT002" },
  { username: "plantParent", plantCode: "PLT003" },
  { username: "cactusQueen", plantCode: "PLT004" },
  { username: "fernando_plants", plantCode: "PLT005" },
  { username: "leafyLove", plantCode: "PLT006" },
  { username: "growWithMe", plantCode: "PLT007" },
  { username: "mossBoss", plantCode: "PLT008" },
  { username: "wateringBuddy", plantCode: "PLT009" },
  { username: "floraFriend", plantCode: "PLT010" },
];

export const PlantOfFriendsAlert = component$(({ activeAlert }: AlertWrapperProps) => {
  const searchTerm = useSignal("");
  const nav = useNavigate();

  const filteredUsers = useComputed$(() => {
    return dummyUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.value.toLowerCase()),
    );
  });

  return (
    <AlertWrapper
      activeAlert={activeAlert}
      alertAdditionalClass="w-[25rem] max-w-[25rem]"
    >
      <AlertWrapperTitle>Plant of Friends</AlertWrapperTitle>
      <p>Search for your friend's plant.</p>

      <div class="mt-2 flex items-center gap-3">
        <input
          type="text"
          class="h-[2rem] w-full rounded-xl bg-white px-3 py-3 text-sm focus:border-none focus:outline-none"
          placeholder="Friend's username..."
          value={searchTerm.value}
          onInput$={(e) => {
            const target = e.target as HTMLInputElement;
            searchTerm.value = target.value;
          }}
        />
      </div>

      {searchTerm.value && (
        <section class="h-[10rem] w-full overflow-y-auto">
          {filteredUsers.value.length > 0 ? (
            <ul class="mt-2 space-y-1">
              {filteredUsers.value.map((user) => (
                <li
                  key={user.username}
                  class="cursor-pointer rounded-lg bg-gray-100 p-2 text-sm hover:bg-gray-200"
                  onClick$={() => nav(`/plant/${user.username}`)}
                >
                  {user.username}
                </li>
              ))}
            </ul>
          ) : (
            <>No users found</>
          )}
        </section>
      )}
    </AlertWrapper>
  );
});
