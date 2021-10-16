import { UserPageUI } from "./UserPageUI"
import BasicUser from "./user/BasicUser";
import BasicAddress from "./address/BasicAddress";
import { useState } from "react";
import { UserViewState } from "./UserViewState";

interface Props {

}

export const UserPage: React.FC<Props> = (props) => {
    const [viewState, setViewState] = useState<UserViewState>(UserViewState.VIEW);

    const showInfo = () => {
        setViewState(UserViewState.VIEW);
    }

    const editUserButtonClicked = () => {
        setViewState(UserViewState.EDIT);
    }

    return <UserPageUI
        user={
            new BasicUser(
                "chickenfarm",
                "Chicken Farm",
                "chicken@farm.com",
                "98987878",
                new BasicAddress(
                    "Fløyels gate 23b",
                    "Oslo",
                    3333,
                    "Norge"
                )
            )}
            
        editUserButtonClicked={editUserButtonClicked}
        doneButtonClicked={showInfo}
        viewState={viewState}
    />;
}