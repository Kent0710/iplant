import { component$ } from "@builder.io/qwik";

import { AlertWrapper, AlertWrapperTitle } from "./alert-wrapper";
import type { AlertWrapperProps } from "./alert-wrapper";
import { Button } from "../button/button";

export const DecayModeAlert = component$(
  ({ activeAlert }: AlertWrapperProps) => {
    return (
      <AlertWrapper activeAlert={activeAlert}>
        <AlertWrapperTitle> Enable Decay Mode? </AlertWrapperTitle>
        <p>
          {" "}
          This will continue tracking your time of website use and affect your
          plant's health.{" "}
        </p>
        <Button additionalClass="w-full mt-3"> Yes, enable decay mode </Button>
      </AlertWrapper>
    );
  },
);
