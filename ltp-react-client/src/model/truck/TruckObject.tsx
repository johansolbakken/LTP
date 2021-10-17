
export interface TruckObject {
    name:string;
    license:string;
    type:number;
    axleDistances: number[];
    allowedPayloads: number;
    axleLoads: number[];
    deadWeights: number[];
}

export const createTruckObject = ():TruckObject => {
    return {
        name: "",
        license: "",
        type: 2,
        axleDistances: [1,1,1],
        allowedPayloads: 1,
        axleLoads: [1,1],
        deadWeights: [1,1]
    }
}