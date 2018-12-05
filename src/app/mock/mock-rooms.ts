import { Room } from '../model/room';
import { DEVICES } from './mock-devices';

export const ROOMS: Room[] = [
    { id: 0, name: 'Sarayevo', devices: [DEVICES[0], DEVICES[1]] },
    { id: 1, name: 'Madrid', devices: [DEVICES[2], DEVICES[3]] }
]