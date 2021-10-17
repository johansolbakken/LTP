export default interface Address {
    getStreet(): string;
    getCity(): string;
    getZip(): number;
    getCountry(): string;
    setStreet(street: string): void;
    setCity(city: string): void;
    setZip(zip: number): void;
    setCountry(country: string): void;
    toString(): JSX.Element;
}