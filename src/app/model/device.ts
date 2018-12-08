import { Room } from './room';

export enum Status {
    OFF = 0,
    ON = 1
}

export class Type {
    id: number;
    name: string;
}

export class Device {
    id: number;
    name: string;
    info: string;
    status: number;
    type: Type;
    room: Room;
}
