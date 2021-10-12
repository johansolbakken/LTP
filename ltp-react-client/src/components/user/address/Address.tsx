export default class Address {
    private street: string;
    private city: string;
    private zip: number;
    private country: string;

    constructor() {
        this.street = "";
        this.city = "";
        this.zip = 0;
        this.country = "";
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

    public toString():string {
        return "Gate: " + this.street + "\n";
    }
}
