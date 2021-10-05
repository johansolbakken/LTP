import { NumberInputUI } from "./NumberInputUI";

interface Props {
    prompt:string,
    onChange: (target: any, value: number) => void
}

export const NumberInput: React.FC<Props> = (props) => {

    /**
     * Ensures that the input has a number
     */
    const onChange = (event:any) => {
        const { target }:any = event;
        const { value }:any = target;
        let newValue:string = "";
        for (const c of value) {
            if (!isNaN(c) && c !== " ") newValue += c;
        }
        target.value = newValue;
        props.onChange(this, Number(newValue));
    }

    return <NumberInputUI prompt={props.prompt} onChange={onChange} />;
}