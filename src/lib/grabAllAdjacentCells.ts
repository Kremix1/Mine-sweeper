import {MAX_COLS, MAX_ROWS} from "../constants/constants";
import {Cell} from "../types/types";

export const grabAllAdjacentCells = (cells: Cell[][], rowParam: number, colParam: number):
                                    {topLeftCell: Cell | null;
                                    topCell: Cell | null;
                                    topRightCell: Cell | null;
                                    leftCell: Cell | null;
                                    rightCell: Cell | null;
                                    bottomLeftCell: Cell | null;
                                    bottomCell: Cell | null;
                                    bottomRightCell: Cell | null;} => {
        const topLeftCell =
            rowParam > 0 && colParam > 0 ? cells[rowParam - 1][colParam - 1] : null;
        const topCell = rowParam > 0 ? cells[rowParam - 1][colParam] : null;
        const topRightCell =
            rowParam > 0 && colParam < MAX_COLS - 1
                ? cells[rowParam - 1][colParam + 1]
                : null;
        const leftCell = colParam > 0 ? cells[rowParam][colParam - 1] : null;
        const rightCell =
            colParam < MAX_COLS - 1 ? cells[rowParam][colParam + 1] : null;
        const bottomLeftCell =
            rowParam < MAX_ROWS - 1 && colParam > 0
                ? cells[rowParam + 1][colParam - 1]
                : null;
        const bottomCell =
            rowParam < MAX_ROWS - 1 ? cells[rowParam + 1][colParam] : null;
        const bottomRightCell =
            rowParam < MAX_ROWS - 1 && colParam < MAX_COLS - 1
                ? cells[rowParam + 1][colParam + 1]
                : null;

        return {
            topLeftCell,
            topCell,
            topRightCell,
            leftCell,
            rightCell,
            bottomLeftCell,
            bottomCell,
            bottomRightCell
        };
}