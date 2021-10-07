import { CalcList } from "../calclist/CalcList";
import ITruck from "../trucks/ITruck";
import {TruckPicker} from "./input/TruckPicker";

interface Props {
    ltp:number;
    truckPickerChanged(truck: ITruck):void;
}

export const CalculatorUI: React.FC<Props> = (props) => {
    return (
        <div className="calculator">
            <h1>Kalkulator {props.ltp}</h1>
            <TruckPicker onChange={props.truckPickerChanged} />
        </div>
    );
};
