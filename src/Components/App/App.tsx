import "./App.scss"
import {NumberDisplay} from "../NumberDisplay/NumberDisplay";
import React, {useEffect, useState} from "react";
import {generateCells} from "../../lib/generateCells";
import {Button} from "../Button/Button";
import {Cell, CellState, Face} from "../../types/types";
import {handleCellClick} from "../../lib/handleCellClick";
import {NO_OF_BOMBS} from "../../constants/constants";

export const App: React.FC = () => {
    const [cells, setCells] = useState<Cell[][]>(generateCells())
    const [face, setFace] = useState<Face>(Face.smile)
    const [time, setTime] = useState<number>(0);
    const [live, setLive] = useState(false);
    const [bombCounter, setBombCounter] = useState(NO_OF_BOMBS)
    const handleFaceClick = (): void => {
        //TODO: Сделать, чтобы сбросить игру можно было всегда (Убрать is(live))
        if(live){
            setLive(false);
            setTime(0);
            setCells(generateCells());
            setBombCounter(NO_OF_BOMBS)
        }
    }
    const handleCellContext = (rowParam: number, colParam: number) =>
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>
        ): void => {
            e.preventDefault();

            const currentCells = cells.slice();
            const currentCell = cells[rowParam][colParam];

            if(currentCell.state === CellState.visible){
                return;
            }else if(currentCell.state === CellState.open && bombCounter > 0){
                currentCells[rowParam][colParam].state = CellState.flagged;
                setCells(currentCells)
                setBombCounter(bombCounter - 1)
            }else if(currentCell.state === CellState.flagged){
                currentCells[rowParam][colParam].state = CellState.open;

                setBombCounter(bombCounter + 1)
            }
    };

    useEffect(() => {
        if(live && time < 999){
            const timer = setInterval(() => {
                setTime(time + 1)
            }, 1000)

            return () => {
                clearInterval(timer)
            }
        }
    }, [live, time])

    //TODO: Передавать число в формате строки 0 0 1 - 0 2 3
    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) => row.map((cell, colIndex) =>
            <Button
                key={`${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
                state={cell.state}
                value={cell.value}
                setFace={setFace}
                live={live}
                setLive={setLive}
                onClick={handleCellClick}
                onContext={handleCellContext}
            />
        ))
    }

    return (
        <div className="App">
            <div className="header">
                <NumberDisplay value={bombCounter} />
                <div
                    className={`face ${face}`}
                    onClick={handleFaceClick}
                ></div>
                <NumberDisplay value={time}/>
            </div>
            <div id="body" className="body">{renderCells()}</div>
        </div>
    );
};