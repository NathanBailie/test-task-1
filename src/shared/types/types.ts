export enum Type {
    CLASSIC = 'CLASSIC',
    SERVER_SIDE = 'SERVER_SIDE',
    MVT = 'MVT',
}

export const TypeNormalized = {
    [Type.CLASSIC]: 'Classic',
    [Type.SERVER_SIDE]: 'Server-side',
    [Type.MVT]: 'MVT',
} as const;

export type TypeNormalizedValues =
    (typeof TypeNormalized)[keyof typeof TypeNormalized];

export enum Status {
    DRAFT = 'DRAFT',
    ONLINE = 'ONLINE',
    PAUSED = 'PAUSED',
    STOPPED = 'STOPPED',
}

export const StatusNormalized = {
    [Status.DRAFT]: 'Draft',
    [Status.ONLINE]: 'Online',
    [Status.PAUSED]: 'Paused',
    [Status.STOPPED]: 'Stopped',
} as const;

export interface Site {
    id: number;
    url: string;
}

export interface NormalizedSites {
    [key: number]: string;
}

export interface Test {
    id: number;
    name: string;
    type: Type;
    status: Status;
    siteId: number;
}

export interface NormalizedTest {
    id: string;
    name: string;
    type: TypeNormalizedValues;
    status: (typeof StatusNormalized)[keyof typeof StatusNormalized];
    site: string;
    linkText: 'Finalize' | 'Results';
    subdomain: string;
}

export type SortOrder = 'ASC' | 'DESC';
