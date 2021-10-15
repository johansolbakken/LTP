import User from "./User";
import Address from "../address/BasicAddress";

export default class BasicUser implements User {
    private address: Address;
    private email: string;
    private name: string;
    private phone: string;
    private username:string;

    constructor(username:string, name:string, email:string, phone:string, address: Address) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }


    getAddress(): Address {
        return this.address;
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name;
    }

    getPhone(): string {
        return this.phone;
    }

    getUsername(): string {
        return this.username;
    }

    setAddress(address: Address): void {
        this.address = address;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPhone(phone: string): void {
        this.phone = phone;
    }

    setUsername(username: string): void {
        this.username = username;
    }
}