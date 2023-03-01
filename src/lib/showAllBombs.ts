import {Cell, CellState, CellValue} from "../types/types";

export const showAllBombs = (cells: Cell[][]): Cell[][] => {
    const currentCells = cells.slice();
    return currentCells.map((row) => row.map((cell) => {
        if(cell.value === CellValue.bomb) {
            return {
                ...cell,
                state: CellState.visible
            }
        }
        return  cell;
    }))
};