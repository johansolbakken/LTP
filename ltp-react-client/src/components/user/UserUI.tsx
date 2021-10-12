import Address from "./address/Address";
import { UserInfo } from "./userinfo/UserInfo";

interface Props {}

export const UserUI: React.FC<Props> = (props) => {
    return <div>
        <h1>Bruker</h1>
        <UserInfo username={"kasperrf"} firstName={"Kasper"} lastName={"Foss"} email={"Noe@no.no"} phone={"93839383938"} address={new Address()}            
        />
    </div>;
};
