import { useState } from "react";
import { DiAxleCalcUI } from "./DiAxleCalcUI"

export const DiAxleCalc = () => {
    const [axleDistance, setAxleDistance] = useState(0);
    const [payload, setPayload] = useState(0);
    const [axleLoad, setAxleLoad] = useState(0);
    const [deadWeight, setDeadWeight] = useState(0);
    const [ltp, setLtp] = useState(0);

    const calculateLTP = () => {
        if (payload === 0) {
            setLtp(0);
        } else {
            let frontPayload = axleLoad - deadWeight - 75;
            let newLtp = (frontPayload * (axleDistance / 10)) / payload;
            setLtp(newLtp|0);
        }
    }

    const axleDistanceChanged = (value: number) => {
        setAxleDistance(value);
        calculateLTP();
    }

    const payloadChanged = (value: number) => {
        setPayload(value);
        calculateLTP();
    }

    const axleLoadChanged = (value: number) => {
        setAxleLoad(value);
        calculateLTP();
    }

    const deadWeightChanged = (value: number) => {
        setDeadWeight(value);
        calculateLTP();
    }

    return (
    <DiAxleCalcUI 
        frontAxleDistanceChange={axleDistanceChanged}
        payloadChange={payloadChanged}
        frontAxleLoadChange={axleLoadChanged}
        frontDeadWeightChange={deadWeightChanged}
        ltp={ltp}
    />
    );
}