import ITruck from "../trucks/truck/ITruck";
import { NumberInput } from "./input/NumberInput";
import { TruckPicker } from "./input/TruckPicker";
import { ResultLabel } from "./label/ResultLabel";
import { Status, TruckStatus } from "./status/TruckStatus";
import "./Calculator.css";

interface Props {
    ltp: number;
    truckPickerChanged(truck: ITruck): void;
    payloadChanged: (value: number) => void;
    truck: ITruck;
    problem: Status;
}

export const CalculatorUI: React.FC<Props> = (props) => {
    return (
        <div className="calculator">
            <h1>Kalkulator</h1>
            <div className="content">
                <TruckPicker onChange={props.truckPickerChanged} />
                <TruckStatus truck={props.truck} problem={props.problem} />
                <NumberInput
                    prompt="Nyttelast"
                    onChange={props.payloadChanged}
                />
                <ResultLabel value={"LTP: " + props.ltp + "cm"} />
            </div>
        </div>
    );
};
