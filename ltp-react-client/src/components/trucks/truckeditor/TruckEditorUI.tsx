import { ChangeEvent, FormEvent } from "react";
import { TruckType } from "./trucktype/TruckType";
import { ETruckType } from "../../../model/truck/ETruckType";
import "./TruckEditor.css";

interface Props {
    formState: any;
    onSubmit(event: FormEvent<HTMLFormElement>): void;
    onChange(event: ChangeEvent<HTMLInputElement>): void;
    truckTypeChanged(type: ETruckType): void;
}

export const TruckEditorUI: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>Editor</h1>
            <div>
                <form onSubmit={props.onSubmit} className={"truck-editor-form"}>
                    <div className="truck-editor-element">
                        <div>Navn</div>
                        <input
                            id="name"
                            type="text"
                            placeholder={"Navn"}
                            value={props.formState.name}
                            onChange={props.onChange}
                        />
                    </div>
                    <div className="truck-editor-element">
                        <div>Registreringsnummer</div>
                        <input
                            id="license"
                            type="text"
                            placeholder={"Reg.nr."}
                            value={props.formState.license}
                            onChange={props.onChange}
                        />
                    </div>
                    <div className="truck-editor-element">
                        <div>Vogntype</div>
                        <TruckType truckTypeChanged={props.truckTypeChanged} />
                    </div>
                    <div className="truck-editor-element">
                        <div>Akselavstander</div>
                        <div className={"truck-element-row"}>
                            <input
                                id="frontAxleDistance"
                                type="text"
                                placeholder={"Foran"}
                                value={props.formState.axleDistances[0]}
                                onChange={props.onChange}
                            />
                            <input
                                id="midAxleDistance"
                                type="text"
                                placeholder={"Midten"}
                                value={props.formState.axleDistances[1]}
                                onChange={props.onChange}
                            />
                            <input
                                id="backAxleDistance"
                                type="text"
                                placeholder={"Bak"}
                                value={props.formState.axleDistances[2]}
                                onChange={props.onChange}
                            />
                        </div>
                    </div>
                    <div className="truck-editor-element">
                        <div>Nyttelast</div>
                        <input
                            id="allowedPayload"
                            type="text"
                            placeholder={"Tillatt nyttelast"}
                            value={props.formState.allowedPayload}
                            onChange={props.onChange}
                        />
                    </div>
                    <div className="truck-editor-element">
                        <div>Aksellast</div>
                        <div className={"truck-element-row"}>
                            <input
                                id="frontAxleLoad"
                                type="text"
                                placeholder={"Foran"}
                                value={props.formState.alxeLoads[0]}
                                onChange={props.onChange}
                            />
                            <input
                                id="backAxleLoad"
                                type="text"
                                placeholder={"Bak"}
                                value={props.formState.axleLoads[1]}
                                onChange={props.onChange}
                            />
                        </div>
                    </div>
                    <div className="truck-editor-element">
                        <div>Egenvekt</div>
                        <div className={"truck-element-row"}>
                            <input
                                id="frontDeadWeight"
                                type="text"
                                placeholder={"Foran"}
                                value={props.formState.deadWeights[0]}
                                onChange={props.onChange}
                            />
                            <input
                                id="backDeadWeight"
                                type="text"
                                placeholder={"Bak"}
                                value={props.formState.deadWeights[1]}
                                onChange={props.onChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
