import User from "../user/User";
import "./UserInfo.css"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface Props {
    user: User
}

export const UserInfo: React.FC<Props> = (props) => {
    return (
        <div className={"userInfo"}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
                alt="" style={{width: 100}} className={"profile-pic"}
            />
            <div className={"my-table"}>
                <div className={"row"}>
                    <span className={"first-col"}>Username</span>
                    <span className={"second-col"}>{props.user.getUsername()}</span>
                </div>
                <div className={"row"}>
                    <span className={"first-col"}>Name</span>
                    <span className={"second-col"}>{props.user.getName()}</span>
                </div>
                <div className={"row"}>
                    <span className={"first-col"}>Email</span>
                    <span className={"second-col"}>{props.user.getEmail()}</span>
                </div>
                <div className={"row"}>
                    <span className={"first-col"}>Phone</span>
                    <span className={"second-col"}>{props.user.getPhone()}</span>
                </div>
                <div className={"row"}>
                    <span className={"first-col"}>Address</span>
                    <span className={"second-col"}>{props.user.getAddress().toString()}</span>
                </div>
            </div>
        </div>
    );
}