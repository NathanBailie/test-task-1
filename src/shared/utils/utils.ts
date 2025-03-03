import { Site } from '../types/types';

export const normalizeUrl = (url: string) =>
    url.replace(/^https?:\/\/(www\.)?/, '');

export const normalizeData = (arr: Site[]): { [key: number]: string } =>
    arr.reduce(
        (obj, { id, url }) => {
            obj[id] = normalizeUrl(url);
            return obj;
        },
        {} as { [key: number]: string },
    );
