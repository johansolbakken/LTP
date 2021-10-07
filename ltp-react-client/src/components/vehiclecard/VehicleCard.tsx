import IVehicleCard from "./IVehicleCard";
import { VCAllowedAxleLoadError, VCAllowedPayloadError, VCAxleDistanceError, VCDeadWeightsError } from "./VehicleCardErrors";

/**
 * Vehicle Card implementation
 */
export default class VehicleCard implements IVehicleCard {
    private axleDistances: number[];
    private allowedPayload: number;
    private allowedAxleLoad: number[];
    private deadWeights: number[];

    constructor(axleDistances: number[], allowedPayload: number, allowedAxleLoad: number[], deadWeights: number[]) {
        this.validateAxleDistance(axleDistances[0]);
        this.validateAxleDistance(axleDistances[1]);
        this.validateAxleDistance(axleDistances[2]);
        this.axleDistances = axleDistances;

        this.validatePayload(allowedPayload);
        this.allowedPayload = allowedPayload;

        this.validateAxleLoad(allowedAxleLoad[0]);
        this.validateAxleLoad(allowedAxleLoad[1]);
        this.allowedAxleLoad = allowedAxleLoad;

        this.validateDeadWeight(deadWeights[0]);
        this.validateDeadWeight(deadWeights[1]);
        this.deadWeights = deadWeights;
    }

    private validateAxleDistance(value: number) { if (value < 0) throw new VCAxleDistanceError("Invalid axle distance: " + value); }
    private validatePayload(value: number) { if (value < 0) throw new VCAllowedPayloadError("Invalid payload: " + value); }
    private validateAxleLoad(value: number) { if (value < 0) throw new VCAllowedAxleLoadError("Invalid axle load: " + value); }
    private validateDeadWeight(value: number) { if (value < 0) throw new VCDeadWeightsError("Invalid dead weight: " + value); }

    /*
        Axle distance
    */
    public setAxleDistance = (index: number, value: number) => {
        this.validateAxleDistance(value);
        this.axleDistances[index] = value;
    }

    public setFrontAxleDistance(value: number): void {
        this.validateAxleDistance(value);
        this.axleDistances[0] = value;
    }

    public setMidAxleDistance(value: number): void {
        this.validateAxleDistance(value);
        this.axleDistances[1] = value;
    }

    public setBackAxleDistance(value: number): void {
        this.validateAxleDistance(value);
        this.axleDistances[2] = value;
    }

    public getFrontAxleDistance = () => this.axleDistances[0];
    public getMidAxleDistance = () => this.axleDistances[1];
    public getBackAxleDistance = () => this.axleDistances[2];

    /*
        Total Payload
    */
    public setAllowedPayload = (value: number) => {
        this.validatePayload(value);
        this.allowedPayload = value;
    }

    public getAllowedPayload = () => this.allowedPayload;


    /*
        Axle Load
    */
    public getAllowedAxleLoadFront = () => this.allowedAxleLoad[0];
    public getAllowedAxleLoadBack = () => this.allowedAxleLoad[1];

    public setAllowedAxleLoad = (index: number, value: number) => {
        this.validateAxleLoad(value);
        this.allowedAxleLoad[index] = value;
    }

    public setAllowedAxleLoadFront(value: number): void {
        this.validateAxleLoad(value);
        this.allowedAxleLoad[0] = value;
    }

    public setAllowedAxleLoadBack(value: number): void {
        this.validateAxleLoad(value);
        this.allowedAxleLoad[1] = value;
    }

    /*
        Dead weight
    */
    public getDeadWeightFront = () => this.deadWeights[0];
    public getDeadWeightBack = () => this.deadWeights[1];
    public setDeadWeight = (index: number, value: number) => {
        this.validateDeadWeight(value);
        this.deadWeights[index] = value;
    }

    public setDeadWeightFront(value: number): void {
        this.validateDeadWeight(value);
        this.deadWeights[0] = value;
    }

    public setDeadWeightBack(value: number): void {
        this.validateDeadWeight(value);
        this.deadWeights[1] = value;
    }
}
