import cls from './Table.module.scss';
import { useData } from '@/app/providers/DataProvider';
import { TableItem } from '@/entities/TableItem';
import { Loader } from '@/shared/ui/Loader/ui/Loader';
import { Error } from '@/shared/ui/Error/ui/Error';
import { TableHeader } from '@/entities/TableHead';

export const Table = () => {
    const { loading, error, filteredTests, setSearchQuery } = useData();

    if (loading) return <Loader />;
    if (error) return <Error />;
    if (!filteredTests?.length) {
        return (
            <div className={cls.wrongResult}>
                <h2>Your search did not match any results.</h2>
                <button type="button" onClick={() => setSearchQuery('')}>
                    Reset
                </button>
            </div>
        );
    }

    const listItems = filteredTests.map(item => {
        const { id, name, type, status, site, linkText, subdomain } = item;

        return (
            <TableItem
                key={id}
                id={id}
                name={name}
                type={type}
                status={status}
                site={site}
                linkText={linkText}
                subdomain={subdomain}
            />
        );
    });

    return (
        <div className={cls.table}>
            <TableHeader />
            <div className={cls.table_items}>{listItems}</div>
        </div>
    );
};
