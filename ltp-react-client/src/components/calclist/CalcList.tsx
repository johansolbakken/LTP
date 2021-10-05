import { useState } from "react";
import { CalcListUI } from "./CalcListUI";

export const CalcList = () => {
    const [calc, setCalc] = useState(2);
    return <CalcListUI currentCalc={calc} setCalc={setCalc} />;
}