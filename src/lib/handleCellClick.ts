import {Dispatch, SetStateAction} from "react";
import {Cell, CellState, CellValue} from "../types/types";
import {openMultipleCells} from "./openMultipleCells";
import {showAllBombs} from "./showAllBombs";
import {MAX_COLS, MAX_ROWS} from "../constants/constants";
import {generateCells} from "./generateCells";

export const handleCellClick = (rowParam: number, colParam: number,
                                live: boolean, setLive: Dispatch<SetStateAction<boolean>>,
                                cells: Cell[][], setDead: Dispatch<SetStateAction<boolean>>,
                                setCells: Dispatch<SetStateAction<Cell[][]>>,
                                setHasWon: Dispatch<SetStateAction<boolean>>,) => (): void => {
    let currentCell = cells[rowParam][colParam]
    let newCells = cells.slice();

    //Начало игры
    if(!live){
        while (currentCell.value === CellValue.bomb) {
            newCells = generateCells();
            currentCell = newCells[rowParam][colParam];
        }
        setLive(true);
    }


    if([CellState.flagged, CellState.visible].includes(currentCell.state)){
        return;
    }

    if(currentCell.value === CellValue.bomb){
        setDead(true);
        newCells[rowParam][colParam].exploded = true;
        newCells = showAllBombs(cells);
        setCells(newCells);
        return;
    } else if (currentCell.value === CellValue.none){
        newCells = openMultipleCells(newCells, rowParam, colParam);
    }else{
        newCells[rowParam][colParam].state = CellState.visible;
    }
    let safeOpenCellsExists = false;
    for(let row = 0; row < MAX_ROWS; row++){
        for(let col = 0; col < MAX_COLS; col++){
            const currentCell = newCells[row][col];

            if(currentCell.value !== CellValue.bomb && currentCell.state === CellState.open){
                safeOpenCellsExists = true;
                break;
            }
        }
    }

    if(!safeOpenCellsExists){
        newCells = newCells.map(row => row.map(cell => {
            if(cell.value === CellValue.bomb){
                return{
                    ...cell,
                    state: CellState.flagged
                }
            }
            return cell;
        }))
        setHasWon(true);
    }
    setCells(newCells)
};