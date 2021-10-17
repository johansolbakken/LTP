import IVehicleCard from "../vehiclecard/IVehicleCard";
import VehicleCard from "../vehiclecard/VehicleCard";
import { createVehicleCardFromValues } from "../vehiclecard/VehicleCardUtil";
import ITruck from "./ITruck";
import Truck from "./Truck";
import { TruckObject } from "./TruckObject";

export default function createDummyTruck(name:string, licence:string): ITruck
{
    const type = Math.random() > 0.5 ? 2 : 3;
    const truck:ITruck = new Truck(name, licence, type);

    const vc: IVehicleCard = createVehicleCardFromValues(
        type === 2 ? 5600 : 4250,
        type === 2 ? 0 : 0,
        type === 2 ? 1350 : 1370,
        type === 2 ? 5800 : 17655,
        type === 2 ? 4150 : 9000,
        type === 2 ? 7700 : 20000,
        type === 2 ? 2390 : 5100,
        type === 2 ? 4100 : 5160
    );

    truck.setVehicleCard(vc);
    return truck;
}

export const createTruckFromObject = (obj:TruckObject):ITruck => {
    const vehicleCard = new VehicleCard(obj.axleDistances, obj.allowedPayloads, obj.axleLoads, obj.deadWeights);
    const truck:ITruck  = new Truck(obj.name, obj.license, obj.type);
    truck.setVehicleCard(vehicleCard);
    return truck;
}

export const createObjectFromTruck = (truck: ITruck):any => {
    const vehicleCard = truck.getVehicleCard();
    const axleDistances = [
        vehicleCard.getFrontAxleDistance(),
        vehicleCard.getMidAxleDistance(),
        vehicleCard.getBackAxleDistance()
    ];
    const axleLoads = [
        vehicleCard.getAllowedAxleLoadFront(),
        vehicleCard.getAllowedAxleLoadBack(),
    ];
    const deadWeights = [
        vehicleCard.getDeadWeightFront(),
        vehicleCard.getDeadWeightBack(),
    ];
    const obj:TruckObject = {
        name: truck.getName(),
        license: truck.getLicencePlate(),
        type: truck.getType(),
        axleDistances: axleDistances,
        allowedPayloads: 0,
        axleLoads: axleLoads,
        deadWeights: deadWeights
    };
    return obj;
}