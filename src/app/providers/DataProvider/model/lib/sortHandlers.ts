import { StatusOrder } from '../types/types';
import { NormalizedTest, SortOrder } from '@/shared/types/types';

interface sortOrderChangerProps {
    sortOrderChanger: React.Dispatch<React.SetStateAction<SortOrder>>;
    setData: React.Dispatch<React.SetStateAction<NormalizedTest[] | undefined>>;
    sortOrder: SortOrder;
    field: 'name' | 'type' | 'site' | 'status';
    statusASC?: StatusOrder;
    statusDESC?: StatusOrder;
}

export const sortOrderChanger = ({
    sortOrderChanger,
    setData,
    sortOrder,
    field,
    statusASC,
    statusDESC,
}: sortOrderChangerProps) => {
    sortOrderChanger(prevOrder => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));

    setData(prev =>
        prev
            ? [...prev].sort((a, b) => {
                  if (
                      field === 'status' &&
                      statusASC !== undefined &&
                      statusDESC !== undefined
                  ) {
                      return sortOrder === 'ASC'
                          ? statusASC[a.status as keyof StatusOrder] -
                                statusASC[b.status as keyof StatusOrder]
                          : statusDESC[a.status as keyof StatusOrder] -
                                statusDESC[b.status as keyof StatusOrder];
                  }
                  return sortOrder === 'ASC'
                      ? String(a[field]).localeCompare(String(b[field]))
                      : String(b[field]).localeCompare(String(a[field]));
              })
            : prev,
    );
};
