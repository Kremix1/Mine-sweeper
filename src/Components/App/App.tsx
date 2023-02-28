import "./App.scss"
import {NumberDisplay} from "../NumberDisplay/NumberDisplay";
import React, {useEffect, useState} from "react";
import {generateCells} from "../../lib/generateCells";
import {Button} from "../Button/Button";
import {Cell, Face} from "../../types/types";
export const App: React.FC = () => {
    const [cells, setCells] = useState<Cell[][]>(generateCells())
    const [face, setFace] = useState<Face>(Face.smile)
    const [timer, setTimer] = useState<number>(999);

    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) => row.map((cell, colIndex) =>
            <Button
                key={`${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
                state={cell.state}
                value={cell.value}
                setFace={setFace}
            />
        ))
    }

    // useEffect(() => {
    //     setTimeout(()=> {
    //         setTimer(timer - 1)
    //     }, 1000)
    // }, [])

    //TODO: Передавать число в формате строки 0 0 1 - 0 2 3
    return (
        <div className="App">
            <div className="header">
                <NumberDisplay value={32} />
                <div className={`face ${face}`}></div>
                <NumberDisplay value={timer} setValue={setTimer}/>
            </div>
            <div id="body" className="body">{renderCells()}</div>
        </div>
    );
};