import { NumberInputUI } from "./NumberInputUI";

interface Props {
    prompt:string,
    onChange: (value: number) => void
}

export const NumberInput: React.FC<Props> = (props) => {

    /**
     * Ensures that the input has a number
     */
    const onInputChange = (event:any) => {
        const { target }:any = event;
        const { value }:any = target;
        let newValue:string = "";
        for (const c of value) {
            if (!isNaN(c) && c !== " ") newValue += c;
        }
        target.value = newValue;
        props.onChange(Number(newValue));
    }

    return <NumberInputUI prompt={props.prompt} onChange={onInputChange} />;
}