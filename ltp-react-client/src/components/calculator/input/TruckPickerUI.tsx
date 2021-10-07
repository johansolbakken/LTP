import React from "react";
import ITruck from "../../trucks/ITruck";

interface Props {
    truckList: ITruck[];
    onChange(target: React.ChangeEvent<HTMLSelectElement>): void;
}

export const TruckPickerUI: React.FC<Props> = (props) => {
    let listOfOptions = [];

    for (let i = 0; i < props.truckList.length; i++) {
        listOfOptions.push(
            <option value={props.truckList[i].getLicencePlate()}>
                {props.truckList[i].getLicencePlate() + ": " + props.truckList[i].getName()}
            </option>
        );
    }
    
    return (
        <div className="truckPicker">
            <h1>Truckpicker</h1>
            <select name="Trucks" onChange={props.onChange}>
                {listOfOptions}
            </select>
        </div>
    );
}