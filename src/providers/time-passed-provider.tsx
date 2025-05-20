import { component$, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import { TimePassedContext } from "~/context/time-passed.context";

export const TimePassedProvider = component$(()=>{
    const timePassedState = useStore({timePassed : 0});

    useContextProvider(TimePassedContext, timePassedState);

    return <Slot />
})