import './button.scss'
import {CellState, CellValue} from "../../types/types";
import React from "react";
import {stylizeCloseBombCells} from "../../utils/stylizeCloseBombCells";

interface ButtonProps{
    row: number,
    col: number,
    state: CellState,
    value: CellValue,
}

export const Button: React.FC<ButtonProps> = ({row, col, state, value}) => {
    const renderContent = (): React.ReactNode => {
        if(state === CellState.open){
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
        <div className={`button ${state === CellState.open ? 'button_visible' : ''}`}>
            {renderContent()}
        </div>
    );
};