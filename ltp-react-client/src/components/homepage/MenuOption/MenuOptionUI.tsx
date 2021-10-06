interface Props {
    imgUrl: string;
    title: string;
    alt?: string;
    onClick: () => void;
}

export const MenuOptionUI: React.FC<Props> = (props) => {
    return (
        <div className="menuOption" onClick={props.onClick} style={{
            width: 150,
            height: 150,
            display:"flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            border: "solid black 1px"
        }}>
            <img src={props.imgUrl} alt={props.alt} style={{
                width: 50,
                height: 50
            }} />
            <p>{props.title}</p>
        </div>
    );
};
