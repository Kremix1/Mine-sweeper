import {Dispatch, SetStateAction} from "react";
import {Cell, CellState, CellValue} from "../types/types";
import {openMultipleCells} from "./openMultipleCells";

export const handleCellClick = (rowParam: number, colParam: number,
                                live: boolean, setLive: Dispatch<SetStateAction<boolean>>,
                                cells: Cell[][], setCells: Dispatch<SetStateAction<Cell[][]>>) => (): void => {
    //Начало игры
    if(!live){
        setLive(true);
    }

    const currentCell = cells[rowParam][colParam]
    let newCells = cells.slice();

    if([CellState.flagged, CellState.visible].includes(currentCell.state)){
        return;
    }

    if(currentCell.value === CellValue.bomb){

    } else if (currentCell.value === CellValue.none){
        newCells = openMultipleCells(newCells, rowParam, colParam);
    }else{
        newCells[rowParam][colParam].state = CellState.visible;
        setCells(newCells)
    }
};