import { useState } from "react";
import { CalculatorUI } from "./CalculatorUI";
import calculateLTP, { AllowedPayloadExceededError } from "./CalculationFormula";
import ITruck from "../trucks/truck/ITruck";
import { Status } from "./status/TruckStatus";
import { VehicleCardError } from "../vehiclecard/VehicleCardErrors";
import createDummyTruck from "../trucks/truck/TruckUtil";

interface Props {
    trucks: ITruck[];
}

export const Calculator: React.FC<Props> = (props) => {
    const [truck, setTruck] = useState<ITruck>(createDummyTruck("", ""));
    const [ltp, setLtp] = useState(0);
    const [problem, setProblem] = useState<Status>(Status.NO_PROBLEM);
    
    const truckPickerChanged = (truck: ITruck) => {
        setTruck(truck);
    }

    const payloadChanged = (value: number) => {
        try {
            setLtp(calculateLTP(truck, value));
            setProblem(Status.NO_PROBLEM);
        } catch (e) {
            setLtp(0);
            if (
                e instanceof VehicleCardError ||
                e instanceof AllowedPayloadExceededError
            ) {
                setProblem(Status.PROBLEM);
            }   
        } 
    }
    
    return <CalculatorUI ltp={Math.round(ltp)} truckPickerChanged={truckPickerChanged} payloadChanged={payloadChanged} truck={truck} problem={problem}/>;
}
