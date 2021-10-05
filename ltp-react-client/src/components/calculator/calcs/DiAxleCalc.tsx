import { useEffect, useState } from "react";
import { DiAxleCalcUI } from "./DiAxleCalcUI"

export const DiAxleCalc = () => {
    const [axleDistance, setAxleDistance] = useState(0);
    const [payload, setPayload] = useState(0);
    const [axleLoad, setAxleLoad] = useState(0);
    const [deadWeight, setDeadWeight] = useState(0);
    const [ltp, setLtp] = useState(0);

    useEffect(() => {
        if (payload === 0) {
            setLtp(0);
        } else {
            let frontPayload = axleLoad - deadWeight - 75;
            let newLtp = (frontPayload * (axleDistance / 10)) / payload;
            console.log(newLtp);
            setLtp(Math.round(newLtp));
        }
    }, [axleDistance, payload, axleLoad, deadWeight]);

    return (
        <DiAxleCalcUI
            frontAxleDistanceChange={setAxleDistance}
            payloadChange={setPayload}
            frontAxleLoadChange={setAxleLoad}
            frontDeadWeightChange={setDeadWeight}
            ltp={ltp}
        />
    );
}