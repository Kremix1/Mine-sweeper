import {Cell, CellState, CellValue} from "../types/types";
import {grabAllAdjacentCells} from "./grabAllAdjacentCells";

export const openMultipleCells = (cells: Cell[][], rowParam: number, colParam: number): Cell[][] => {
    const currentCell = cells[rowParam][colParam];
    if (
        currentCell.state === CellState.visible ||
        currentCell.state === CellState.flagged
    ) {
        return cells;
    }
    let newCells = cells.slice();
    newCells[rowParam][colParam].state = CellState.visible;

    const { topLeftCell, topCell, topRightCell,
            leftCell, rightCell, bottomLeftCell,
            bottomCell, bottomRightCell } = grabAllAdjacentCells(cells, rowParam, colParam);

    if (
        topLeftCell?.state === CellState.open &&
        topLeftCell.value !== CellValue.bomb
    ) {
        if (topLeftCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam - 1, colParam - 1);
        } else {
            newCells[rowParam - 1][colParam - 1].state = CellState.visible;
        }
    }

    if (topCell?.state === CellState.open && topCell.value !== CellValue.bomb) {
        if (topCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam - 1, colParam);
        } else {
            newCells[rowParam - 1][colParam].state = CellState.visible;
        }
    }

    if (
        topRightCell?.state === CellState.open &&
        topRightCell.value !== CellValue.bomb
    ) {
        if (topRightCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam - 1, colParam + 1);
        } else {
            newCells[rowParam - 1][colParam + 1].state = CellState.visible;
        }
    }

    if (leftCell?.state === CellState.open && leftCell.value !== CellValue.bomb) {
        if (leftCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam, colParam - 1);
        } else {
            newCells[rowParam][colParam - 1].state = CellState.visible;
        }
    }

    if (
        rightCell?.state === CellState.open &&
        rightCell.value !== CellValue.bomb
    ) {
        if (rightCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam, colParam + 1);
        } else {
            newCells[rowParam][colParam + 1].state = CellState.visible;
        }
    }

    if (
        bottomLeftCell?.state === CellState.open &&
        bottomLeftCell.value !== CellValue.bomb
    ) {
        if (bottomLeftCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam + 1, colParam - 1);
        } else {
            newCells[rowParam + 1][colParam - 1].state = CellState.visible;
        }
    }

    if (
        bottomCell?.state === CellState.open &&
        bottomCell.value !== CellValue.bomb
    ) {
        if (bottomCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam + 1, colParam);
        } else {
            newCells[rowParam + 1][colParam].state = CellState.visible;
        }
    }

    if (
        bottomRightCell?.state === CellState.open &&
        bottomRightCell.value !== CellValue.bomb
    ) {
        if (bottomRightCell.value === CellValue.none) {
            newCells = openMultipleCells(newCells, rowParam + 1, colParam + 1);
        } else {
            newCells[rowParam + 1][colParam + 1].state = CellState.visible;
        }
    }

    return newCells;
}