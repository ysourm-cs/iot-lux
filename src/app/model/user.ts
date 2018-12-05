import { Device } from './device';
import { Room } from './room';

export class User {
    id: number;
    name: string;
    devices: Device[];
    rooms: Room[];
}

export class Role {
    id: number;
    name: string;
}