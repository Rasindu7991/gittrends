import axios from 'axios';
import { getTenDaysAgo } from '../utils/dateUtils';

const BASE_URL = 'https://api.github.com/search/repositories';

export const fetchTrendingRepos = async (page = 1) => {
  try {
    const tenDaysAgo = getTenDaysAgo();
    const response = await axios.get(BASE_URL, {
      params: {
        q: `created:>${tenDaysAgo}`,
        sort: 'stars',
        order: 'desc',
        per_page: 10,
        page
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repos:', error);
    throw error;
  }
};