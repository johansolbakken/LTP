import React from 'react';
import { DiAxleCalc } from './calcs/DiAxleCalc';

interface Props {
    onInputChange: (target: any, value: number) => void,
    value:number
}

export const CalculatorUI: React.FC<Props> = (props) => {
    return (
        <div className="calculator">
            <DiAxleCalc />
        </div>
    );
}