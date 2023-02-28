import React, {SetStateAction} from "react";
import {Face} from "../types/types";

export const handleCellClick = (e: React.MouseEvent, setFace: React.Dispatch<SetStateAction<Face>>): void => {
    switch (e.type){
        case 'mousedown':
            setFace(Face.scared)
            break;
        case 'mouseup':
            setFace(Face.smile)
            break;
    }
}