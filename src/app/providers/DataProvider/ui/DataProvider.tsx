import { normalizeTests } from '../model/lib/normalizeTests';
import { fetchSites } from '../model/services/FetchSites';
import { fetchTests } from '../model/services/FetchTests';
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
    useCallback,
} from 'react';
import {
    NormalizedSites,
    NormalizedTest,
    SortOrder,
} from '@/shared/types/types';

interface DataContextType {
    tests?: NormalizedTest[];
    filteredTests?: NormalizedTest[];
    sites?: NormalizedSites;
    loading: boolean;
    error: boolean;
    searchQuery: string;
    setSearchQuery: (query: string) => void;

    nameSortOrder: SortOrder;
    typeSortOrder: SortOrder;
    statusSortOrder: SortOrder;
    siteSortOrder: SortOrder;

    nameSortOrderHandler: () => void;
    typeSortOrderHandler: () => void;
    statusSortOrderHandler: () => void;
    siteSortOrderHandler: () => void;
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
    const [searchQuery, setSearchQuery] = useState('');

    const [nameSortOrder, setNameSortOrder] = useState<SortOrder>('ASC');
    const [typeSortOrder, setTypeSortOrder] = useState<SortOrder>('ASC');
    const [statusSortOrder, setStatusSortOrder] = useState<SortOrder>('ASC');
    const [siteSortOrder, setSiteSortOrder] = useState<SortOrder>('ASC');

    // Memoize sort handlers to avoid re-creation on each render
    const nameSortOrderHandler = useCallback(() => {
        setNameSortOrder(prevOrder => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));

        setFilteredTests(prev =>
            prev
                ? [...prev].sort((a, b) =>
                      nameSortOrder === 'ASC'
                          ? a.name.localeCompare(b.name)
                          : b.name.localeCompare(a.name),
                  )
                : prev,
        );
    }, [nameSortOrder]);

    const typeSortOrderHandler = useCallback(() => {
        setTypeSortOrder(prevOrder => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));

        setFilteredTests(prev =>
            prev
                ? [...prev].sort((a, b) =>
                      typeSortOrder === 'ASC'
                          ? a.type.localeCompare(b.type)
                          : b.type.localeCompare(a.type),
                  )
                : prev,
        );
    }, [typeSortOrder]);

    const statusSortOrderHandler = useCallback(() => {
        setStatusSortOrder(prevOrder => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));

        setFilteredTests(prev =>
            prev
                ? [...prev].sort((a, b) => {
                      const ASC = {
                          Online: 0,
                          Paused: 1,
                          Stopped: 2,
                          Draft: 3,
                      };
                      const DESC = {
                          Draft: 0,
                          Stopped: 1,
                          Paused: 2,
                          Online: 3,
                      };

                      return statusSortOrder === 'ASC'
                          ? ASC[a.status] - ASC[b.status]
                          : DESC[a.status] - DESC[b.status];
                  })
                : prev,
        );
    }, [statusSortOrder]);

    const siteSortOrderHandler = useCallback(() => {
        setSiteSortOrder(prevOrder => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));

        setFilteredTests(prev =>
            prev
                ? [...prev].sort((a, b) =>
                      siteSortOrder === 'ASC'
                          ? a.site.localeCompare(b.site)
                          : b.site.localeCompare(a.site),
                  )
                : prev,
        );
    }, [siteSortOrder]);

    useEffect(() => {
        setLoading(true);

        Promise.all([fetchSites(), fetchTests()])
            .then(([sitesData, testsData]) => {
                setSites(sitesData);
                const normalizedTests = normalizeTests(testsData, sitesData);
                setTests(normalizedTests);
                setFilteredTests(normalizedTests);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (tests) {
            setFilteredTests(
                tests.filter(test =>
                    test.name.toLowerCase().includes(searchQuery.toLowerCase()),
                ),
            );
        }
    }, [searchQuery, tests]);

    const value = {
        filteredTests,
        sites,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        nameSortOrder,
        typeSortOrder,
        siteSortOrder,
        statusSortOrder,
        nameSortOrderHandler,
        typeSortOrderHandler,
        statusSortOrderHandler,
        siteSortOrderHandler,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
