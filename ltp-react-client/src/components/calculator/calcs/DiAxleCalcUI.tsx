import { NumberInput } from "../input/NumberInput";
import { ResultLabel } from "../label/ResultLabel";

interface Props {
    frontAxleDistanceChange: (value: number) => void,
    payloadChange: (value: number) => void,
    frontAxleLoadChange: (value: number) => void,
    frontDeadWeightChange: (value: number) => void,
    ltp:number
}

export const DiAxleCalcUI: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>DiAxleCalc</h2>
            <NumberInput prompt="Akselavstand foran" onChange={props.frontAxleDistanceChange} />
            <NumberInput prompt="Tillatt nyttelast" onChange={props.payloadChange} />
            <NumberInput prompt="Tillatt aksellast foran" onChange={props.frontAxleLoadChange} />
            <NumberInput prompt="Egenvekt aksel foran" onChange={props.frontDeadWeightChange} />
            <ResultLabel value={"LTP: " + props.ltp + "cm"} />
        </div>
    );
}