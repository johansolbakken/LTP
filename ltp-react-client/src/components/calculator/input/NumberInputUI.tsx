
interface Props {
    prompt: string,
    onChange: (event: any) => void
}

export const NumberInputUI: React.FC<Props> = (props) => {
    return (
        <div className="numberInput">
            <span>
                <p>{props.prompt}</p>
                <input placeholder={props.prompt} onChange={props.onChange} />
            </span>
        </div>
    );
}