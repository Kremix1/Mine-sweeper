import "./numberDisplay.scss"
import "./counterStyles.scss"
import {Dispatch, memo, SetStateAction, useEffect, useState} from "react";
import {stylizeCounterNumbers} from "../../lib/stylizeCounterNumbers";

interface NumberDisplayProps {
    value: number;
    setValue?: Dispatch<SetStateAction<number>>
}
export const NumberDisplay: React.FC<NumberDisplayProps> = memo(({value, setValue}) => {
    const [hundredths, setHundredths] = useState<string>('')
    const [tenths, setTenths] = useState<string>('')
    const [units, setUnits] = useState<string>('')
    let valueToArray = (Array.from(value.toString(),String))
    useEffect(() => {
        setHundredths(valueToArray[0] ? valueToArray[0] : '0')
        setTenths(valueToArray[1] ? valueToArray[1] : '0')
        setUnits(valueToArray[2] ? valueToArray[2] : '0')
    }, [value])


    return (
        <div className="number-display">
            <div className={stylizeCounterNumbers(hundredths, setHundredths)}></div>
            <div className={stylizeCounterNumbers(tenths, setTenths)}></div>
            <div className={stylizeCounterNumbers(units, setUnits)}></div>
        </div>

    );
});