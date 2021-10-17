
export default interface IVehicleCard {
    setFrontAxleDistance(value: number): void;
    setMidAxleDistance(value: number): void;
    setBackAxleDistance(value: number): void;
    getFrontAxleDistance(): number;
    getMidAxleDistance(): number;
    getBackAxleDistance(): number;

    setAllowedPayload(value: number): void;
    getAllowedPayload(): number;

    setAllowedAxleLoadFront(value:number): void;
    setAllowedAxleLoadBack(value: number): void;
    getAllowedAxleLoadFront(): number;
    getAllowedAxleLoadBack(): number;

    setDeadWeightFront(value:number): void;
    setDeadWeightBack(value: number): void;
    getDeadWeightFront(): number;
    getDeadWeightBack(): number;
}