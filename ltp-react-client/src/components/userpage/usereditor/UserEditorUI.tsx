import "./UserEditor.css"
import { ChangeEvent, FormEvent } from "react";
import React from "react";

interface Props {
    onSubmit(event: FormEvent<HTMLFormElement>):void;
    onChange(event:ChangeEvent<HTMLInputElement>):void;
    formState:any;
}

export const UserEditorUI: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="myForm">
                <form onSubmit={props.onSubmit}>
                    <input id="username" type="text" placeholder="Brukernavn" value={props.formState.username} onChange={props.onChange} required />
                    <input id="name" type="text" placeholder="Navn" value={props.formState.name} onChange={props.onChange} required/>
                    <input id="email" type="text" placeholder="Epost" value={props.formState.email} onChange={props.onChange} required/>
                    <input id="phone" type="text" placeholder="Telefon" value={props.formState.phone} onChange={props.onChange} required />
                    <input id="street" type="text" placeholder="Gate" value={props.formState.street} onChange={props.onChange} required/>
                    <input id="city" type="text" placeholder="Poststed" value={props.formState.city} onChange={props.onChange} required/>
                    <input id="zip" type="text" placeholder="Postnummer" value={props.formState.zip} onChange={props.onChange} required/>
                    <input id="country" type="text" placeholder="Land" value={props.formState.country} onChange={props.onChange} required />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}