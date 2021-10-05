import { useEffect, useState } from "react";
import { TetraAxleCalcUI } from "./TetraAxleCalcUI";

export const TetraAxleCalc = () => {
    const [frontAxle, setFrontAxle] = useState(0);
    const [midAxle, setMidAxle] = useState(0);
    const [backAxle, setBackAxle] = useState(0);
    const [payload, setPayload] = useState(0);
    const [axleLoad, setAxleLoad] = useState(0);
    const [deadWeight, setDeadWeight] = useState(0);
    const [ltp, setLtp] = useState(0);

    useEffect(() => {
        if (payload === 0) {
            setLtp(0);
        } else {
            let centerFrontAxle = frontAxle / 2;
            let centerBackAxle = backAxle / 2;
            let axleDist = centerFrontAxle + centerBackAxle + midAxle;
            let frontPayload = axleLoad - deadWeight - 75;
            let newLtp = frontPayload * (axleDist/10) / payload;
            setLtp(Math.round(newLtp));
        }
    },[frontAxle, midAxle, backAxle, payload, axleLoad, deadWeight]);
    
    return (
        <TetraAxleCalcUI
            frontAxleDist={setFrontAxle}
            midAxleDist={setMidAxle}
            backAxleDist={setBackAxle}
            payload={setPayload}
            axleLoad={setAxleLoad}
            deadWeight={setDeadWeight}
            ltp={ltp}
        />
    );
};
