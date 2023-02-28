import "./App.scss"
import {NumberDisplay} from "../NumberDisplay/NumberDisplay";
export const App: React.FC = () => {
    return (
        <div className="App">
            <div className="header">
                <NumberDisplay value={0} />
                <div className="face face_smile"></div>
                <NumberDisplay value={23} />
            </div>
            <div className="body">
                2
            </div>
        </div>
    );
};