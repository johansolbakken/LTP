import { useState } from "react";
import { CalculatorUI } from "./CalculatorUI";
import calculateLTP, { AllowedPayloadExceededError } from "../../model/calculator/CalculationFormula";
import ITruck from "../../model/truck/ITruck";
import { Status } from "./status/TruckStatus";
import { VehicleCardError } from "../../model/vehiclecard/VehicleCardErrors";
import createDummyTruck, { createTruckFromObject } from "../../model/truck/TruckUtil";

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TruckActionCreators } from '../../state/ActionCreators';
import { createTruckObject } from "../../model/truck/TruckObject";

interface Props {
}

export const Calculator: React.FC<Props> = (props) => {
    const state: any = useSelector((state) => state);
    const dispatch = useDispatch();
    const AC = bindActionCreators(TruckActionCreators, dispatch);

    const [currentTruck, setCurrentTruck] = useState<ITruck>(createTruckFromObject(createTruckObject()));
    const [ltp, setLtp] = useState(0);
    const [problem, setProblem] = useState<Status>(Status.NO_PROBLEM);

    const payloadChanged = (value: number) => {
        try {
            setLtp(calculateLTP(state.truck, value));
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

    return <CalculatorUI ltp={Math.round(ltp)} payloadChanged={payloadChanged} problem={problem} truckPickerChanged={setCurrentTruck} truck={currentTruck} />;
}
