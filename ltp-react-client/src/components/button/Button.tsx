import "./Button.css"

interface Props {
    text: string;
    onClick(): void;
}

export const Button: React.FC<Props> = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
}