import { RouteProps } from 'react-router-dom';
import { FinalizePage } from '@/pages/Finalize';
import { MainPage } from '@/pages/Main';
import { ResultsPage } from '@/pages/Results';
import {
    AppRoutes,
    getRouteFinalize,
    getRouteFinalizeDetails,
    getRouteMain,
    getRouteResults,
    getRouteResultsDetails,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.RESULTS]: {
        path: getRouteResults(),
        element: <ResultsPage />,
    },
    [AppRoutes.RESULTS_DETAILS]: {
        path: getRouteResultsDetails(':id'),
        element: <ResultsPage />,
    },
    [AppRoutes.FINALIZE]: {
        path: getRouteFinalize(),
        element: <FinalizePage />,
    },
    [AppRoutes.FINALIZE_DETAILS]: {
        path: getRouteFinalizeDetails(':id'),
        element: <FinalizePage />,
    },
};
