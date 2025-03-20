import './error.scss';
import errImg from '@/shared/assets/icons/error.png';

export const Error = () => (
    <div className="error">
        <img alt="err-icon" src={errImg} />
        <h2>Something went wrong!</h2>
        <p>Please, reload the page!</p>
    </div>
);
