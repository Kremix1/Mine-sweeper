import {Dispatch, SetStateAction} from "react";

export const stylizeCounterNumbers = (value: string, setValue: Dispatch<SetStateAction<string>>) => {
    const classNumber = "number-display__item "
    switch (value){
        case '0':{
            setValue(classNumber + 'zero')
            break;
        }
        case '1':{
            setValue(classNumber + 'one')
            break;
        }
        case '2':{
            setValue(classNumber + 'two')
            break;
        }
        case '3':{
            setValue(classNumber + 'three')
            break;
        }
        case '4':{
            setValue(classNumber + 'four')
            break;
        }
        case '5':{
            setValue(classNumber + 'five')
            break;
        }
        case '6':{
            setValue(classNumber + 'six')
            break;
        }
        case '7':{
            setValue(classNumber + 'seven')
            break;
        }
        case '8':{
            setValue(classNumber + 'eight')
            break;
        }
        case '9':{
            setValue(classNumber + 'nine')
            break;
        }
    }
    return(value)
}