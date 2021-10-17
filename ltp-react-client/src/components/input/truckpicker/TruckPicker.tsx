import { useState } from "react";
import ITruck from "../../../model/truck/ITruck";
import createDummyTruck from "../../../model/truck/TruckUtil";
import {TruckPickerUI} from "./TruckPickerUI";

interface Props {
    onChange(currentTruck: ITruck):void;
}

export const TruckPicker:React.FC<Props> = (props) => {
    const [trucks, setTrucks] = useState<ITruck[]>([
        createDummyTruck("Scania", "AX46758"),
        createDummyTruck("Volvo", "34EE3e"),
        createDummyTruck("Mercedes", "OP98988"),
    ]);

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let {value} = event.target;
        for (let i = 0; i < trucks.length; i++) {
            if (trucks[i].getLicencePlate() == value) {
                props.onChange(trucks[i]);
                break;
            }
        }
    }

    return <TruckPickerUI onChange={onChange} truckList={trucks} />;
}