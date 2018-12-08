import { Device } from './device';
import { Room } from './room';

export class Role {
    id: number;
    name: string;
}

export class User {
    id: number;
    name: string;
    surname:string;
    email: string;
    password: string;
    role: Role;

    devices: Device[];
    rooms: Room[];
}