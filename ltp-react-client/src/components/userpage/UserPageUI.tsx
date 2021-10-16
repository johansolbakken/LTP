import { UserInfo } from "./userinfo/UserInfo";
import User from "./user/User";
import { UserViewState } from "./UserViewState";
import { Button } from "../button/Button";
import { UserEditor } from "./usereditor/UserEditor";

interface Props {
    user: User;
    editUserButtonClicked(): void;
    viewState: UserViewState;
    doneButtonClicked(): void;
}

export const UserPageUI: React.FC<Props> = (props) => {
    const viewView = (
        <div>
            <h1>Bruker</h1>
            <UserInfo user={props.user} editUserButtonClicked={props.editUserButtonClicked} />
        </div>
    );
    const editView = (
        <div>
            <h1>Rediger bruker</h1>
            <Button text={"Done"} onClick={props.doneButtonClicked} />
            <UserEditor />
        </div>
    );

    return (
        <div>
            {props.viewState === UserViewState.VIEW ? viewView : editView}
        </div>);
};
