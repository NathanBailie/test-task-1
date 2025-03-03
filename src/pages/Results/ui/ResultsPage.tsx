import cls from './ResultsPage.module.scss';
import { ResultsViewer } from '@/features/ResultsViewer';

const Results = () => (
    <div className={cls.resultsPage}>
        <ResultsViewer />
    </div>
);

export default Results;
