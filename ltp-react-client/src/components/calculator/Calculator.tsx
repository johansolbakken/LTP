import { useState } from "react";
import { ETruckType } from "../trucks/truck/ETruckType";
import Truck from "../trucks/truck/Truck";
import { CalculatorUI } from "./CalculatorUI";
import calculateLTP, { AllowedPayloadExceededError } from "./CalculationFormula";
import ITruck from "../trucks/truck/ITruck";
import { Status } from "./status/TruckStatus";
import { VehicleCardError } from "../vehiclecard/VehicleCardErrors";

export function Calculator() {
    const [truck, setTruck] = useState<ITruck>(new Truck("Min Truck", "AE13911", ETruckType.twoAxle));
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
