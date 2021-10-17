import ITruck from "../../../model/truck/ITruck"
import { ITruckViewerUI } from "./ITruckViewerUI"

interface Props {
    truck: ITruck;
}

export const ITruckViewer: React.FC<Props> = (props) => {
    return <ITruckViewerUI truck={props.truck} />
}