import { useState } from "react";
import { ETruckType } from "../../trucks/ETruckType";
import ITruck from "../../trucks/ITruck";
import Truck from "../../trucks/Truck";
import {TruckPickerUI} from "./TruckPickerUI";

interface Props {
    onChange(currentTruck: ITruck):void;
}

export const TruckPicker:React.FC<Props> = (props) => {
    const [trucks, setTrucks] = useState<ITruck[]>([
        new Truck("Volvo", "VX49812", ETruckType.twoAxle),
        new Truck("Scania", "JV33423", ETruckType.threeAxle),
        new Truck("Majestetica", "GI696969", ETruckType.fourAxle)
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