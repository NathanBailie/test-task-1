import cls from './FinalizeViewer.module.scss';
import { useParams } from 'react-router-dom';
import { useData } from '@/app/providers/DataProvider';

export const FinalizeViewer = () => {
    const { id } = useParams<{ id: string }>();
    const { filteredTests } = useData();

    if (id === undefined) return <h2>No results</h2>;
    if (!filteredTests) return <h2>Loading...</h2>;

    const filteredData = filteredTests.find(item => item.id === id);

    if (!filteredData) return <h2>No data found</h2>;

    return (
        <div className={cls.FinalizeViewer}>
            <h2>Finalize</h2>
            <p>{filteredData.name}</p>
        </div>
    );
};
