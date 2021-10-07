import IVehicleCard from "../../vehiclecard/IVehicleCard";
import { ETruckType } from "./ETruckType";

export default interface ITruck {
    setName(name:string):void;
    getName():string;

    setLicencePlate(licence:string): void;
    getLicencePlate(): string;

    setType(type: ETruckType): void;
    getType(): ETruckType;

    setVehicleCard(vc: IVehicleCard): void;
    getVehicleCard(): IVehicleCard;
}