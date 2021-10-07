import { VehicleCard } from "./VehicleCard";

export const createVehicleCardFromValues = (frontAxleDist: number, midAxleDist: number, backAxleDist:
    number, allowedPayload:
        number, allowedAxleLoadFront: number, allowedAxleLoadBack: number,
    deadWeightFront: number, deadWeightBack: number
) => {
    return new VehicleCard(
        [frontAxleDist, midAxleDist, backAxleDist],
        allowedPayload,
        [allowedAxleLoadFront, allowedAxleLoadBack],
        [deadWeightFront, deadWeightBack]
    );
}

export const createDiAxleVehicleCard = (
    frontAxleDist: number, backAxleDist: number,
    allowedPayload: number,
    allowedAxleLoadFront: number, allowedAxleLoadBack: number,
    deadWeightFront: number, deadWeightBack: number
) => {
    return createVehicleCardFromValues(
        frontAxleDist, 0, backAxleDist,
        allowedPayload,
        allowedAxleLoadFront, allowedAxleLoadBack,
        deadWeightFront, deadWeightBack
    );
}
