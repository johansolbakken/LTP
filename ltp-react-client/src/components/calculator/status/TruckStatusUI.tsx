import ITruck from "../../../model/truck/ITruck";
import { TruckSummary } from "../../trucks/ITruckViewer/TruckSummary";
import { Status } from "./TruckStatus";
import "./TruckStatus.css";

interface Props {
    status: Status;
    truck: ITruck;
}

export const TruckStatusUI: React.FC<Props> = (props) => {
    return props.status === Status.NO_PROBLEM ? (
        <div></div>
    ) : (
        <div className="truckStatus">
            <h2>Truck Status</h2>
            <TruckSummary truck={props.truck} />
        </div>
    );
};
