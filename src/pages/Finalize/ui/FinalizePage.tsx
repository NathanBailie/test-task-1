import cls from './FinalizePage.module.scss';
import { FinalizeViewer } from '@/features/FinalizeViewer';

const FinalizePage = () => (
    <div className={cls.finalizePage}>
        <FinalizeViewer />
    </div>
);

export default FinalizePage;
