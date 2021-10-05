import { useEffect, useState } from "react";
import { TriAxleCalcUI } from "./TriAxleCalcUI";

export const TriAxleCalc = () => {
    const [frontAxleDist, setFrontAxleDist] = useState(0);
    const [backAxleDist, setBackAxleDist] = useState(0);
    const [axleLoad, setAxleLoad] = useState(0);
    const [deadWeight, setDeadWeight] = useState(0);
    const [payload, setPayload] = useState(0);
    const [ltp, setLtp] = useState(0);

    useEffect(() => {
        if (payload === 0) {
            setLtp(0);
        } else {
            let axleDistance = frontAxleDist;
            axleDistance += backAxleDist / 2;
            let frontPayload = axleLoad - deadWeight - 75;
            let newLtp = (frontPayload * (axleDistance / 10)) / payload;
            setLtp(Math.round(newLtp));
        }
    }, [frontAxleDist, backAxleDist, axleLoad, deadWeight, payload, ltp]);

    return (
        <TriAxleCalcUI
            frontAxleDist={setFrontAxleDist}
            backAxleDist={setBackAxleDist}
            axleLoad={setAxleLoad}
            deadWeight={setDeadWeight}
            payload={setPayload}
            ltp={ltp}
        />
    );
};
