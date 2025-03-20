import { useSortHandlers } from '../model/hooks/useSortHandlers';
import { useFetchData } from '../model/hooks/useFetchData';
import { createContext, useContext, ReactNode, useState, useMemo } from 'react';
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
    const { sites, tests, setTests, loading, error } = useFetchData();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTests = useMemo(
        () =>
            tests
                ? tests.filter(test =>
                      test.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()),
                  )
                : [],
        [searchQuery, tests],
    );

    const {
        nameSortOrder,
        typeSortOrder,
        siteSortOrder,
        statusSortOrder,
        nameSortOrderHandler,
        typeSortOrderHandler,
        siteSortOrderHandler,
        statusSortOrderHandler,
    } = useSortHandlers(setTests);

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
        siteSortOrderHandler,
        statusSortOrderHandler,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
