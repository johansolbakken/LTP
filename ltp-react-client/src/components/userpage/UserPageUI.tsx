import { UserInfo } from "./userinfo/UserInfo";
import { UserViewState } from "./UserViewState";
import { UserEditor } from "./usereditor/UserEditor";

interface Props {
    editUserButtonClicked(): void;
    viewState: UserViewState;
    doneButtonClicked(): void;
}

export const UserPageUI: React.FC<Props> = (props) => {
    const viewView = (
        <div>
            <h1>Bruker</h1>
            <UserInfo editUserButtonClicked={props.editUserButtonClicked} />
        </div>
    );
    const editView = (
        <div>
            <h1>Rediger bruker</h1>
            <UserEditor doneButtonClicked={props.doneButtonClicked} />
        </div>
    );

    return (
        <div>
            {props.viewState === UserViewState.VIEW ? viewView : editView}
        </div>);
};
