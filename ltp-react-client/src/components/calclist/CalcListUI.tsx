import { DiAxleCalc } from "../calculator/calcs/DiAxleCalc";
import { TetraAxleCalc } from "../calculator/calcs/TetraAxleCalc";
import { TriAxleCalc } from "../calculator/calcs/TriAxleCalc";

interface Props {
    currentCalc:number;
    setCalc: (calc:number) => void;
}

export const CalcListUI: React.FC<Props> = (props) => {
    return (
        <div>
            <span>
                <button
                    onClick={() => {
                        props.setCalc(2);
                    }}
                >DiCalc</button>
                <button
                    onClick={() => {
                        props.setCalc(3);
                    }}
                >TriCalc</button>
                <button
                    onClick={() => {
                        props.setCalc(4);
                    }}
                >TetraCalc</button>
            </span>
            {(() => {
                if (props.currentCalc == 2) {
                    return <DiAxleCalc />;
                } else if (props.currentCalc == 3) {
                    return <TriAxleCalc />;
                } else {
                    return <TetraAxleCalc />;
                }
            })()}
        </div>
    );
}