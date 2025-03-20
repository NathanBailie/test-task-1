import { BASE_URL } from '@/shared/const/api';
import { Test } from '@/shared/types/types';

export const fetchTests = async (): Promise<Test[]> => {
    try {
        const response = await fetch(`${BASE_URL}/tests`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch tests:', error);
        throw error;
    }
};
