import { IVehicleCard } from "./IVehicleCard";

export class VehicleCard implements IVehicleCard {
    private axleDistances: number[];
    private allowedPayload: number;
    private allowedAxleLoad: number[];
    private deadWeights: number[];

    constructor(axleDistances: number[], allowedPayload: number, allowedAxleLoad: number[], deadWeights: number[]) {
        this.axleDistances = axleDistances;
        this.allowedPayload = allowedPayload;
        this.allowedAxleLoad = allowedAxleLoad;
        this.deadWeights = deadWeights;
    }

    public setAxleDistance = (index: number, value: number) => { this.axleDistances[index] = value; }
    public getFrontAxleDistance = () => this.axleDistances[0];
    public getMidAxleDistance = () => this.axleDistances[1];
    public getBackAxleDistance = () => this.axleDistances[2];
    public setFrontAxleDistance(value: number): void { this.axleDistances[0] = value; }
    public setMidAxleDistance(value: number): void { this.axleDistances[1] = value; }
    public setBackAxleDistance(value: number): void { this.axleDistances[2] = value; }

    public setAllowedPayload = (value: number) => { this.allowedPayload = value; }
    public getAllowedPayload = () => this.allowedPayload;

    public setAllowedAxleLoad = (index: number, value: number) => { this.allowedAxleLoad[index] = value; }
    public getAllowedAxleLoadFront = () => this.allowedAxleLoad[0];
    public getAllowedAxleLoadBack = () => this.allowedAxleLoad[1];
    public setAllowedAxleLoadFront(value: number): void { this.allowedAxleLoad[0] = value; }
    public setAllowedAxleLoadBack(value: number): void { this.allowedAxleLoad[1] = value; }

    public setDeadWeight = (index: number, value: number) => { this.deadWeights[index] = value; }
    public getDeadWeightFront = () => this.deadWeights[0];
    public getDeadWeightBack = () => this.deadWeights[1];
    public setDeadWeightFront(value: number): void { this.deadWeights[0] = value; }
    public setDeadWeightBack(value: number): void { this.deadWeights[1] = value; }
}
