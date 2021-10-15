import {UserPageUI} from "./UserPageUI"
import BasicUser from "./user/BasicUser";
import BasicAddress from "./address/BasicAddress";

interface Props {

}

export const UserPage: React.FC<Props> = (props) => {
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
            )}/>;
}