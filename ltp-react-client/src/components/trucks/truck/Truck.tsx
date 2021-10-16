import IVehicleCard from "../../vehiclecard/IVehicleCard";
import { createEmptyVehicleCard } from "../../vehiclecard/VehicleCardUtil";
import { ETruckType } from "./ETruckType";
import ITruck from "./ITruck";

export default class Truck implements ITruck {
    private name: string;
    private licence: string;
    private type: ETruckType;
    private vehicleCard: IVehicleCard;

    constructor(name: string, licence: string, type: ETruckType) {
        this.name = name;
        this.licence = licence;
        this.type = type;
        this.vehicleCard = createEmptyVehicleCard();
    }

    public setName(name: string): void {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
    public setLicencePlate(licence: string): void {
        this.licence = licence;
    }
    public getLicencePlate(): string {
        return this.licence
    }
    public setType(type: ETruckType): void {
        this.type = type;
    }
    public getType(): ETruckType {
        return this.type;
    }
    public setVehicleCard(vc: IVehicleCard): void {
        this.vehicleCard = vc;
    }
    public getVehicleCard(): IVehicleCard {
        return this.vehicleCard;
    }


}