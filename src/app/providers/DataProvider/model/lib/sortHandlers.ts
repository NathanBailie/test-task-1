import { StatusOrder } from './statusOrders';
import { NormalizedTest, SortOrder } from '@/shared/types/types';

interface sortOrderhandlerMainProps {
    sortOrderChanger: React.Dispatch<React.SetStateAction<SortOrder>>;
    setData: React.Dispatch<React.SetStateAction<NormalizedTest[] | undefined>>;
    sortOrder: SortOrder;
}
interface sortOrderHandlerProps extends sortOrderhandlerMainProps {
    field: 'name' | 'type' | 'site';
}

interface statusSortOrderHandlerProps extends sortOrderhandlerMainProps {
    field: 'status';
    statusASC: StatusOrder;
    statusDESC: StatusOrder;
}

export const sortOrderChanger = ({
    sortOrderChanger,
    setData,
    sortOrder,
    field,
}: sortOrderHandlerProps) => {
    sortOrderChanger(prevOrder => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));

    setData(prev =>
        prev
            ? [...prev].sort((a, b) =>
                  sortOrder === 'ASC'
                      ? a[field].localeCompare(b[field])
                      : b[field].localeCompare(a[field]),
              )
            : prev,
    );
};

export const statusSortOrderChanger = ({
    sortOrderChanger,
    setData,
    sortOrder,
    field,
    statusASC,
    statusDESC,
}: statusSortOrderHandlerProps) => {
    sortOrderChanger(prevOrder => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));

    setData(prev =>
        prev
            ? [...prev].sort((a, b) =>
                  sortOrder === 'ASC'
                      ? statusASC[a[field]] - statusASC[b[field]]
                      : statusDESC[a[field]] - statusDESC[b[field]],
              )
            : prev,
    );
};
