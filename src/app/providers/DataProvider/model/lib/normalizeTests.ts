import {
    NormalizedSites,
    NormalizedTest,
    StatusNormalized,
    Test,
    TypeNormalized,
} from '@/shared/types/types';

export function normalizeTests(
    arr: Test[],
    sites: NormalizedSites | undefined,
): NormalizedTest[] {
    const normalizedData: NormalizedTest[] = [];

    arr.forEach(item => {
        const { name, type, status, siteId, id } = item;
        const normalizedStatus = StatusNormalized[status];
        const normalizedType = TypeNormalized[type];
        const normalizedSite = sites ? sites[siteId] : '';
        const linkText = normalizedStatus === 'Draft' ? 'Finalize' : 'Results';
        const findSubdomain = normalizedSite.match(/^[^.]+/);
        const subdomain = findSubdomain ? findSubdomain[0] : '';

        normalizedData.push({
            id: String(id),
            name,
            type: normalizedType,
            status: normalizedStatus,
            site: normalizedSite,
            linkText,
            subdomain,
        });
    });

    return normalizedData;
}
