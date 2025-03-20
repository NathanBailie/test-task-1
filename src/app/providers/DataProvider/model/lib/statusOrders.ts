import { StatusOrder } from '../types/types';

export const statusASC: StatusOrder = {
    Online: 0,
    Paused: 1,
    Stopped: 2,
    Draft: 3,
};
export const statusDESC: StatusOrder = {
    Draft: 0,
    Stopped: 1,
    Paused: 2,
    Online: 3,
};
