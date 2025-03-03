import cls from './Table.module.scss';
import arrowDown from '@/shared/assets/icons/arrow-down.svg';
import arrowUp from '@/shared/assets/icons/arrow-up.svg';
import { useData } from '@/app/providers/DataProvider';

function createColumn(
    name: string,
    content: string,
    sortOrder: 'ASC' | 'DESC',
    orderHandler: () => void,
) {
    return { name, content, sortOrder, orderHandler };
}

export const Table = () => {
    const {
        filteredTests,
        sites,
        loading,
        error,
        setSearchQuery,
        nameSortOrder,
        typeSortOrder,
        statusSortOrder,
        siteSortOrder,
        nameSortOrderHandler,
        typeSortOrderHandler,
        statusSortOrderHandler,
        siteSortOrderHandler,
    } = useData();
    if (!filteredTests) return <h2>No data...</h2>;

    const tableHead = [
        createColumn('name', 'Name', nameSortOrder, nameSortOrderHandler),
        createColumn('type', 'Type', typeSortOrder, typeSortOrderHandler),
        createColumn(
            'status',
            'Status',
            statusSortOrder,
            statusSortOrderHandler,
        ),
        createColumn('site', 'Site', siteSortOrder, siteSortOrderHandler),
        createColumn('action', '', 'ASC', () => {}),
    ];

    if (!filteredTests?.length) {
        return (
            <div className={cls.wrongResult}>
                <h2>Your search did not match any results.</h2>
            </div>
        );
    }

    const tableHeader = tableHead.map(
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
                        alt={`${sortOrder.toLowerCase()}-sort`}
                    />
                )}
            </button>
        ),
    );

    return (
        <div className={cls.table}>
            <h2>Dashboard</h2>
            <div className={cls.table_header}>{tableHeader}</div>
        </div>
    );
};
