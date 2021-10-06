import { useHistory } from "react-router";
import { MenuOptionUI } from "./MenuOptionUI";

interface Props {
    url:string;
    imgUrl: string;
    title: string;
    alt?: string;
}

export const MenuOption: React.FC<Props> = (props) => {
    const history = useHistory();

    const onClick = () => {
        history.push(props.url);
    }

    return (
        <MenuOptionUI
            imgUrl={props.imgUrl}
            title={props.title}
            alt={props.alt}
            onClick={onClick}
        />
    );
};
