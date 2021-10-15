import Address from "../address/BasicAddress";

export default interface User {
    setUsername(username:string):void;
    getUsername():string;
    setName(name:string):void;
    getName():string;
    setEmail(email:string):void;
    getEmail():string;
    setPhone(phone:string):void;
    getPhone():string;
    setAddress(address:Address):void;
    getAddress():Address;

    // TODO: Payment info
}