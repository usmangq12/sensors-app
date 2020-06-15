export interface IUpdateSensor {
    id: string;
    z1: string;
    z2: string;
    z3: string;
    z4: string;
}

export class UpdateSensor implements IUpdateSensor {
    id: string = "";
    z1: string = "";
    z2: string = "";
    z3: string = "";
    z4: string = "";
}