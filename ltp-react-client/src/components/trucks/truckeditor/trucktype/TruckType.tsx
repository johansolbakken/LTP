import {ETruckType} from "../../../../model/truck/ETruckType";
import React from "react";

interface Props {
    truckTypeChanged(type: ETruckType):void;
}

export const TruckType: React.FC<Props> = (props) => {
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let type: ETruckType;
        const { value } = event.target;
        switch (value) {
            case "triAxle":
                type = ETruckType.threeAxle;
                break;
            case "tetraAxle":
                type = ETruckType.fourAxle;
                break;
            default:
                type = ETruckType.twoAxle;
                break;
        }
        props.truckTypeChanged(type);
    }
    return <div>
        <select name="" id="" onChange={onChange}>
            <option value="diAxle">To aksel</option>
            <option value="triAxle">Tre aksel</option>
            <option value="tetraAxle">Fire aksel</option>
        </select>
    </div>;
}