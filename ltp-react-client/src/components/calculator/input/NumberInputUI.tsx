import "./NumberInput.css"

interface Props {
    prompt: string,
    onChange: (event: any) => void
}

export const NumberInputUI: React.FC<Props> = (props) => {
    return (
        <div className="numberInput">
            <span>{props.prompt}</span>
            <input placeholder={props.prompt} onChange={props.onChange} />
        </div>
    );
}