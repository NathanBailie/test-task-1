import { fetchSites } from '../services/FetchSites';
import { fetchTests } from '../services/FetchTests';
import { normalizeTests } from '../lib/normalizeTests';
import { useState, useEffect } from 'react';
import { NormalizedSites, NormalizedTest } from '@/shared/types/types';

export const useFetchData = (): {
    sites: NormalizedSites | undefined;
    tests: NormalizedTest[] | undefined;
    setTests: React.Dispatch<
        React.SetStateAction<NormalizedTest[] | undefined>
    >;
    loading: boolean;
    error: boolean;
} => {
    const [sites, setSites] = useState<NormalizedSites | undefined>(undefined);
    const [tests, setTests] = useState<NormalizedTest[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async (): Promise<void> => {
            setLoading(true);
            try {
                const [sitesData, testsData] = await Promise.all([
                    fetchSites(),
                    fetchTests(),
                ]);
                setSites(sitesData);
                setTests(normalizeTests(testsData, sitesData));
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { sites, tests, setTests, loading, error };
};
