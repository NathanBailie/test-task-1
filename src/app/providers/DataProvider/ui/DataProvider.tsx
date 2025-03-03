import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { normalizeTests } from '../model/lib/normalizeTests';
import { fetchSites } from '../model/services/FetchSites';
import { fetchTests } from '../model/services/FetchTests';

import { NormalizedSites, NormalizedTest } from '@/shared/types/types';

interface DataContextType {
    tests?: NormalizedTest[];
    filteredTests?: NormalizedTest[];
    sites?: NormalizedSites;
    loading: boolean;
    error: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

type DataProviderProps = {
    children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
    const [tests, setTests] = useState<NormalizedTest[] | undefined>(undefined);
    const [sites, setSites] = useState<NormalizedSites | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [filteredTests, setFilteredTests] = useState<
        NormalizedTest[] | undefined
    >(undefined);

    useEffect(() => {
        setLoading(true);

        Promise.all([fetchSites(), fetchTests()])
            .then(([sitesData, testsData]) => {
                setSites(sitesData);
                setTests(normalizeTests(testsData, sitesData));
                setFilteredTests(tests);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [tests]);

    const value = useMemo(
        () => ({ tests, filteredTests, sites, loading, error }),
        [tests, filteredTests, sites, loading, error],
    );

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
