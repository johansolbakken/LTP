import { NumberInput } from "../input/NumberInput"
import { ResultLabel } from "../label/ResultLabel";

interface Props {
    frontAxleDist: (value: number) => void;
    midAxleDist: (value: number) => void;
    backAxleDist: (value: number) => void;

    payload: (value: number) => void;
    axleLoad: (value: number) => void;
    deadWeight: (value: number) => void;

    ltp: number;
}

export const TetraAxleCalcUI: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>TetraAxleCalc</h2>
            <NumberInput prompt="Akselavstand foran" onChange={props.frontAxleDist} />
            <NumberInput prompt="Akselavstand midten" onChange={props.midAxleDist} />
            <NumberInput prompt="Akselavstand bak" onChange={props.backAxleDist} />

            <NumberInput prompt="Tillatt nyttelast" onChange={props.payload} />
            <NumberInput prompt="Tillatt aksellast foran" onChange={props.axleLoad} />
            <NumberInput prompt="Egenvekt foran" onChange={props.deadWeight} />

            <ResultLabel value={"Ltp: " + props.ltp + "cm"} />
        </div>
    );
}