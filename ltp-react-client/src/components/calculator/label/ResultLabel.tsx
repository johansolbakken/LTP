
interface Props {
    value: string
}

export const ResultLabel: React.FC<Props> = (props) => {
    return (
        <div className="resultLabel">
            {props.value}
        </div>
    );
}