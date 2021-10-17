import { UserPageUI } from "./UserPageUI"
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
        editUserButtonClicked={editUserButtonClicked}
        doneButtonClicked={showInfo}
        viewState={viewState}
    />;
}