import cls from './noResults.module.scss';

interface NoResultsProps {
    onReset: (emptyString: string) => void;
}

export const NoResults = (props: NoResultsProps) => {
    const { onReset } = props;
    return (
        <div className={cls.noResults}>
            <h2>Your search did not match any results.</h2>
            <button type="button" onClick={() => onReset('')}>
                Reset
            </button>
        </div>
    );
};
