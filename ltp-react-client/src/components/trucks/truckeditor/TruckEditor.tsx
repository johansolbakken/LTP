import {useSelector} from "react-redux";
import {TruckEditorUI} from "./TruckEditorUI";
import {ChangeEvent, FormEvent, useState} from "react";
import {ETruckType} from "../../../model/truck/ETruckType";

interface Props {
}

export const TruckEditor: React.FC<Props> = (props) => {
    const state: any = useSelector((state) => state);
    const truck: any = { state };

    const [formState, setFormState] = useState({
        name: truck.name,
        license: truck.license,
        type: truck.type,
        axleDistances: truck.axleDistances,
        allowedPayload: truck.allowedPayload,
        axleLoads: truck.axleLoads,
        deadWeights: truck.deadWeights
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target;
        switch (id) {
            case "name":
                setFormState({...formState, name: value});
                break;
            case "license":
                setFormState({...formState, license: value});
                break;
            case "axleDistances":
                setFormState({...formState, axleDistances: value});
                break;
            case "allowedPayload":
                setFormState({...formState, allowedPayload: value});
                break;
            case "axleLoads":
                setFormState({...formState, axleLoads: value});
                break;
            case "deadWeights":
                setFormState({...formState, deadWeights: value});
                break;
            default:
                break;
        }
    }

    const truckTypeChanged = (type: ETruckType) => {
        setFormState({...formState, type: type});
    }

    return <TruckEditorUI onChange={onChange} onSubmit={onSubmit} formState={formState} truckTypeChanged={truckTypeChanged}/>;
}