import { ETruckType } from "../trucks/ETruckType";
import ITruck from "../trucks/ITruck";
import IVehicleCard from "../vehiclecard/IVehicleCard"

export default function calculateLTP(truck: ITruck, payload: number) {
    const type = truck.getType();

    if (type == ETruckType.twoAxle) {
        return diAxleLtp(truck.getVehicleCard(), payload);
    } else if ( type == ETruckType.threeAxle) {
        return triAxleLtp(truck.getVehicleCard(), payload);
    } else if ( type == ETruckType.fourAxle) {
        return tetraAxleLtp(truck.getVehicleCard(), payload);
    } else {
        throw new Error("Invalid truck type!");
    }
}

/**
 * DiAxleLTP
 * @param vc Vehicle card
 * @param payload Payload
 * @returns LTP in cm
 */
export const diAxleLtp = (vc: IVehicleCard, payload: number) => {
    if (payload <= 0) {
        throw new Error("Payload is less than 0");
    } else if (payload > vc.getAllowedPayload()) {
        throw new AllowedPayloadExceededError("Payload exceeds total allowed payload");
    }

    const frontPayload = vc.getAllowedAxleLoadFront() - vc.getDeadWeightFront() - 75;
    const newLtp = (frontPayload * (vc.getFrontAxleDistance() / 10)) / payload;
    
    return newLtp;
}


/**
 * TriAxleLTP
 * @param vc Vehicle card
 * @param payload Payload
 * @returns LTP in cm
 */
export const triAxleLtp = (vc: IVehicleCard, payload: number) => {
    if (payload <= 0) {
        throw new Error("Payload is less than 0");
    } else if (payload > vc.getAllowedPayload()) {
        throw new AllowedPayloadExceededError("Payload exceeds total allowed payload");
    }

    const axleDistance = vc.getFrontAxleDistance() + vc.getBackAxleDistance() / 2;
    const frontPayload = vc.getAllowedAxleLoadFront() - vc.getDeadWeightFront() - 75;
    const newLtp = (frontPayload * (axleDistance / 10)) / payload;

    return newLtp;

}

/**
 * TetraAxleLTP
 * @param vc Vehicle card
 * @param payload Payload
 * @returns LTP in cm
 */
export const tetraAxleLtp = (vc: IVehicleCard, payload: number) => {
    if (payload <= 0) {
        throw new Error("Payload is less than 0");
    } else if (payload > vc.getAllowedPayload()) {
        throw new AllowedPayloadExceededError("Payload exceeds total allowed payload");
    }

    const centerFrontAxle = vc.getFrontAxleDistance() / 2;
    const centerBackAxle = vc.getBackAxleDistance() / 2;
    const axleDist = centerFrontAxle + centerBackAxle + vc.getMidAxleDistance();
    const frontPayload = vc.getAllowedAxleLoadFront() - vc.getDeadWeightFront() - 75;
    const newLtp = frontPayload * (axleDist/10) / payload;

    return newLtp;
}

export class AllowedPayloadExceededError extends Error {
    constructor(message:string) {
        super(message);
        this.name = "AllowedPayloadExceededError";
    }
}