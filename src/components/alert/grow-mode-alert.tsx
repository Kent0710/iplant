import { component$ } from "@builder.io/qwik";
import { AlertWrapper } from "./alert-wrapper";

import { Button } from "../button/button";

interface GrowModeAlertProps {
  activeAlert: any;
}
export const GrowModeAlert = component$(
  ({ activeAlert }: GrowModeAlertProps) => {
    return (
      <AlertWrapper activeAlert={activeAlert}>
        <h2 class="text-xl font-bold"> Enable Grow Mode? </h2>
        <p>
          {" "}
          This will pause screen tracker to allow your plant to grow even if you
          are using your phone.{" "}
        </p>
          <Button additionalClass="w-full mt-3">Yes, enable grow mode</Button>
      </AlertWrapper>
    );
  },
);
