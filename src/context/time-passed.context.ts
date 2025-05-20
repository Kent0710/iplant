import { createContextId } from "@builder.io/qwik";

export const TimePassedContext = createContextId<{timePassed : number}>('global.timePassed.context');