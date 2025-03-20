export interface StatusOrder {
    Online: number;
    Paused: number;
    Stopped: number;
    Draft: number;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
