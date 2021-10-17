import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { UserActionCreator } from "../../../state/ActionCreators";
import { UserEditorUI } from "./UserEditorUI"

interface Props {
    doneButtonClicked():void;
}

export const UserEditor: React.FC<Props> = (props) => {
    const state:any = useSelector((state) => state);
    const dispatch = useDispatch();
    const {setUser, setName} = bindActionCreators(UserActionCreator, dispatch);
    const { user } = state;

    const [formState, setFormState] = useState({
        username: user.username,
        name: user.name,
        email: user.email,
        phone: user.phone,
        street: user.street,
        city: user.city,
        zip: user.zip,
        country: user.country
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log(formState)
        setUser(formState);
        setName(formState.name);
        console.log(user);
        props.doneButtonClicked();
    }

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        switch (id) {
            case "username":
                setFormState({...formState, username: value});
                break;
            case "name":
                setFormState({...formState, name: value});
                break;
            case "email":
                setFormState({...formState, email: value});
                break;
            case "phone":
                setFormState({...formState, phone: value});
                break;
            case "street":
                setFormState({...formState, street: value});
                break;
            case "city":
                setFormState({...formState, city: value});
                break;
            case "zip":
                setFormState({...formState, zip: Number(value)});
                break;
            case "country":
                setFormState({...formState, country: value});
                break;
            default:
                break;
        }
    }

    return <UserEditorUI onSubmit={onSubmit} onChange={onChange} formState={formState} />;
}
