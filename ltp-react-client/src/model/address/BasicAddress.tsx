import Address from "./Address";

export default class BasicAddress implements Address {
    private street: string;
    private city: string;
    private zip: number;
    private country: string;

    constructor(street: string, city: string, zip: number, country: string) {
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.country = country;
    }

    public getStreet = () => this.street;
    public getCity = () => this.city;
    public getZip = () => this.zip;
    public getCountry = () => this.country;

    public setStreet = (street: string) => {
        this.street = street;
    };
    public setCity = (city: string) => {
        this.city = city;
    };
    public setZip = (zip: number) => {
        this.zip = zip;
    };
    public setCountry = (country: string) => {
        this.country = country;
    };

    public toString(): JSX.Element {
        return (
            <div>
                <div>{"Gate: " + this.street}</div>
                <div>{"Poststed: " + this.city}</div>
                <div>{"Postkode: " + this.zip}</div>
                <div>{"Land: " + this.country}</div>
            </div>
        );
    }
}
