export class VehicleCardError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "VehicleCardError";
    }
}

export class VCAxleDistanceError extends VehicleCardError {
    constructor(message: string) {
        super(message);
        this.name = "VCAxleDistanceError";
    }
}

export class VCAllowedPayloadError extends VehicleCardError {
    constructor(message: string) {
        super(message);
        this.name = "VCAllowedPayloadError";
    }
}

export class VCAllowedAxleLoadError extends VehicleCardError {
    constructor(message: string) {
        super(message);
        this.name = "VCAllowedAxleLoadError";
    }
}


export class VCDeadWeightsError extends VehicleCardError {
    constructor(message: string) {
        super(message);
        this.name = "VCDeadWeightsError";
    }
}