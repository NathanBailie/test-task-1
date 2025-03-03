import cls from './MainPage.module.scss';
import { SearchForm } from '@/features/SearchForm';
import { Table } from '@/features/Table';

export const MainPage = () => (
    <div className={cls.MainPage}>
        <h2>Dashboard</h2>
        <SearchForm />
        <Table />
    </div>
);
