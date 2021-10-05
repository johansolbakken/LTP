import { NumberInput } from "../input/NumberInput";
import { ResultLabel } from "../label/ResultLabel";

interface Props {
    frontAxleDist: (value: number) => void;
    backAxleDist: (value: number) => void;
    axleLoad: (value: number) => void;
    deadWeight: (value: number) => void;
    payload: (value: number) => void;
    ltp: number;
}

export const TriAxleCalcUI: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>TriAxleCalc</h2>
            <NumberInput prompt="Akselavstand foran" onChange={props.frontAxleDist} />
            <NumberInput prompt="Akselavstand bak" onChange={props.backAxleDist} />
            <NumberInput prompt="Tillatt aksellast foran" onChange={props.axleLoad} />
            <NumberInput prompt="Egenvekt foran" onChange={props.deadWeight} />
            <NumberInput prompt="Total nyttelast" onChange={props.payload} />
            <ResultLabel value={"LTP: " + props.ltp + "cm"} />
        </div>
    );
}