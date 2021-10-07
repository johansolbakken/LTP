import IVehicleCard from "../../vehiclecard/IVehicleCard";
import { createVehicleCardFromValues } from "../../vehiclecard/VehicleCardUtil";
import ITruck from "./ITruck";
import Truck from "./Truck";

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