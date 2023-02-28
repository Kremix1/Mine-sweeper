import "./numberDisplay.scss"

interface NumberDisplayProps {
    value: number;
}
export const NumberDisplay: React.FC<NumberDisplayProps> = ({value}) => {
    return (
        <div className="number-display">
            {value.toString().padStart(3,'0')}
        </div>
    );
};