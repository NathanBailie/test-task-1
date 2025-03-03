import cls from './SearchForm.module.scss';
import { useState } from 'react';
import searchImg from '@/shared/assets/icons/search.svg';
import { useData } from '@/app/providers/DataProvider';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export const SearchForm = () => {
    const { filteredTests } = useData();

    const { searchQuery, setSearchQuery } = useData();
    const [localQuery, setLocalQuery] = useState(searchQuery);

    const debouncedSetSearchQuery = useDebounce(setSearchQuery, 300);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalQuery(e.target.value);
        debouncedSetSearchQuery(e.target.value);
    };

    const testAmount = () => {
        const amount = filteredTests?.length;
        if (!amount) return `0 tests`;
        if (amount === 1) return `1 test`;
        if (amount > 1) return `${amount} tests`;
        return `0 tests`;
    };

    return (
        <div className={cls.searchForm}>
            <img src={searchImg} alt="magnifying glass" />
            <input
                id="searchInput"
                type="text"
                placeholder="What test are you looking for?"
                onChange={handleChange}
                value={localQuery}
            />
            <span>{testAmount()}</span>
        </div>
    );
};
