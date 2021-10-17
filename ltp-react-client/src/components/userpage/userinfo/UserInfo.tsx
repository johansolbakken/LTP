import "./UserInfo.css"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button } from "../../input/button/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Address from "../../../model/address/Address";
import BasicAddress from "../../../model/address/BasicAddress";

interface Props {
    editUserButtonClicked():void;
}

export const UserInfo: React.FC<Props> = (props) => {
    const [address, setAddress] = useState<Address>(new BasicAddress("", "", 0, ""));
    const state:any = useSelector((state)=>state);
    const {user} = state;

    useEffect(() => {
        setAddress(new BasicAddress(user.street, user.city, Number(user.zip), user.country));
    }, [user.street, user.zip, user.country, user.city]);


    return (
        <div className={"userInfo"}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
                alt="" style={{width: 100}} className={"profile-pic"}
            />
            <div className={"my-table"}>
                <div className={"row"}>
                    <span className={"first-col"}>Username</span>
                    <span className={"second-col"}>{user.username}</span>
                </div>
                <div className={"row"}>
                    <span className={"first-col"}>Name</span>
                    <span className={"second-col"}>{user.name}</span>
                </div>
                <div className={"row"}>
                    <span className={"first-col"}>Email</span>
                    <span className={"second-col"}>{user.email}</span>
                </div>
                <div className={"row"}>
                    <span className={"first-col"}>Phone</span>
                    <span className={"second-col"}>{user.phone}</span>
                </div>
                <div className={"row"}>
                    <span className={"first-col"}>Address</span>
                    <span className={"second-col"}>{user.zip}</span>
                </div>
            </div>
        <Button text="Rediger" onClick={props.editUserButtonClicked} />
        </div>
    );
}