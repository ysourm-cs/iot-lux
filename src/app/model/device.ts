export enum Status {
    OFF = 0,
    ON = 1
}

export class Device {
    id: number;
    name: string;
    info: string;
    status: number;
    // type: String;
    // room: String;
    // user_ids: number[];
}
