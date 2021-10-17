import ITruck from "../../../model/truck/ITruck";
import { TruckStatusUI } from "./TruckStatusUI";

interface Props {
    truck: ITruck;
    problem: Status;
}

export enum Status { NO_PROBLEM, PROBLEM };

export const TruckStatus: React.FC<Props> = (props) => {
    return <TruckStatusUI status={props.problem} truck={props.truck} />
}