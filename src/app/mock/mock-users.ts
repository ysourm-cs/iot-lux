import { User } from '../model/user';
import { DEVICES } from './mock-devices';
import { ROOMS } from './mock-rooms';

export const USERS: User[] = [
    {
        id: 1, 
        name: 'Diafora',
        devices: [DEVICES[0]],
        rooms: [ROOMS[0]]
    },
    {
        id: 2,
        name: 'Mpampis',
        devices: [DEVICES[3]],
        rooms: [ROOMS[1]]
    }
]
    


