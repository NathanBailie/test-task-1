import { statusASC, statusDESC } from '../lib/statusOrders';
import { sortOrderChanger } from '../lib/sortHandlers';
import { SetState } from '../types/types';
import { useState, useCallback } from 'react';
import { SortOrder, NormalizedTest } from '@/shared/types/types';

export const useSortHandlers = (
    setFilteredTests: SetState<NormalizedTest[] | undefined>,
) => {
    const [nameSortOrder, setNameSortOrder] = useState<SortOrder>('ASC');
    const [typeSortOrder, setTypeSortOrder] = useState<SortOrder>('ASC');
    const [statusSortOrder, setStatusSortOrder] = useState<SortOrder>('ASC');
    const [siteSortOrder, setSiteSortOrder] = useState<SortOrder>('ASC');

    const createSortHandler = useCallback(
        (
            field: 'name' | 'type' | 'site' | 'status',
            sortOrder: SortOrder,
            setSortOrder: React.Dispatch<React.SetStateAction<SortOrder>>,
        ) =>
            () => {
                const sortConfig = {
                    sortOrderChanger: setSortOrder,
                    setData: setFilteredTests,
                    sortOrder,
                    field,
                };

                if (field === 'status') {
                    sortOrderChanger({ ...sortConfig, statusASC, statusDESC });
                } else {
                    sortOrderChanger(sortConfig);
                }
            },
        [setFilteredTests],
    );

    return {
        nameSortOrder,
        typeSortOrder,
        siteSortOrder,
        statusSortOrder,
        nameSortOrderHandler: createSortHandler(
            'name',
            nameSortOrder,
            setNameSortOrder,
        ),
        typeSortOrderHandler: createSortHandler(
            'type',
            typeSortOrder,
            setTypeSortOrder,
        ),
        siteSortOrderHandler: createSortHandler(
            'site',
            siteSortOrder,
            setSiteSortOrder,
        ),
        statusSortOrderHandler: createSortHandler(
            'status',
            statusSortOrder,
            setStatusSortOrder,
        ),
    };
};
