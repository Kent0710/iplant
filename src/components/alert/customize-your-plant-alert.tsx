import { component$ } from "@builder.io/qwik";
import { AlertWrapper, AlertWrapperTitle } from "./alert-wrapper";
import type { AlertWrapperProps } from "./alert-wrapper";

import Customize1 from '../../../public/customize1.png'
import Customize2 from '../../../public/customize2.png'
import { Button } from "../button/button";

const customizeItems = [
    {
        imageUrl : Customize1,
        text : 'Customize 1'
    },
    {
        imageUrl : Customize2,
        text : "Customize 2"
    },
]

export const CustomizeYourPlantAlert = component$(({activeAlert} : AlertWrapperProps)=>{
    return (
        <AlertWrapper activeAlert={activeAlert}>
            <AlertWrapperTitle> Customize Your Plant </AlertWrapperTitle>
            <p> Collect coins to purchase customization. </p>

            <ul class='flex gap-3 mt-3'>
                {customizeItems.map((item)=>(
                    <CustomizeYourPlantAlertItem 
                        imageUrl={item.imageUrl}
                        key={item.text}
                        text={item.text}
                    />
                ))}
            </ul>
        </AlertWrapper>
    )
});

interface CustomizeYourPlantAlertItemProps {
    imageUrl : string;
    text : string;
}

const CustomizeYourPlantAlertItem = component$(({imageUrl, text} : CustomizeYourPlantAlertItemProps) =>{
    return (
        <li class='flex flex-col items-center gap-3 justify-center'>
            <img 
                src={imageUrl}
                alt="image"
                width={100}
                height={100}
                class='object-contain w-[15rem] h-auto rounded-xl'
            />
            <p class='font-bold'> {text} </p>
            <Button>
                Purchase
            </Button>
        </li>
    )
})