import ITruck from "../truck/ITruck";
import "./ITruckViewer.css"
import { TruckSummary } from "./TruckSummary";

interface Props {
    truck: ITruck;
}

export const ITruckViewerUI: React.FC<Props> = (props) => {
    return (
        <div className="iTruckViewer">
            <h2>{props.truck.getName()}</h2>
            <p>{props.truck.getLicencePlate()}</p>
            <TruckSummary truck={props.truck} />
        </div>
    );
}