import { useState } from 'react';
import { CalculatorUI } from './CalculatorUI';

export function Calculator() {
    const [value, setValue] = useState(0);

    const onInputChange = (target: any, value: number) => {
        setValue(value);
    }

    return  <CalculatorUI onInputChange={onInputChange} value={value} />;
}