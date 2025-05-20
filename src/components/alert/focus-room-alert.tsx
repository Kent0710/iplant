import { component$, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { AlertWrapper, AlertWrapperTitle } from "./alert-wrapper";
import type { AlertWrapperProps } from "./alert-wrapper";
import { Button } from "../button/button";

export const FocusRoomAlert = component$(
  ({ activeAlert }: AlertWrapperProps) => {
    const roomCode = useSignal("");
    const roomName = useSignal("");
    const nav = useNavigate();

    return (
      <AlertWrapper activeAlert={activeAlert}>
        <AlertWrapperTitle> Start a Group Grow </AlertWrapperTitle>
        <p>Plant and grow something together. </p>

        <div>
          <label for="growname" class="font-semibold">
            Room Name
          </label>
          <input
            type="text"
            name="growname"
            id="growname"
            placeholder="Group grow name..."
            class="mb-3 w-full rounded-xl bg-white px-4 py-2"
            value={roomName.value}
            onInput$={(e) =>
              (roomName.value = (e.target as HTMLInputElement).value)
            }
          />
          <span class="flex items-end gap-2">
            <div>
              <label for="code" class="font-semibold">
                Room Code
              </label>
              <input
                type="text"
                id="code"
                name="code"
                placeholder="Code"
                readOnly
                value={roomCode.value}
                class="w-full rounded-xl bg-white px-4 py-2"
              />
            </div>
            <Button
              variant="secondary"
              onClick$={() => {
                roomCode.value = Array.from({ length: 6 }, () =>
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(
                    Math.floor(Math.random() * 36),
                  ),
                ).join("");
              }}
            >
              Generate
            </Button>
          </span>
        </div>
        <Button
          additionalClass="w-full mt-3"
          onClick$={() => {
            if (roomCode.value && roomName.value.trim()) {
              nav(
                `/focusroom/${roomCode.value}/${encodeURIComponent(roomName.value.trim())}`,
              );
            }
          }}
        >
          Create focus room
        </Button>
      </AlertWrapper>
    );
  },
);
