import { normalizeTests } from '../model/lib/normalizeTests';
import { fetchSites } from '../model/services/FetchSites';
import { fetchTests } from '../model/services/FetchTests';
import {
    sortOrderChanger,
    statusSortOrderChanger,
} from '../model/lib/sortHandlers';
import { statusASC, statusDESC } from '../model/lib/statusOrders';
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
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

    const nameSortOrderHandler = () => {
        sortOrderChanger({
            sortOrderChanger: setNameSortOrder,
            setData: setFilteredTests,
            sortOrder: nameSortOrder,
            field: 'name',
        });
    };
    const typeSortOrderHandler = () => {
        sortOrderChanger({
            sortOrderChanger: setTypeSortOrder,
            setData: setFilteredTests,
            sortOrder: typeSortOrder,
            field: 'type',
        });
    };
    const siteSortOrderHandler = () => {
        sortOrderChanger({
            sortOrderChanger: setSiteSortOrder,
            setData: setFilteredTests,
            sortOrder: siteSortOrder,
            field: 'site',
        });
    };
    const statusSortOrderHandler = () => {
        statusSortOrderChanger({
            sortOrderChanger: setStatusSortOrder,
            setData: setFilteredTests,
            sortOrder: statusSortOrder,
            field: 'status',
            statusASC,
            statusDESC,
        });
    };

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
