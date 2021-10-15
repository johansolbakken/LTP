import Address from "./address/BasicAddress";
import { UserInfo } from "./userinfo/UserInfo";
import User from "./user/User";

interface Props {
    user: User;
}

export const UserPageUI: React.FC<Props> = (props) => {
    return <div>
        <h1>Bruker</h1>
        <UserInfo user={props.user}
        />
    </div>;
};
