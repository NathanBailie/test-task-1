import cls from './ResultsViewer.module.scss';
import { useParams } from 'react-router-dom';
import { useData } from '@/app/providers/DataProvider';

export const ResultsViewer = () => {
    const { id } = useParams<{ id: string }>();
    const { filteredTests } = useData();

    if (id === undefined) return <h2>No results</h2>;
    if (!filteredTests) return <h2>Loading...</h2>;

    const filteredData = filteredTests.find(item => item.id === id);

    if (!filteredData) return <h2>No data found</h2>;

    return (
        <div className={cls.ResultsViewer}>
            <h2>Results</h2>
            <p>{filteredData.name}</p>
        </div>
    );
};
