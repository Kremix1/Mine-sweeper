import React from "react";
export const stylizeCloseBombCells= (value: number): string => {
    let classNumber = 'close-bomb ';
    switch (value){
        case 1:
            classNumber += 'close-bomb_1';
            break;
        case 2:
            classNumber += 'close-bomb_2';
            break;
        case 3:
            classNumber += 'close-bomb_3';
            break;
        case 4:
            classNumber += 'close-bomb_4';
            break;
        case 5:
            classNumber += 'close-bomb_5';
            break;
        case 6:
            classNumber += 'close-bomb_6';
            break;
        case 7:
            classNumber += 'close-bomb_7';
            break;
        case 8:
            classNumber += 'close-bomb_8';
            break;
    }
    return classNumber;
}