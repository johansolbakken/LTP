import React from "react";
import ITruck from "../../trucks/truck/ITruck";

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
            <span style={{marginRight:"1em"}}>
                Lastebil
            </span>
            <span>
                <select name="Trucks" onChange={props.onChange}>
                    {listOfOptions}
                </select>
            </span>
        </div>
    );
}