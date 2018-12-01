import { Room } from "./room";

export class Device {

    id : number;
    description : string;
    info : string;
    type : DeviceType;
    room : Room;

    constructor(id : number, description : string) {

    }

}

export class DeviceType {

    id : number;
    name : string

}