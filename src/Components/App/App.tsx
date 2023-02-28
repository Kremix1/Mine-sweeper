import "./App.scss"
import {NumberDisplay} from "../NumberDisplay/NumberDisplay";
import React, {useState} from "react";
import {generateCells} from "../../utils/generateCells";
import {Button} from "../Button/Button";
export const App: React.FC = () => {
    const [cells, setCells] = useState(generateCells())
    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) => row.map((cell, colIndex) =>
            <Button
                key={`${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
                state={cell.state}
                value={cell.value}
            />
        ))
    }

    return (
        <div className="App">
            <div className="header">
                <NumberDisplay value={0} />
                <div className="face face_smile"></div>
                <NumberDisplay value={23} />
            </div>
            <div className="body">{renderCells()}</div>
        </div>
    );
};