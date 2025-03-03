export enum AppRoutes {
    MAIN = 'main',
    RESULTS = 'results',
    RESULTS_DETAILS = 'results_details',
    FINALIZE = 'finalize',
    FINALIZE_DETAILS = 'finalize_details',
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteResults = () => '/results';
export const getRouteResultsDetails = (id: string) => `/results/${id}`;
export const getRouteFinalize = () => '/finalize';
export const getRouteFinalizeDetails = (id: string) => `/finalize/${id}`;
export const getRouteNotFound = () => '/*';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteResults()]: AppRoutes.RESULTS,
    [getRouteResultsDetails(':id')]: AppRoutes.RESULTS_DETAILS,
    [getRouteFinalize()]: AppRoutes.FINALIZE,
    [getRouteFinalizeDetails(':id')]: AppRoutes.FINALIZE_DETAILS,
    [getRouteNotFound()]: AppRoutes.NOT_FOUND,
};
