import cls from './TableItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NormalizedTest } from '@/shared/types/types';

export const TableItem = (props: NormalizedTest) => {
    const { id, name, type, status, site, linkText, subdomain } = props;
    const linkTextInLowerCase = linkText.toLowerCase();

    return (
        <div className={cls.tableItem}>
            <div className={classNames(cls.colorBar, {}, [cls[subdomain]])} />
            <span className={cls.name}>{name}</span>
            <span className={cls.type}>{type}</span>
            <span
                className={classNames(cls.status, {}, [
                    cls[status.toLowerCase()],
                ])}
            >
                {status}
            </span>
            <span className={cls.site}>{site}</span>
        </div>
    );
};
