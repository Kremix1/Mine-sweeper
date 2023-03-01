import './button.scss'
import {Cell, CellState, CellValue, Face} from "../../types/types";
import React, {Dispatch, memo, SetStateAction} from "react";
import {stylizeCloseBombCells} from "../../lib/stylizeCloseBombCells";
import {handleCellPress} from "../../lib/handleCellPress";

interface ButtonProps{
    row: number,
    col: number,
    state: CellState,
    value: CellValue,
    exploded?: boolean,
    setFace: React.Dispatch<SetStateAction<Face>>,
    live: boolean,
    setLive: Dispatch<SetStateAction<boolean>>,
    cells: Cell[][],
    setCells: Dispatch<SetStateAction<Cell[][]>>,
    setDead: Dispatch<SetStateAction<boolean>>,
    setHasWon: Dispatch<SetStateAction<boolean>>,
    onClick(rowParam: number,
            colParam: number,
            live: boolean,
            setLive: Dispatch<SetStateAction<boolean>>,
            cells: Cell[][],
            setDead: Dispatch<SetStateAction<boolean>>,
            setCells: Dispatch<SetStateAction<Cell[][]>>,
            setHasWon: Dispatch<SetStateAction<boolean>>): (...args: any[]) => void,
    onContext(rowParam: number, colParam: number): (...args: any[]) => void;
}

export const Button: React.FC<ButtonProps> = memo(({row, col, state, value, exploded,
                                                            setFace, onContext, onClick,
                                                            live, setLive, cells, setCells,
                                                            setDead, setHasWon}: ButtonProps) => {

    const renderContent = (): React.ReactNode => {
        if(state === CellState.visible){
            if(value === CellValue.bomb){
                return <div className={`button button_bomb ${exploded ? 'button_bomb-red': ''}`}></div>
            } else if(value === CellValue.none)
                return null;
            return <div className={stylizeCloseBombCells(value)}></div>;
        } else if (state === CellState.flagged) {
            return <div className='button button_flag'></div>
        }
        return null;
    };

    return (
        <div
            className={`button ${state === CellState.visible ? 'button_visible' : ''}`}
            onMouseDown={(e) => handleCellPress(e, setFace)}
            onMouseUp={(e) => handleCellPress(e, setFace)}
            onClick={onClick(row, col, live, setLive, cells, setDead, setCells, setHasWon)}
            onContextMenu={onContext(row,col)}
        >
            {renderContent()}
        </div>
    );
});