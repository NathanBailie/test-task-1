import cls from './tableHeader.module.scss';
import { useMemo } from 'react';
import arrowDown from '@/shared/assets/icons/arrow-down.svg';
import arrowUp from '@/shared/assets/icons/arrow-up.svg';
import { useData } from '@/app/providers/DataProvider';

export const TableHeader = () => {
    const {
        nameSortOrder,
        typeSortOrder,
        statusSortOrder,
        siteSortOrder,
        nameSortOrderHandler,
        typeSortOrderHandler,
        statusSortOrderHandler,
        siteSortOrderHandler,
    } = useData();

    const columns = useMemo(
        () => [
            {
                name: 'name',
                content: 'Name',
                sortOrder: nameSortOrder,
                orderHandler: nameSortOrderHandler,
            },
            {
                name: 'type',
                content: 'Type',
                sortOrder: typeSortOrder,
                orderHandler: typeSortOrderHandler,
            },
            {
                name: 'status',
                content: 'Status',
                sortOrder: statusSortOrder,
                orderHandler: statusSortOrderHandler,
            },
            {
                name: 'site',
                content: 'Site',
                sortOrder: siteSortOrder,
                orderHandler: siteSortOrderHandler,
            },
            {
                name: 'action',
                content: '',
                sortOrder: 'ASC',
                orderHandler: () => {},
            },
        ],
        [nameSortOrder, typeSortOrder, statusSortOrder, siteSortOrder],
    );

    return (
        <div className={cls.tableHeader}>
            {columns.map(
                ({ name, content, sortOrder, orderHandler }, index) => (
                    <button
                        type="button"
                        key={index}
                        className={cls[name]}
                        onClick={orderHandler}
                    >
                        {content}
                        {name !== 'action' && (
                            <img
                                src={sortOrder === 'ASC' ? arrowUp : arrowDown}
                                alt={
                                    sortOrder === 'ASC'
                                        ? 'Ascending Sort'
                                        : 'Descending Sort'
                                }
                            />
                        )}
                    </button>
                ),
            )}
        </div>
    );
};
