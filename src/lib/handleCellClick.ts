import {Dispatch, SetStateAction} from "react";

export const handleCellClick = (rowParam: number, colParam: number, live: boolean, setLive: Dispatch<SetStateAction<boolean>>) => (): void => {
    //Начало игры
    if(!live){
        setLive(true);
    }
};