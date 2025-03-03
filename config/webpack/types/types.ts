export type Mode = 'development' | 'production';

export interface Paths {
    input: string;
    output: string;
    html: string;
    public: string;
    src: string;
}

export interface Envs {
    port: number;
    mode: Mode;
    apiUrl: string;
}

export interface Options {
    mode: Mode;
    paths: Paths;
    isDev: boolean;
    port: number;
}
