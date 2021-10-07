import { useState } from "react";
import { ETruckType } from "../trucks/ETruckType";
import Truck from "../trucks/Truck";
import { CalculatorUI } from "./CalculatorUI";
import calculateLTP from "./CalculationFormula";
import ITruck from "../trucks/ITruck";

export function Calculator() {
    const [truck, setTruck] = useState(new Truck("Min Truck", "AE13911", ETruckType.twoAxle));
    const [ltp, setLtp] = useState(0);
    
    const truckPickerChanged = (truck: ITruck) => {
        setLtp(truck.getType());
    }
    
    return <CalculatorUI ltp={Math.round(ltp)} truckPickerChanged={truckPickerChanged} />;
}
