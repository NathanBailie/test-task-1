import { BASE_URL } from '@/shared/const/api';
import { normalizeData } from '@/shared/utils/utils';

export const fetchSites = async () => {
    try {
        const response = await fetch(`${BASE_URL}/sites`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return normalizeData(data);
    } catch (error) {
        console.error('Failed to fetch sites:', error);
        throw error;
    }
};
