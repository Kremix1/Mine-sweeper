import './button.scss'
import {CellState, CellValue, Face} from "../../types/types";
import React, {memo, SetStateAction} from "react";
import {stylizeCloseBombCells} from "../../lib/stylizeCloseBombCells";
import {handleCellClick} from "../../lib/handleCellClick";

interface ButtonProps{
    row: number,
    col: number,
    state: CellState,
    value: CellValue,
    setFace: React.Dispatch<SetStateAction<Face>>
}

export const Button: React.FC<ButtonProps> = memo(({row, col, state, value, setFace}) => {

    const renderContent = (): React.ReactNode => {
        if(state === CellState.visible){
            if(value === CellValue.bomb){
                return <div className='button button_bomb'></div>
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
            onMouseDown={(e) => handleCellClick(e, setFace)}
            onMouseUp={(e) => handleCellClick(e, setFace)}
        >
            {renderContent()}
        </div>
    );
});